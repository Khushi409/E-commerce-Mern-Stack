import React from "react";
import Layout from "../Components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p> We respects the privacy of our users . This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website </p>
          <p>How We Use Your Information

We use your information to:

1.Process your orders and fulfill your requests.
2.Provide customer service and support.
3.personalize your experience on the Site.
4Send you promotional emails and marketing materials (with your consent).
5.Analyze how you use the Site to improve our services.
6.Comply with legal and regulatory requirements.</p>
          
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
