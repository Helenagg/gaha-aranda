import Card from '../components/Card';
import { servicesData } from '../data/data';

const Services = () => {
  return (
    <div className='text-secondary mt-6'>
      <div className='text-center'>
        <h1 className='text-3xl uppercase'>Servicios</h1>
      </div>
      <div className='md:mt-10 flex items-center justify-center'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {servicesData.map((service) => (
            <Card
              key={service.title}
              title={service.title}
              content={service.content}
              Icon={service.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
