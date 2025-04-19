"use client";
import { useState } from "react";
import { createAlias } from "@/lib/createAlias";
import ResultDisplay from "./ResultDisplay";

export default function UrlForm() {
  const [alias, setAlias] = useState("");
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setShortUrl(null);

    try {
      await createAlias(alias.trim(), longUrl.trim());
      setShortUrl(`${window.location.origin}/${alias.trim()}`);
      setAlias("");
      setLongUrl("");
    } catch (err) {
      if (err instanceof Error) {
        if (err.message === "alias-taken") setError("Alias already taken.");
        else if (err.message === "invalid-url") setError("Invalid URL.");
        else setError("Server error.");
      } else {
        setError("Unknown error.");
      }
    }
  }
    

  return (
    <div className="bg-white shadow rounded-xl p-6 w-96 mt-12">
      <h2 className="text-xl font-semibold mb-4 text-center">
        Create a Short Link
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
          placeholder="https://example.com"
          className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          value={alias}
          onChange={(e) => setAlias(e.target.value)}
          placeholder="custom-alias"
          className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <button
          className="mt-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded transition"
          type="submit"
        >
          Shorten
        </button>
      </form>

      <ResultDisplay shortUrl={shortUrl} error={error} />
    </div>
  );
}
