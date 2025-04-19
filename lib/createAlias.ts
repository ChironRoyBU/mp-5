"use server";

import getCollection, { URLS_COLLECTION } from "@/db";
import { isValidUrl } from "@/lib/validate";

export async function createAlias(alias: string, longUrl: string) {
  if (!isValidUrl(longUrl)) throw new Error("invalid-url");

  const coll = await getCollection(URLS_COLLECTION);

  const exists = await coll.findOne({ alias });
  if (exists) throw new Error("alias-taken");

  await coll.insertOne({ alias, longUrl });
  return alias; 
}
