import {useState} from 'react';
import { useDispatch} from 'react-redux';

import { fetchSections, updateSection } from "redux/sections/sections-operation"
import { getSections } from 'redux/sections/sections-selector';

import {
  Button,
  FilterList,
  StyledChange,
  BtnChange,
  MoveButtonSection,
  MoveUpSection,
  MoveDownSection
} from './ItemsSections.styled';
import { Modal } from 'components/common/Modal/Modal';
import ModalChangeSectionName from '../ModalChangeSectionName/ModalChangeSectionName';

import {  useSelector } from 'react-redux';

function ItemsSections() {
 
  const [ModalChangeSectionActive, setModalChangeSectionActive] = useState(false);
    const [state, setState] = useState({
    idTarget: "",
    idSortTarget: "",
    valueTarget: "",
  });

  const dispatch = useDispatch();
  
  function closeModal () {
    setModalChangeSectionActive(false)
    document.body.style.overflow = '';
    // dispatch(fetchSections());
  };
 
  const sections = useSelector(getSections);
const sectArr = sections.map(({owner, ...rest}) => (rest));

  const handleSectionChange = (item) => {

    setState({
      idTarget: item._id,
      idSortTarget: item.idSort,
      valueTarget: item.category,
    });
    setModalChangeSectionActive(true)
      };

  const handleDownSection = (item, index) => {
        
const downIdSort = sectArr[index + 1].idSort;  //// над поточним IdSort
const tempIdSort = sectArr[index].idSort; //// поточний IdSort
const downElement = sectArr.find(item => item.idSort === downIdSort);
console.log("downElement", downElement)

///// оновлення idSort поточного елемента /////////
        dispatch(updateSection({
          _id: item._id,
          idSort: downIdSort,
          category: item.category
        }));
 ///// оновлення idSort верхнього елемента /////////       
        dispatch(updateSection({
          _id: downElement._id,
          idSort: tempIdSort,
          category: downElement.category
        }));
      dispatch(fetchSections());
      };

  const handleUpSection = (item, index) => {
        
        const upIdSort = sectArr[index - 1].idSort;  //// над поточним IdSort
        const tempIdSort = sectArr[index].idSort; //// поточний IdSort
        const upElement = sectArr.find(item => item.idSort === upIdSort);
        console.log("item", item)
        console.log("upElement", upElement)
        
        ///// оновлення idSort поточного елемента /////////
                dispatch(updateSection({
                  _id: item._id,
                  idSort: upIdSort,
                  category: item.category
                }));
         ///// оновлення idSort верхнього елемента /////////       
         dispatch(updateSection({
                  _id: upElement._id,
                  idSort: tempIdSort,
                  category: upElement.category
                }));
          dispatch(fetchSections());
              };

  return (
    <>
          {sectArr.map((item, index) => (
            <FilterList
       key={item._id}
       id={item._id}
       >
        {index !== 0 && (
        <MoveButtonSection
        onClick={() => handleUpSection(item, index)}>
          <MoveUpSection/>
        </MoveButtonSection>
        )}
              <Button 
              key={item._id}
              to={'/items/' + item._id} name={item._id}>
                
                {item.category}
              </Button>
              {index !== sectArr.length - 1 && (
              <MoveButtonSection
              onClick={() => handleDownSection(item, index)}>
          <MoveDownSection/>
        </MoveButtonSection>
        )}
              <BtnChange
              id={item._id}
              onClick={() => handleSectionChange(item)}
          >
                <StyledChange/>
              </BtnChange>
              </FilterList>
              
          ))}
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
          />
          </Modal>
         )} 
        </>  
  );
}

export default ItemsSections;



