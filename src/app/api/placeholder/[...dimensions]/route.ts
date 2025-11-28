import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { pathname } = new URL(request.url);
  const dimensions = pathname.split('/').slice(-2);

  const width = parseInt(dimensions[0]) || 400;
  const height = parseInt(dimensions[1]) || 250;

  // Create an SVG placeholder image
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#f0f4f1;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#e8f0ea;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#grad)"/>
      <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="16" fill="#5e8c52" text-anchor="middle" dy=".3em">
        ${width} × ${height}
      </text>
      <circle cx="30" cy="30" r="15" fill="#a1b986" opacity="0.3"/>
      <circle cx="${width - 30}" cy="${height - 30}" r="20" fill="#5e8c52" opacity="0.2"/>
      <rect x="20" y="20" width="${width - 40}" height="${height - 40}" fill="none" stroke="#a1b986" stroke-width="2" rx="10" opacity="0.5"/>
    </svg>
  `;

  return new NextResponse(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=86400', // Cache for 1 day
    },
  });
}