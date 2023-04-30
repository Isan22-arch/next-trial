'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        onClick={() => reset()}
        className="bg-slate-800 rounded-lg px-4 py-2 text-white"
      >
        Try again
      </button>
    </div>
  );
}
