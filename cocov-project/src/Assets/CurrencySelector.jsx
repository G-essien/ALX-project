
import { HiOutlineStar, HiStar } from "react-icons/hi2";

// CurrencySelector component allows user to select currencies and manage favorites
const CurrencySelector =({currencies, currency, setCurrency, favorites, handleFavorite, title =""}) => {

  // Check if the current currency is in the favorites list
  const isFavorite = current => favorites.includes(current); // When selected as favorite currency, add to the favorite list of currency

  return (
    <div>
      {/* Label for the currency selector */}
      <label htmlFor={title} className="block text-sm font-medium text-[#3E3E3E]">{title}</label>
    
      <div className="mt-1 relative">
        {/* Dropdown to select currency */}
        <select onChange={(e) => setCurrency(e.target.value)} value={currency} className="w-full p-2 border border-[#B5651D] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-white ">
          {/* Loop through favorites and display them as the first options */}
          {favorites.map((currency) => {
            return( 
              <option className="bg-[#B5651D]" value={currency} key={currency}>
                {currency}
              </option>
          )})}
          <hr />
          {/* Loop through non-favorite currencies and display them */}
          {currencies
            .filter((c) => !favorites.includes(c))  // Filter the currencies selected as favorites from the list of currencies
            .map((currency) => {
            return( <option value={currency} key={currency}>
              {currency}
            </option>);
          })}
        </select>

          {/* Button to toggle favorite status of the currently selected currency */}
          {/* Click on the star icon to select a currency as favorite */}
        <button onClick={() => handleFavorite(currency)} className="absolute inset-y-0 right-0 pr-5 flex items-center text-sm leading-5"> 
          {/* Display a filled star if the currency is a favorite, otherwise show an outlined star */}
          {isFavorite(currency) ? <HiStar className="text-[#F76C6C]"  /> : <HiOutlineStar />} 
        </button> 
      </div>
    </div>
  );
}

export default CurrencySelector;
