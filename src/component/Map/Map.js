import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Map.css";

export default function Map() {
  AOS.init();
  return (
    <section className="map">
      <div className="container">
        <div className="mapouter">
          <div className="gmap_canvas">
            <iframe
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-delay="200"
              className="map__ifr"
              height="500"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=300%20%C4%90%C6%B0%E1%BB%9Dng%203/2,%20Ph%C6%B0%E1%BB%9Dng%2012,%20Qu%E1%BA%ADn%2010,%20Th%C3%A0nh%20ph%E1%BB%91%20H%E1%BB%93%20Ch%C3%AD%20Minh&t=&z=15&ie=UTF8&iwloc=&output=embed"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
            ></iframe>
            <a href="https://www.whatismyip-address.com"></a>
            <br />
            <a href="https://www.embedgooglemap.net"></a>
          </div>
        </div>
      </div>
    </section>
  );
}
