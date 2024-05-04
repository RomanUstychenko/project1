import {useState} from 'react';
import { useDispatch} from 'react-redux';

import { fetchSections } from "redux/sections/sections-operation"

import {
  Button,
  FilterList,
  StyledChange,
  BtnChange,
} from './ItemsSections.styled';
import { Modal } from 'components/common/Modal/Modal';
import ModalChangeSectionName from '../ModalChangeSectionName/ModalChangeSectionName';


import { getSections } from 'redux/sections/sections-selector';
import {  useSelector } from 'react-redux';

function ItemsSections({section}) {
 
  const [ModalChangeSectionActive, setModalChangeSectionActive] = useState(false);
  const dispatch = useDispatch();
  function closeModal () {
    setModalChangeSectionActive(false)
    
    document.body.style.overflow = '';
    dispatch(fetchSections());
  }
  const { 
    _id,
    category,
  } = section;

  const buttons = [
    {
      btn: category,
      link: _id,
    }
  
  ];

  const sections = useSelector(getSections);
// console.log(sections.map(({category, ...rest}) => (category)))
const sectArr = sections.map(({category, ...rest}) => (category))
console.log(sectArr)
const sectionsArray = section.category.split('\n').filter(item => item.trim() !== '');
console.log(sectionsArray)
    const moveItemUp = (index) => {
        if (index > 0) {
            const temp = sectionsArray[index - 1];
            sectionsArray[index - 1] = sectionsArray[index];
            sectionsArray[index] = temp;
            console.log("Піднято елемент з індексом", index);
            console.log(sectionsArray);
        }
    };

    const moveItemDown = (index) => {
        if (index < sectionsArray.length - 1) {
            const temp = sectionsArray[index + 1];
            sectionsArray[index + 1] = sectionsArray[index];
            sectionsArray[index] = temp;
            console.log("Опущено елемент з індексом", index);
            console.log(sectionsArray);
        }
    };

  return (
{/* <div>
            {sectArr.map(( name, index ) => (
                <div key={index}>
                    <span>{name}</span>
                    <button onClick={() => moveItemUp(index)}>Підняти</button>
                    <button onClick={() => moveItemDown(index)}>Опустити</button>
                </div>
            ))}
        </div> */}

    
      <FilterList
       key={section._id}
       >
        <button>up</button>
          {buttons.map(b => (
            
              <Button 
              key={b.link}
              to={'/items/' + b.link} name={b.link}>
                {/* {console.log(b.btn)} */}
                {b.btn}
              </Button>
          ))}
          <BtnChange
          onClick={() => setModalChangeSectionActive(true)}>
                <StyledChange/>
              </BtnChange>
              { ModalChangeSectionActive && (
          <Modal
          onClick={() => closeModal ()}
          active={ModalChangeSectionActive}
          setActive={setModalChangeSectionActive}>
          <ModalChangeSectionName
          closeModal={closeModal}
          _id={_id}
          category={category}
          />
          </Modal>
         )}
        
      </FilterList>
    
  );
}

export default ItemsSections;



