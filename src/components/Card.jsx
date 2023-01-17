function Card({ info }) {
  return (
    <div className='p-[20px] flex flex-col justify-center rounded-[20px] w-[85%] min-h-[85%] bg-[#dde7f3] shadow-[0px_10px_20px_0px_#0000001a] duration-500'>
      <span className='text-[1.8em] my-[5px] mx-[auto] block justify-self-center relative font-semibold'>{info.title}</span>
      <p  dangerouslySetInnerHTML={{__html: info.description}} className='transition-[all] duration-300 text-[0px] font-normal'></p>
    </div>
  )
}

export default Card
