import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { List, LiveWrapper } from './LivePage.styled';
import LiveItemsList from 'components/Live/LiveItemsList/LiveItemsList';
import LiveItemsLinks from 'components/Live/LiveItemsLinks/LiveItemsLinks';

import { allUsers } from 'redux/user/user-operation';
import { getSections } from 'redux/sections/sections-selector';
import { fetchSections } from 'redux/sections/sections-operation';
import { fetchItemsLive } from 'redux/items/items-operation';
import { getItemsLive } from 'redux/items/items-selector';


// import SmoothScroll from 'smooth-scroll';

export default function LivePage({navbarHide, setNavbarHide}) {
  const location = useLocation();
  const category = location.pathname.split('/')[2];
  const dispatch = useDispatch();
  const sections = useSelector(getSections);
  const items = useSelector(getItemsLive);
  const itemFiter = items
    .flatMap(item => item.section)
    .filter((course, index, array) => array.indexOf(course) === index);

  const uniqueIds = new Set(itemFiter);
  console.log(sections)

  const filteredSections = sections.filter(item => uniqueIds.has(item._id));

  useEffect(() => {
    dispatch(allUsers());
    if (category) {
      dispatch(fetchItemsLive(category));
      dispatch(fetchSections(category));
    }
  }, [dispatch, category]);

  const [activeAnchor, setActiveAnchor] = useState(null);
  console.log("activeAnchor", activeAnchor)
  const sectionRefs = useRef({});
  const scrollTargetRef = useRef({});

  useEffect(() => {

     const handleScrollLink = () => {
      const anchor = document.getElementById("active")
      const element = document.getElementById("nav")
     
        if (anchor) {
          const rect = anchor.getBoundingClientRect();
          var distanceFromLeft = anchor.offsetLeft;
          var containerVisibleWidth = element.offsetWidth;
            if (
              rect.left < 0 ||
              rect.right > window.innerWidth
            )
            {
              // anchor.scrollIntoView({ behavior: 'smooth' });
              element.scrollLeft = distanceFromLeft - (containerVisibleWidth / 2);;
            }
        }  
        
        if (navbarHide === true) {
          setTimeout(() => {
            setNavbarHide(false);
          }, 1000);
        }
    };

    const autoScroll = () => {
      const anchors = Object.keys(sectionRefs.current);
      let mostVisibleAnchor = null;
      let mostVisiblePercentage = 0;
      for (const anchor of anchors) {
        const element = document.querySelector(anchor);
        if (element) {
          const rect = element.getBoundingClientRect();
          const visiblePercentage =
            Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
          const elementHeight = rect.bottom - rect.top;
          const adjustedVisiblePercentage = visiblePercentage / elementHeight;

          if (adjustedVisiblePercentage > mostVisiblePercentage) {
            mostVisiblePercentage = adjustedVisiblePercentage;
            mostVisibleAnchor = anchor;
          }
        }
      }
      setActiveAnchor(mostVisibleAnchor);
    };

    window.addEventListener('scroll', autoScroll);
    window.addEventListener('scroll', handleScrollLink);

    return () => {
      window.removeEventListener('scroll', handleScrollLink);
      window.removeEventListener('scroll', autoScroll);
    };
  }, [scrollTargetRef, sectionRefs, 
    navbarHide, setNavbarHide
  ]);

  console.log("filteredSections", filteredSections)
  return (
    <LiveWrapper>

      <LiveItemsLinks
        sectionRefs={sectionRefs}
        activeAnchor={activeAnchor}
        setActiveAnchor={setActiveAnchor}
        scrollTargetRef={scrollTargetRef}
        filteredSections={filteredSections}
        navbarHide={navbarHide}
        setNavbarHide={setNavbarHide}
      />

      <List>
        {filteredSections.map(section => (
          <LiveItemsList
            key={section._id}
            sectionRefs={sectionRefs}
            section={section}
            items={items.filter(i => i.section === section._id)}
          />
        ))}
      </List>
    </LiveWrapper>
  );
}
