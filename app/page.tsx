import UrlForm from "@/components/UrlForm";

export default async function Home() {
  return (
    <div className="flex flex-col items-center bg-blue-200 p-4 w-full">
      <UrlForm />
    </div>
  );
}
