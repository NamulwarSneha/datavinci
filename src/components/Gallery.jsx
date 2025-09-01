import React, { useState, useEffect } from "react";
import img3 from "../assets/3.png";
import img21 from "../assets/21.png";
import img19 from "../assets/19.png";
import img16 from "../assets/16.png";
import img13 from "../assets/13.png";
import img15 from "../assets/15.png";
import img14 from "../assets/14.png";

const thumbs = [img3, img21, img19, img16, img13, img15, img14];

export default function Gallery() {
  const [active, setActive] = useState(0);

  // Auto sliding effect
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((a) => (a === thumbs.length - 1 ? 0 : a + 1));
    }, 2500); // Change slide every 2.5 seconds
    return () => clearInterval(timer);
  }, [active]);

  const goToPrev = () => {
    setActive((a) => (a === 0 ? thumbs.length - 1 : a - 1));
  };
  const goToNext = () => {
    setActive((a) => (a === thumbs.length - 1 ? 0 : a + 1));
  };

  return (
    <div>
      {/* Carousel row */}
      <div
        className="card"
        style={{
          padding: 0,
          position: "relative",
          borderRadius: "var(--radius-lg)",
          overflow: "hidden",
          marginBottom: "24px",
        }}
      >
        {/* Purple brush accent (as background) */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background: `radial-gradient(60% 60% at 30% 40%, rgba(123,45,180,.25), transparent 60%)`,
          }}
        />
        <img
          src={thumbs[active]}
          alt="Main product"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <button
          className="nav-arrow left"
          aria-label="Previous"
          onClick={goToPrev}
        >
          ‹
        </button>
        <button
          className="nav-arrow right"
          aria-label="Next"
          onClick={goToNext}
        >
          ›
        </button>
      </div>

      {/* Grid pattern row below carousel */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "16px",
        }}
      >
        {(() => {
          const gridItems = [];
          let i = 0;
          // First row: two cards
          if (thumbs.length > i) {
            gridItems.push(
              <div
                className="card"
                style={{ padding: 0, height: "160px" }}
                key={`grid-${i}`}
              >
                <img
                  src={thumbs[i]}
                  alt={`Grid ${i + 1}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "var(--radius-lg)",
                  }}
                />
              </div>
            );
            i++;
          }
          if (thumbs.length > i) {
            gridItems.push(
              <div
                className="card"
                style={{ padding: 0, height: "160px" }}
                key={`grid-${i}`}
              >
                <img
                  src={thumbs[i]}
                  alt={`Grid ${i + 1}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "var(--radius-lg)",
                  }}
                />
              </div>
            );
            i++;
          }
          // Second row: one card spanning two columns
          if (thumbs.length > i) {
            gridItems.push(
              <div
                className="card"
                style={{ gridColumn: "span 2", padding: 0, height: "200px" }}
                key={`grid-${i}`}
              >
                <img
                  src={thumbs[i]}
                  alt={`Grid ${i + 1}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "var(--radius-lg)",
                  }}
                />
              </div>
            );
            i++;
          }
          // Next rows: always two cards per row
          while (i < thumbs.length) {
            gridItems.push(
              <div
                className="card"
                style={{ padding: 0, height: "180px" }}
                key={`grid-${i}`}
              >
                <img
                  src={thumbs[i]}
                  alt={`Grid ${i + 1}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "var(--radius-lg)",
                  }}
                />
              </div>
            );
            i++;
            if (i < thumbs.length) {
              gridItems.push(
                <div
                  className="card"
                  style={{ padding: 0, height: "180px" }}
                  key={`grid-${i}`}
                >
                  <img
                    src={thumbs[i]}
                    alt={`Grid ${i + 1}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "var(--radius-lg)",
                    }}
                  />
                </div>
              );
              i++;
            }
          }
          return gridItems;
        })()}
      </div>

      <style>{`
  .nav-arrow{
    position:absolute; top:50%; transform:translateY(-50%);
    background:#fff; border:1px solid var(--border);
    width:40px; height:40px; border-radius:999px; box-shadow:var(--shadow);
    display:grid; place-items:center; font-size:24px;
  }
  .nav-arrow.left{ left:10px }
  .nav-arrow.right{ right:10px }
  @media (max-width:767.98px){
    .nav-arrow{ display:none }
    /* Make grid pattern one column on small devices */
    div[style*="display: grid"] {
      grid-template-columns: 1fr !important;
    }
  }
`}</style>
    </div>
  );
}