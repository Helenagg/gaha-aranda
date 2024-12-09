import AccessibleButton from "../components/Accessibility/AccessibleButton";
import Card from "../components/Card";
import { contactData } from "../data/data";

const Contact = () => {
  return (
    <>
      <div className='p-10'>
        <div className='text-center mb-10'>
          <h1 className='text-secondary text-3xl'>Contacta con nosotros</h1>
        </div>
        <div className='grid grid-cols-3 gap-6'>
          <div className='col-span-2'>
            <form action='#' className='space-y-8'>
              <div>
                <label
                  htmlFor='name'
                  className='block mb-2 text-sm text-secondary dark:text-gray-300'>
                  Nombre:
                </label>
                <input
                  type='text'
                  id='name'
                  className='shadow-sm bg-gray-50 border border-primary text-gray-900 text-sm rounded-md focus:ring-2 focus:outline-none focus:ring-secondary focus:border-secondary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary dark:shadow-sm-light'
                  placeholder='Nombre'
                  required
                />
              </div>
              <div>
                <label
                  htmlFor='email'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                  Email:
                </label>
                <input
                  type='email'
                  id='email'
                  className='shadow-sm bg-gray-50 border border-primary text-gray-900 text-sm rounded-md focus:ring-2 focus:outline-none focus:ring-secondary focus:border-secondary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary dark:shadow-sm-light'
                  placeholder='email@email.com'
                  required
                />
              </div>
              <div>
                <label
                  htmlFor='phone'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                  Teléfono
                </label>
                <input
                  type='number'
                  id='phone'
                  className='shadow-sm bg-gray-50 border border-primary text-gray-900 text-sm rounded-md focus:ring-2 focus:outline-none focus:ring-secondary focus:border-secondary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary dark:shadow-sm-light'
                  placeholder='Teléfono de contacto'
                  required
                />
              </div>
              <div className='sm:col-span-2'>
                <label
                  htmlFor='message'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400'>
                  Mensaje
                </label>
                <textarea
                  id='message'
                  rows='6'
                  className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-md shadow-sm border border-primary focus:ring-2 focus:outline-none focus:ring-secondary focus:border-secondary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary'
                  placeholder='Dejanos tu mensaje'></textarea>
              </div>
              <AccessibleButton
                type='submit'
                ariaLabel='Enviar mensaje'
                className='py-3 px-5 text-sm font-medium text-center text-white rounded-md bg-secondary sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary dark:bg-primary dark:hover:bg-primary dark:focus:ring-primary'>
                Enviar Mensaje
              </AccessibleButton>
            </form>
          </div>
          <div className='col-span-1'>
            {contactData.map((card) => (
              <Card 
                key={card.title}
                title={card.title}
                content={card.content}
                Icon={card.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
