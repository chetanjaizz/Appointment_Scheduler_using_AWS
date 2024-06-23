

import React, { useEffect } from 'react';
import axios from 'axios';
import './Cat.css';

function CategoryList({ categories, setCategories, onCategorySelect }) {
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
        setCategories(response.data.meals); // Assuming response.data has a meals array
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, [setCategories]); 

  return React.createElement(
    'div',
    { className: 'horizontal-scroller' },
    React.createElement(
      'div',
      { className: 'category-list' },
      categories.map(category =>
        React.createElement(
          'div',
          { key: category.strCategory, className: 'category-item' },
          React.createElement(
            'button',
            {
              type: 'button',
              className: 'btn bg-transparent btn-lg',
              onClick: () => onCategorySelect(category.strCategory)
            },
            category.strCategory
          )
        )
      )
    )
  );
}

export default CategoryList;
