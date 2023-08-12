import { useDispatch } from "react-redux"
import { updateResult } from "../../services/reducers/minMaxSlice/minMaxSlice";
import { minMaxDiceOptions } from "../../services/utils/utils";

const MaxDice = () => {
  const dispatch = useDispatch();

  const handleUpdateResult = (path, id, value) => {
    dispatch(updateResult({path, id, value}));
  }


  return(
    <div className='flex gap-x-2'>
      {minMaxDiceOptions.map(option => (
          <select
          key={option.id}
          id={option.id}
          className='w-11 h-10 border-2 border-[#e056fd] rounded-lg'
          onChange={e => handleUpdateResult('max', option.id, e.target.value)}
        >
          <option value ='' hidden></option>
          {option.values.map(value => (
            <option key={value} value={value}>
              {value === 0 ? "❌": value}
            </option>
          ))}
        </select>
      ))}
    </div>
  )
}

export default MaxDice;