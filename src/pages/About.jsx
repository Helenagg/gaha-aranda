import TimeLine from '../components/TimeLine';
import Contact from './Contact';

const About = () => {
  return (
    <>
    <section id='about' className='py-20 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl text-secondary mb-4 uppercase'>
            Sobre Nosotros
          </h2>
          <p className='text-primary text-xl max-w-2xl mx-auto'>
            Contamos con la mayor tecnología del conocimiento para los
            equipamientos textiles de los productos propios de AIRBUS MILITARY.
          </p>
        </div>
        <TimeLine />
      </div>
    </section>
    <Contact />
    </>
  );
};

export default About;
