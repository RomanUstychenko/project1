export const options = [
  { value: 'g', label: 'g' },
  { value: 'ml', label: 'ml' }
];
export const option = [
    { value: 'g'},
    { value: 'ml'}
  ];

export const customStyles = {
  control: (provided) => ({
    ...provided,
    minWidth: '60px',
    width: '60px',
    minHeight: '27px',
    height: '27px',
    padding: '0',
    position: 'absolute',
    right: '7px',
    bottom: '2px',
    border: 'none',
    borderRadius: '5px',



    borderColor: 'none',
    '&:hover': {
      borderColor: 'none'
    },
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? '#d45d18' : state.isFocused ? '#cce5ff' : null,
    color: state.isSelected ? 'white' : 'black',
    fontSize: '16px',
  }),
  singleValue: (provided) => ({
    ...provided,
    fontSize: '14px', // Змінює розмір шрифту вибраного елемента
    padding: '0',
    margin: "0",
    width: 'auto',    // Встановлює ширину для вибраного елемента
    height: '100%',   // Встановлює висоту для вибраного елемента
    // lineHeight: '30px', // Вирівнює текст вертикально по центру
    color: 'black',  // Змінює колір вибраного тексту
    
  }),
  placeholder: (provided) => ({
    ...provided,
    fontSize: '16px',
    color: 'red'
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    minHeight: '27px',
    height: '27px',
    padding: '1px',  // Зменшення відступів всередині контейнера стрілочки
    fontSize: '14px',  // Зміна розміру стрілочки
    color: '#007bff',  // Зміна кольору стрілочки
    '&:hover': {
      color: '#0056b3',  // Зміна кольору стрілочки при наведенні
    },
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    display: 'none',  // Прибирає вертикальну лінію між інпутом і стрілочкою
  }),
};


