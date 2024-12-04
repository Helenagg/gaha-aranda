const Card = ({ Icon, title, content }) => {
  return (
    <div className='max-w-sm p-4'>
      <div className='flex justify-center items-center'>
        <Icon className='text-primary text-5xl' />
      </div>
      <h5 className='p-0 md:p-4 text-2xl text-center font-bold tracking-tight text-primary dark:text-white'>
        {title}
      </h5>
      <p className='mb-3 font-normal text-center text-secondary dark:text-white'>
        {content}
      </p>
    </div>
  );
};

export default Card;
