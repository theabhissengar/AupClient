// import React from "react";
// import MobileBottomNav from "../../components/MobileBottomNav/MobileBottomNav";
// import appLogo from "../../assets/icons/app-logo.svg";
// const HomeLayout = ({ children }) => {
//   return (
//     <>
//       <div>
//         <div
//           style={{
//             background: "#07e9a1",
//             height: "60px",
//             width: "100%",
//             borderRadius: "0px 0px 10px 10px",
//             position: "fixed",
//             top: "0",
//             zIndex: "100",
//           }}
//         >
//           <p
//             align="center"
//             style={{
//               marginBottom: "0px",
//               fontSize: "48px",
//               fontFamily: "Bungee",
//               fontWeight: "600",
//             }}
//           >
//             Aupdeshik
//           </p>
//           {/* <img style={{ width: "50px", height: "50px" }} src={appLogo} /> */}
//         </div>
//       </div>
//       {children}
//       <div style={{ position: "fixed", bottom: "0", width: "100%" }}>
//         <MobileBottomNav />
//       </div>
//     </>
//   );
// };

// export default HomeLayout;







// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import MobileBottomNav from '../../components/MobileBottomNav/MobileBottomNav';
// import appLogo from '../../assets/icons/app-logo.svg';

// const HomeLayout = ({ children }) => {
//   const navigate = useNavigate();

//   const handleBackClick = () => {
//     navigate(-1);
//   };

//   return (
//     <>
//       <div>
//         <div
//           style={{
//             background: '#07e9a1',
//             height: '60px',
//             width: '100%',
//             borderRadius: '0px 0px 10px 10px',
//             position: 'fixed',
//             top: '0',
//             zIndex: '100',
//             display: 'flex',
//             alignItems: 'center'
//           }}
//         >
//           <ArrowBackIcon
//             onClick={handleBackClick}
//             style={{
//               cursor: 'pointer',
//               marginLeft: '10px',
//               color: 'black',
//               fontSize: '30px',
//               fontWeight:"600"
//             }}
//           />
//           <p
//             align="center"
//             style={{
//               flex: 1,
//               marginBottom: '0px',
//               fontSize: '48px',
//               fontFamily: 'Bungee',
//               fontWeight: '600',
//               color: 'black',
//             }}
//           >
//             Aupdeshik
//           </p>
//           {/* <img style={{ width: '50px', height: '50px' }} src={appLogo} /> */}
//         </div>
//       </div>
//       <div style={{ marginTop: '0px' }}>{children}</div> {/* Add marginTop to prevent content overlap */}
//       <div style={{ position: 'fixed', bottom: '0', width: '100%' }}>
//         <MobileBottomNav />
//       </div>
//     </>
//   );
// };

// export default HomeLayout;


import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MobileBottomNav from '../../components/MobileBottomNav/MobileBottomNav';
import appLogo from '../../assets/icons/app-logo.svg';

const HomeLayout = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBackClick = () => {
    navigate(-1);
  };

  // List of routes where the back arrow should be invisible
  const hiddenBackArrowPaths = ['/', '/notes', '/dashboard', '/goals', 'profile'];

  const shouldHideBackArrow = hiddenBackArrowPaths.includes(location.pathname);

  return (
    <>
      <div>
        <div
          style={{
            background: '#07e9a1',
            height: '60px',
            width: '100%',
            borderRadius: '0px 0px 10px 10px',
            position: 'fixed',
            top: '0',
            zIndex: '100',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          {!shouldHideBackArrow && (
            <ArrowBackIcon
              onClick={handleBackClick}
              style={{
                cursor: 'pointer',
                marginLeft: '10px',
                color: 'black',
                fontSize: '30px'
              }}
            />
          )}
          <p
            align="center"
            style={{
              flex: 1,
              marginBottom: '0px',
              fontSize: '48px',
              fontFamily: 'Bungee',
              fontWeight: '600',
              color: 'black',
            }}
          >
            Aupdeshik
          </p>
          {/* <img style={{ width: '50px', height: '50px' }} src={appLogo} /> */}
        </div>
      </div>
      <div style={{ marginTop: '0px' }}>{children}</div> {/* Add marginTop to prevent content overlap */}
      <div style={{ position: 'fixed', bottom: '0', width: '100%' }}>
        <MobileBottomNav />
      </div>
    </>
  );
};

export default HomeLayout;

