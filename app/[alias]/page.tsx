import { getUrlByAlias } from "@/lib/getUrlByAlias";
import { redirect, notFound } from "next/navigation";

export default async function AliasRedirect({
  params,
}: {
  params: { alias: string };
}) {
  const dest = await getUrlByAlias(params.alias);
  if (!dest) notFound();
  redirect(dest);
}
