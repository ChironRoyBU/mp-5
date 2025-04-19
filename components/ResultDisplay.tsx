export default function ResultDisplay({
  shortUrl,
  error,
}: {
  shortUrl: string | null;
  error: string | null;
}) {
  if (error)
    return <p className="text-red-600 mt-4 text-center">{error}</p>;

  if (shortUrl)
    return (
      <p className="mt-4 text-center break-all">
        Short URL:&nbsp;
        <a href={shortUrl} className="text-blue-600 underline">
          {shortUrl}
        </a>
      </p>
    );

  return null;
}


  