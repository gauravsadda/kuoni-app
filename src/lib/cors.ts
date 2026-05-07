import type { NextRequest } from "next/server";

const allowedOrigins = ["https://localhost:3000", "http://localhost:3003"];

type RouteHandler<TContext = unknown> = (
  request: NextRequest,
  context: TContext,
) => Promise<Response> | Response;

const cors =
  <TContext = unknown>(
    handler: RouteHandler<TContext>,
  ): RouteHandler<TContext> =>
  async (request, context) => {
    const origin = request.headers.get("origin") ?? "";

    const headers: Record<string, string> = {
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    };

    if (allowedOrigins.includes(origin)) {
      headers["Access-Control-Allow-Origin"] = origin;
    }

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers });
    }

    const response = await handler(request, context);
    for (const [key, value] of Object.entries(headers)) {
      response.headers.set(key, value);
    }
    return response;
  };

export default cors;
