import React from "react";
import { useState } from "react";
import Gallery from "../Gallery/Gallery";
import thumb1 from "../../images/gallery/thumbnails/thumb1.jpg";
import thumb2 from "../../images/gallery/thumbnails/thumb2.jpg";
import thumb3 from "../../images/gallery/thumbnails/thumb3.jpg";
import thumb4 from "../../images/gallery/thumbnails/thumb4.jpg";
import thumb5 from "../../images/gallery/thumbnails/thumb5.jpg";
import moreIcon from "../../images/more-icon.svg";

export default function Examples () {

    const [galleryIsOpen, setGalleryIsOpen] = useState(false);

    return (
        <div className="examples">
            <div className="examples__wrapper">
                <h3 className="h3">Примеры нашей работы</h3>
                <ul className="examples__preview-imgs" onClick={()=>setGalleryIsOpen(true)}>
                    <li className="examples__item">
                        <img src={thumb1} className="examples__img" alt=""/>
                        <p className="p-small p-small--position-centre">Замена дисплея Samsung A50</p>
                    </li>
                    <li className="examples__item">
                        <img src={thumb2} className="examples__img" alt=""/>
                        <p className="p-small p-small--position-centre">Замена корпуса iPhone 13 Pro</p>
                    </li>
                    <li className="examples__item">
                        <img src={thumb3} className="examples__img" alt=""/>
                        <p className="p-small p-small--position-centre">Замена дисплея iPhone 11</p>
                    </li>
                    <li className="examples__item">
                        <img src={thumb4} className="examples__img" alt=""/>
                        <p className="p-small p-small--position-centre">Замена дисплея iPhone SE2022</p>
                    </li>
                    <li className="examples__item">
                        <img src={thumb5} className="examples__img" alt=""/>
                        <p className="p-small p-small--position-centre">Замена крышки iPhone 13 Pro</p>
                    </li>
                    <li className="examples__item examples__item--more">
                        <img src={moreIcon} className="examples__img examples__img--more" alt=""/>
                        <p className="p-small p-small--position-centre">Больше примеров</p>
                    </li>
                </ul>
                <Gallery isOpen={galleryIsOpen} setIsOpen={setGalleryIsOpen} />
            </div>
        </div>
    )
}