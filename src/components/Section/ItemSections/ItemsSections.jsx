import {useState, useEffect, useRef  } from 'react';
import { useDispatch} from 'react-redux';

import { fetchSections, updateSection } from "redux/sections/sections-operation"
import { getSections } from 'redux/sections/sections-selector';
import { getMenuOptions } from 'redux/sections/sections-selector';

import {
  Button,
  FilterList,
  StyledChange,
  BtnChange,
  MoveButtonSection,
  MoveUpSection,
  MoveDownSection,
  FilterListWrap,
  MoveButtonWrap
} from './ItemsSections.styled';
import { Modal } from 'components/common/Modal/Modal';
import ModalChangeSectionName from '../ModalChangeSectionName/ModalChangeSectionName';

import {  useSelector } from 'react-redux';

import { useNavigate  } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function ItemsSections(
  // {scrollRef}
) {
 
  const [ModalChangeSectionActive, setModalChangeSectionActive] = useState(false);
    const [state, setState] = useState({
    idTarget: "",
    idSortTarget: "",
    menuOptions: "",
    valueTarget: "",
  });
  

  const [activeIndex, setActiveIndex] = useState(() => {
    const savedIndex = localStorage.getItem('activeIndex');
    return savedIndex !== null ? JSON.parse(savedIndex) : null;
  });
  
  // const [currentSection, setCurrentSection] = useState(null);

  // const listRef = useRef(null);
  const buttonClickedRef = useRef(false); // Використання useRef для buttonClicked
  const scrollRef = useRef(null);

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  
  function closeModal () {
    setModalChangeSectionActive(false)
    document.body.style.overflow = '';

  };
 
  const sections = useSelector(getSections);
  const menuActive = useSelector(getMenuOptions);

  // const filteredSection = sections.filter(section => section.menuOptions === menuActive)
  const filteredSection = sections.filter(section => section.menuOptions)

//   useEffect(() => {
//   if (filteredSection.length > 0) {
//     setCurrentSection(filteredSection[0]);
//     console.log("filteredSection", filteredSection)
//     console.log("currentSection", currentSection)
//   }
// }, [filteredSection]);



  const handleSectionChange = (item) => {
    buttonClickedRef.current = true;
    setState({
      idTarget: item._id,
      idSortTarget: item.idSort,
      menuOptions: item.menuOptions,
      valueTarget: item.category,
    });
    setModalChangeSectionActive(true)
    
      };

  const handleDownSection = (item, index) => {
    // setButtonClicked(true)
    buttonClickedRef.current = true;
const downIdSort = filteredSection[index + 1].idSort;  //// над поточним IdSort
const tempIdSort = filteredSection[index].idSort; //// поточний IdSort
const downElement = filteredSection.find(item => item.idSort === downIdSort);


///// оновлення idSort поточного елемента /////////
        dispatch(updateSection({
          _id: item._id,
          idSort: downIdSort,
          category: item.category,
          menuOptions: item.menuOptions
        }));
 ///// оновлення idSort верхнього елемента /////////       
        dispatch(updateSection({
          _id: downElement._id,
          idSort: tempIdSort,
          category: downElement.category,
          menuOptions: item.menuOptions
        }));
        
        setTimeout(() => {
          navigate(location.pathname);
          dispatch(fetchSections(menuActive));
        }, 300)
       
      };

  const handleUpSection = (event, item, index) => {
console.log("location.pathname", location.pathname)
    // setButtonClicked(true); // Позначаємо, що була натиснута кнопка
    buttonClickedRef.current = true; // Позначаємо, що була натиснута кнопка
    
    
        const upIdSort = filteredSection[index - 1].idSort;  //// над поточним IdSort
        const tempIdSort = filteredSection[index].idSort; //// поточний IdSort
        const upElement = filteredSection.find(item => item.idSort === upIdSort);
        
        
        ///// оновлення idSort поточного елемента /////////
                dispatch(updateSection({
                  _id: item._id,
                  idSort: upIdSort,
                  category: item.category,
                  menuOptions: item.menuOptions
                }));
         ///// оновлення idSort верхнього елемента /////////       
         dispatch(updateSection({
                  _id: upElement._id,
                  idSort: tempIdSort,
                  category: upElement.category,
                  menuOptions: item.menuOptions
                }));


                setTimeout(() => {
                  navigate(location.pathname);
                  dispatch(fetchSections(menuActive));
                }, 300)
          
          // event.stopPropagation()
              };

      
              
const handleSection = (event, index, item) => {
  event.preventDefault();
  event.stopPropagation();
  console.log("item", item._id)
  if (!buttonClickedRef.current) {
  setActiveIndex(item._id)
  
  // Збереження позиції прокручування
  // const scrollPosition = scrollRef.current.scrollTop;
  
  
  // console.log("scrollRef", scrollRef.current.scrollTop)
  // scrollRef.current.scrollTop;
  // console.log("scrollPosition", scrollPosition)
setTimeout(() => {
  
  const sectionsId = sections[index]._id;
  navigate('/items/' + sectionsId );
}, 300);
  }
  
  buttonClickedRef.current = false; // Скидаємо значення після кліку

}
              // console.log("activeIndex", activeIndex)

              useEffect(() => {
                if (scrollRef.current) {
                  const activeItem = scrollRef.current.querySelector('.active');
  console.log("activeItem", activeItem)
                  ;
                  
                  console.log("useeffectRefIf")
                  // window.scrollTo(activeItem[0]);

                  if (activeItem) {
                    // Прокрутка до вибраного елементу, якщо він існує
                    activeItem.scrollIntoView({ behavior: 'auto', block: 'nearest' });
                  } else {
                    console.log('Active item not found');
                  }
                }
              }, [scrollRef]);

              useEffect(() => {
                localStorage.setItem('activeIndex', JSON.stringify(activeIndex));
              console.log("useeffect")
               },[activeIndex]);


       
console.log("filteredSection", filteredSection)
  return (
    <>
    <FilterListWrap
   ref={scrollRef}
    >
          {filteredSection.map((item, index) => (
                       
            <FilterList
            
       key={index}
       id={item._id}
      //  className={ (index  === activeIndex  ? "active" : "")
      //  || (`${index}`=== activeIndex  ? "active" : "")
      // } 
      className={ (item._id  === activeIndex  ? "active" : "")
       || (`${item._id}`=== activeIndex  ? "active" : "")
      } 
       onClick={(event) => handleSection(event, index, item)}
       >
                 
        <MoveButtonWrap>
        {index !== 0 && (
        <MoveButtonSection
        onClick={(event) => handleUpSection(event, item, index)}>
          <MoveUpSection/>
        </MoveButtonSection>
        )}
        {index !== filteredSection.length - 1 && (
              <MoveButtonSection
              onClick={() => handleDownSection(item, index)}
              >
          <MoveDownSection/>
        </MoveButtonSection>
        )}
        </MoveButtonWrap>
              <Button 
              key={item._id}
              // to={'/items/' + item._id} 
              >
               
                {item.category}
              </Button>
              
              <BtnChange
              id={item._id}
              onClick={() => handleSectionChange(item)}
          >
                <StyledChange/>
              </BtnChange>
              </FilterList>
              
          ))}
          </FilterListWrap>
             {ModalChangeSectionActive && (
          <Modal
          onClick={() => closeModal ()}
          active={ModalChangeSectionActive}
          setActive={setModalChangeSectionActive}
          >
          <ModalChangeSectionName
          closeModal={closeModal}
          _id={state.idTarget}
          idSort={state.idSortTarget}
          category={state.valueTarget}
          menuOptions={state.menuOptions}
          />
          </Modal>
         )} 
        </>  
  );
}

export default ItemsSections;



