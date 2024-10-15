import Currencyconverter from "../Assets/Currencyconverter"
import Card from '../components/Card'
import { GiQuickSlash } from "react-icons/gi";
import { BsCurrencyExchange } from "react-icons/bs";
import { MdOutlineFavorite } from "react-icons/md";
// import bgimage from "../images/backgroundImage.png"

function Home() {
  return (
    <main className="w-screen h-full flex items-center flex-col justify-start py-[50px] px-5">      
      <Currencyconverter className="mt-20" />
      <h2 className="text-xl mt-7 mb-3 text-white text-center font-semibold">What CoCov Currency Converter Offers You</h2>
      <div>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-3 p-6">
          {/* Card 1 */}
          <Card
            icon={<GiQuickSlash />}
            title="Get Exchange Rates Instantly"
            description="Receive up-to-date exchange rates quickly. Select currencies, enter an amount, and get conversions instantly!"
          />

          {/* Card 2 */}
          <Card
            icon={<BsCurrencyExchange />}
            title="Easily Switch Between Currencies"
            description="Toggle between selected currencies effortlessly with a single click. No need to re-enter data!"
          />

          {/* Card 3 */}
          <Card
            icon={<MdOutlineFavorite />}
            title="Save Your Favorite Currencies"
            description="Keep your preferred currencies handy for fast access. Save time and skip the search!"
          />
        </div>
      </div>
    </main>
  )
}

export default Home
