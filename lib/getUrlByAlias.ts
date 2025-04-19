import getCollection, { URLS_COLLECTION } from "@/db";

export async function getUrlByAlias(alias: string): Promise<string | null> {
  const coll = await getCollection(URLS_COLLECTION);
  const doc = await coll.findOne<{ longUrl: string }>({ alias });
  return doc ? doc.longUrl : null;
}
