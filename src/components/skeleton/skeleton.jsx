import Skeleton from '@mui/material/Skeleton';

const SkeletonPizza = () => {
  return [...Array(8)].map((_, i) => {
    return (
      <div className="pizza-block" key={i}>
        <Skeleton variant="circular" width={240} height={240} style={{ marginLeft: '20px' }} />
        <Skeleton variant="rectangular" width={280} height={55} style={{ marginTop: '20px' }} />
        <Skeleton variant="rounded" width={280} height={88} style={{ marginTop: '20px' }} />
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '20px',
          }}>
          <Skeleton variant="rectangular" width={89} height={30} />
          <Skeleton variant="rounded" width={150} height={60} />
        </div>
      </div>
    );
  });
};

export default SkeletonPizza;
