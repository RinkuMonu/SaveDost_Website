export default function Loading() {
  return (
    <main className="min-h-[55vh] bg-white px-5 py-10" aria-label="Loading page" aria-live="polite">
      <div className="mx-auto max-w-7xl animate-pulse">
        <div className="h-7 w-40 rounded-full bg-slate-100" />
        <div className="mt-6 h-12 max-w-2xl rounded-xl bg-slate-100" />
        <div className="mt-4 h-5 max-w-xl rounded-lg bg-slate-100" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[0, 1, 2].map((item) => (
            <div key={item} className="h-48 rounded-2xl bg-slate-100" />
          ))}
        </div>
      </div>
      <span className="sr-only">Loading the selected page…</span>
    </main>
  );
}
