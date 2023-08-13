import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { comboDiceOptions } from "../../services/utils/utils";
import { TOTAL_CELLS_COMBO } from "../../services/utils/constants";
import { updateResult, countTotal } from "../../services/reducers/comboDiceSlice/comboDiceSlice";

const ComboDiceUpDown = () => {
  const dispatch = useDispatch();
  const data = state => state.combo.upDownPathObj;
  const upDownState = useSelector(data);
  const sum = state => state.combo.totalUpDown;
  const total = useSelector(sum);

  useEffect(() => {
    if (Object.keys(upDownState).length === TOTAL_CELLS_COMBO) {
      const newTotal = Object.values(upDownState).reduce((acc, currentValue) => {return acc+ Number(currentValue)}, 0);
      dispatch(countTotal({path: 'upDown', value: newTotal}))
    }
  }, [upDownState])
  
  const handleUpdateResult = (path, id, value) => {
    dispatch(updateResult({path, id, value}));
  }
  
  return(
    <div className="flex flex-col gap-y-2">
        {comboDiceOptions.map((option) => (
          <select 
            key={option.id} 
            id={option.id} 
            className={`custom-select w-11 h-10 border-2 border-[#e056fd] rounded-lg`}
            onChange={e => handleUpdateResult('upDown', option.id, e.target.value)}
            >
            <option values = '' hidden></option>
            {option.values.map(value => (
              <option key={value} value={value}>
                {value === 0 ? "❌": value}
              </option>
            ))}
          </select>
        ))}
        <span className='w-11 h-10 border-2 border-[#e056fd] flex justify-center items-center bg-[#ffbe76] rounded-lg'>{total}</span>
      </div>
  )
}

export default ComboDiceUpDown;