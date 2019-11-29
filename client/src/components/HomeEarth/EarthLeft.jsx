import React from "react";

import russia from "./images/russie.svg";
import alaska from "./images/alaska.svg";
import canada from "./images/canada.svg";
import finland from "./images/finlande.svg";
import greenland from "./images/greenland.svg";
import iceland from "./images/iceland.svg";
import norway from "./images/norway.svg";
import spitzberg from "./images/spitzberg.svg";
import sweden from "./images/sweden.svg";
import world from "./images/world.png";
import "./HomeEarth.css";
import { Link } from "react-router-dom";

const EarthLeft = () => {
  return (
    <>
      <div className="world-left mx-auto">
        <img className="planet" src={world} alt="world" />

        <Link
          to="trips/page/1?place=俄羅斯&type=所有活動&month=所有月份"
          className="russia country"
          data-country="russia"
        >
          <img src={russia} alt="russia" />
        </Link>
        <Link
          to="trips/page/1?place=阿拉斯加州&type=所有活動&month=所有月份"
          className="alaska country"
          data-country="alaska"
        >
          <img src={alaska} alt="alaska" />
        </Link>
        <Link
          to="trips/page/1?place=加拿大&type=所有活動&month=所有月份"
          className="canada country"
          href="#3"
          data-country="canada"
        >
          <img src={canada} alt="canada" />
        </Link>
        <Link
          to="trips/page/1?place=芬蘭&type=所有活動&month=所有月份"
          className="country finland "
          href="#4"
          data-country="finland"
        >
          <img src={finland} alt="finland" />
        </Link>
        <Link
          to="trips/page/1?place=格陵蘭&type=所有活動&month=所有月份"
          className="greenland country"
          href="#5"
          data-country="greenland"
        >
          <img src={greenland} alt="greenland" />
        </Link>
        <Link
          to="trips/page/1?place=冰島&type=所有活動&month=所有月份"
          className="iceland country"
          href="#6"
          data-country="iceland"
        >
          <img src={iceland} alt="iceland" />
        </Link>
        <Link
          to="trips/page/1?place=挪威&type=所有活動&month=所有月份"
          className="norway country"
          href="#7"
          data-country="norway"
        >
          <img src={norway} alt="norway" />
        </Link>
        <Link
          to="trips/page/1?place=斯匹茲卑爾根島&type=所有活動&month=所有月份"
          className="spitzberg country"
          href="#8"
          data-country="spitzberg"
        >
          <img src={spitzberg} alt="spitzberg" />
        </Link>
        <Link
          to="trips/page/1?place=瑞典&type=所有活動&month=所有月份"
          className="sweden country"
          href="#9"
          data-country="sweden"
        >
          <img src={sweden} alt="sweden" />
        </Link>

        <div
          className="country-label russia-label"
          id="russia"
          data-country="russia"
        >
          <Link
            to="trips/page/1?place=俄羅斯&type=所有活動&month=所有月份"
            className="country-name"
          >
            俄羅斯
          </Link>
          <div className="country-progress"></div>
        </div>

        <div
          className="country-label alaska-label"
          id="alaska"
          data-country="alaska"
        >
          <Link
            className="country-name"
            to="trips/page/1?place=阿拉斯加州&type=所有活動&month=所有月份"
          >
            阿拉斯加
          </Link>
          <div className="country-progress"></div>
        </div>

        <div
          className="country-label canada-label"
          id="canada"
          data-country="canada"
        >
          <Link
            className="country-name"
            to="trips/page/1?place=加拿大&type=所有活動&month=所有月份"
          >
            加拿大
          </Link>
          <div className="country-progress"></div>
        </div>

        <div
          className="country-label finland-label"
          id="finland"
          data-country="finland"
        >
          <Link
            className="country-name"
            to="trips/page/1?place=芬蘭&type=所有活動&month=所有月份"
          >
            芬蘭
          </Link>
          <div className="country-progress"></div>
        </div>

        <div
          className="country-label greenland-label"
          id="greenland"
          data-country="greenland"
        >
          <Link
            className="country-name"
            to="trips/page/1?place=格陵蘭&type=所有活動&month=所有月份"
          >
            格陵蘭
          </Link>
          <div className="country-progress"></div>
        </div>

        <div
          className="country-label iceland-label"
          id="iceland"
          data-country="iceland"
        >
          <Link
            className="country-name"
            to="trips/page/1?place=冰島&type=所有活動&month=所有月份"
          >
            冰島
          </Link>
          <div className="country-progress"></div>
        </div>

        <div
          className="country-label norway-label"
          id="norway"
          data-country="norway"
        >
          <Link
            className="country-name"
            to="trips/page/1?place=挪威&type=所有活動&month=所有月份"
          >
            挪威
          </Link>
          <div className="country-progress"></div>
        </div>

        <div
          className="country-label spitzberg-label"
          id="spitzberg"
          data-country="spitzberg"
        >
          <Link
            className="country-name"
            to="trips/page/1?place=斯匹次卑爾根&type=所有活動&month=所有月份"
          >
            斯匹次卑爾根
          </Link>
          <div className="country-progress"></div>
        </div>

        <div
          className="country-label sweden-label"
          id="sweden"
          data-country="sweden"
        >
          <Link
            className="country-name"
            to="trips/page/1?place=瑞典&type=所有活動&month=所有月份"
          >
            瑞典
          </Link>
          <div className="country-progress"></div>
        </div>
      </div>
    </>
  );
};

export default EarthLeft;
