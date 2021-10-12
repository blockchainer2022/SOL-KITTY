import React from "react";
import Image1 from "../../assets/image/about1.png";
import Image2 from "../../assets/image/about2.png";
import Image3 from "../../assets/image/about3.png";
import Image4 from "../../assets/image/about4.png";
import Image5 from "../../assets/image/about5.png";
import Image6 from "../../assets/image/about6.png";
import Image7 from "../../assets/image/about7.png";
import Image8 from "../../assets/image/about8.png";

const images = [
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Image6,
  Image7,
  Image8,
];

const Index = () => {
  return (
    <section className="py-10 ">
      <div className="container">
        <h2 className="text-5xl text-center mb-10 md:mb-20">About</h2>
        <div className="font-serif text-primary text-lg md:text-xl">
          <p>
            Each sale of a Pixel Zombie Fella will contribute to future NFT
            projects, charity donations, prize pool giveaways, marketing, and
            finally distributed to the team for their tireless work.
          </p>
          <p className="mt-6">
            We are on a mission to deliver new and interesting NFT projects on a
            regular basis, whilst building the best community in the NFT space!
          </p>
          <p className="mt-6">
            Pixel Zombie Fellas is the first of Moon Cat’s NFT projects to
            launch. It represents our commitment to delivering high quality
            NFT’s with a unique twist in each launch.
          </p>
          <p className="mt-6">
            It is a collection of 10,500 unique 24px Zombie artwork, designed to
            be highlycollectable, proudly made by Moon Cat.
          </p>
        </div>

        <div className="flex mt-20 flex-wrap md:flex-nowrap">
          {images.map((v, i) => (
            <div key={i} className="w-1/2 sm:w-1/4 md:w-1/6 lg:w-auto">
              <img src={v} alt="" className="w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Index;
