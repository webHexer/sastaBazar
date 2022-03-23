// react
import React from 'react';
import PropTypes from 'prop-types';

/**
 * @name Categories
 * @param {categoriesData} param0
 * @returns JSX for Categories Section
 */
const Categories = ({ categoriesData }) => {
  return (
    <div className="categories">
      {categoriesData?.map((category, index) => {
        const { id, name, description, key, imageUrl } = category;
        return (
          <div
            key={id}
            className={(index + 1) % 2 === 0 ? 'category img-left' : 'category img-right'}>
            <div className="category__body">
              <h2 className="category__body__name">{name}</h2>
              <p className="category__body__description">{description}</p>
              <button className="category__body__button">{`Explore ${key}`}</button>
            </div>

            <div className="category__image">
              <img src={imageUrl} alt={name} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

Categories.propTypes = {
  categoriesData: PropTypes.array
};

export default Categories;
