import React from "react";
import photo_1 from "../assets/photo1.jpg";
import photo_2 from "../assets/photo2.jpg";
import photo_3 from "../assets/photo3.jpg";
import photo_4 from "../assets/photo4.jpg";
import { FaLocationArrow, FaFacebook, FaPinterestP } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { BsInstagram } from "react-icons/bs";
import "./home.css";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="home-container">
      <section className="section-one">
        <img className="photo-one-1" src={photo_1} alt="Image" />
        <img className="photo-one-2" src={photo_2} alt="Image" />
        <img className="photo-one-3" src={photo_3} alt="Image" />
        <button className="shop-btn">Shop Now</button>
      </section>
      <section className="section-two">
        <div className="photo-two-4-1">
          <img src={photo_4} alt="Image" />
          <button className="sweatshirts-btn">Sweatshirts</button>
        </div>
        <div className="photo-two-2">
          <img src={photo_2} alt="Image" />
          <button className="hoodies-btn">Hoodies</button>
        </div>
        <div className="photo-two-4-2">
          <img src={photo_4} alt="Image" />
          <button className="pair-btn">Pair</button>
        </div>

        <div className="text-section-two">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </section>
      <section className="section-three">
        <div className="section-three-header">
          <h1>SALE</h1>
          <h1>SALE</h1>
          <h1>SALE</h1>
          <h1>SALE</h1>
          <h1>SALE</h1>
        </div>
        <br />
        <div className="photo-three">
          <div className="photo-three-4-1">
            <div className="img-three-container">
              <div>15% OFF</div>
            </div>
            <h1>LOREM IPSUM</h1>
            <p>Lorem ipsum</p>
          </div>
          <div className="photo-three-4-1">
            <div className="img-three-container">
              <div>15% OFF</div>
            </div>
            <h1>LOREM IPSUM</h1>
            <p>Lorem ipsum</p>
          </div>
          <div className="photo-three-4-1">
            <div className="img-three-container">
              <div>15% OFF</div>
            </div>
            <h1>LOREM IPSUM</h1>
            <p>Lorem ipsum</p>
          </div>
          <div className="photo-three-4-1">
            <div className="img-three-container">
              <div>15% OFF</div>
            </div>
            <h1>LOREM IPSUM</h1>
            <p>Lorem ipsum</p>
          </div>
          <div className="photo-three-4-1">
            <div className="img-three-container">
              <div>15% OFF</div>
            </div>
            <h1>LOREM IPSUM</h1>
            <p>Lorem ipsum</p>
          </div>
          <div className="photo-three-4-1">
            <div className="img-three-container">
              <div>15% OFF</div>
            </div>
            <h1>LOREM IPSUM</h1>
            <p>Lorem ipsum</p>
          </div>
          <div className="photo-three-4-1">
            <div className="img-three-container">
              <div>15% OFF</div>
            </div>
            <h1>LOREM IPSUM</h1>
            <p>Lorem ipsum</p>
          </div>
          <div className="photo-three-4-1">
            <div className="img-three-container">
              <div>15% OFF</div>
            </div>
            <h1>LOREM IPSUM</h1>
            <p>Lorem ipsum</p>
          </div>
          <div className="more-btn-container">
            <button className="more-btn">More</button>
          </div>
        </div>
      </section>
      <footer className="footer-section">
        <span className="footer-logo">
          <p>LOGO</p>
        </span>
        <div className="business-detail">
          <FaLocationArrow className="location detail" />
          <p className="location-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <MdPhoneIphone className="contact detail" />
          <p className="contact-text">Lorem ipsum</p>
          <HiOutlineMail className="email detail" />
          <p className="email-text">Lorem ipsum dolor sit amet</p>
        </div>
        <div className="social-media">
          <Link>
            <span>
              <FaFacebook className="facebook media" />
            </span>
          </Link>
          <Link>
            <span>
              <FaPinterestP className="pinterest media" />
            </span>
          </Link>
          <Link>
            <span>
              <BsInstagram className="instagram media" />
            </span>
          </Link>
        </div>
        <div className="footer-navbar-container">
          <div className="footer-navbar-collection">
            <h2>COLLECTION</h2>
            <Link>Lorem ipsum</Link>
            <Link>Lorem ipsum</Link>
            <Link>Lorem ipsum</Link>
            <Link>Lorem ipsum</Link>
            <Link>Lorem ipsum</Link>
            <Link>Lorem ipsum</Link>
          </div>
          <div className="footer-navbar-information">
            <h2>INFORMATION</h2>
            <Link>Lorem ipsum</Link>
            <Link>Lorem ipsum</Link>
            <Link>Lorem ipsum</Link>
            <Link>Lorem ipsum</Link>
            <Link>Lorem ipsum</Link>
            <Link>Lorem ipsum</Link>
          </div>
          <div className="footer-navbar-more">
            <h2>MORE</h2>
            <Link>Lorem ipsum</Link>
            <Link>Lorem ipsum</Link>
            <Link>Lorem ipsum</Link>
            <Link>Lorem ipsum</Link>
            <Link>Lorem ipsum</Link>
            <Link>Lorem ipsum</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};
