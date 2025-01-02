import React from 'react';
import HomeGoogleRating from '../components/HomeGoogleRating';
import HomeAbout from '../components/HomeAbout';
import OurServices from "../components/OurServices";
import HomeStateAffairs from '../components/HomeStateAffairs';
import WhyChooseUs from '../components/WhyChooseUs';
import Whowehelp from '../components/Whowehelp';

const HomePage = () => {
  return (
    <section className=''>
      <HomeGoogleRating />
      <HomeAbout />
      <OurServices />
      <HomeStateAffairs />
      <WhyChooseUs />
      <Whowehelp />
    </section>
  );
};

export default HomePage;