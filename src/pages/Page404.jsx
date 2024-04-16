import { Link } from 'react-router-dom';

const Page404 = () => {
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>К сожалению страница не найдена :(</h1>
      <p style={{ textAlign: 'center' }}>Вы можете вернутся назад по кнопке ниже </p>
      <Link
        to="/"
        style={{
          margin: '0 auto',
          textAlign: 'center',
          display: 'block',
          border: '1px solid black',
          width: 'fit-content',
          padding: '5px',
          marginTop: '40px',
        }}>
        Назад
      </Link>
    </>
  );
};

export default Page404;
