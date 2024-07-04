import '../index.css'
import { useEffect, useState } from 'react';
import SingleRecipe from './SingleRecipe';
import { useData } from '../Hooks/useData';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Recipelist() {
  const data = useData(`https://www.themealdb.com/api/json/v1/1/filter.php?a=Italian`);
  const [currentRecipes, setCurrentRecipes] = useState([]);

  useEffect(() => {
    if (data && data.meals) {
      setCurrentRecipes(data.meals);
    }
  }, [data]);

  console.log(currentRecipes);

  return (
    <>
      <div className="componentBox background">
        <Row xs={1} md={2} lg={3} className="g-4">
          {currentRecipes?.map((recipe, index) => (
            <Col key={index}>
              <SingleRecipe name={recipe.strMeal} image={recipe.strMealThumb} />
            </Col>
          ))}
        </Row>
      </div>
      <div>
        {/* Buttons for future sorting/filtering functionality */}
        {/* <button onClick={() => setCurrentRecipes([...currentRecipes].sort((a, b) => a.strMeal.localeCompare(b.strMeal)))}>Sort Alphabetically</button>
        <button onClick={() => setCurrentRecipes([...currentRecipes].reverse())}>Sort Reversing</button>
        <button onClick={() => setCurrentRecipes([...currentRecipes].filter(recipe => recipe.strMeal.startsWith('P')))}>Filter</button> */}
      </div>
    </>
  );
}


