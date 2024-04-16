import axios from 'axios';
import Categories from '../components/categories/categories';
import Sort from '../components/sort/sort';
import SkeletonPizza from '../components/skeleton/skeleton';
import PizzaBlock from '../components/pizzaBlock/pizzaBlock';
import { setCategoryId } from '../redux/slices/filterSlice';
import { useContext, useEffect, useState } from 'react';
import { SearchContext } from '../App';
import { Pagination, Stack, Container } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { setPageCount } from '../redux/slices/filterSlice';

const Main = () => {
  const { categoryId, sort, pageCount } = useSelector((state) => state.filter);
  const order = true ? 'desc' : 'asc';

  const dispatch = useDispatch();
  const changePage = (e, value) => {
    dispatch(setPageCount(value));
  };
  const { inputValue } = useContext(SearchContext);
  const [pizza, setPizza] = useState([]);
  const [loading, setLoading] = useState(true);

  const onClickCategory = (id, value) => {
    dispatch(setCategoryId(id));
  };
  useEffect(() => {
    axios
      .get(
        `https://630a2014324991003280ef4e.mockapi.io/items?page=${pageCount}&limit=4&category=${categoryId}&sortBy=${sort.prop}&order=${order}`,
      )
      .then((res) => {
        setPizza(res.data);
        setLoading(false);
      });
  }, [pageCount, categoryId, order, sort.prop]);

  const pizzas = pizza
    .filter((obj) => {
      if (obj.title.toLowerCase().includes(inputValue.toLowerCase())) {
        return true;
      }
      return false;
    })
    .map((obj) => <PizzaBlock {...obj} key={obj.id} />);

  return (
    <div className="container">
      <div className="content__top">
        <Categories onClickCategory={(id) => onClickCategory(id)} />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{loading ? <SkeletonPizza /> : pizzas}</div>
      <Container>
        <Stack>
          <Pagination count={3} size="large" onChange={changePage} />
        </Stack>
      </Container>
    </div>
  );
};
export default Main;
