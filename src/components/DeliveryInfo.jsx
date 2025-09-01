import React from "react";

export default function DeliveryInfo(){
  return (
    <div className="card" style={{padding:16, marginTop:14}}>
      <div style={{display:"grid", gap:12}}>
        <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:12}}>
          <div><strong>DELIVERY</strong><br/>Free delivery on orders over $30</div>
          <div><strong>ESTIMATED DELIVERY DATE</strong><br/>Jun 9 – Jun 13</div>
        </div>
        <div><strong>AFTERPAY</strong><br/>or 4 interest-free payments of $13.97 with <span className="badge">Afterpay</span></div>
      </div>
    </div>
  );
}