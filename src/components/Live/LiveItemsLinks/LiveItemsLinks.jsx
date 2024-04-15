import { nanoid } from 'nanoid';
import { ListNavigation, ListCategory, ListCategoryItem, ListCategoryItemLink } from './LiveItemsLinks.styled';
import LiveTitle from "components/Live/LiveTitle/LiveTitle"

function LiveItemsLinks({
  scrollTargetRef, filteredSections, activeAnchor, navbarHide, setNavbarHide
  }) {
   
    const headerHeight = 45;

    const smoothScroll = (target, e) => {
      e.preventDefault();
      setNavbarHide(true)
      const element = document.getElementById(target);
             
      window.scrollTo({
        top: element.offsetTop - headerHeight,
        behavior: 'smooth',
      });
    };

  const handleRefAssignment = (ref) => {
    scrollTargetRef.current['#active'] = ref;
  };

  return (
    <>
    <LiveTitle
    className={navbarHide === true ? 'hide-show' : ''}
    />
      <ListNavigation>
   <ListCategory>
        {filteredSections.map(section =>
<ListCategoryItem
key={nanoid()}>
  <ListCategoryItemLink 
     key={nanoid()}
      id={activeAnchor === `#${section.category}` ? 'active' : ''}
      className={activeAnchor === `#${section.category}` ? 'active' : ''}
      href={`#${section.category}`} 
      ref={ref => handleRefAssignment(ref)}
    onClick={(e) => smoothScroll(`${section.category}`, e)}
    >
      {section.category}
   </ListCategoryItemLink>
    </ListCategoryItem>
        )}
  </ListCategory>
  <style jsx>{`
       
       .active {
        color: red;
      } 
    `}</style>
     </ListNavigation>
     </>
  );
}


export default LiveItemsLinks;