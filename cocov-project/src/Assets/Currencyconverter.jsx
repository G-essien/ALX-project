
import { useState, useEffect } from "react";
import CurrencySelector from "./CurrencySelector";
import { HiArrowsRightLeft } from "react-icons/hi2";


function Currencyconverter() {

  const [currencies, setCurrencies] = useState([]);
  const [amount, setAmount] = useState(1.00); 
  
  const [fromCurrency, setFromCurrency] = useState('USD'); 
  const [toCurrency, setToCurrency] = useState('USD'); 
  
  const [convertedAmount, setConvertedAmount] = useState(null); 
  const [converting, setConverting] = useState(false); 
 
  const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favorites')) || ['USD','EUR']); 
  
  

  

  // Fetching the currencies from API
  const fetchCurrencies = async () => {
    try {
      const response = await fetch("https://api.frankfurter.app/currencies");
      const data = await response.json();

      setCurrencies(Object.keys(data));

    } catch (error) {
      console.error('Error Fetching data', error);
    }
  };

  useEffect(() => {
    fetchCurrencies();
  }, []);

  console.log(currencies);

  // Convert the  amount of the selected currency to converted currency
  const convertCurrency = async () => {
    if (!amount) return
    setConverting(true);
    try {
      const response = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`);
      const data = await response.json();

      setConvertedAmount(data.rates[toCurrency] + " " + toCurrency);

    } catch (error) {
      console.error('Error Fetching data', error);
    } finally {
      setConverting(false);
    }
  }

  // Add selected currency to favorite
  const handleFavorite = (currency) => {
    let updatedFavorites = [...favorites];

    if(favorites.includes(currency)){
      updatedFavorites = updatedFavorites.filter(favo => favo !==currency);
    } else{
      updatedFavorites.push(currency);
    }

    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  }
   
  // Swap the currencies of FromCurrency to ToCurrency
  const swapCurrencies = () => {
    setFromCurrency(toCurrency)
    setToCurrency(fromCurrency)
  }

  return (
    <div className="max-w-xl my-10 p-5 bg-white rounded-lg shadow-md ">
    
      <div className="grid grid-cols-1">
          <label htmlFor="amount" className="block text-sm font-medium text-[#3E3E3E]">
            Enter amount: 
          </label>

          <input type="number" onChange={(e) => setAmount(e.target.value)} value={amount} className="w-full p-2 border border-[#B5651D] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#F76C6C] mt-1" /> <br />
        

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end">
          {/* CurrencySelector for the currency to convert from */}
          <CurrencySelector currencies={currencies} favorites={favorites} title="From currency" currency={fromCurrency} setCurrency={setFromCurrency} handleFavorite={handleFavorite}/>

          {/* button to swap the currency */}
          <div className="flex justify-center -mb-5 sm:mb-0">
            <button onClick={swapCurrencies} className="p-2 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300">
              <HiArrowsRightLeft className="text-xl text-[#B5651D]" />
            </button>
          </div>

          {/* CurrencySelector for the currency to be converted to */}
          <CurrencySelector currency={toCurrency} favorites={favorites} currencies={currencies} setCurrency={setToCurrency} title="To currency" handleFavorite={handleFavorite}/>
        </div>
      </div>

      {convertedAmount && (
      <div className="mt-4 text-sm font-medium text-right text-[#F7CE68] border p-2 border-[#B5651D]">
         {convertedAmount}
      </div>)}

      <div className="flex justify-center mt-6">
        <button onClick={convertCurrency} className={`px-5 py-2 text-[#FFFFFF] bg-[#F76C6C] rounded-md hover:bg-[#FF6B6B] focus:outline-none focus:ring-2 focus:ring-[#F7CE68] ${converting ? "animate-pulse" : ""}`}>Convert</button>
      </div>
       
    </div>
  )
}

export default Currencyconverter;
