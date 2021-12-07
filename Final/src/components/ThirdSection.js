import React from "react";
import FirstImage from "../assets/Data-driven-decisions.png";

export default function ThirdSection() {
  return (
    <div>
      <div
        style={{
          boxSizing: "border-box",
          position: "relative",
          marginLeft: "0px",
          marginRight: "0px",
          display: "block",
        }}
      >
        <div
          className="first"
          style={{
            position: "relative",
            minHeight: "1px",
            boxSizing: "border-box",
            cssFloat: "left",
            width: "33.3333%",
            paddingLeft: "0px",
            paddingRight: "0px",
          }}
        >
          <div
            style={{
              boxSizing: "border-box",
              width: "100%",
              paddingRight: "50px",
              paddingLeft: "0px",
            }}
          >
            <div style={{ boxSizing: "border-box" }}>
              <header
                style={{
                  boxSizing: "border-box",
                  display: "block",
                  textAlign: "left",
                  position: "relative",
                  minHeight: "1px",
                  width: "100%",
                  animationDuration: "0.6s",
                  animationFillMode: "both",
                  opacity: 1,
                  paddingRight: "0px",
                  cssFloat: "none",
                  animationDelay: "0.2s",
                  animationName: "kd-fadeIn",
                  paddingTop: "22px",
                  paddingLeft: "20px",
                }}
              >
                <h2
                  style={{
                    boxSizing: "border-box",
                    margin: "0px 0px 20px",
                    letterSpacing: "-0.03em",
                    marginTop: "0px",
                    color: "rgb(47, 39, 54)",
                    fontWeight: 500,
                    fontFamily: "Poppins",
                    marginBottom: "20px",
                    fontSize: "40px",
                    lineHeight: "50px",
                  }}
                >
                  Improving made simple with the right strategy!
                </h2>
              </header>
            </div>
          </div>
        </div>
        <div
          className="second"
          style={{
            position: "relative",
            minHeight: "1px",
            boxSizing: "border-box",
            cssFloat: "left",
            width: "33.3333%",
            paddingLeft: "0px",
            paddingRight: "0px",
          }}
        >
          <div
            className="second"
            style={{
              boxSizing: "border-box",
              paddingLeft: "15px",
              paddingRight: "15px",
              width: "100%",
            }}
          >
            <div className="  wrapper" style={{ boxSizing: "border-box" }}>
              <h6
                className="second"
                style={{
                  boxSizing: "border-box",
                  opacity: 1,
                  animationDuration: "1s",
                  animationFillMode: "both",
                  animationName: "fadeIn",
                  margin: "0px 0px 20px",
                  fontWeight: 400,
                  marginTop: "0px",
                  marginBottom: "20px",
                  color: "rgb(47, 39, 54)",
                  fontFamily: "Poppins",
                  lineHeight: "25px",
                  fontSize: "16px",
                  textAlign: "left",
                  paddingTop: "20px",
                }}
              >
                “If you can’t measure it, you can’t improve it” – Lord Kelvin
              </h6>
              <h6
                className="second"
                style={{
                  boxSizing: "border-box",
                  opacity: 1,
                  animationDuration: "1s",
                  animationFillMode: "both",
                  animationName: "fadeIn",
                  margin: "0px 0px 20px",
                  fontWeight: 400,
                  marginTop: "0px",
                  marginBottom: "20px",
                  color: "rgb(47, 39, 54)",
                  fontFamily: "Poppins",
                  lineHeight: "25px",
                  fontSize: "16px",
                  textAlign: "left",
                }}
              >
                Get hold of your business by understanding the pulse of your
                customers and employees. Make data-driven decisions for
                continuous improvements to drive growth.
              </h6>
            </div>
          </div>
        </div>
        <div
          className="second"
          style={{
            position: "relative",
            minHeight: "1px",
            boxSizing: "border-box",
            cssFloat: "left",
            width: "33.3333%",
            paddingLeft: "0px",
            paddingRight: "0px",
          }}
        >
          <div
            className=" column-inner"
            style={{
              boxSizing: "border-box",
              paddingLeft: "15px",
              paddingRight: "15px",
              width: "100%",
            }}
          >
            <div className="  wrapper" style={{ boxSizing: "border-box" }}>
              <div
                className="  single_image   content_element  align_center"
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
                    display: "block",
                    verticalAlign: "top",
                    maxWidth: "100%",
                  }}
                >
                  <div
                    style={{
                      boxSizing: "border-box",
                      display: "block",
                      verticalAlign: "top",
                      maxWidth: "100%",
                    }}
                  >
                    <img
                      height={221}
                      width={221}
                      alt="Data driven decisions | QaizenX"
                      sizes="(max-width: 221px) 100vw, 221px"
                      src={FirstImage}
                      style={{
                        boxSizing: "border-box",
                        border: "0px",
                        height: "auto",
                        maxWidth: "100%",
                        verticalAlign: "top",
                      }}
                    />
                  </div>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
