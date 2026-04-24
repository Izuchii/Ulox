import { useMemo, useState } from 'react';
import { Badge, Button, Card, Input, ModalDemo } from './components/UI';
import { adminFrames, appScreens, components, foundations, navigation, patterns, type Frame } from './data/frames';
import { tokens } from './design/tokens';

type PageKey = 'Foundations' | 'Components' | 'Patterns' | 'App Screens' | 'Admin';

const pages: Record<PageKey, Frame[]> = {
  Foundations: foundations,
  Components: components,
  Patterns: patterns,
  'App Screens': appScreens,
  Admin: adminFrames,
};

export function App() {
  const [page, setPage] = useState<PageKey>('App Screens');
  const activeFrames = pages[page];

  const cssVars = useMemo(
    () => ({
      '--bg': tokens.color.bg,
      '--surface': tokens.color.surface,
      '--text': tokens.color.text,
      '--muted': tokens.color.muted,
      '--line': tokens.color.line,
      '--primary': tokens.color.primary,
      '--accent': tokens.color.accent,
      '--warning': tokens.color.warning,
      '--danger': tokens.color.danger,
    }) as React.CSSProperties,
    [],
  );

  return (
    <div className="app" style={cssVars}>
      <aside className="sidebar">
        <h1>Ulox UI System</h1>
        <p>Mobile-first product UI and full platform frame library.</p>
        {(Object.keys(pages) as PageKey[]).map((key) => (
          <button key={key} className={`nav ${page === key ? 'active' : ''}`} onClick={() => setPage(key)}>
            {key}
          </button>
        ))}
      </aside>

      <main className="main">
        <section className="hero">
          <h2>{page}</h2>
          <div className="pill-row">
            {navigation.topTabs.map((tab) => (
              <Badge key={tab} tone="neutral">
                {tab}
              </Badge>
            ))}
          </div>
          <div className="pill-row">
            {navigation.listingSubTabs.map((tab) => (
              <Badge key={tab} tone="verified">
                {tab}
              </Badge>
            ))}
            {navigation.rentSubTabs.map((tab) => (
              <Badge key={tab} tone="warning">
                {tab}
              </Badge>
            ))}
          </div>
        </section>

        {page === 'Components' && (
          <section className="component-lab">
            <h3>Reusable component previews</h3>
            <div className="grid-3">
              <Card title="Buttons">
                <div className="row">
                  <Button>Primary</Button>
                  <Button tone="secondary">Secondary</Button>
                  <Button tone="ghost">Ghost</Button>
                  <Button tone="danger">Danger</Button>
                </div>
              </Card>
              <Card title="Inputs & filters">
                <Input label="Search" placeholder="Search listings, products, jobs" />
                <Input label="Location" placeholder="City, suburb" />
              </Card>
              <Card title="Modal & notifications">
                <ModalDemo />
              </Card>
            </div>
          </section>
        )}

        <section className="frames">
          {activeFrames.map((frame) => (
            <article key={frame.title} className="frame-card">
              <div className="frame-top">
                <h3>{frame.title}</h3>
                {frame.trust && <Badge tone="verified">Trust-critical</Badge>}
              </div>
              <p>{frame.description}</p>
              <ul>
                {frame.components.map((component) => (
                  <li key={component}>{component}</li>
                ))}
              </ul>
              {frame.trust && <p className="trust-note">{frame.trust}</p>}
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
