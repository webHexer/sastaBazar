import React, { useState } from 'react';

// components
import Accordion from '../components/general/Accordion';

// constants
import { accordionMenuItems } from '../constants';

/**
 * @name Products
 * @returns JSX for Products page
 */
const Products = () => {
  // states
  const [accordionData, setAccordionData] = useState(accordionMenuItems);

  const changeSelectedItem = (id) => {
    const data = JSON.parse(JSON.stringify(accordionData));
    data.forEach((item) => (item.id === id ? (item.active = true) : (item.active = false)));
    setAccordionData(data);
  };

  return (
    <div className="products">
      <Accordion accordionData={accordionData} changeSelectedItem={changeSelectedItem} />
    </div>
  );
};

export default Products;
