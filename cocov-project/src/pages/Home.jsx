import Currencyconverter from "../Assets/Currencyconverter"

function Home() {
  return (
    <main className="h-full flex justify-start flex-col items-center">
     <div className="">
      <h1 className="text-2xl mt-10 sm:text-4xl">Cucov currency converter</h1>
      <Currencyconverter />
      <h2></h2>
     </div>
    </main>
  )
}

export default Home
