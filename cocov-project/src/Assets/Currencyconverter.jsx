

import { useState, useEffect } from "react";
import CurrencySelector from "./CurrencySelector";
import { HiArrowsRightLeft } from "react-icons/hi2";


function Currencyconverter() {

  // State to hold the list of available currencies
  const [currencies, setCurrencies] = useState([]);
  // State for user-input amount to convert
  const [amount, setAmount] = useState(1.00); 
  
  // State to hold the selected "from" currency
  const [fromCurrency, setFromCurrency] = useState('USD'); 
  // State to hold the selected "to" currency
  const [toCurrency, setToCurrency] = useState('USD'); 
  
  // State for the result of the currency conversion
  const [convertedAmount, setConvertedAmount] = useState(null); 
  // State to indicate if conversion is in progress
  const [converting, setConverting] = useState(false); 
 
  // State for user's favorite currencies, loaded from local storage if available
  const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favorites')) || ['USD','EUR']); 
  

  // Fetch the list of currencies from the API on component mount
  const fetchCurrencies = async () => {
    try {
      const response = await fetch("https://api.frankfurter.app/currencies");
      const data = await response.json();

      // Set the available currencies from the API response
      setCurrencies(Object.keys(data));

    } catch (error) {
      console.error('Error Fetching data', error);
    }
  };

  // useEffect hook to run fetchCurrencies when the component is mounted
  useEffect(() => {
    fetchCurrencies();
  }, []);

  console.log(currencies);

  // Function to convert the entered amount between selected currencies
  const convertCurrency = async () => {
    if (!amount) return
    setConverting(true);
    try {
      const response = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`);
      const data = await response.json();

      // Set the result of the conversion in the appropriate state
      setConvertedAmount(data.rates[toCurrency] + " " + toCurrency);

    } catch (error) {
      console.error('Error Fetching data', error);
    } finally {
      setConverting(false);
    }
  }

  // Add or remove a currency from the user's favorites
  const handleFavorite = (currency) => {
    let updatedFavorites = [...favorites];

    // If the currency is already a favorite, remove it; otherwise, add it
    if(favorites.includes(currency)){
      updatedFavorites = updatedFavorites.filter(favo => favo !==currency);
    } else{
      updatedFavorites.push(currency);
    }

    // Update the favorites state and store the updated list in local storage
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  }
   
  // Function to swap the selected currencies (fromCurrency and toCurrency)
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

          {/* Input field for entering the amount to convert */}
          <input type="number" onChange={(e) => setAmount(e.target.value)} value={amount} className="w-full p-2 border border-[#B5651D] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#F76C6C] mt-1" /> <br />
        

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end">
          {/* CurrencySelector component for selecting the currency to convert from */}
          <CurrencySelector currencies={currencies} favorites={favorites} title="From currency" currency={fromCurrency} setCurrency={setFromCurrency} handleFavorite={handleFavorite}/>

          {/* Button to swap the selected currencies */}
          <div className="flex justify-center -mb-5 sm:mb-0">
            <button onClick={swapCurrencies} className="p-2 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300">
              <HiArrowsRightLeft className="text-xl text-[#B5651D]" />
            </button>
          </div>

          {/* CurrencySelector component for selecting the currency to convert to */}
          <CurrencySelector currency={toCurrency} favorites={favorites} currencies={currencies} setCurrency={setToCurrency} title="To currency" handleFavorite={handleFavorite}/>
        </div>
      </div>

      {/* Display the converted amount if available */}
      {convertedAmount && (
      <div className="mt-4 text-sm font-medium text-right text-[#F7CE68] border p-2 border-[#B5651D]">
         {convertedAmount}
      </div>)}

      <div className="flex justify-center mt-6">
        {/* Button to trigger the conversion, with a loading animation if converting */}
        <button onClick={convertCurrency} className={`px-5 py-2 text-[#FFFFFF] bg-[#F76C6C] rounded-md hover:bg-[#FF6B6B] focus:outline-none focus:ring-2 focus:ring-[#F7CE68] ${converting ? "animate-pulse" : ""}`}>Convert</button>
      </div>
    </div>
  )
}

export default Currencyconverter;
