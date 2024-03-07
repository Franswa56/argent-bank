import React from "react";
import chatIcon from "../../style/img/icon-chat.webp";
import moneyIcon from "../../style/img/icon-money.webp";
import securityIcon from "../../style/img/icon-security.webp";
import FeatureCard from "../FeatureCard/FeatureCard";

function Features() {
  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>
      <FeatureCard img={chatIcon} title="You are our #1 priority" text="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes." />
      <FeatureCard img={moneyIcon} title="More savings means higher rates" text="The more you save with us, the higher your interest rate will be!" />
      <FeatureCard img={securityIcon} title="Security you can trust" text="We use top of the line encryption to make sure your data and money is always safe." />
    </section>
  );
}

export default Features;
