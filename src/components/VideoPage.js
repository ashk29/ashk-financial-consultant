import React from "react";
import "./VideoPage.css";

const VideoList = [
  "videos/SIP.mp4",
  "videos/birla_insurance.mp4",
  "videos/insurance.mp4",
  "videos/star_insurance.mp4",
  "videos/investment_secret.mp4",
];

const VideoTxt = [
  "What is SIP ? Let us understand.",
  "Learn from Sunil Chhetri.",
  "Haan, mai insurance bechta hu.",
  "Right time to buy insurance.",
  "Investment secret you don't know.",
];

export default function Videos() {
  return (
    <>
      <hr className="page-line"></hr>
      <h2 className="page-heading"> Videos</h2>
      <div className="video-page-container">
        {VideoList.map((video, index) => (
          <div className="video-container">
            <video className="video" controls>
              <source src={video} type="video/mp4" />
            </video>
            <h4 style={{ marginBottom: "2rem" }}>{VideoTxt[index]}</h4>
          </div>
        ))}
      </div>
    </>
  );
}
