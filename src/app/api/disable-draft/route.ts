import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url);

  const draft = await draftMode();
  draft.disable();

  const target = searchParams.get("redirect") || "/";
  const safeTarget =
    target.startsWith("/") && !target.startsWith("//") ? target : "/";
  redirect(safeTarget);
};
