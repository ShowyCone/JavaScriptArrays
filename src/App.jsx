import CardsContainer from './components/CardsContainer'

function App() {
  const mainStyle =
    'm-auto text-center text-3xl p-1.5 h-screen w-[99.7%] flex flex-col justify-center bg-gradient-to-b from-skyGray via-skyGray1 via-skyGray2 via-skyGray3 to-skyGray4'
  const h3Style =
    'flex font-semibold p-5 rounded-[40px] bg-skyGray3 shadow-[11px_11px_45px_0px_#aeb8c2,-11px_-11px_45px_0px_#faffff] w-[288px] h-[76px] justify-center items-center my-[30px] mx-auto text-[1.17em]'

  return (
    <div className="App font-lato bg-[#dde7f3] text-[#464242] flex flex-col">
      <main className={mainStyle}>
        <h1 className="font-semibold my-[20px] mx-0 text-[2em] leading-[60px]">
          Arrays en JavaScript
        </h1>
        <h3 className={h3Style}>
          <span className="text-5xl">[</span> 'Métodos'
          <span className="text-5xl">]</span>
        </h3>
        <h5 className="font-light pt-[20px] pr-[25px] pb-[5px] pl-[25px]">
          Utilizados para ordenar, mutar, cambiar, filtrar y operar el contenido
          de los <span className="font-semibold">arrays</span>.
        </h5>
        <h4 className="pt-[30px] pr-[50px] pb-[50px] pl-[50px] font-semibold text[0.9em] justify-self-end">
          By: ShowyCone
        </h4>
      </main>

      <CardsContainer />
    </div>
  )
}

export default App
