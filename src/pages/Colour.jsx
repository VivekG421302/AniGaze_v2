import React from "react";
import Navbar from "../components/Navbar";

function Colour() {
  return (
    <>
      <div className="colorBody">
        <Navbar/>
        <header>
          <h1>Colour Pallet</h1>
        </header>
        <div className="colorPallet">
          <div
            className="colorPalletBoard"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
              gridTemplateRows: "1fr 9fr",
              height: "300px",
              border: "1px solid #fff",
              borderTop: "none",
            }}
          >
            <label
              className="labels"
              style={{
                backgroundColor: "#000",
                color: "#fff",
                alignContent: "end",
                border: "1px solid #fff",
              }}
            >
              201f31
            </label>
            <label
              className="labels"
              style={{
                backgroundColor: "#000",
                color: "#fff",
                alignContent: "end",
                border: "1px solid #fff",
              }}
            >
              26253b
            </label>
            <label
              className="labels"
              style={{
                backgroundColor: "#000",
                color: "#fff",
                alignContent: "end",
                border: "1px solid #fff",
              }}
            >
              d62839
            </label>
            <label
              className="labels"
              style={{
                backgroundColor: "#000",
                color: "#fff",
                alignContent: "end",
                border: "1px solid #fff",
              }}
            >
              d3bccc
            </label>
            <label
              className="labels"
              style={{
                backgroundColor: "#000",
                color: "#fff",
                alignContent: "end",
                border: "1px solid #fff",
              }}
            >
              e8d7f1
            </label>
            <span
              className="colour1"
              style={{ backgroundColor: "var(--main)" }}
            ></span>
            <span
              className="colour2"
              style={{ backgroundColor: "var(--panel)" }}
            ></span>
            <span
              className="colour3"
              style={{ backgroundColor: "var(--logo)" }}
            ></span>
            <span
              className="colour4"
              style={{ backgroundColor: "var(--prime)" }}
            ></span>
            <span
              className="colour5"
              style={{ backgroundColor: "var(--blind)" }}
            ></span>
          </div>
        </div>
        <div
          className="colorDisplay"
          style={{
            backgroundColor: "#000",
            padding: "50px",
            display: "flex",
            width: "100%",
            height: "600px",
            marginTop: "100px",
          }}
        >
          <div
            className="displayBody"
            style={{
              backgroundColor: "var(--main)",
              flex: "1",
              borderRadius: "32px",
              padding: "16px",
            }}
          >
            <div className="displayHeader">
              <div
                className="logo"
                style={{
                  backgroundColor: "var(--panel)",
                  borderRadius: "16px",
                  padding: "10px 50px",
                  display: "flex",
                  justifyContent: "space-between"
                }}
              >
                <h1 style={{ color: "var(--logo)" }}>Logo</h1>
                <div className="displayTabs" style={{display: "grid", gridTemplateColumns: "repeat(5, 1fr)", width: "600px", gap: "10px"}}>
                  <span style={{ backgroundColor: "var(--main)", height: "40px", borderRadius: "8px", display: "flex", justifyContent: "center", alignItems: "center" }}>Tabs</span>
                  <span style={{ backgroundColor: "var(--main)", height: "40px", borderRadius: "8px", display: "flex", justifyContent: "center", alignItems: "center" }}>Tabs</span>
                  <span style={{ backgroundColor: "var(--main)", height: "40px", borderRadius: "8px", display: "flex", justifyContent: "center", alignItems: "center" }}>Tabs</span>
                  <span style={{ backgroundColor: "var(--main)", height: "40px", borderRadius: "8px", display: "flex", justifyContent: "center", alignItems: "center" }}>Tabs</span>
                  <span style={{ backgroundColor: "var(--main)", height: "40px", borderRadius: "8px", display: "flex", justifyContent: "center", alignItems: "center" }}>Tabs</span>
                </div>
              </div>
            </div>
            <div className="displayHero">
              <h2 className="displayHeading">Sample Text</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Colour;
