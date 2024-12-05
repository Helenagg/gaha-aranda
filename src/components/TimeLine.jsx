import { FaHistory } from 'react-icons/fa';
import { FaRegStar } from 'react-icons/fa';
import { FaIndustry } from 'react-icons/fa';

const TimeLine = () => {
  const milestones = [
    {
      year: '1968',
      title: 'Fundación de la compañía',
      description:
        'Contamos con la mayor tecnología del conocimiento para los equipamientos textiles de los productos propios de AIRBUS MILITARY.',
      icon: FaHistory,
    },
    {
      year: '1998',
      title: 'Comienzo de la gestión administrativa y comercial.',
      description:
        'La familia Aranda autónomamente inició la gestión administrativa, documental y comercial así como la fabricación de pequeños conjuntos, de estos equipamientos diseñados y fabricados por nuestros trabajadores para la firma de EL CABALLO.',
      icon: FaRegStar,
    },
    {
      year: '2002',
      title: 'Constitución de Guarnicionería Aeronáutica Hnos. Aranda SLL',
      description:
        'Compañía que absorbe todos los trabajos de tapicería y guarnicionería así como los equipos de tierra textiles de los aviones C212, CN235 Y C295',
      icon: FaIndustry,
    },
    // {
    //   year: "2020",
    //   title: "Industry Leader",
    //   description: "Became the leading supplier for military aviation textiles",
    //   icon: FaIndustry
    // }
  ];
  return (
    <div className='py-12'>
      <div className='max-w-3xl mx-auto'>
        {milestones.map((milestone, index) => (
          <div key={index} className='relative pl-8 pb-8 group'>
            <div className='absolute left-0 top-0 h-full w-px bg-secondary group-last:hidden' />
            <div className='absolute left-0 top-2 -translate-x-1/2 h-4 w-4 rounded-full border-2 border-secondary bg-primary' />
            <milestone.icon className='h-8 w-8 text-primary mb-2' />
            <div className='text-xl font-bold text-secondary mb-1'>
              {milestone.year}
            </div>
            <div className='text-lg font-semibold text-primary mb-2'>
              {milestone.title}
            </div>
            <p className='text-secondary'>{milestone.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimeLine;
