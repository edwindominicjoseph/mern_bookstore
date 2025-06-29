import React from "react";
import bannerimg from "../../assets/banner.png";

const banner = () => {
  return (
    <>
      <div className=" max-w-screen-xl mx-auto flex flex-col md:flex-row-reverse  py-3 items-center justify-between gap-12">
        <div className="md:w-1/2 w-full flex items-center md:justify-end">
          <img src={bannerimg} alt="" />
        </div>
        <div className="md:w-1/2 w-full">
          <h1 className="md:text-5xl text-2xl font-medium mb-10">
            New Releases This Week
          </h1>
          <p className="mb-10">
            It's time to update your reading list with some of the latest and
            greatest releases in the literary world. From heart-pumping
            thrillers to captivating memoirs, this week's new releases offer
            something for everyone.
          </p>
          <button className="btn-primary">Shop Now</button>
        </div>
      </div>
    </>
  );
};

export default banner;
