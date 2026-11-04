import { Mic } from 'lucide-react';

type Props = { onPress: () => void };

export default function MicButton({ onPress }: Props) {
  return (
    <>
      <button
        onClick={onPress}
        aria-label="Tap to speak your destination"
        className="flex size-28 items-center justify-center rounded-full bg-mustard-soft transition-transform active:scale-95"
      >
        <span className="animate-mic-pulse flex size-20 items-center justify-center rounded-full bg-mustard shadow-md">
          <Mic className="size-8" aria-hidden="true" />
        </span>
      </button>

      <div className="text-center">
        <h2 className="text-3xl font-extrabold tracking-tight">Where to?</h2>
        <p className="mt-1 text-xs font-medium text-soft-ink">Tap the mic and say it, or type below</p>
      </div>
    </>
  );
}
