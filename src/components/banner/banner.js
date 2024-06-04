import React, { useEffect, useState } from "react";
import "./banner.css";

const Banner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBanner(true);
    }, 4000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {showBanner && (
        <div className="banner">
          <div
            style={{
              backgroundColor: "#fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              borderRadius:"18px",
              padding:"16px"
            }}
          >
            <p style={{
                  fontSize: "28px",
                  letterSpacing: "2.73px",
                  lineHeight: "30px",
                  fontFamily: "Space Grotesk",
                  fontWeight: "500",
                  textAlign: "center",
                }}>Did you experience a similar sentiment while conducting research in a particular domain?</p>
            <img style={{width:"100%",borderRadius:"8px"}} src="./assets/images/frustratedStudent.png" alt="" />
            <button  style={{
                    width: "67%",
                    textAlign: "center",
                    background: "#07e9a1",
                    boxShadow:
                      "rgba(96, 97, 112, 0.1) 0px 2px 4px 0px, rgba(40, 41, 61, 0.04) 0px 0px 1px 0px",
                    padding: "10px 24px",
                    fontWeight: "600",
                    fontSize: "18px",
                    marginBottom: "18px",
                    borderRadius: "8px",
                    marginTop: "28px",
                    border:"0"
                  }} onClick={() => setShowBanner(false)}>Yes</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Banner;
