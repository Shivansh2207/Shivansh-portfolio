import "./section-break.css";

export function SectionBreak({ from, to, phrase, variant = "ink" }: { from: string; to: string; phrase: string; variant?: "ink" | "process" | "signal" | "route" | "invite" }) {
  return (
    <div className={`chapter-break chapter-break--${variant}`} aria-hidden="true">
      <span className="chapter-break__from">{from}</span>
      {variant === "ink" ? <div className="chapter-break__window"><div className="chapter-break__track">
        {[0, 1, 2, 3].map(i => <span key={i}>{phrase}<b>✳</b></span>)}
      </div></div> : variant === "process" ? <div className="chapter-process"><span>THINK</span><b>→</b><span>BUILD</span><b>→</b><span>SHIP</span><b>↺</b></div> : variant === "signal" ? <div className="chapter-signal"><i /><span>FROM EXPERIMENT TO IMPACT</span><i /></div> : variant === "route" ? <div className="chapter-route"><span>01</span><i/><span>02</span><i/><span>03</span><i/><strong>STILL GOING ↗</strong></div> : <div className="chapter-invite">TO BE CONTINUED<span>…with your idea.</span></div>}
      <span className="chapter-break__to">{to} <b>↓</b></span>
    </div>
  );
}
