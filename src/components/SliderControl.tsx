'use client';

interface Props {
  handleChange: (img: number) => void;
  activeImage: number;
}

const SliderControl: React.FC<Props> = ({ handleChange, activeImage }) => {
  return (
    <div className='flex relative justify-between w-1/2 max-w-[240px] lg:hidden'>
      <div onClick={() => handleChange(0)} className='controller-btn'>
        <div className={activeImage === 0 ? 'controller-btn-fill' : ''}></div>
      </div>
      <div onClick={() => handleChange(1)} className='controller-btn'>
        <div className={activeImage === 1 ? 'controller-btn-fill' : ''}></div>
      </div>
      <div onClick={() => handleChange(2)} className='controller-btn'>
        <div className={activeImage === 2 ? 'controller-btn-fill' : ''}></div>
      </div>

      <div
        className='
          absolute 
          bg-[#c6bf88] 
          h-1 
          left-1/2 
          top-1/2 
          transform 
          -translate-x-1/2 
          -translate-y-1/2
          w-full 
          z-0 
        '
      ></div>
    </div>
  );
};

export default SliderControl;
