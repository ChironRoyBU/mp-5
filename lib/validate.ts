export function isValidUrl(raw: string): boolean {
    try {
      const url = new URL(raw);
      return (
        (url.protocol === "http:" || url.protocol === "https:") &&
        url.hostname.includes(".")
      );
    } catch {
      return false;
    }
  }
  