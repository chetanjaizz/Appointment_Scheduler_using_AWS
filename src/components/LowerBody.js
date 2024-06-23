// import React, { useState } from 'react';
// import CategoryList from './CategoryList';
// import MealList from './MealList';

// export default function LowerBody() {
//   const [categories, setCategories] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState(null);

//   const handleCategorySelect = (category) => {
//     setSelectedCategory(category);
//   };

//   return React.createElement(
//     'div',
//     null,
//     React.createElement(
//       'div',
//       { className: 'row centered-row', style: { fontFamily: 'Arial, sans-serif', fontSize: '18px', fontWeight: 'bold', color: 'black' , marginBottom : "-20px"} },
//       'Shop by category'
//     ),
//     React.createElement(
//       'div',
//       { className: 'row centered-row',style: { fontFamily: 'Georgia, serif', fontSize: '18px', fontWeight: 'bold', color: 'black' } },
//       'Top Category Of Organic Food'
//     ),
//     React.createElement(CategoryList, { categories: categories, setCategories: setCategories, onCategorySelect: handleCategorySelect }),
//     selectedCategory && React.createElement(MealList, { selectedCategory: selectedCategory })
//   );
// }














// {/* <div className="row centered-row">
//         {categories.map((category, index) => (
//           <div key={index} className="col col-md-auto button">
//             <button type="button" className="btn btn-primary">
//               {category.strCategory}
//             </button>
//           </div>
//         ))}
//       </div> */}


import React, { useState, useRef } from 'react';
import CategoryList from './CategoryList';
import MealList from './MealList';

export default function LowerBody() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [hasScrolled, setHasScrolled] = useState(false);
  const mealListRef = useRef(null);

  const handleCategorySelect = (category) => {
    if (!hasScrolled) {
      
        setSelectedCategory(category);

        const elementPosition = mealListRef.current.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - 300; // Adjust the offset value as needed
        setTimeout(() => {
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });

        setHasScrolled(true);
      }, 700); // 1000 milliseconds = 1 second delay
    } 
    else {
      setSelectedCategory(category);
    }
  };

  return (
    <div>
      <div
        className="row centered-row"
        style={{ fontFamily: 'Arial, sans-serif', fontSize: '18px', fontWeight: 'bold', color: 'black', marginBottom: '-20px' }}
      >
        Shop by category
      </div>
      <div
        className="row centered-row"
        style={{ fontFamily: 'Georgia, serif', fontSize: '18px', fontWeight: 'bold', color: 'black' }}
      >
        Top Category Of Organic Food
      </div>
      <CategoryList categories={categories} setCategories={setCategories} onCategorySelect={handleCategorySelect} />
      <div ref={mealListRef}>
        {selectedCategory && <MealList selectedCategory={selectedCategory} />}
      </div>
    </div>
  );
}


