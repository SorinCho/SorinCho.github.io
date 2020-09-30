import React, { Component } from "react";
import Chameleon from "../resources/GalleryPage/chameleon.png";
import Dog from "../resources/GalleryPage/dog2.png";
import Croc from "../resources/GalleryPage/croc.png";
import Island from "../resources/GalleryPage/island.png";
import Pastels from "../resources/GalleryPage/pastels.png";
import "../css/GalleryPage.css";
import { Link } from "react-router-dom";
class GalleryPage extends Component {
  render() {
    return (
      <div class="page-wrapper">
        <div class="page" id="gallery-page">
          <section class='page-content'>
            {/* <h2>GALLERY</h2> */}
            <div id="gallery">
              <div class="wallpaper-container">
                <img class="wallpaper" alt="chameleon" src={Chameleon} />
              </div>
              <div class="wallpaper-container">
                <img class="wallpaper" alt="dog" src={Dog} />
              </div>
              <div class="wallpaper-container">
                <img class="wallpaper" alt="island" src={Island} />
              </div>
              <div class="wallpaper-container">
                <img class="wallpaper" alt="pastels" src={Pastels} />
              </div>

              {/* <img alt="croc" src={Croc} /> */}
            </div>

          </section>
          <Link to="/" class="back-link">
            Main Menu
                    </Link>
        </div>
      </div>
    );
  }
}
export default GalleryPage;
