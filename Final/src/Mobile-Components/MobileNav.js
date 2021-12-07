import React from "react";
import Menu from "../assets/menu.png";
export default function Navbar() {
  return (
    <div>
      <div
        className="container"
        style={{
          boxSizing: "border-box",
          marginRight: "auto",
          marginLeft: "auto",

          padding: "0px",
          paddingRight: "0px",
          paddingLeft: "0px",
          position: "relative",
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "transparent",
        }}
      >
        <div
          id="logo"
          style={{
            boxSizing: "border-box",
            display: "flex",
            alignItems: "center",
          }}
        >
          <a
            className="logo"
            href="/"
            style={{
              boxSizing: "border-box",
              backgroundColor: "transparent",
              outline: "0px",
              textDecoration: "none",
              margin: "0px",
              transition: "all 0.25s ease-in-out 0s",
              fontWeight: 700,
              fontSize: "22px",
              display: "block",
              cssFloat: "left",
              marginLeft: "15px",
              marginRight: "15px",
              color: "rgb(47, 39, 54)",
            }}
          >
            <img
              className="nav-logo"
              alt="Leading Customer and Employee Experience Software"
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.hMKutULigI0Ekk5TFSJZugHaC0%26pid%3DApi&f=1"
              style={{
                width: 200,
                boxSizing: "border-box",
                border: "0px",
                verticalAlign: "middle",
                maxWidth: "100%",
                height: "auto",
                display: "inline-block",
              }}
            />
          </a>
        </div>
        <div>
          <img
            src={Menu}
            alt="Menu"
            style={{
              width: "50px",
              height: "50px",
              marginTop: "10px",
            }}
          />
        </div>
      </div>
    </div>
  );
}
