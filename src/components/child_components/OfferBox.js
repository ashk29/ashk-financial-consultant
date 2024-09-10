import React from "react";
import './OfferBox.css';

const OfferBox=({ offerText})=> {
    return (
        <button className="btn">
        {offerText}
        </button>
    )
}

export default OfferBox;




