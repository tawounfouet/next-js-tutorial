const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita';


const fetchDrinks = async () => {
  const response = await fetch(url);
  // trow error if response is not ok
  if (!response.ok) {
    throw new Error('Failed to fetch drinks');
  }
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const data = await response.json();
  return data;
  // console.log(data);
}


const DrinkPage = async () => {
  const data = await fetchDrinks();
  console.log(data);
    return (
      <div>
        <h1 className='text-7xl'>DrinkPage</h1>
        
      </div>
    )
  }
  
  export default DrinkPage;
  
