import React from 'react';
import { User, Mail, Phone, MapPin } from 'lucide-react';

export default function PatientProfile() {
  const userEmail = localStorage.getItem('userEmail');
  return (
    <main className="patient-main animate-fade-in">
      <header className="patient-topbar" style={{ marginBottom: '1.5rem' }}>
        <div>
          <h1 className="patient-greeting" style={{ fontSize: '1.5rem' }}>My Profile</h1>
          <p className="text-muted">Manage your personal and contact information.</p>
        </div>
        <button className="btn-primary">Save Changes</button>
      </header>

      <div style={{ display: 'flex', gap: '2rem' }}>
        {/* Profile Card Sidebar */}
        <div className="patient-card" style={{ width: '300px', height: 'fit-content', textAlign: 'center' }}>
          <div className="patient-avatar" style={{ width: '100px', height: '100px', fontSize: '2.5rem', margin: '0 auto 1.5rem' }}>JD</div>
          <h2 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>John Doe</h2>
          <p className="text-muted" style={{ marginBottom: '1.5rem' }}>Patient ID: #HS-8429</p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', textAlign: 'left', borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-muted)' }}>
              <Mail size={18} /> <span>{userEmail}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-muted)' }}>
              <Phone size={18} /> <span>+1 (555) 123-4567</span>
            </div>
          </div>
        </div>

        {/* Edit Form */}
        <div className="patient-card" style={{ flex: 1 }}>
          <h3 style={{ fontSize: '1.1rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>Personal Information</h3>
          
          <form style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '0.9rem' }}>First Name</label>
              <input type="text" defaultValue="John" style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid var(--border-color)', outline: 'none' }} />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '0.9rem' }}>Last Name</label>
              <input type="text" defaultValue="Doe" style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid var(--border-color)', outline: 'none' }} />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '0.9rem' }}>Date of Birth</label>
              <input type="date" defaultValue="1985-06-15" style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid var(--border-color)', outline: 'none' }} />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '0.9rem' }}>Gender</label>
              <select style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid var(--border-color)', outline: 'none', background: 'white' }}>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
            <div style={{ gridColumn: '1 / -1' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '0.9rem' }}>Home Address</label>
              <input type="text" defaultValue="123 Health Ave, Medical District, NY 10001" style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid var(--border-color)', outline: 'none' }} />
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
