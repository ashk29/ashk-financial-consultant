import React from "react";
import "./VideoPage.css";

const VideoList = ["videos/birla_insurance.mp4",
    "videos/insurance.mp4", "videos/star_insurance.mp4"
]

export default function Videos() {
    return (
        <>
            <hr className="page-line"></hr>
            <h2 className="page-heading"> Videos</h2>
            <div className="video-page-container">
        {VideoList.map((video, index) => (
            //   <WhyBanner img_path={image} img_txt={BannerText[index]} />
            <video className="video" controls>
                <source src={video} type="video/mp4"/>
    Your browser does not support the video tag.
  </video>
        ))}
      </div>

        </>
    );
}