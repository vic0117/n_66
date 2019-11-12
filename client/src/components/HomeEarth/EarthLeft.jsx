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


const EarthLeft = () => {
    return ( 
        <>
            <div className="world-left mx-auto">
                <img className="planet" src={world} alt="world" />

                <a className="russia country" href="#" data-country="russia">
                  <img src={russia} alt="russia" />
                </a>
                <a className="alaska country" href="#" data-country="alaska">
                  <img src={alaska} alt="alaska" />
                </a>
                <a className="canada country" href="#" data-country="canada">
                  <img src={canada} alt="canada" />
                </a>
                <a className="country finland " href="#" data-country="finland">
                  <img src={finland} alt="finland" />
                </a>
                <a className="greenland country" href="#" data-country="greenland">
                  <img src={greenland} alt="greenland" />
                </a>
                <a className="iceland country" href="#" data-country="iceland">
                  <img src={iceland} alt="iceland" />
                </a>
                <a className="norway country" href="#" data-country="norway">
                  <img src={norway} alt="norway" />
                </a>
                <a className="spitzberg country" href="#" data-country="spitzberg">
                  <img src={spitzberg} alt="spitzberg" />
                </a>
                <a className="sweden country" href="#" data-country="sweden">
                  <img src={sweden} alt="sweden" />
                </a>

                <div className="country-label russia-label" id="russia" data-country="russia">
                  <a className="country-name" href="#">俄羅斯</a>
                  <div className="country-progress"></div>
                </div>

                <div className="country-label alaska-label" id="alaska" data-country="alaska">
                  <a className="country-name" href="#">阿拉斯加</a>
                  <div className="country-progress"></div>
                </div>

                <div className="country-label canada-label" id="canada" data-country="canada">
                  <a className="country-name" href="#">加拿大</a>
                  <div className="country-progress"></div>
                </div>

                <div className="country-label finland-label" id="finland" data-country="finland">
                  <a className="country-name" href="#">芬蘭</a>
                  <div className="country-progress"></div>
                </div>

                <div className="country-label greenland-label" id="greenland" data-country="greenland">
                  <a className="country-name" href="#">格陵蘭</a>
                  <div className="country-progress"></div>
                </div>

                <div className="country-label iceland-label" id="iceland" data-country="iceland">
                  <a className="country-name" href="#">冰島</a>
                  <div className="country-progress"></div>
                </div>

                <div className="country-label norway-label" id="norway" data-country="norway">
                  <a className="country-name" href="#">挪威</a>
                  <div className="country-progress"></div>
                </div>

                <div className="country-label spitzberg-label" id="spitzberg" data-country="spitzberg">
                  <a className="country-name" href="#">斯匹次卑爾根</a>
                  <div className="country-progress"></div>
                </div>

                <div className="country-label sweden-label" id="sweden" data-country="sweden">
                  <a className="country-name" href="#">瑞典</a>
                  <div className="country-progress"></div>
                </div>
              </div>
        </>
    );
}
 
export default EarthLeft;