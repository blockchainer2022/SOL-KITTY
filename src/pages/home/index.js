import React from "react";
import { Layout } from "../../components";
import { BannerSection, SolkitySection } from "../../sections";
import About from "../../sections/aboutSection";
const Index = () => {
  return (
    <div>
      <Layout>
        <BannerSection />
        <SolkitySection />
        <About />
      </Layout>
    </div>
  );
};

export default Index;
