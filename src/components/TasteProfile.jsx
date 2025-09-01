import React from "react";

export default function TasteProfile({minLabel,maxLabel,value=50}){
  return (
    <div>
      <div style={{display:"flex", justifyContent:"space-between", marginBottom:8, color:"var(--muted)"}}>
        <span>{minLabel}</span><span>{maxLabel}</span>
      </div>
      <div style={{position:"relative", height:6, background:"var(--surface)", borderRadius:999}}>
        <div style={{position:"absolute", inset:"0", background:"linear-gradient(90deg, #fff, var(--brand))", opacity:.2, borderRadius:999}}/>
        <div aria-hidden style={{position:"absolute", top:-7, left:`calc(${value}% - 10px)`, width:20, height:20, borderRadius:999, background:"var(--brand)"}}/>
        <span className="sr-only">Taste intensity {value} out of 100</span>
      </div>
    </div>
  );
}