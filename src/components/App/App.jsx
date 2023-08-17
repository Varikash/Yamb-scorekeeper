import SimpleDice from "../SimpleDice/SimpleDice.jsx";
import MinMaxDice from "../MinMaxDice/MinMaxDice.jsx";
import ComboDice from "../ComboDice/ComboDice.jsx";
import Header from "../Header/Header.jsx";
import SideField from "../SideField/SideField.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { countTotal } from "../../services/reducers/mainSlice/mainSlice.js";

function App() {
  const dispatch = useDispatch();
  const comboData = state => state.combo.total;
  const totalCombo = useSelector(comboData);
  const minMaxData = state => state.minMax.total;
  const minMaxTotal = useSelector(minMaxData);
  const simpleDiceData = state => state.simpleDice.total;
  const simpleDiceTotal = useSelector(simpleDiceData);
  const sum = state => state.main.total;
  const mainTotal = useSelector(sum);

  useEffect(() => {
    if (totalCombo !== null && minMaxTotal !== null && simpleDiceTotal !== null) {
      const newTotal = (totalCombo + minMaxTotal + simpleDiceTotal);
      dispatch(countTotal(newTotal));
    }
  })


  return (
    <section className="w-full h-full bg-[#ff7979]">
      <div className='flex flex-col gap-y-2 max-w-xs mx-auto bg-[#ff7979] py-2 px-2'>
        <Header />
        <div className="flex gap-x-2">
          <SideField />
          <div className='flex flex-col gap-y-2'>
            <SimpleDice />
            <MinMaxDice />
            <ComboDice />
            <span 
              className="w-16 h-10 border-2 border-[#e056fd] flex justify-center items-center self-end bg-[#ffbe76] rounded-lg">
              {mainTotal}
            </span>
          </div>
        </div>
      </div>
    </section>
    
  )
}

export default App
