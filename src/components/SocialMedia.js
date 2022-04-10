import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const SocialMedia = () => {
  return (
    <div className="social-media">
      <a
        href="https://www.facebook.com/Wedding-planner-Ren%C3%A9e-103766585139989/"
        target="_blank"
        rel="noreferrer noopener"
      >
        <FacebookIcon />
      </a>
      <a
        href="https://www.instagram.com/weddingplanner_renee/"
        target="_blank"
        rel="noreferrer noopener"
      >
        <InstagramIcon />
      </a>
    </div>
  );
};

export default SocialMedia;
