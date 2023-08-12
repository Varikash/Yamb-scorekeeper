import one from '../../assets/images/One.png';
import two from '../../assets/images/Two.png';
import three from '../../assets/images/Three.png';
import four from '../../assets/images/Four.png';
import five from '../../assets/images/Five.png';
import six from '../../assets/images/Six.png';


const SideField = () => {
  return(
    <div className='flex flex-col gap-y-2'>
      <img src={one} alt="one" className='w-11 h-10 bg-white rounded-lg'/>
      <img src={two} alt="two" className='w-11 h-10 bg-white rounded-lg'/>
      <img src={three} alt="three" className='w-11 h-10 bg-white rounded-lg'/>
      <img src={four} alt="four" className='w-11 h-10 bg-white rounded-lg'/>
      <img src={five} alt="five" className='w-11 h-10 bg-white rounded-lg'/>
      <img src={six} alt="six" className='w-11 h-10 bg-white rounded-lg'/>
      <span className='w-11 h-10 border-[#e056fd] border-2 whitespace-normal text-cell font-bold text-center flex justify-center items-center bg-[#ffbe76] rounded-lg'>For a total of 60 or more add 30</span>
      <span className='w-11 h-10 border-[#e056fd] border-2 font-bold text-center flex justify-center items-center text-xs bg-white rounded-lg'>MAX</span>
      <span className='w-11 h-10 border-[#e056fd] border-2 font-bold text-center flex justify-center items-center text-xs bg-white rounded-lg'>MIN</span>
      <span className='w-11 h-10 border-[#e056fd] border-2 whitespace-normal text-cell font-bold text-center flex justify-center items-center bg-[#ffbe76] rounded-lg'>Difference (MAX-MIN)*a</span>
      <span className='w-11 h-10 border-[#e056fd] border-2 font-bold text-center flex justify-center items-center text-9px bg-white rounded-lg'>2 PARA 2+2 (+10)</span>
      <span className='w-11 h-10 border-[#e056fd] border-2 font-bold text-center flex justify-center items-center text-9px bg-white rounded-lg'>SKALA</span>
      <span className='w-11 h-10 border-[#e056fd] border-2 font-bold text-center flex justify-center items-center text-9px bg-white rounded-lg'>FULL 3+2 (+40)</span>
      <span className='w-11 h-10 border-[#e056fd] border-2 font-bold text-center flex justify-center items-center text-9px bg-white rounded-lg'>POKER 4+1 (+50)</span>
      <span className='w-11 h-10 border-[#e056fd] border-2 font-bold text-center flex justify-center items-center text-9px bg-white rounded-lg'>YAMB <br /> 5 <br /> (+50)</span>
      <span className='w-11 h-10 border-[#e056fd] border-2 whitespace-normal text-9px font-bold text-center flex justify-center items-center bg-[#ffbe76] rounded-lg'>Total</span>
    </div>
    
  )
}

export default SideField;