import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateResult, countTotal, addToMultipliers } from '../../services/reducers/simpleDiceSlice/simpleDiceSlice';
import {diceOptions} from '../../services/utils/utils';
import { TOTAL_CELLS_SIMPLE } from '../../services/utils/constants';




const SimpleDiceDown = () => {

  const dispatch = useDispatch();
  const data = state => state.simpleDice.downPathObj;
  const downState = useSelector(data);
  const sum = state => state.simpleDice.totalDown;
  const total = useSelector(sum);

  useEffect(() => {
    if (Object.keys(downState).length === TOTAL_CELLS_SIMPLE) {
      const newTotal = Object.values(downState).reduce((acc, currentValue) => {return acc+ Number(currentValue)}, 0);
      if (newTotal >= 60) {
        dispatch(countTotal({path: 'down', value: (newTotal + 30)}))
      } else {
        dispatch(countTotal({path: 'down', value: newTotal}))
      }
    }

    for (let key in downState) {
      if (key.includes('One')) {
        dispatch(addToMultipliers({id: 'minMaxOne', value: downState[key]}))
      }
    }

  }, [downState])

  const handleUpdateResult = (path, id, value) => {
    dispatch(updateResult({ path, id, value}));
  }

  return(
    <div className="flex flex-col gap-y-2">
      {diceOptions.map((option) => (
        <select 
          key={option.id} 
          id={option.id} 
          className={`w-11 h-10 border-2 border-[#e056fd] rounded-lg`}
          onChange={e => handleUpdateResult('down', option.id, e.target.value)}
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


export default SimpleDiceDown;