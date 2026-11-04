import { Search } from 'lucide-react';

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function SearchBar({ value, onChange }: Props) {
  return (
    <label className="flex w-full items-center gap-3 rounded-2xl border border-line bg-white px-4 py-3.5 shadow-xs focus-within:border-ink">
      <Search className="size-5 text-soft-ink" aria-hidden="true" />
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Type a place (e.g. Kencom)"
        aria-label="Search a place"
        className="w-full bg-transparent text-sm outline-none placeholder:text-soft-ink"
      />
    </label>
  );
}
