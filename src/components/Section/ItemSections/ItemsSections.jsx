import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import {
  fetchSections,
  updateSection,
} from 'redux/sections/sections-operation';
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
  MoveButtonWrap,
} from './ItemsSections.styled';
import { Modal } from 'components/common/Modal/Modal';
import ModalChangeSectionName from '../ModalChangeSectionName/ModalChangeSectionName';

import { useSelector } from 'react-redux';

import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function ItemsSections() {
  const [ModalChangeSectionActive, setModalChangeSectionActive] =
    useState(false);
  const [state, setState] = useState({
    idTarget: '',
    idSortTarget: '',
    menuOptions: '',
    valueTarget: '',
  });

  const [activeIndex, setActiveIndex] = useState(() => {
    const savedIndex = localStorage.getItem('activeIndex');
    return savedIndex !== null ? JSON.parse(savedIndex) : null;
  });

  const buttonClickedRef = useRef(false); // Використання useRef для buttonClicked
  const scrollRef = useRef(null);

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  function closeModal() {
    setModalChangeSectionActive(false);
    document.body.style.overflow = '';
  }
  const { sections, menuActive } = useSelector(state => ({
    sections: getSections(state),
    menuActive: getMenuOptions(state),
  }));
  // const sections = useSelector(getSections);
  // const menuActive = useSelector(getMenuOptions);

  // const filteredSection = sections.filter(section => section.menuOptions);
  const filteredSection = useMemo(
    () => sections.filter(section => section.menuOptions),
    [sections]
  );
  // const handleSectionChange = item => {
  //   buttonClickedRef.current = true;
  //   setState({
  //     idTarget: item._id,
  //     idSortTarget: item.idSort,
  //     menuOptions: item.menuOptions,
  //     valueTarget: item.category,
  //   });
  //   setModalChangeSectionActive(true);
  // };

  const handleSectionChange = useCallback(item => {
    buttonClickedRef.current = true;
    setState({
      idTarget: item._id,
      idSortTarget: item.idSort,
      menuOptions: item.menuOptions,
      valueTarget: item.category,
    });
    setModalChangeSectionActive(true);
  }, []);

  const updateSectionSort = (item, newIdSort) => {
    dispatch(
      updateSection({
        _id: item._id,
        idSort: newIdSort,
        category: item.category,
        menuOptions: item.menuOptions,
      })
    );
  };

  const handleDownSection = (item, index) => {
    buttonClickedRef.current = true;
    const downIdSort = filteredSection[index + 1].idSort; //// над поточним IdSort
    const tempIdSort = filteredSection[index].idSort; //// поточний IdSort
    const downElement = filteredSection.find(
      item => item.idSort === downIdSort
    );

    ///// оновлення idSort поточного елемента /////////
    updateSectionSort(item, downIdSort);
    ///// оновлення idSort верхнього елемента /////////
    updateSectionSort(downElement, tempIdSort);

    setTimeout(() => {
      navigate(location.pathname);
      dispatch(fetchSections(menuActive));
    }, 300);
  };

  const handleUpSection = (event, item, index) => {
    buttonClickedRef.current = true; // Позначаємо, що була натиснута кнопка

    const upIdSort = filteredSection[index - 1].idSort; //// над поточним IdSort
    const tempIdSort = filteredSection[index].idSort; //// поточний IdSort
    const upElement = filteredSection.find(item => item.idSort === upIdSort);

    ///// оновлення idSort поточного елемента /////////
    updateSectionSort(item, upIdSort);
    // ///// оновлення idSort верхнього елемента /////////
    updateSectionSort(upElement, tempIdSort);

    setTimeout(() => {
      navigate(location.pathname);
      dispatch(fetchSections(menuActive));
    }, 300);
  };

  const handleSection = (event, index, item) => {
    event.preventDefault();
    event.stopPropagation();
    if (!buttonClickedRef.current) {
      setActiveIndex(item._id);

      setTimeout(() => {
        const sectionsId = sections[index]._id;
        navigate('/items/' + sectionsId);
      }, 300);
    }

    buttonClickedRef.current = false; // Скидаємо значення після кліку
  };

  useEffect(() => {
    localStorage.setItem('activeIndex', JSON.stringify(activeIndex));

    if (scrollRef.current) {
      const activeItem = scrollRef.current.querySelector('.active');
      if (activeItem) {
        activeItem.scrollIntoView({ behavior: 'auto', block: 'center' });
      }
    }
  }, [activeIndex]);

  return (
    <>
      <FilterListWrap ref={scrollRef}>
        {filteredSection.map((item, index) => (
          <FilterList
            key={index}
            id={item._id}
            className={
              (item._id === activeIndex ? 'active' : '') ||
              (`${item._id}` === activeIndex ? 'active' : '')
            }
            onClick={event => handleSection(event, index, item)}
          >
            <MoveButtonWrap>
              {index !== 0 && (
                <MoveButtonSection
                  onClick={event => handleUpSection(event, item, index)}
                >
                  <MoveUpSection />
                </MoveButtonSection>
              )}
              {index !== filteredSection.length - 1 && (
                <MoveButtonSection
                  onClick={() => handleDownSection(item, index)}
                >
                  <MoveDownSection />
                </MoveButtonSection>
              )}
            </MoveButtonWrap>
            <Button key={item._id}>{item.category}</Button>

            <BtnChange id={item._id} onClick={() => handleSectionChange(item)}>
              <StyledChange />
            </BtnChange>
          </FilterList>
        ))}
      </FilterListWrap>
      {ModalChangeSectionActive && (
        <Modal
          onClick={() => closeModal()}
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
