import React from "react";
import css from "./Footer.module.css";
import {
  InboxIcon,
  PhoneIcon,
  LocationMarkerIcon,
  LoginIcon,
  UsersIcon,
  LinkIcon,
  UserIcon,
} from "@heroicons/react/outline";
import Logo from "../../assets/logo.png";
const Footer = () => {
  return (
    <div className={css.cFooterWrapper}>
      <hr />
      <div className={css.cFooter}>
        <div className={css.clogo}>
          <img src={Logo} alt="" />
          <span>Dr.Swathy's</span>
        </div>
        <div className={css.block}>
          <div className={css.detail}>
            <span>Contact Us</span>
            <span className={css.pngLine}>
              <LocationMarkerIcon className={css.icon} />
              <span>111 north avenue Orlando</span>
            </span>
            <span className={css.pngLine}>
              {""}
              <PhoneIcon className={css.icon} />
              <a href="tel:+917907869922">7907869922</a>
            </span>
            <span className={css.pngLine}>
              {""}
              <InboxIcon className={css.icon} />
              <a href="mailto:sujithkumar.sk175@gmail.com">
                support@Dr.Swathy.com
              </a>
            </span>
          </div>
        </div>

        <div className={css.block}>
          <div className={css.detail}>
            <span>Company</span>
            <span className={css.pngLine}>
              <UserIcon className={css.icon} />
              <a href="/about">
                <p>About Us</p>
              </a>
            </span>
          </div>
        </div>

        <div className={css.block}>
          <div className={css.detail}>
            <span>Resources</span>
            <span className={css.pngLine}>
              <LinkIcon className={css.icon} />

              <p>Safety Privacy $ Terms</p>
            </span>
          </div>
        </div>
      </div>
      <div className={css.copyRight}>
        <span>Copyright @2023 Dr.Swathy's, Inc.</span>
        <span>All rights reserved</span>
      </div>
    </div>
  );
};

export default Footer;
