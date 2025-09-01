import React from "react";
export default function Badge({label="Badge"}){
  return (
    <span className="badge" role="img" aria-label={label}>
      <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M12 2l3 7h7l-5.5 4 2 7-6.5-4.5L5.5 20l2-7L2 9h7z"/>
      </svg>
      {label}
    </span>
  );
}