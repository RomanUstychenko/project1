import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SelectUnitWeight, OptionUnitWeight } from './WeightSelect.styled';
import { setItemWeightUnit } from 'redux/items/items-slice';
import { getItemWeightUnit } from 'redux/items/items-selector';
const WeightSelect = ({weight, inputRef}) => {
console.log("data", weight)
   
    //  const [unit, setUnit] = useState(defaultWeightUnit());
     const dispatch = useDispatch();
const unit = useSelector(getItemWeightUnit)

//  const defaultWeightUnit = () => {
//   if (unit) {
//     return unit
//   }
//         if (data) {
//           dispatch(setItemWeightUnit(data.replace(/[0-9]/g, '')))
//           return unit
//         }
//         else return
//       };

useEffect(() => {
  if (weight && !unit) {
    dispatch(setItemWeightUnit(weight.replace(/[0-9]/g, '')));
  }
}, [weight, unit, dispatch]);

const defaultWeightUnit = () => {
  if (unit) {
    return unit;
  } else if (weight) {
    return weight.replace(/[0-9]/g, '');
  } else {
    return;
  }
};

      const option = [
        { value: 'g'},
        { value: 'ml'}
      ];

      const handleUnitChange = (e) => {
        dispatch(setItemWeightUnit(e.target.value))
        // setUnit(e.target.value);
        inputRef.current.focus();
      };
      console.log("unit", unit)
return (
    <SelectUnitWeight value={defaultWeightUnit()} onChange={handleUnitChange}>
              {option.map((item, index) => (
                <OptionUnitWeight 
                key={index}
                value={item.value}>{item.value}</OptionUnitWeight>
              ))}
      </SelectUnitWeight>

)
}

export default WeightSelect;