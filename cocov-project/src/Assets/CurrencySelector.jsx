
import { HiOutlineStar, HiStar } from "react-icons/hi2";

const CurrencySelector =({currencies, currency, setCurrency, favorites, handleFavorite, title =""}) => {

  const isFavorite = current => favorites.includes(current); // When selected as favorite currency, add to the favorite list of currency

  return (
    <div>
      <label htmlFor={title} className="block text-sm font-medium text-[#3E3E3E]">{title}</label>
    
      <div className="mt-1 relative">
        <select onChange={(e) => setCurrency(e.target.value)} value={currency} className="w-full p-2 border border-[#B5651D] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-white ">
          {favorites.map((currency) => {
            return( 
              <option className="bg-[#B5651D]" value={currency} key={currency}>
                {currency}
              </option>
          )})}
          <hr />
          {currencies
            .filter((c) => !favorites.includes(c))  // Filter the currencues selected as favorites from the list of currencies
            .map((currency) => {
            return( <option value={currency} key={currency}>
              {currency}
            </option>);
          })}
        </select>

          {/* Click on the star icon to select a currency as fovorite */}
        <button onClick={() => handleFavorite(currency)} className="absolute inset-y-0 right-0 pr-5 flex items-center text-sm leading-5"> 
          {isFavorite(currency) ? <HiStar className="text-[#F76C6C]"  /> : <HiOutlineStar />} 
        </button> 
      </div>
    </div>
  );
}

export default CurrencySelector;
