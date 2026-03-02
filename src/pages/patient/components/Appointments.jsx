import React from 'react';
import { Calendar as CalendarIcon, Clock, MapPin, Stethoscope, Video } from 'lucide-react';

export default function Appointments() {
  return (
    <main className="patient-main animate-fade-in">
      <header className="patient-topbar" style={{ marginBottom: '1.5rem' }}>
        <div>
          <h1 className="patient-greeting" style={{ fontSize: '1.5rem' }}>My Appointments</h1>
          <p className="text-muted">Manage your upcoming and past bookings.</p>
        </div>
        <button className="btn-primary">Book New Appointment</button>
      </header>

      <div className="patient-card">
        <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1.5rem' }}>Upcoming</h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {/* Appointment 1 */}
          <div className="patient-appointment-item" style={{ borderLeft: '4px solid var(--primary-color)' }}>
            <div style={{ display: 'flex', gap: '2rem' }}>
              <div className="patient-time-box" style={{ minWidth: '100px' }}>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: '600' }}>OCT 24</div>
                <div style={{ fontWeight: '700', color: 'var(--primary-color)', fontSize: '1.1rem' }}>10:00 AM</div>
              </div>
              
              <div>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  Dr. Sarah Jenkins <span className="patient-badge">Confirmed</span>
                </h4>
                <div style={{ display: 'flex', gap: '1.5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><Stethoscope size={16}/> Cardiology</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><MapPin size={16}/> Room 302, Main Wing</span>
                </div>
              </div>
            </div>
            
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <button style={{ padding: '8px 16px', borderRadius: '8px', border: '1px solid #cbd5e1', background: 'white', cursor: 'pointer', fontWeight: '500' }}>Reschedule</button>
              <button style={{ padding: '8px 16px', borderRadius: '8px', border: '1px solid #fecaca', background: '#fef2f2', color: '#ef4444', cursor: 'pointer', fontWeight: '500' }}>Cancel</button>
            </div>
          </div>

          {/* Appointment 2 */}
          <div className="patient-appointment-item" style={{ borderLeft: '4px solid var(--secondary-color)' }}>
            <div style={{ display: 'flex', gap: '2rem' }}>
              <div className="patient-time-box" style={{ minWidth: '100px' }}>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: '600' }}>NOV 12</div>
                <div style={{ fontWeight: '700', color: 'var(--primary-color)', fontSize: '1.1rem' }}>02:30 PM</div>
              </div>
              
              <div>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  Dr. Michael Chen <span className="patient-badge" style={{ background: '#fef3c7', color: '#b45309' }}>Pending</span>
                </h4>
                <div style={{ display: 'flex', gap: '1.5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><Stethoscope size={16}/> General Practice</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><Video size={16}/> Telehealth Link</span>
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
               <button className="btn-primary" style={{ padding: '8px 16px' }}>Join Call</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
