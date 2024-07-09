import {
  MDBBadge,
  MDBContainer,
  MDBIcon,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarLink,
} from "mdb-react-ui-kit";
import React from "react";
import { useSelector } from "react-redux";
const NavBar = () => {
  const { totalCount } = useSelector((state) => state.cart);
  return (
    <MDBNavbar expand="lg" dark bgColor="primary">
      <MDBContainer>
        <MDBNavbarBrand
          style={{
            alignItems: "center",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          Shopping Cart{""}
        </MDBNavbarBrand>
        <MDBNavbarLink>
          <a href="/" className="mx-3">
            <MDBIcon fas icon="shopping-cart" size="lg" color="white">
              <MDBBadge
                pill
                color="danger"
                notification
                style={{ fontSize: "12px" }}
              >
                {totalCount}
              </MDBBadge>
            </MDBIcon>
          </a>
        </MDBNavbarLink>
      </MDBContainer>
    </MDBNavbar>
    // <nav className="navbar navbar-expand-lg bg-body-tertiary">
    //   <div className="container-fluid">

    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarSupportedContent"
    //       aria-controls="navbarSupportedContent"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    //         <li className="nav-item">
    //           <a className="nav-link active" aria-current="page" href="/">
    //             Home
    //           </a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="/">
    //             Link
    //           </a>
    //         </li>
    //         <i className="fa-solid fa-cart-shopping">{totalCount}</i>

    //       </ul>
    //     </div>
    //   </div>
    // </nav>
  );
};

export default NavBar;
