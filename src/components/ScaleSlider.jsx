import React from "react";

export default function ScaleSlider({labels, activeIndex=0}){
  return (
    <div role="group" aria-label="UMF scale" style={{display:"grid", gap:10}}>
      <div style={{display:"grid", gridTemplateColumns:`repeat(${labels.length}, 1fr)`, gap:8}}>
        {labels.map((l,idx)=>(
          <button key={l} className="btn btn-outline" aria-pressed={idx===activeIndex}
                  style={{borderColor: idx===activeIndex ? "var(--accent)" : "var(--border)",
                          background: idx===activeIndex ? "var(--surface)" : "#fff"}}>
            UMF™ {l}
          </button>
        ))}
      </div>
    </div>
  );
}