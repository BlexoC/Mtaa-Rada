import { Bus, Plus, Building2, Store, type LucideIcon } from 'lucide-react';
import type { Category } from '../../types';

type Item = { id: Category; label: string; icon: LucideIcon };

// To add a new category, add one line here. The grid draws it automatically.
const ITEMS: Item[] = [
  { id: 'stages', label: 'Stages', icon: Bus },
  { id: 'clinics', label: 'Clinics', icon: Plus },
  { id: 'offices', label: 'Offices', icon: Building2 },
  { id: 'shops', label: 'Shops', icon: Store },
];

type Props = { onSelect: (category: Category) => void };

export default function QuickAccess({ onSelect }: Props) {
  return (
    <section>
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-base font-bold">Quick access</h3>
        <button className="text-xs font-semibold hover:underline">See all</button>
      </div>

      <div className="grid grid-cols-4 gap-3">
        {ITEMS.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => onSelect(id)}
            className="flex flex-col items-center gap-1.5 rounded-2xl border border-line bg-white py-3.5 shadow-xs transition-transform active:scale-95"
          >
            <Icon className="size-6" aria-hidden="true" />
            <span className="text-xs font-bold">{label}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
