import { Compass } from 'lucide-react';

export default function HomeHeader() {
  return (
    <header className="flex items-start justify-between">
      <div>
        <div className="flex items-center gap-2">
          <Compass className="size-6" aria-hidden="true" />
          <h1 className="text-2xl font-extrabold tracking-tight">Mtaa Rada</h1>
        </div>
        <p className="mt-0.5 text-xs font-medium text-soft-ink">Sema wapi, tupate njia!</p>
      </div>

      {/* TODO (week 3): switch English / Swahili */}
      <button
        className="min-h-9 rounded-full border border-line bg-white px-3 text-xs font-bold"
        aria-label="Change language"
      >
        EN &#9662;
      </button>
    </header>
  );
}
