export default function Subscriptions() {
  return (
    <div>
      <h1 style={{ margin: '0 0 1rem', fontSize: '1.5rem' }}>Subscriptions</h1>
      <p style={{ color: '#64748b', marginBottom: '1.5rem' }}>
        List and manage customer subscriptions. Data will come from the Stellarbill backend.
      </p>
      <div style={{ background: '#fff', borderRadius: 8, boxShadow: '0 1px 3px rgba(0,0,0,0.08)', padding: '1.5rem' }}>
        <p style={{ color: '#94a3b8', margin: 0 }}>No subscriptions yet. Integrate API to load list.</p>
      </div>
    </div>
  )
}
