import React from "react";

export default function Component() {
  return (
    <div>
      <div
        style={{
          position: "relative",
          minHeight: "1px",
          boxSizing: "border-box",
          cssFloat: "left",
          width: "100%",
          paddingLeft: "0px",
          paddingRight: "0px",
        }}
      >
        <div
          className="column-inner"
          style={{
            boxSizing: "border-box",
            width: "100%",
            paddingLeft: "0px",
            paddingRight: "0px",
            paddingTop: "0px",
          }}
        >
          <div className="wrapper" style={{ boxSizing: "border-box" }}>
            <div
              style={{
                boxSizing: "border-box",
                marginBottom: "0px",
                textAlign: "center",
              }}
            >
              <figure
                style={{
                  boxSizing: "border-box",
                  margin: "0px",
                  display: "inline-block",
                  verticalAlign: "top",
                  maxWidth: "100%",
                }}
              >
                <div
                  style={{
                    boxSizing: "border-box",
                    display: "inline-block",
                    verticalAlign: "top",
                    maxWidth: "100%",
                    borderRadius: "4px",
                    boxShadow: "none",
                  }}
                >
                  <img
                  
                    height={492}
                    width={1349}
                    alt="QaizenX - Banner"
                    sizes="(max-width: 1536px) 100vw, 1536px"
                    src="https://www.qaizenx.com/wp-content/uploads/2021/11/Make-Your-Customer-and-Employee-Experience-Exceptional-min-_3_-1.webp"
               
                    style={{
                      boxSizing: "border-box",
                      border: "0px",
                      height: "auto",
                      maxWidth: "100%",
                      verticalAlign: "top",
                      borderRadius: "4px",
                      boxShadow: "none",
                    }}
                  />
                </div>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
