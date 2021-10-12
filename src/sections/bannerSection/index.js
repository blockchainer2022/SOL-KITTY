import React from "react";
import ReactPlayer from "react-player";
const Index = () => {
  return (
    <section className="py-20">
      <div className="container ">
        <div className="border-8 border-white " style={{ height: 500 }}>
          <ReactPlayer
            controls
            url="https://www.youtube.com/watch?v=1jzROE6EhxM"
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </section>
  );
};

export default Index;
