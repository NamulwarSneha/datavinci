import React, { useId, useRef, useState, useEffect } from "react";

export default function Tooltip({trigger, title, content}){
  const [open,setOpen]=useState(false);
  const id = useId();
  const ref = useRef(null);

  useEffect(()=>{
    function onKey(e){ if(e.key==="Escape") setOpen(false) }
    function onClick(e){ if(ref.current && !ref.current.contains(e.target)) setOpen(false) }
    window.addEventListener("keydown", onKey);
    window.addEventListener("click", onClick);
    return ()=>{ window.removeEventListener("keydown", onKey); window.removeEventListener("click", onClick); };
  },[]);

  return (
    <div ref={ref} style={{position:"relative", display:"inline-block"}}>
      {React.cloneElement(trigger, { onClick:()=>setOpen(v=>!v), "aria-expanded":open, "aria-controls":id })}
      {open && (
        <div role="dialog" id={id} aria-modal="false" className="card"
             style={{position:"absolute", top:"calc(100% + 8px)", left:0, width:360, background:"#fff", padding:16, zIndex:20}}>
          <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:8}}>
            <strong>{title}</strong>
            <button className="btn btn-outline" onClick={()=>setOpen(false)}>Close</button>
          </div>
          {content}
        </div>
      )}
    </div>
  );
}