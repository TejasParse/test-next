import { redirect } from "next/navigation";


export default function Home() {
  const country = process.env.COUNTRY?.toLowerCase();

  if (country) {
    redirect(`/${country}`);
  }
  return (
    <main className="flex flex-1 items-center justify-center bg-zinc-50 px-6 py-16">
      <div className="w-full max-w-3xl rounded-3xl bg-white p-10 shadow-sm">
        <div className="text-center">
          <h1 className="text-4xl font-semibold text-zinc-950">
            Choose a sub-website
          </h1>
          <p className="mt-4 text-base text-zinc-600">
            Visit one of our country pages below.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <a
            className="rounded-2xl border border-zinc-200 bg-zinc-50 px-6 py-8 text-left transition hover:border-zinc-300 hover:bg-zinc-100"
            href="/india"
          >
            <h2 className="text-2xl font-semibold text-zinc-950">India</h2>
            <p className="mt-2 text-sm text-zinc-600">
              Open the India sub-website.
            </p>
          </a>

          <a
            className="rounded-2xl border border-zinc-200 bg-zinc-50 px-6 py-8 text-left transition hover:border-zinc-300 hover:bg-zinc-100"
            href="/nigeria"
          >
            <h2 className="text-2xl font-semibold text-zinc-950">Nigeria</h2>
            <p className="mt-2 text-sm text-zinc-600">
              Open the Nigeria sub-website.
            </p>
          </a>

          <a
            className="rounded-2xl border border-zinc-200 bg-zinc-50 px-6 py-8 text-left transition hover:border-zinc-300 hover:bg-zinc-100"
            href="/usa"
          >
            <h2 className="text-2xl font-semibold text-zinc-950">USA</h2>
            <p className="mt-2 text-sm text-zinc-600">
              Open the USA sub-website.
            </p>
          </a>

          <a
            className="rounded-2xl border border-zinc-200 bg-zinc-50 px-6 py-8 text-left transition hover:border-zinc-300 hover:bg-zinc-100"
            href="/uk"
          >
            <h2 className="text-2xl font-semibold text-zinc-950">UK</h2>
            <p className="mt-2 text-sm text-zinc-600">
              Open the UK sub-website.
            </p>
          </a>

          <a
            className="rounded-2xl border border-zinc-200 bg-zinc-50 px-6 py-8 text-left transition hover:border-zinc-300 hover:bg-zinc-100"
            href="/canada"
          >
            <h2 className="text-2xl font-semibold text-zinc-950">Canada</h2>
            <p className="mt-2 text-sm text-zinc-600">
              Open the Canada sub-website.
            </p>
          </a>
        </div>
      </div>
    </main>
  );
}
