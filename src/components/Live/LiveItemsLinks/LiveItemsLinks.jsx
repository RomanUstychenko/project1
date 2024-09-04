import { nanoid } from 'nanoid';
import {ListMenu, ListNavigation, ListCategory, ListCategoryItem, ListCategoryItemLink } from './LiveItemsLinks.styled';
import translateCyrillic from 'components/common/transliteration/transliteration';

function LiveItemsLinks({
 filteredSections, activeAnchor, setNavbarHide
  }) {
   
    const headerHeight = 80;

    const smoothScroll = (target, e) => {
      e.preventDefault();
      setNavbarHide(true)
      const element = document.getElementById(target);
             
      window.scrollTo({
        top: element.offsetTop - headerHeight,
        behavior: 'smooth',
      });
    };


  return (
    <>
    <ListMenu>
  <li>Menu Kitchen</li>
  <li>Menu Bar</li>
</ListMenu>
          <ListNavigation
          id={"nav"}
          >
   <ListCategory
   >
        {filteredSections.map(section =>
<ListCategoryItem
key={nanoid()}
id={activeAnchor === `#${translateCyrillic(section.category)}` ? 'active' : ''}>
  <ListCategoryItemLink 
     key={nanoid()}
      
      className={activeAnchor === `#${translateCyrillic(section.category)}` ? 'active' : ''}
      href={`#${translateCyrillic(section.category)}`} 
    onClick={(e) => smoothScroll(`${translateCyrillic(section.category)}`, e)}
    >
      {section.category}
   </ListCategoryItemLink>
    </ListCategoryItem>
        )}
  </ListCategory>
  <style>{`
       
       .active {
        color: red;
      } 
    `}</style>
     </ListNavigation>
     </>
  );
}


export default LiveItemsLinks;