import { useState } from 'react';
import { X } from 'lucide-react';

export default function RecentSearches() {
  // Starter data. In week 2 this will be saved in localStorage.
  const [items, setItems] = useState(['Kencom stage', 'Railways stage']);

  if (items.length === 0) return null;

  return (
    <section>
      <div className="mb-2.5 flex items-center justify-between">
        <h3 className="text-base font-bold">Recent</h3>
        <button onClick={() => setItems([])} className="text-xs font-semibold text-soft-ink hover:text-ink">
          Clear
        </button>
      </div>

      <ul className="flex flex-wrap gap-2">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-center gap-1.5 rounded-full border border-line bg-white py-1.5 pl-3.5 pr-2 text-xs font-semibold"
          >
            {item}
            <button
              onClick={() => setItems(items.filter((i) => i !== item))}
              aria-label={`Remove ${item}`}
              className="rounded-full p-1 text-soft-ink hover:text-ink"
            >
              <X className="size-3" aria-hidden="true" />
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
