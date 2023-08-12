import ComboDiceDown from "../ComboDiceDown/ComboDiceDown";
import ComboDiceUp from "../ComboDiceUp/ComboDiceUp";
import ComboDiceUpDown from "../ComboDiceUpDown/ComboDiceUpDown";
import ComboDiceFirstHand from "../ComboDiceFirstHand/ComboDiceFirstHand";
import { countTotal } from "../../services/reducers/comboDiceSlice/comboDiceSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const ComboDice = () => {
  const dispatch = useDispatch();
  const totalDown = useSelector(state => state.combo.totalDown);
  const totalUp = useSelector(state => state.combo.totalUp);
  const totalUpDown = useSelector(state => state.combo.totalUpDown);
  const totalFirstHand = useSelector(state => state.combo.totalFirstHand);
  const total = useSelector(state => state.combo.total);

  useEffect(() => {
    if (totalDown !== null && totalUp !== null && totalUpDown !== null && totalFirstHand !== null) {
      const newTotal = (totalDown + totalUp + totalUpDown + totalFirstHand);
      dispatch(countTotal({ path: 'total', value: newTotal}));
    }
  }, [totalDown, totalUp, totalUpDown, totalFirstHand])


  return(
    <div className="flex gap-x-2">
      <div className="flex gap-x-2">
        <ComboDiceDown />
        <ComboDiceUp />
        <ComboDiceUpDown />
        <ComboDiceFirstHand />
      </div>
      <span
        className='w-11 h-10 border-2 border-[#e056fd] flex justify-center items-center self-end bg-[#ffbe76] rounded-lg'
      >{total}</span>
    </div>
    
  )
}

export default ComboDice;