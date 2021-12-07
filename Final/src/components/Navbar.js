import React from "react";
export default function Navbar() {
  return (
    <div>
      <div
        className="container"
        style={{
          boxSizing: "border-box",
          marginRight: "auto",
          marginLeft: "auto",
          width: "1240px",
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
        <div
          id="main-menu"
          className="navbar-collapse"
          aria-expanded="false"
          style={{
            boxSizing: "border-box",
            borderTop: "0px",
            width: "auto",
            paddingBottom: "0px",
            paddingRight: "0px",
            paddingLeft: "0px",
            marginRight: "0px",
            borderColor: "rgb(231, 231, 231)",
            border: "none",
            boxShadow: "none",
            maxHeight: "100%",
            marginLeft: "auto",
            overflow: "visible",
            display: "block",
            height: "auto",
            overflowX: "visible",
          }}
        >
          <ul
            id="menu-header-menu"
            className="nav navbar-nav"
            style={{
              boxSizing: "border-box",
              listStyle: "none",
              paddingLeft: "0px",
              margin: "0px",
              cssFloat: "left",
              marginTop: "0px",
              marginBottom: "0px",
            }}
          >
            <li
              className="dropdown"
              style={{
                boxSizing: "border-box",
                position: "relative",
                display: "block",
                cssFloat: "left",
              }}
            >
              <a
                href="/"
                title="Products"
                style={{
                  boxSizing: "border-box",
                  backgroundColor: "transparent",
                  outline: "0px",
                  textDecoration: "none",
                  position: "relative",
                  display: "block",
                  margin: "0px",
                  padding: "0px 15px",
                  transition: "all 0.25s ease 0s",
                  opacity: 1,
                  lineHeight: 1,
                  fontWeight: 700,
                  fontSize: "14px",
                  letterSpacing: "1px",
                  paddingTop: "32px",
                  paddingBottom: "32px",
                  color: "rgb(47, 39, 54)",
                }}
              >
                Products
              </a>
            </li>
            <li
              style={{
                boxSizing: "border-box",
                position: "relative",
                display: "block",
                cssFloat: "left",
              }}
            >
              <a
                href="/"
                title="Features"
                style={{
                  boxSizing: "border-box",
                  backgroundColor: "transparent",
                  outline: "0px",
                  textDecoration: "none",
                  position: "relative",
                  display: "block",
                  margin: "0px",
                  padding: "0px 15px",
                  transition: "all 0.25s ease 0s",
                  opacity: 1,
                  lineHeight: 1,
                  fontWeight: 700,
                  fontSize: "14px",
                  letterSpacing: "1px",
                  paddingTop: "32px",
                  paddingBottom: "32px",
                  color: "rgb(47, 39, 54)",
                }}
              >
                Features
              </a>
            </li>
            <li
              style={{
                boxSizing: "border-box",
                position: "relative",
                display: "block",
                cssFloat: "left",
              }}
            >
              <a
                href="/"
                title="Industries"
                style={{
                  boxSizing: "border-box",
                  backgroundColor: "transparent",
                  outline: "0px",
                  textDecoration: "none",
                  position: "relative",
                  display: "block",
                  margin: "0px",
                  padding: "0px 15px",
                  transition: "all 0.25s ease 0s",
                  opacity: 1,
                  lineHeight: 1,
                  fontWeight: 700,
                  fontSize: "14px",
                  letterSpacing: "1px",
                  paddingTop: "32px",
                  paddingBottom: "32px",
                  color: "rgb(47, 39, 54)",
                }}
              >
                Industries
              </a>
            </li>
            <li
              style={{
                boxSizing: "border-box",
                position: "relative",
                display: "block",
                cssFloat: "left",
              }}
            >
              <a
                href="//#"
                title="Services"
                style={{
                  boxSizing: "border-box",
                  backgroundColor: "transparent",
                  outline: "0px",
                  textDecoration: "none",
                  position: "relative",
                  display: "block",
                  margin: "0px",
                  padding: "0px 15px",
                  transition: "all 0.25s ease 0s",
                  opacity: 1,
                  lineHeight: 1,
                  fontWeight: 700,
                  fontSize: "14px",
                  letterSpacing: "1px",
                  paddingTop: "32px",
                  paddingBottom: "32px",
                  color: "rgb(47, 39, 54)",
                }}
              >
                Services
              </a>
            </li>
            <li
              style={{
                boxSizing: "border-box",
                position: "relative",
                display: "block",
                cssFloat: "left",
              }}
            >
              <a
                href="/"
                title="About"
                style={{
                  boxSizing: "border-box",
                  backgroundColor: "transparent",
                  outline: "0px",
                  textDecoration: "none",
                  position: "relative",
                  display: "block",
                  margin: "0px",
                  padding: "0px 15px",
                  transition: "all 0.25s ease 0s",
                  opacity: 1,
                  lineHeight: 1,
                  fontWeight: 700,
                  fontSize: "14px",
                  letterSpacing: "1px",
                  paddingTop: "32px",
                  paddingBottom: "32px",
                  color: "rgb(47, 39, 54)",
                }}
              >
                About
              </a>
            </li>
            <li
              style={{
                boxSizing: "border-box",
                position: "relative",
                display: "block",
                cssFloat: "left",
              }}
            >
              <a
                href="//#"
                title="Resources"
                style={{
                  boxSizing: "border-box",
                  backgroundColor: "transparent",
                  outline: "0px",
                  textDecoration: "none",
                  position: "relative",
                  display: "block",
                  margin: "0px",
                  padding: "0px 15px",
                  transition: "all 0.25s ease 0s",
                  opacity: 1,
                  lineHeight: 1,
                  fontWeight: 700,
                  fontSize: "14px",
                  letterSpacing: "1px",
                  paddingTop: "32px",
                  paddingBottom: "32px",
                  color: "rgb(47, 39, 54)",
                }}
              >
                Resources
              </a>
            </li>
          </ul>
        </div>
        <div
          className="btn"
          style={{ boxSizing: "border-box", display: "flex" }}
        >
          <div style={{ boxSizing: "border-box" }} />
          <div
            style={{
              boxSizing: "border-box",
              display: "flex",
              // marginLeft: "15px",
              // marginRight: "15px",
            }}
          >
            <a
              href="/"
              style={{
                textDecoration: "none",
                outline: "none",
                overflow: "hidden",
                minHeight: "48px",
                alignItems: "center",
                justifyContent: "center",
                width: "max-content",
                margin: "auto",
                textAlign: "center",
                color: "rgb(255, 255, 255)",
                zIndex: 11,
                position: "relative",
                backgroundColor: "rgb(209, 23, 105)",
                border: "2px solid rgb(209, 23, 105)",
                fontWeight: 700,
                boxSizing: "border-box",
                cursor: "pointer",
                minWidth: "auto",
                display: "inline-flex",
                marginRight: "0px",
                fontSize: "14px",
                letterSpacing: "1px",
                padding: "13px 30px",
                marginLeft: "auto",
                transition: "all 0.2s ease 0s",
                borderWidth: "2px",
                borderRadius: "30px",
              }}
            >
              Request Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
