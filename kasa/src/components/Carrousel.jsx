import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export function Carrousel({images}) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    let styleCurrentImage = {backgroundImage: `url(${images[currentImageIndex]})`};

    const limit = (pNumber) => {
        let newPos = currentImageIndex + pNumber;

        if (newPos < 0) {newPos = images.length - 1}
        else if (newPos >= images.length) {newPos = 0}

        setCurrentImageIndex(newPos);
    }

    return <div className="carrousel" style={styleCurrentImage}>
        {images.length > 1 && <FontAwesomeIcon icon={faChevronLeft} className="carrousel__previous" onClick={() => {limit(-1)}} />}
        <span className="carrousel__navInfo">{currentImageIndex + 1}/{images.length}</span>
        {images.length > 1 && <FontAwesomeIcon icon={faChevronRight} className="carrousel__next" onClick={() => {limit(1)}} />}
    </div>
}