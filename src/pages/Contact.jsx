const Contact = () => {
  return (
    <>
      <div className=''>
        <div className='text-center mb-10'>
          <h1 className='text-secondary text-3xl'>Contacta con nosotros</h1>
        </div>
        <div className='grid grid-cols-3 gap-6'>
          <div className='col-span-2'>
            <form action='#' className='space-y-8'>
              <div>
                <label
                  htmlFor='name'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                  Nombre:
                </label>
                <input
                  type='text'
                  id='name'
                  className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
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
                  className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
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
                  className='block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
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
                  className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                  placeholder='Dejanos tu mensaje'></textarea>
              </div>
              <button
                type='submit'
                className='py-3 px-5 text-sm font-medium text-center text-secondary rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'>
                Send message
              </button>
            </form>
          </div>
          <div className='col-span-1'>Card</div>
        </div>
      </div>
    </>
  );
};

export default Contact;
