// react
import React, { useEffect, useState } from 'react';

// components
import Carousel, { CarouselItem } from '../components/general/Carousel';

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8000/api/banners')
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="home">
      <Carousel>
        {data?.map((e, index) => (
          <CarouselItem key={index}>
            <img src={e.bannerImageUrl} alt={e.bannerImageAlt} />
          </CarouselItem>
        ))}
      </Carousel>
    </div>
  );
};

export default Home;
