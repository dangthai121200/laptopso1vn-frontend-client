import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

import './Categories.css';

export default function Categories(){

    AOS.init();

    function  btnUp1(){
        const cateContent = document.querySelectorAll('.cateContent');
       const cateContentHeader= document.querySelectorAll('.cateContent_header');
       const cateContentDescription= document.querySelectorAll('.cateContent_header_description');
       
           if(cateContent[0].style.height == '52.4rem'){
               cateContent[0].style.height = '0';
               cateContentHeader[0].style.opacity="0";
               cateContentHeader[1].style.opacity="0";
               cateContentDescription[0].style.opacity="0";
               cateContentDescription[1].style.opacity="0";
           }
           else{
               cateContent[0].style.height = '52.4rem';
               cateContentHeader[0].style.opacity="1";
               cateContentHeader[1].style.opacity="1";
               cateContentDescription[0].style.opacity="1";
               cateContentDescription[1].style.opacity="1";
           }
       }
       // categories script
       function btnUp2(){
           const cateContent = document.querySelectorAll('.cateContent');
           const cateContentHeader= document.querySelectorAll('.cateContent_header');
           const cateContentDescription= document.querySelectorAll('.cateContent_header_description');
       
           if(cateContent[1].style.height == '52.4rem'){
               cateContent[1].style.height = '0';
               cateContentHeader[2].style.opacity="0";
               cateContentHeader[3].style.opacity="0";
               cateContentDescription[2].style.opacity="0";
               cateContentDescription[3].style.opacity="0";
           }
           else{
               cateContent[1].style.height = '52.4rem';
               cateContentHeader[2].style.opacity="1";
               cateContentHeader[3].style.opacity="1";
               cateContentDescription[2].style.opacity="1";
               cateContentDescription[3].style.opacity="1";
           }
       }
       function btnUp3(){
           const cateContent = document.querySelectorAll('.cateContent');
           const cateContentHeader= document.querySelectorAll('.cateContent_header');
           const cateContentDescription= document.querySelectorAll('.cateContent_header_description');
           if(cateContent[2].style.height == '52.4rem'){
           
               cateContent[2].style.height = '0';
               cateContentHeader[4].style.opacity="0";
               cateContentHeader[5].style.opacity="0";
               cateContentDescription[4].style.opacity="0";
               cateContentDescription[5].style.opacity="0";
           }
           else{
               cateContent[2].style.height = '52.4rem';
               cateContentHeader[4].style.opacity="1";
               cateContentHeader[5].style.opacity="1";
               cateContentDescription[4].style.opacity="1";
               cateContentDescription[5].style.opacity="1";
           }
       }
    return (
        // <!-- Cagories -->
<section className="categories">
    <div className="container">
        <h1 data-aos="fade-down"  data-aos-duration="2000"  data-aos-delay="200" className="cateHeader text-center animate-left" id="categories">DANH M???C S???N PH???M</h1>
        <div className="row">
            <div data-aos="fade-right"  data-aos-duration="2000"  data-aos-delay="400" className="col-xl-4 col-sm-12 col-12 ">
                <div className="cateImage">
                    <div className="cateImage_overlay">
                        <h2 className="cateImage_title">H???C T???P <br/> V??N PH??NG</h2>
                        <a href="#categories__work" className="cateImage_subtitle">
                            <i className="fa-solid fa-laptop-code"></i>
                            <h3 className="cateImage_subtitle_content">Xem ngay</h3>
                        </a>
                    </div>
                </div>
                <div className="cateContent">
                    <h2 className="cateContent_header">Ph?? h???p cho:</h2>
                    <p className="cateContent_header_description">
                        H???c sinh, sinh vi??n
                        Nh??n vi??n v??n ph??ng
                    </p>
                    <h2 className="cateContent_header">??u ??i???m:</h2>
                    <p className="cateContent_header_description">
                        ????p ???ng nhu c???u l??m vi???c v?? h???c t???p, gi???i tr?? ????n gi???n
                        Video, audio, word, excel, power point, game nh???,....
                        Gi?? nh???
                    </p>
                    <button className="btnUp" onClick={btnUp1}>
                        <i className="fa-solid fa-chevron-up"></i>
                    </button>
                </div>
            </div>
            <div data-aos="fade-up"  data-aos-duration="2000"  data-aos-delay="600" className="col-xl-4 col-sm-12 col-12 col-sm-12 ">
                <div className="cateImage cateImage--2">
                    <div className="cateImage_overlay">
                        <h2 className="cateImage_title cateImage_title--2">????? H???A <br/> GAMING</h2>
                        <a href="#categories_gaming" className="cateImage_subtitle">
                            <i className="fa-solid fa-gamepad"></i>
                            <h3 className="cateImage_subtitle_content">Xem ngay</h3>
                        </a>
                    </div>
                </div>
                <div className="cateContent cateContent--2">
                    <h2 className="cateContent_header">Ph?? h???p cho:</h2>
                    <p className="cateContent_header_description">
                        Game th???
                        Anh ch??? em thi???t k??? ????? h???a

                    </p>
                    <h2 className="cateContent_header">??u ??i???m:</h2>
                    <p className="cateContent_header_description">
                        ????p ???ng nhu c???u l??m vi???c v?? h???c t???p, gi???i tr?? cao
                        Ps, Ai, Pr, Xd, Id, Blender, 3DMax, game c???u h??nh cao,....
                        H??? tr??? card ????? h???a
                    </p>
                    <button className="btnUp btnUp2" onClick={btnUp2}>
                        <i className="fa-solid fa-chevron-up"></i>
                    </button>
                </div>
            </div>
            <div data-aos="fade-left"  data-aos-duration="2000"  data-aos-delay="800" className="col-xl-4 col-sm-12 col-12 ">
                <div className="cateImage cateImage--3">
                    <div className="cateImage_overlay">
                        <h2 className="cateImage_title cateImage_title--3">M???NG NH??? <br/> CAO C???P</h2>
                        <a href="#categories__high" className="cateImage_subtitle">
                            <i className="fa-brands fa-apple"></i>
                            <h3 className="cateImage_subtitle_content">Xem ngay</h3>
                        </a>
                    </div>
                </div>
                <div className="cateContent cateContent--3">
                    <h2 className="cateContent_header">Ph?? h???p cho:</h2>
                    <p className="cateContent_header_description">
                        Doanh nh??n
                        Ng?????i ??am m?? c??ng ngh???
                    </p>
                    <h2 className="cateContent_header">??u ??i???m:</h2>
                    <p className="cateContent_header_description">
                        ????p ???ng nhu c???u l??m vi???c v?? h???c t???p, gi???i tr??, nghi??n c???u
                        ?????ng c???p, sang tr???ng
                        C???u h??nh kh???ng ????p ???ng nhi???u nhu c???u nghi??n c???u c??ng ngh???
                    </p>
                    <button className="btnUp btnUp3" onClick={btnUp3}>
                        <i className="fa-solid fa-chevron-up"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</section>
    )
}