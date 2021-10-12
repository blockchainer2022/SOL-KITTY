import React from "react";
const Index = () => {
  return (
    <section className="py-20">
      <div className="container ">
        <div className="border-8 border-white " style={{ height: 500 }}>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/1jzROE6EhxM?autoplay=1"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Index;
