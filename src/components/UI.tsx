import { ReactNode, useState } from 'react';

export function Button({ children, tone = 'primary' }: { children: ReactNode; tone?: 'primary' | 'secondary' | 'ghost' | 'danger' }) {
  return <button className={`btn btn-${tone}`}>{children}</button>;
}

export function Input({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <label className="field">
      <span>{label}</span>
      <input placeholder={placeholder} />
    </label>
  );
}

export function Badge({ children, tone = 'neutral' }: { children: ReactNode; tone?: 'neutral' | 'verified' | 'warning' }) {
  return <span className={`badge badge-${tone}`}>{children}</span>;
}

export function Card({ title, children }: { title: string; children: ReactNode }) {
  return (
    <article className="card">
      <header>
        <h4>{title}</h4>
      </header>
      <div>{children}</div>
    </article>
  );
}

export function ModalDemo() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button tone="secondary">Open modal</Button>
      <button className="inline-link" onClick={() => setOpen((s) => !s)}>
        Toggle demo
      </button>
      {open && (
        <div className="modal-shell">
          <div className="modal">
            <h5>Confirm settlement?</h5>
            <p>This action notifies all transaction parties.</p>
            <div className="row">
              <Button tone="ghost">Cancel</Button>
              <Button>Confirm</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
