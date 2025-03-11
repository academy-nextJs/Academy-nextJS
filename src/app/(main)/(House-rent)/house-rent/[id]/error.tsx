"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="text-white">
      <h2>Something went wrong!</h2>
      <h3>{error.message}</h3>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
