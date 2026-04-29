'use client';
export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>Une erreur est survenue</h2>
      <p>{error.message}</p>
      <button
        style={{
          marginTop: 16,
          padding: '0.75rem 1.25rem',
          border: 'none',
          borderRadius: 6,
          background: '#1B8C3E',
          color: 'white',
          cursor: 'pointer',
        }}
        onClick={() => reset()}
      >
        Réessayer
      </button>
    </div>
  );
}
