import { useLocation } from 'react-router-dom';
import AccessibleLink from './Accessibility/AccessibleLink';

const Navbar = () => {
  const location = useLocation();
  console.log(location);

  return (
    <>
      <nav className='bg-white border-gray-200 dark:bg-gray-900 uppercase text-sm'>
        <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
          <AccessibleLink
            to='/'
            className='flex items-center space-x-3 rtl:space-x-reverse'
            aria-label='Ir a página de inicio'>
            <img
              src='/assets/img/logo-gaha.png'
              className='h-20'
              alt='Logo Gaha Aranda'
            />
          </AccessibleLink>
          <button
            data-collapse-toggle='navbar-default'
            type='button'
            className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-primary rounded-lg md:hidden hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
            aria-controls='navbar-default'
            aria-expanded='false'>
            <span className='sr-only'>Abrir menu</span>
            <svg
              className='w-5 h-5'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 17 14'>
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
                <AccessibleLink
                  to='/'
                  className={`relative block py-2 px-3 bg-primary rounded md:rounded-none md:bg-transparent md:hover:text-primary md:p-0 md:py-2 dark:text-white md:dark:text-primary group ${
                    location.pathname === '/'
                      ? 'text-primary'
                      : 'text-white md:text-secondary'
                  }`}
                  aria-current='page'>
                  Inicio
                  <span
                    className={`absolute bottom-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full group-hover:left-0 group-hover:translate-x-0 ${
                      location.pathname === '/'
                        ? 'w-full left-0 translate-x-0'
                        : 'w-0 left-1/2 -translate-x-1/2'
                    }`}></span>
                </AccessibleLink>
              </li>
              <li>
                <AccessibleLink
                  to='/servicios'
                  className={`relative block py-2 px-3 bg-primary rounded md:rounded-none md:bg-transparent md:hover:text-primary md:p-0 md:py-2 dark:text-white md:dark:text-primary group ${
                    location.pathname === '/servicios'
                      ? 'text-primary'
                      : 'text-white md:text-secondary'
                  }`}
                  aria-current='page'>
                  Servicios
                  <span
                    className={`absolute bottom-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full group-hover:left-0 group-hover:translate-x-0 ${
                      location.pathname === '/servicios'
                        ? 'w-full left-0 translate-x-0'
                        : 'w-0 left-1/2 -translate-x-1/2'
                    }`}></span>
                </AccessibleLink>
              </li>
              <li>
                <AccessibleLink
                  to='/productos'
                  className={`relative block py-2 px-3 bg-primary rounded md:rounded-none md:bg-transparent md:hover:text-primary md:p-0 md:py-2 dark:text-white md:dark:text-primary group ${
                    location.pathname === '/productos'
                      ? 'text-primary'
                      : 'text-white md:text-secondary'
                  }`}
                  aria-current='page'>
                  Productos
                  <span
                    className={`absolute bottom-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full group-hover:left-0 group-hover:translate-x-0 ${
                      location.pathname === '/productos'
                        ? 'w-full left-0 translate-x-0'
                        : 'w-0 left-1/2 -translate-x-1/2'
                    }`}></span>
                </AccessibleLink>
              </li>
              <li>
                {' '}
                <AccessibleLink
                  to='/nosotros'
                  className={`relative block py-2 px-3 bg-primary rounded md:rounded-none md:bg-transparent md:hover:text-primary md:p-0 md:py-2 dark:text-white md:dark:text-primary group ${
                    location.pathname === '/nosotros'
                      ? 'text-primary'
                      : 'text-white md:text-secondary'
                  }`}
                  aria-current='page'>
                  Nosotros
                  <span
                    className={`absolute bottom-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full group-hover:left-0 group-hover:translate-x-0 ${
                      location.pathname === '/nosotros'
                        ? 'w-full left-0 translate-x-0'
                        : 'w-0 left-1/2 -translate-x-1/2'
                    }`}></span>
                </AccessibleLink>
              </li>
              <li>
                <AccessibleLink
                  to='/contacto'
                  className={`relative block py-2 px-3 bg-primary rounded md:rounded-none md:bg-transparent md:hover:text-primary md:p-0 md:py-2 dark:text-white md:dark:text-primary group ${
                    location.pathname === '/contacto'
                      ? 'text-primary'
                      : 'text-white md:text-secondary'
                  }`}
                  aria-current='page'>
                  Contacto
                  <span
                    className={`absolute bottom-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full group-hover:left-0 group-hover:translate-x-0 ${
                      location.pathname === '/contacto'
                        ? 'w-full left-0 translate-x-0'
                        : 'w-0 left-1/2 -translate-x-1/2'
                    }`}></span>
                </AccessibleLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
