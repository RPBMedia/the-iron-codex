export default function LoadingState({ label = 'Loading records' }) {
  return (
    <section className="loading-state" aria-live="polite">
      <div />
      <p>{label}</p>
    </section>
  )
}
