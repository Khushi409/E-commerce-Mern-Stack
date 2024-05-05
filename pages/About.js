import React from "react";
import Layout from "../Components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About Us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          Welcome to our online store, where shopping meets convenience! Explore our vast selection of high-quality products, carefully curated to cater to your every need. 
          Whether you're looking for the latest fashion trends, cutting-edge gadgets, or everyday essentials, we've got you covered.
          With secure payment options and lightning-fast shipping, your shopping experience with us is seamless and hassle-free. 
          Join our community of satisfied customers and embark on a journey of effortless shopping. 
          Start browsing now and discover endless possibilities at your fingertips!
            
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
