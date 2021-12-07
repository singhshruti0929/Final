import React from "react";

export default function Copyright() {
  return (
    <div>
      <div
     
        style={{
          boxSizing: "border-box",
          padding: "22px 0px",
          borderTop: "1px solid rgba(132, 132, 132, 0.17)",
          marginTop: "0px",
          width: "100%",
          backgroundColor: "rgb(47, 39, 54)",
          color: "rgb(255, 255, 255)",
        }}
      >
        <div
          className="container"
          style={{
            boxSizing: "border-box",
            marginRight: "auto",
            marginLeft: "auto",
            width: "1240px",
            position: "relative",
            padding: "0px 15px",
            paddingRight: "15px",
            paddingLeft: "15px",
            textAlign: "center",
          }}
        >
          <span
            style={{
              boxSizing: "border-box",
              opacity: 1,
              marginRight: "25px",
              lineHeight: "25px",
            }}
          >
            {"© Copyright 2021 |"}
            <a
              href="/"
              style={{
                boxSizing: "border-box",
                backgroundColor: "transparent",
                outline: "0px",
                textDecoration: "none",
                opacity: 1,
                lineHeight: "25px",
                transition: "all 0.2s ease 0s",
                margin: "0px",
                color: "inherit",
                marginRight: "0px",
              }}
            >
              QaizenX
            </a>{" "}
          </span>
        </div>
      </div>
      
    </div>
  );
}
