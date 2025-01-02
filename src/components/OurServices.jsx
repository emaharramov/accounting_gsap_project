import React from "react";
import ServiceWhyUs from "./ServiceWhyUs";

const OurServices = () => {
  const text = ["Your", "business", "goals", "are", "our", "priority"];
  return (
    <ServiceWhyUs sectiontitle={"Our Services"} textmain={text} space={0} />
  );
};

export default OurServices;
