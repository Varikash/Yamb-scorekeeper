import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateResult, countTotal, addToMultipliers } from '../../services/reducers/simpleDiceSlice/simpleDiceSlice';
import {diceOptions} from '../../services/utils/utils';
import { TOTAL_CELLS_SIMPLE } from '../../services/utils/constants';

const SimpleDiceFirstHand = () => {
  const dispatch = useDispatch();
  const data = state => state.simpleDice.firstHandPathObj;
  const firstHandState = useSelector(data);
  const sum = state => state.simpleDice.totalFirstHand;
  const total = useSelector(sum);

  useEffect(() => {
    if(Object.keys(firstHandState).length === TOTAL_CELLS_SIMPLE) {
      const newTotal = Object.values(firstHandState).reduce((acc, currentValue) => {return acc + Number(currentValue)}, 0);
      if (newTotal >= 60) {
        dispatch(countTotal({path: 'firstHand', value: (newTotal + 30)}))
      } else {
        dispatch(countTotal({path: 'firstHand', value: newTotal}))
      }
    }

    for (let key in firstHandState) {
      if (key.includes('One')) {
        dispatch(addToMultipliers({id: 'minMaxFour', value: firstHandState[key]}))
      }
    }

  }, [firstHandState])

  const handleUpdateResult = (path, id, value) => {
    dispatch(updateResult({path, id, value}));
  }

  return(
    <div className="flex flex-col gap-y-2">
        {diceOptions.map((option) => (
          <select 
            key={option.id} 
            id={option.id} 
            className={`custom-select w-11 h-10 border-2 border-[#e056fd] rounded-lg`}
            onChange={e => handleUpdateResult('firstHand', option.id, e.target.value)}
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

export default SimpleDiceFirstHand;