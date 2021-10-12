import React from "react";
import Card1 from "../../assets/image/card1.png";
import Card2 from "../../assets/image/card2.png";
import Card3 from "../../assets/image/card3.png";
const Index = () => {
  return (
    <section className="py-10 ">
      <div className="container">
        <h2 className="text-5xl text-center mb-10 md:mb-20">Solkity</h2>
        <div className="flex justify-between flex-wrap ">
          <div className="w-full  md:w-1/2 md:pr-4 mt-8  xl:mt-0  xl:pr-0 xl:w-80 ">
            <Card
              img={Card1}
              title="Customized"
              desc="Here we can customized eye glasses of the sol kitty"
            />
          </div>
          <div className="w-full  md:w-1/2 md:pl-4 mt-8  xl:mt-0  xl:pl-0  xl:w-80">
            <Card
              img={Card2}
              title="Customized"
              desc="Here we can customized eye glasses of the sol kitty"
            />
          </div>
          <div className="w-full  md:w-1/2 md:pr-4 mt-8 xl:mt-0 xl:pr-0 xl:w-80 ">
            <Card
              img={Card3}
              title="Customized"
              desc="Here we can customized eye glasses of the sol kitty"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;

const Card = ({ img, title, desc }) => (
  <div className="bg-secondary border-4 border-white px-5 pt-10 pb-5 text-center h-full flex flex-col justify-end items-center w-full">
    <div>
      <img src={img} alt="" className="mx-auto" />
    </div>
    <h6 className="text-3xl my-4">{title}</h6>
    <p className="text-xl">{desc}</p>
  </div>
);
