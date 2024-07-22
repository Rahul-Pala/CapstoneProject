import '../index.css';
import { useEffect, useState } from 'react';
import SingleRecipeTwo from './SingleRecipeTwo';
import { useData } from '../Hooks/useData';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function RecipeTwo() {
  const data = useData(`https://api.sampleapis.com/recipes/recipes`);
  const [currentRecipes, setCurrentRecipes] = useState([]);

  useEffect(() => {
    if (data && Array.isArray(data)) {
      setCurrentRecipes(data);
    }
  }, [data]);

  console.log(currentRecipes);

  return (
    <>
      <div className="componentBox background">
        <Row xs={1} md={2} lg={3} className="g-4">
          {currentRecipes?.map((recipe) => (
            <Col key={recipe.id || recipe.title}>
              <SingleRecipeTwo name={recipe.title} image={recipe.photoUrl} description={recipe.mainIngredient} ingredients={recipe.ingredients} />
            </Col>
          ))}
        </Row>
      </div>
      <div>
        {/* Buttons for future sorting/filtering functionality */}
        {/* <button onClick={() => setCurrentRecipes([...currentRecipes].sort((a, b) => a.title.localeCompare(b.title)))}>Sort Alphabetically</button>
        <button onClick={() => setCurrentRecipes([...currentRecipes].reverse())}>Sort Reversing</button>
        <button onClick={() => setCurrentRecipes([...currentRecipes].filter(recipe => recipe.title.startsWith('P')))}>Filter</button> */}
      </div>
    </>
  );
}
