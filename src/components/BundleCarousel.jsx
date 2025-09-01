import React, { useState } from "react";
import bundleImages from "../assets/bundleImages";
const items = [
  {title:"UMF 20+", sub:"250g", price:129.99},
  {title:"UMF 24+", sub:"250g", price:189.99},
  {title:"Wooden Spoon", sub:"Accessory", price:9.99}
];

export default function BundleCarousel({ onAddToCart }){
  const [index,setIndex]=useState(0);
  const next=()=>setIndex(i=>(i+1)%items.length);
  const prev=()=>setIndex(i=>(i-1+items.length)%items.length);

  return (
    <div className="card" style={{padding:16, marginTop:14, borderRadius:"var(--radius-lg)"}}>
      <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:12}}>
        <h3 className="h3" style={{margin:0}}>Beauty Bundle</h3>
        <div style={{display:"flex", gap:8}}>
          <button className="btn btn-outline" aria-label="Prev" onClick={prev}>‹</button>
          <button className="btn btn-outline" aria-label="Next" onClick={next}>›</button>
        </div>
      </div>
      <div style={{display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap:12}}>
        {items.map((it,i)=>(
          <div key={i} className="card" aria-current={index===i} style={{padding:12, textAlign:"center", outline:index===i?"2px solid var(--brand)":"none"}}>
            <img alt={it.title} src={bundleImages[i]} style={{margin:"0 auto 8px", width:"100px", height:"100px", objectFit:"cover"}} />
            <div>{it.title} <span className="muted">({it.sub})</span></div>
          </div>
        ))}
      </div>
      <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", marginTop:12}}>
        <div><span className="muted">Save 10%</span></div>
        <button className="btn btn-lg" onClick={onAddToCart}>ADD BUNDLE TO CART</button>
      </div>
    </div>
  );
}