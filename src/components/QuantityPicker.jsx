import React, { useState } from "react";

export default function QuantityPicker(){
  const [q,setQ]=useState(1);
  const dec=()=>setQ(v=>Math.max(1,v-1));
  const inc=()=>setQ(v=>Math.min(99,v+1));
  return (
    <div aria-label="Select quantity" style={{display:"grid", gridTemplateColumns:"auto 1fr auto", gap:8, alignItems:"center"}}>
      <button className="btn btn-outline" onClick={dec} aria-label="Decrease quantity">−</button>
      <output aria-live="polite" style={{textAlign:"center", fontWeight:700}}>{q}</output>
      <button className="btn btn-outline" onClick={inc} aria-label="Increase quantity">+</button>
    </div>
  );
}