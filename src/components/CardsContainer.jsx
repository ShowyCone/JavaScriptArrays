import { infoCards as data } from '../data/infoCards'
import Card from './Card'

function CardsContainer() {
  const CardContainerStyles =
    'relative w-[250px] h-[260px] flex justify-center items-center cursor-pointer rounded-[25px] shadow-card [&:hover>div>p]:text-[1em] [&:hover>div]:translate-y-[-30px] [&:hover>div]:shadow-[0px_10px_40px_0px_#0000001a] [&:hover>div]:bg-gradient-to-b from-skyGray via-skyGray1 to-skyGray2'

  return (
    <article className="place-items-center grid grid-cols-autoF w-[90vw] my-[50px] mx-auto text-center justify-evenly gap-y-[50px] gap-x-[40px]">
      {data.map((info) => (
        <section className={CardContainerStyles} key={info.id}>
          <Card info={info} />
        </section>
      ))}
    </article>
  )
}

export default CardsContainer
