import React, { useState } from "react";
import Gallery from "./Gallery.jsx";

import Tooltip from "./Tooltip.jsx";
import PriceOptions from "./PriceOptions.jsx";
import QuantityPicker from "./QuantityPicker.jsx";
import BundleCarousel from "./BundleCarousel.jsx";
import DeliveryInfo from "./DeliveryInfo.jsx";
import ScaleSlider from "./ScaleSlider.jsx";
import TasteProfile from "./TasteProfile.jsx";
import variantImages from "../assets/images";
import img17 from "../assets/17.png";
import img12 from "../assets/12.png";
import img11 from "../assets/11.png";
import img10 from "../assets/10.png";
import img9 from "../assets/9.png";
import img8 from "../assets/8.png";

const imageArray = [img17, img12, img11, img10, img9, img8];

export default function ProductPage() {
  const [cartCount, setCartCount] = useState(0);
  const [mode, setMode] = useState("once"); // payment mode state
  const priceOneTime = 55.88;
  const priceSubscribe = 44.7;
   // Calculate sum based on selected payment option
  const selectedPrice = mode === "once" ? priceOneTime : priceSubscribe;
  const handleAddToCart = () => setCartCount((c) => c + 1);
  return (
    <section className="container section">
      <div className="grid grid-cols-2">
        {/* left column: image rail like Figma */}
        <Gallery />

        {/* right column: content */}
        <div style={{ paddingTop: 12 }}>
          <h1
            style={{
              fontSize: "var(--fs-3xl)",
              lineHeight: 1.1,
              margin: "0 0 6px",
            }}
          >
            Manuka Honey
          </h1>
          <div style={{ display: "flex", gap: 18, alignItems: "baseline" }}>
            <p className="h3" style={{ margin: 0 }}>
              UMF™ <strong>24+</strong>
            </p>
            <p className="h3" style={{ margin: 0 }}>
              MGO <strong>1122+</strong>
            </p>
          </div>

          {/* UMF/MGO help (modal-like popover per Figma) */}
          <div className="mt-80" style={{ marginTop: 16 }}>
            <Tooltip
              trigger={
                <button
                  className="badge btn-icon"
                  type="button"
                  aria-haspopup="dialog"
                >
                  <span aria-hidden>ⓘ</span> What is UMF and MGO?
                </button>
              }
              title="UMF & MGO"
              content={
                <div>
                  <h4 style={{ margin: "8px 0 6px" }}>UMF</h4>
                  <p className="muted">
                    UMF is the potency & rarity rating of Manuka honey.
                  </p>
                  <div className="scale-band">
                    {[10, 15, 20, 24, 26, 28, 30].map((n) => (
                      <span key={n}>{n}+</span>
                    ))}
                  </div>
                  <h4 style={{ margin: "14px 0 6px" }}>MGO</h4>
                  <p className="muted">MGO indicates antibacterial strength.</p>
                  <div className="scale-band">
                    {[263, 514, 829, 1122, 1282, 1450, 1620].map((n) => (
                      <span key={n}>{n}+</span>
                    ))}
                  </div>
                </div>
              }
            />
          </div>

          {/* reviews + trust badges */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 12,
              marginTop: 10,
            }}
          >
            <h2 style={{ margin: 0, fontWeight: "bold" }}>Optimiser</h2>

            <span aria-label="rating" className="badge">
              ⭐ ⭐ ⭐ ⭐ ⭐ <span className="muted">(825 reviews)</span>
            </span>
          </div>
          <p>
            For those times in life when quality comes first. This pure UMF™ 24+
            Manuka Honey is powerfully active, sourced from wild and rugged
            locations around Aotearoa New Zealand and great for almost all uses.
            It has a full, delicious flavour and your body will love you for it.
          </p>
          {/* Six images below rating */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 12,
            }}
          >
            {imageArray.map((src, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img
                  src={src}
                  alt={`Product ${i + 1}`}
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "8px",
                    objectFit: "cover",
                  }}
                />
              </div>
            ))}
          </div>

          {/* thumbnails row as in Figma (variant selector look) */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 12,
              marginTop: 18,
            }}
          >
            {variantImages.map((src, i) => (
              <button key={i} className="card" style={{ padding: 8 }}>
                <img
                  alt={`Variant ${i + 1}`}
                  src={src}
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
              </button>
            ))}
          </div>

          {/* payment options */}
          <PriceOptions
        priceOneTime={priceOneTime}
        priceSubscribe={priceSubscribe}
        mode={mode}
        setMode={setMode}
      />

      {/* Show selected sum */}
      <div style={{ fontWeight: "bold", margin: "16px 0" }}>
        Total: ${selectedPrice.toFixed(2)}
      </div>

          {/* quantity + add to cart */}
          <div
            className="card"
            style={{
              padding: 16,
              borderRadius: "var(--radius-lg)",
              marginTop: 14,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between", // add space between
                gap: 12,
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <span style={{ fontWeight: "bold", marginBottom: 6 }}>
                  Select Quantity
                </span>
                <QuantityPicker />
              </div>
              <button className="btn btn-lg" aria-label="Add to cart">
                ADD TO CART{" "}
                <span style={{ marginLeft: 8, fontWeight: "bold" }}>
                  ({cartCount})
                </span>
              </button>
            </div>
          </div>

          {/* bundle carousel */}
          <BundleCarousel onAddToCart={handleAddToCart} />

          {/* loyalty / delivery / payments */}
          <DeliveryInfo />

          {/* UMF scale & taste profile */}
          <div className="card" style={{ padding: 16, marginTop: 16 }}>
            <h3 className="h3" style={{ marginBottom: 12 }}>
              UMF™ Scale
            </h3>
            <ScaleSlider
              activeIndex={3}
              labels={["10+", "15+", "20+", "24+", "26+", "28+", "30+"]}
            />
          </div>

          <div className="card" style={{ padding: 16, marginTop: 12 }}>
            <h3 className="h3" style={{ marginBottom: 10 }}>
              Taste Profile
            </h3>
            <TasteProfile
              minLabel="Clean & Intense"
              maxLabel="Bold & Intense"
              value={70}
            />
          </div>
        </div>
      </div>

      <style>{`
        .muted{ color:var(--muted) }
        .scale-band{
          display:flex; gap:8px; flex-wrap:wrap;
          background:var(--surface); border:1px solid var(--border);
          padding:6px 8px; border-radius:var(--radius);
        }
        @media (max-width:767.98px){
          .grid.grid-cols-2{ grid-template-columns: 1fr !important }
        }
      `}</style>
    </section>
  );
}