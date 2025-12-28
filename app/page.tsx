'use client';

export default function Home() {
  return (
    <main className="terminal pt-20 sm:pt-24">
      <h1>SLIVER</h1>
      <div className="subtitle">S.I.L.E.N.C.E. Z_Market</div>
      <img src="/sliver.png" style={{ maxWidth: '100%', height: 'auto', display: 'block', margin: '1rem auto' }} />

      <div className="divider"></div>

      <div className="copy">
        <p>
          The city adapts.<br />
          Surveillance tightens.<br />
          Death is not an end — it is a branch, a stub.
        </p>

        <p>
          <strong>Sliver</strong> is a terminal-first 'Enigma' blending
          'silence-' at a price.
        </p>

        <br />
        <p>
          No heroes. No certainty.<br />
          Only systems.
        </p>
      </div>

      <div className="cta">
        <a
          className="btn"
          href="/share"
        >
          s.i.l.e.n.c.e
        </a>

        <button className="btn secondary" onClick={() => alert('STATUS: SIGNAL STABLE: Data Holder \'Singapore\'')}>
          System Status
        </button>
      </div>
      <br />
      <div className="divider"></div>
      <footer className="mt-8 text-xs text-center text-zinc-700">
        <p>
          Built by{" "}
          @Aetheros, @Rek0n, and @Rali0s,
          <p>Based on Codebase of Vercel and Authors below.</p>
          <br />
          <img src="/img/avatar.jpg" style={{ maxWidth: '25%', height: 'auto', display: 'block', margin: '1rem auto', border: '2px solid #7dffb3' }} />
          <div className="divider"></div>
          <a href="https://twitter.com/chronark_" className="font-semibold duration-150 hover:text-zinc-200">
            @chronark_
          </a>
          and{" "}
          <a
            href="https://github.com/chronark/envshare/graphs/contributors"
            className="underline duration-150 hover:text-zinc-200"
          >
            many others{" "}
          </a>
        </p>
        <p>
          EnvShare is deployed on{" "}
          <a target="_blank" href="https://vercel.com" className="underline duration-150 hover:text-zinc-200">
            Vercel
          </a>{" "}
          and uses{" "}
          <a target="_blank" href="https://upstash.com" className="underline duration-150 hover:text-zinc-200">
            Upstash
          </a>{" "}
          for storing encrypted data.
        </p>
      </footer>
    </main>
  );
}
