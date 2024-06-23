import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './MealList.css'; // Ensure the path to your CSS file is correct

function MealList({ selectedCategory }) {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    if (selectedCategory) {
      const fetchMeals = async () => {
        try {
          const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`);
          setMeals(response.data.meals); // Assuming response.data has a meals array
        } catch (error) {
          console.error('Error fetching meals:', error);
        }
      };

      fetchMeals();
    }
  }, [selectedCategory]); // Fetch meals when selectedCategory changes

  return (
    <div className="meal-list">
      <ul className="meal-grid">
        {meals && meals.length > 0 ? (
          meals.map(meal => (
            <li key={meal.idMeal} className="meal-item">
              <a href="#">
                <div className="meal-content">
                  <div className="meal-image">
                    <img src={meal.strMealThumb} alt={meal.strMeal} />
                  </div>
                  <div className="meal-info">
                    <div className="meal-title">{meal.strMeal}</div>
                    <div className="meal-status">
                      <span>Lorem ipsum dolor sit amet</span>
                      <span> • </span>
                      <span>£2.70</span>
                      {/* <span> • </span> */}
                      {/* <span>250 kcal</span> */}
                    </div>
                    <div className="meal-description">{meal.strInstructions}</div>
                  </div>
                </div>
              </a>
            </li>
          ))
        ) : (
          selectedCategory && <p>Getting Meals {selectedCategory}</p>
        )}
      </ul>
    </div>
  );
}

export default MealList;
