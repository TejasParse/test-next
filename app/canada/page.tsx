import { redirect } from "next/navigation";

export default function CanadaPage() {
  const country = process.env.COUNTRY?.toLowerCase();

  if (country && country !== "canada") {
    redirect(`/${country}`);
  }

  return (
    <main className="flex flex-1 items-center justify-center bg-zinc-50 px-6 py-16">
      <div className="w-full max-w-2xl rounded-2xl bg-white p-10 text-center shadow-sm">
        <h1 className="text-4xl font-semibold text-zinc-950">Canada</h1>
        <p className="mt-4 text-base text-zinc-600">
          This is a basic page for Canada.
        </p>
      </div>
    </main>
  );
}
