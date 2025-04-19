export const dynamic = "force-dynamic";

import { getUrlByAlias } from "@/lib/getUrlByAlias";
import { redirect, notFound } from "next/navigation";

type Params = Promise<{ alias: string }>;

export default async function AliasRedirect({ params }: { params: Params }) {
  const { alias } = await params;          
  const dest = await getUrlByAlias(alias);
  if (!dest) notFound();
  redirect(dest);
}
