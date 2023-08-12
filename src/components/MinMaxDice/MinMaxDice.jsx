import MinDice from "../MinDice/MinDice.jsx";
import MaxDice from "../MaxDice/MaxDice.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { updateResult, countTotal } from "../../services/reducers/minMaxSlice/minMaxSlice.js";
import { TOTAL_CELLS_MINMAX } from "../../services/utils/constants.js";

const MinMaxDice = () => {
  const dispatch = useDispatch();
  const data = state => state.minMax.totalObj;
  const totalObj = useSelector(data);
  const min = state => state.minMax.minObj;
  const minObj = useSelector(min);
  const max = state => state.minMax.maxObj;
  const maxObj = useSelector(max);
  const firstDigits = state => state.simpleDice.multipliers;
  const multipliers = useSelector(firstDigits);
  const sum = state => state.minMax.total;
  const total = useSelector(sum); 

  const totalKeys = ['minMaxOne', 'minMaxTwo', 'minMaxThree', 'minMaxFour'];
  
  useEffect(() => {
    
    for (let key in maxObj) {
      if (maxObj.hasOwnProperty(key) && minObj.hasOwnProperty(key) && multipliers.hasOwnProperty(key)) {
        dispatch(updateResult({
          path: 'total',
          id: key,
          value: (maxObj[key] - minObj[key]) * multipliers[key]
        }));
      }
    }

    if(Object.keys(totalObj).length === TOTAL_CELLS_MINMAX) {
      const newTotal = Object.values(totalObj).reduce((acc, currentValue) => {return acc + Number(currentValue)}, 0);
      dispatch(countTotal(newTotal));
    }

    dispatch(updateResult)

  }, [minObj, maxObj, multipliers, totalObj])

  return (
    <div className='flex flex-col gap-y-2'>
      <div className='flex flex-col gap-y-2'>
        <MaxDice />
        <MinDice />
      </div>
      <div className="flex gap-x-2">
        <div className="flex gap-x-2">
        {Array(4).fill(null).map((_, index) => (
          <span key={index} className="w-11 h-10 border-2 border-[#e056fd] flex justify-center items-center bg-[#ffbe76] rounded-lg">
            {totalObj[totalKeys[index]] || ''}
          </span>
        ))}
      </div>
      <span className="w-11 h-10 border-2 border-[#e056fd] flex justify-center items-center bg-[#ffbe76] rounded-lg">
        {total}
      </span>
      </div>
    </div>
  )
}
export default MinMaxDice;