import backgroundImage from '/assets/img/cover.jpg';

const Cover = () => {
  return (
    <section
      className='relative h-[40vh] md:h-[60vh] lg:h-[80vh] w-full bg-cover bg-center flex items-center justify-start'
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className='z-10 max-w-4xl px-6 text-left'></div>
    </section>
  );
};

export default Cover;
