import React from "react";

export default function PriceOptions({ priceOneTime, priceSubscribe, mode, setMode }) {
  return (
    <div className="card" style={{ padding: 16, borderRadius: "var(--radius-lg)", marginTop: 16 }}>
      <p className="muted" style={{ marginTop: 0 }}>PAYMENT OPTIONS (SELECT ONE)</p>
      <div style={{ display: "grid", gap: 10 }}>
        <label className={`option ${mode === "once" ? "active" : ""}`}>
          <input type="radio" name="p" className="sr-only" checked={mode === "once"} onChange={() => setMode("once")} />
          <span className="pill">One-time purchase</span>
          <span className="price">${priceOneTime.toFixed(2)} USD</span>
        </label>

        <label className={`option ${mode === "sub" ? "active" : ""}`}>
          <input type="radio" name="p" className="sr-only" checked={mode === "sub"} onChange={() => setMode("sub")} />
          <span className="pill">Subscribe & save 20%</span>
          <span className="price">${priceSubscribe.toFixed(2)} USD</span>
        </label>
      </div>
      {/* ...styles... */}
<style>{`
  .option {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: var(--surface);
    border: 1.5px solid var(--border);
    border-radius: var(--radius);
    padding: 10px 14px;
    cursor: pointer;
    transition: border-color 0.2s;
    margin-bottom: 4px;
  }
  .option.active {
    border-color: var(--brand);
    background: #f7f6ff;
  }
  .pill {
    font-weight: bold;
    font-size: 1em;
  }
  .price {
    font-weight: bold;
    color: #222;
    font-size: 1.1em;
    margin-left: 18px;
  }
  .sr-only {
    position: absolute;
    left: -9999px;
    width: 1px;
    height: 1px;
    overflow: hidden;
  }
`}</style>
    </div>
  );
}