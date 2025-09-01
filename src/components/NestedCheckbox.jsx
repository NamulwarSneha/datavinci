import React, { useEffect, useMemo, useRef, useState } from "react";

const initial = {
  Fruits: ["Apple", "Banana", "Orange"],
  Vegetables: ["Carrot", "Potato", "Tomato"]
};

export default function NestedCheckbox({data=initial}){
  const [checked, setChecked] = useState({}); // key => boolean
  const allRef = useRef(null);

  const flatKeys = useMemo(()=>Object.values(data).flat(), [data]);

  const allSelected = flatKeys.length>0 && flatKeys.every(k => !!checked[k]);
  const noneSelected = flatKeys.every(k => !checked[k]);

  // handle Select All indeterminate
  useEffect(()=>{
    if(allRef.current) allRef.current.indeterminate = !(allSelected || noneSelected) && flatKeys.some(k=>checked[k]);
  }, [allSelected, noneSelected, checked, flatKeys]);

  const toggleAll = (val) => {
    const next={};
    if(val) flatKeys.forEach(k => (next[k]=true));
    setChecked(next);
  };

  const toggleParent = (cat, val) => {
    const next = {...checked};
    data[cat].forEach(k => next[k]=val);
    setChecked(next);
  };

  const toggleChild = (k, val) => setChecked(prev => ({...prev, [k]:val}));

  const parentState = (cat) => {
    const arr = data[cat];
    const sel = arr.filter(k => checked[k]).length;
    if(sel === arr.length) return "checked";
    if(sel === 0) return "unchecked";
    return "indeterminate";
  };

  return (
    <div className="card" style={{padding:16}}>
      <label style={{display:"flex", alignItems:"center", gap:10, marginBottom:10}}>
        <input
          type="checkbox"
          ref={allRef}
          checked={allSelected}
          onChange={(e)=>toggleAll(e.target.checked)}
        />
        <strong>Select All</strong>
      </label>

      {Object.keys(data).map(cat=>{
        const state = parentState(cat);
        return (
          <div key={cat} className="card" style={{padding:12, marginBottom:12}}>
            <label style={{display:"flex", alignItems:"center", gap:10}}>
              <input
                type="checkbox"
                checked={state==="checked"}
                ref={el=>{ if(el) el.indeterminate = state==="indeterminate"; }}
                onChange={(e)=>toggleParent(cat, e.target.checked)}
              />
              <span style={{fontWeight:600}}>{cat}</span>
            </label>
            <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(140px,1fr))", gap:8, marginTop:8}}>
              {data[cat].map(item=>(
                <label key={item} className="card" style={{padding:8, display:"flex", alignItems:"center", gap:8}}>
                  <input
                    type="checkbox"
                    checked={!!checked[item]}
                    onChange={(e)=>toggleChild(item, e.target.checked)}
                  />
                  {item}
                </label>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}