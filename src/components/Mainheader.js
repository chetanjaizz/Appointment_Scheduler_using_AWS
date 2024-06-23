
import './../App.css';




import React from 'react';
import { IoMdSearch } from 'react-icons/io';
import { FaRegUser } from 'react-icons/fa';
import { GrFavorite } from 'react-icons/gr';
import { RiShoppingBasketLine } from 'react-icons/ri';

function Mainheader() {
  return (
    <header className="p-3 bg-transparent text-white">
      <div className="container" style={{marginLeft : "1px" , marginRight : "1px"}}>
        <div className="d-flex flex-wrap align-items-center justify-content-between">
          <a href="/" className="home d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none" style={{ color: 'red !important', fontWeight: 'bold !important' }}>
            <h3 style={{ color: 'red', fontWeight: 'bold', paddingTop: '8px',  }}>GO FOOD</h3>
          </a>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <h7 className="drop">Home</h7>
            </a>
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <h7 className="drop">Groceries</h7>
            </a>
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <h7 className="drop">Pages</h7>
            </a>
          </ul>

          <div >
            <a href="#" className="d-inline-flex focus-ring py-1 px-2 text-decoration-none">
              <IoMdSearch className="icc" style={{ color: 'white' }} />
            </a>
            <a href="#" className="d-inline-flex focus-ring py-1 px-2 text-decoration-none ">
              <FaRegUser className="icc" style={{ color: 'white' }} />
            </a>
            <a href="#" className="d-inline-flex focus-ring py-1 px-2 text-decoration-none ">
              <GrFavorite className="icc" style={{ color: 'white' }} />
            </a>
            <a href="#" className="d-inline-flex focus-ring py-1 px-2 text-decoration-none ">
              <RiShoppingBasketLine className="icc" style={{ color: 'white' }} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Mainheader;
