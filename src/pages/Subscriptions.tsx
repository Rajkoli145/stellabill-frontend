import { Link } from 'react-router-dom'

export default function Subscriptions() {
  return (
    <div>
      <h1 style={{ margin: '0 0 1rem', fontSize: '1.5rem' }}>Subscriptions</h1>
      <p style={{ color: '#64748b', marginBottom: '1.5rem' }}>
        List and manage customer subscriptions. Data will come from the Stellarbill backend.
      </p>
      <div style={{ background: '#fff', borderRadius: 8, boxShadow: '0 1px 3px rgba(0,0,0,0.08)', padding: '1.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontWeight: 600 }}>Developer Pro</div>
            <div style={{ fontSize: '0.875rem', color: '#64748b' }}>sub_123456789</div>
          </div>
          <Link
            to="/subscriptions/sub_123456789/usage"
            style={{
              fontSize: '0.875rem',
              color: '#3b82f6',
              fontWeight: 500,
              textDecoration: 'none'
            }}
          >
            View usage
          </Link>
        </div>
      </div>
    </div>
  )
}
