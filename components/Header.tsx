import Link from "next/link";

export default function Header() {
  const link = "p-1 m-2 text-lg hover:underline";
  return (
    <header className="flex justify-between items-center h-16 px-4 shadow bg-blue-600 text-white">
      <h1 className="text-2xl font-semibold">URL Shortener</h1>
      <nav>
        <Link href="/" className={link}>
        </Link>
      </nav>
    </header>
  );
}
