/**
 * TypeScript type definitions for the Sentosaku landing page
 * This file contains all interfaces and types used across the application
 */

/**
 * Project interface
 * Represents a project/portfolio item
 */
export interface Project {
  /** Unique identifier (UUID) */
  id: string;
  /** Unique slug for the project URL */
  slug: string;
  /** Project title */
  title: string;
  /** Project category/type */
  category: string;
  /** Project description */
  description: string;
  /** Current status of the project */
  status: string;
  /** Relative path to project image (from legacy) */
  image: string;
  /** URL to live project */
  project_url: string;
  /** URL ke project image (full URL from API) */
  image_url?: string;
  /** Array of technologies used */
  technologies: string[];
  /** Key features of the project */
  features: string[];
  /** Display order for sorting */
  display_order: number;
  /** Active status flag */
  is_active: boolean;
  /** Creation timestamp (ISO date string) */
  created_at: string;
  /** Last update timestamp (ISO date string) */
  updated_at: string;
}

/**
 * Testimonial interface
 * Represents a client testimonial
 */
export interface Testimonial {
  /** Unique identifier (UUID) */
  id: string;
  /** The testimonial text */
  text: string;
  /** Author's name */
  author: string;
  /** Author's title/company */
  title: string;
  /** Author's initials for avatar */
  initials: string;
  /** Number of stars (1-5) */
  rating?: number;
  /** Display order for sorting */
  display_order: number;
  /** Active status flag */
  is_active: boolean;
  /** Creation timestamp (ISO date string) */
  created_at: string;
  /** Last update timestamp (ISO date string) */
  updated_at: string;
}

/**
 * Stat interface
 * Represents a statistic/metric
 */
export interface Stat {
  /** Unique identifier (UUID) */
  id: string;
  /** The value to display */
  value: string;
  /** Label describing the statistic */
  label: string;
  /** Display order for sorting */
  display_order: number;
  /** Active status flag */
  is_active: boolean;
  /** Creation timestamp (ISO date string) */
  created_at: string;
  /** Last update timestamp (ISO date string) */
  updated_at: string;
}

/**
 * ProcessInfo interface
 * Represents process information displayed in the hero panel
 */
export interface ProcessInfo {
  /** Unique identifier (UUID) */
  id: string;
  /** Label for the process item */
  label: string;
  /** Numeric value */
  value: number;
  /** Unit of measurement */
  unit: string;
  /** Display order for sorting */
  display_order: number;
  /** Active status flag */
  is_active: boolean;
  /** Creation timestamp (ISO date string) */
  created_at: string;
  /** Last update timestamp (ISO date string) */
  updated_at: string;
}

/**
 * Client interface
 * Represents a client company
 */
export interface Client {
  /** Unique identifier (UUID) */
  id: string;
  /** Client company name */
  name: string;
  /** Initials for logo display */
  initial: string;
  /** URL to client logo */
  logo_url: string;
  /** Display order for sorting */
  display_order: number;
  /** Active status flag */
  is_active: boolean;
  /** Creation timestamp (ISO date string) */
  created_at: string;
  /** Last update timestamp (ISO date string) */
  updated_at: string;
}

/**
 * API Response interface
 * Generic interface for API responses
 */
export interface ApiResponse<T> {
  /** Indicates if the request was successful */
  success: boolean;
  /** Response message */
  message: string;
  /** The data payload */
  data: T;
  /** Number of items (optional, for list responses) */
  count?: number;
  /** Optional error message */
  error?: string;
  /** Optional timestamp */
  timestamp?: string;
}

/**
 * API Error interface
 * Represents an API error response
 */
export interface ApiError {
  /** Error message */
  message: string;
  /** Error code */
  code?: string;
  /** Additional error details */
  details?: unknown;
}
