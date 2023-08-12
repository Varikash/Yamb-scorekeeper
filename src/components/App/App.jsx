import SimpleDice from "../SimpleDice/SimpleDice.jsx";
import MinMaxDice from "../MinMaxDice/MinMaxDice.jsx";
import ComboDice from "../ComboDice/ComboDice.jsx";
import Header from "../Header/Header.jsx";
import SideField from "../SideField/SideField.jsx";

function App() {

  return (
    <section className='flex flex-col gap-y-2 max-w-xs mx-auto bg-[#ff7979] py-2 px-2'>
      <Header />
      <div className="flex gap-x-2">
          <SideField />
        <div className='flex flex-col gap-y-2'>
          <SimpleDice />
          <MinMaxDice />
          <ComboDice />
        </div>
      </div>
      
      
    </section>
  )
}

export default App
