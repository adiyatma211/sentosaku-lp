import type { ApiResponse, ApiError, Project, Testimonial, Stat, Client, ProcessInfo } from "./types";

interface FetchOptions extends RequestInit {
  timeout?: number;
  useCache?: boolean;
}

export class ApiRequestError extends Error {
  status: number;
  details?: unknown;

  constructor(message: string, status: number, details?: unknown) {
    super(message);
    this.name = "ApiRequestError";
    this.status = status;
    this.details = details;
  }
}

async function fetchApi<T>(
  endpoint: string,
  options: FetchOptions = {}
): Promise<ApiResponse<T>> {
  const {
    timeout = 10000,
    headers = {},
    ...restOptions
  } = options;

  const baseUrl = 'https://dashboard.sentosakutech.com/api/v1';
  const url = `${baseUrl}${endpoint}`;

  const defaultHeaders: Record<string, string> = {
    "Content-Type": "application/json",
    ...(headers as Record<string, string>),
  };

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(url, {
      ...restOptions,
      headers: defaultHeaders,
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      let errorDetails: unknown;
      try {
        errorDetails = await response.json();
      } catch {
        errorDetails = await response.text();
      }

      throw new ApiRequestError(
        `API request failed: ${response.statusText}`,
        response.status,
        errorDetails
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    clearTimeout(timeoutId);

    if (error instanceof ApiRequestError) {
      throw error;
    }

    if (error instanceof Error && error.name === "AbortError") {
      throw new ApiRequestError(
        `API request timed out after ${timeout}ms`,
        408
      );
    }

    throw new ApiRequestError(
      `API request failed: ${error instanceof Error ? error.message : "Unknown error"}`,
      500
    );
  }
}

export async function fetchProjects(params?: { category?: string }, options?: FetchOptions): Promise<Project[]> {
  const queryParams = params?.category ? `?category=${encodeURIComponent(params.category)}` : "";
  const response = await fetchApi<Project[]>(`/projects${queryParams}`, options);
  return response.data || [];
}

export async function fetchTestimonials(params?: { rating?: number }, options?: FetchOptions): Promise<Testimonial[]> {
  const queryParams = params?.rating !== undefined ? `?rating=${params.rating}` : "";
  const response = await fetchApi<Testimonial[]>(`/testimonials${queryParams}`, options);
  return response.data || [];
}

export async function fetchStats(options?: FetchOptions): Promise<Stat[]> {
  const response = await fetchApi<Stat[]>("/stats", options);
  return response.data || [];
}

export async function fetchClients(options?: FetchOptions): Promise<Client[]> {
  const response = await fetchApi<Client[]>("/clients", options);
  return response.data || [];
}

export async function fetchProcessInfo(options?: FetchOptions): Promise<ProcessInfo[]> {
  const response = await fetchApi<ProcessInfo[]>("/process-info", options);
  return response.data || [];
}

export async function fetchProjectBySlug(slug: string, options?: FetchOptions): Promise<Project> {
  const response = await fetchApi<Project>(`/projects/${slug}`, options);
  return response.data;
}

export async function fetchAllData(options?: FetchOptions): Promise<{
  projects: Project[];
  testimonials: Testimonial[];
  stats: Stat[];
  clients: Client[];
  processInfo: ProcessInfo[];
}> {
  const [projects, testimonials, stats, clients, processInfo] = await Promise.all([
    fetchProjects(undefined, options),
    fetchTestimonials(undefined, options),
    fetchStats(options),
    fetchClients(options),
    fetchProcessInfo(options),
  ]);

  return {
    projects,
    testimonials,
    stats,
    clients,
    processInfo,
  };
}

export async function checkApiHealth(): Promise<boolean> {
  try {
    const response = await fetchApi<{ status: string }>("/health", {
      timeout: 5000,
    });
    return response.data.status === "ok";
  } catch {
    return false;
  }
}
