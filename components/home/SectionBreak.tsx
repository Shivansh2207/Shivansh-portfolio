import "./section-break.css";

export function SectionBreak({ from, to, phrase }: { from: string; to: string; phrase: string }) {
  return (
    <div className="chapter-break" aria-hidden="true">
      <span className="chapter-break__from">{from}</span>
      <div className="chapter-break__window"><div className="chapter-break__track">
        {[0, 1, 2, 3].map(i => <span key={i}>{phrase}<b>✳</b></span>)}
      </div></div>
      <span className="chapter-break__to">{to} <b>↓</b></span>
    </div>
  );
}
