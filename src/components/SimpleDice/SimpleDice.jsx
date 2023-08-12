import SimpleDiceDown from "../SimpleDiceDown/SimpleDiceDown";
import SimpleDiceUp from "../SimpleDiceUp/SimpleDiceUp";
import SimpleDiceUpDown from "../SimpleDiceUpDown/SimpleDiceUpDown";
import SimpleDiceFirstHand from "../SimpleDiceFirstHand/SimpleDiceFirstHand";
import { useDispatch, useSelector } from "react-redux";
import { countTotal } from "../../services/reducers/simpleDiceSlice/simpleDiceSlice";
import { useEffect } from "react";

const SimpleDice = () => {
  const dispatch = useDispatch();
  const totalDown = useSelector(state => state.simpleDice.totalDown);
  const totalUp = useSelector(state => state.simpleDice.totalUp);
  const totalUpDown = useSelector(state => state.simpleDice.totalUpDown);
  const totalFirstHand = useSelector(state => state.simpleDice.totalFirstHand);
  const total = useSelector(state => state.simpleDice.total);
  

  useEffect(() => {
    if (totalDown !== null && totalUp !== null && totalUpDown !== null && totalFirstHand !== null) {
      const newTotal = (totalDown + totalUp + totalUpDown + totalFirstHand);
      dispatch(countTotal({ path: 'total', value: newTotal}));
    }

  }, [totalDown, totalUp, totalUpDown, totalFirstHand])


  return(
    <div className="flex gap-x-2">
      <div className="flex gap-x-2">
        <SimpleDiceDown />
        <SimpleDiceUp />
        <SimpleDiceUpDown />
        <SimpleDiceFirstHand />
      </div>
      <span className='w-11 h-10 border-2 border-[#e056fd] flex justify-center items-center self-end bg-[#ffbe76] rounded-lg'>
        {total}
      </span>
    </div>
    

  )
  
}

export default SimpleDice;