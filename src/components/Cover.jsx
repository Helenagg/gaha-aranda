const Cover = () => {
  return (
    <div className='relative h-screen overflow-hidden'>
      <img
        src='/assets/img/cover.jpg'
        alt='Cover'
        className='absolute top-0 left-0 w-full h-full object-contain md:object-cover'
      />
    </div>
  );
};

export default Cover;
