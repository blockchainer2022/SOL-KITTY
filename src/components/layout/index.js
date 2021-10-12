import React from "react";
import Header from "../header";
import Footer from "../footer";
const Index = ({ children }) => {
  return (
    <main className="text-white flex flex-col" style={{ minHeight: "100vh" }}>
      <Header /> <div className="flex-1">{children}</div>
      <Footer />
    </main>
  );
};

export default Index;
