import { cookies, draftMode } from "next/headers";
import { redirect } from "next/navigation";

const { CONTENTFUL_PREVIEW_SECRET } = process.env;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  if (searchParams.get("previewSecret") !== CONTENTFUL_PREVIEW_SECRET) {
    return new Response("Invalid token", { status: 401 });
  }

  const draft = await draftMode();
  draft.enable();

  const cookieStore = await cookies();
  const bypass = cookieStore.get("__prerender_bypass");
  if (bypass) {
    cookieStore.set({
      name: "__prerender_bypass",
      value: bypass.value,
      httpOnly: true,
      path: "/",
      sameSite: "none",
      secure: true,
    });
  }

  const target = searchParams.get("redirect") || "/";
  const safeTarget =
    target.startsWith("/") && !target.startsWith("//") ? target : "/";

  redirect(safeTarget);
}
