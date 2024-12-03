import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className='bg-white border-gray-200 dark:bg-gray-900 uppercase text-sm'>
        <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
          <Link
            to='/'
            className='flex items-center space-x-3 rtl:space-x-reverse'
          >
            <img
              src='/assets/img/logo-gaha.png'
              className='h-20'
              alt='Logo Gaha Aranda'
            />
          </Link>
          <button
            data-collapse-toggle='navbar-default'
            type='button'
            className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-primary rounded-lg md:hidden hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
            aria-controls='navbar-default'
            aria-expanded='false'
          >
            <span className='sr-only'>Abrir menu</span>
            <svg
              className='w-5 h-5'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 17 14'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M1 1h15M1 7h15M1 13h15'
              />
            </svg>
          </button>
          <div className='hidden w-full md:block md:w-auto' id='navbar-default'>
            <ul className='flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
              <li>
              <Link
                  to='/'
                  className='relative block py-2 px-3 text-white bg-primary rounded md:rounded-none md:bg-transparent md:text-secondary md:hover:text-primary md:p-0 md:py-2 dark:text-white md:dark:text-primary group'
                  aria-current='page'
                >
                  Inicio
                  <span className='absolute left-1/2 bottom-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full group-hover:left-0'></span>
                </Link>
              </li>
              <li>
              <Link
                  to='/'
                  className='relative block py-2 px-3 text-white bg-primary rounded md:rounded-none md:bg-transparent md:text-secondary md:hover:text-primary md:p-0 md:py-2 dark:text-white md:dark:text-primary group'
                  aria-current='page'
                >
                  Servicios
                  <span className='absolute left-1/2 bottom-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full group-hover:left-0'></span>
                </Link>
              </li>
              <li>
              <Link
                  to='/'
                  className='relative block py-2 px-3 text-white bg-primary rounded md:rounded-none md:bg-transparent md:text-secondary md:hover:text-primary md:p-0 md:py-2 dark:text-white md:dark:text-primary group'
                  aria-current='page'
                >
                  Productos
                  <span className='absolute left-1/2 bottom-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full group-hover:left-0'></span>
                </Link>
              </li>
              <li>
              <Link
                  to='/'
                  className='relative block py-2 px-3 text-white bg-primary rounded md:rounded-none md:bg-transparent md:text-secondary md:hover:text-primary md:p-0 md:py-2 dark:text-white md:dark:text-primary group'
                  aria-current='page'
                >
                  Nosotros
                  <span className='absolute left-1/2 bottom-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full group-hover:left-0'></span>
                </Link>
              </li>
              <li>
                <Link
                  to='/'
                  className='relative block py-2 px-3 text-white bg-primary rounded md:rounded-none md:bg-transparent md:text-secondary md:hover:text-primary md:p-0 md:py-2 dark:text-white md:dark:text-primary group'
                  aria-current='page'
                >
                  Contacto
                  <span className='absolute left-1/2 bottom-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full group-hover:left-0'></span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
