import React from 'react';
import { AboutText, Aboutwrapper } from './About.styled';
import AboutSlide from 'components/About/AboutSlide/AboutSlide';
import menu from 'img/about/menu.jpg'
import items from 'img/about/items.jpg'
import modal from 'img/about/modal.jpg'

export default function About() {


  const images = [
    menu,
    items,
    modal,
    
  ];
  return (
    <Aboutwrapper>
      <AboutText>
        This is a free QR menu. With its help, you can very easily create a menu
        that will work for you today. Functionality is not difficult and clear.
        There are functions of adding dishes, categories to them. You can also
        add, update or delete photos for each dish.
      </AboutText>
      <AboutSlide 
      images={images}
      />
    </Aboutwrapper>
  );
}
