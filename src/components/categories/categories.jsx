import './categories.sass';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import { useSelector } from 'react-redux';
const Categories = ({ onClickCategory }) => {
  const categoryId = useSelector((state) => state.filter.categoryId);

  const categories = [
    'Все',
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые',
    'Грибные',
    'Морские',
  ];
  const slider = categories.map((val, index) => {
    return (
      <SwiperSlide key={index}>
        <li
          key={index}
          onClick={() => onClickCategory(index)}
          className={categoryId === index ? 'active' : ''}
          style={{ textAlign: 'center' }}>
          {val}
        </li>
      </SwiperSlide>
    );
  });

  return (
    <div className="categories">
      <ul>
        <Swiper
          grabCursor={true}
          className="mySwiper"
          slidesPerView={4}
          loop={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}>
          {slider}
        </Swiper>
      </ul>
    </div>
  );
};

export default Categories;
