import downArrow from '../../assets/images/down-arrow.png';
import upArrow from '../../assets/images/up-arrow.png';
import upDownArrow from '../../assets/images/up-and-down-arrow.png';

const Header = () => {
  return (
    <div className='flex gap-x-2 justify-end pr-52px'>
      <img src={downArrow} alt="arrow down" className='w-11 h-10 border-[#e056fd] border-2 bg-white rounded-lg'/>
      <img src={upArrow} alt="arrow up" className='w-11 h-10 border-[#e056fd] border-2 bg-white rounded-lg'/>
      <img src={upDownArrow} alt="up and down arrow" className='w-11 h-10 border-[#e056fd] border-2 bg-white rounded-lg'/>
      <span className='w-11 h-10 border-[#e056fd] border-2 flex justify-center items-center bg-white rounded-lg'>Call</span>
    </div>
  )
}

export default Header;