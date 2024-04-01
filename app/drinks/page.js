
import DrinksList from '@/components/DrinksList';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';



const fetchDrinks = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(url);
  // trow error if response is not ok
  if (!response.ok) {
    throw new Error('Failed to fetch drinks');
  }

  const data = await response.json();
  return data;
 
}


const DrinkPage = async () => {
  const data = await fetchDrinks();
  // console.log(data);
    return (
      <div>
        <DrinksList drinks={data.drinks} />
        
      </div>
    )
  }
  
  export default DrinkPage;
  
