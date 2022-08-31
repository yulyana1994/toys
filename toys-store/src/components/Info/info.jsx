import React from "react";
import s from "./info.module.css";

const Info = () => {
  return (
    <div>
      <ul className={s.socList}>
        <li>
          <a
            href="https://www.instagram.com/yulianna.shulzhenko/"
            target="_blank"
          >
            <img
              className={s.logoinst}
              src="/assets/instagram.png"
              alt="inst"
            />
          </a>
        </li>
        <li>
          <a href="tel:+375292450360" className={s.number}>
            Позвони нам +375 (29) 245-03-60
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Info;
