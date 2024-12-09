import { FaFacebookF } from 'react-icons/fa6';
import { FaXTwitter } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa6';
import { FaLinkedinIn } from 'react-icons/fa6';
import { FaPhoneVolume } from 'react-icons/fa6';
import { MdPlace } from 'react-icons/md';
import { MdOutlineMarkEmailRead } from 'react-icons/md';
import AccessibleLink from './Accessibility/AccessibleLink';

const Footer = () => {
  return (
    <>
      <footer className='bg-gradient-to-b from-white to-primary text-center text-secondary dark:bg-neutral-700 dark:text-white/75 lg:text-left'>
        <div className='flex items-center justify-center  border-neutral-200 p-6 dark:border-white/10 lg:justify-between'>
          <div className='me-12 hidden md:block text-sm'>
            <span>Conecta con nostros en redes sociales: </span>
          </div>
          <div className='flex justify-center'>
            <AccessibleLink
              to='/'
              className='me-6'
              aria-label='Página de Facebook'>
              <FaFacebookF />
            </AccessibleLink>
            <AccessibleLink to='/' className='me-6' aria-label='Página de X'>
              <FaXTwitter />
            </AccessibleLink>
            <AccessibleLink
              to='/'
              className='me-6'
              aria-label='Página de Instagram'>
              <FaInstagram />
            </AccessibleLink>
            <AccessibleLink
              to='/'
              className='me-6'
              aria-label='Página de Linkedin'>
              <FaLinkedinIn />
            </AccessibleLink>
          </div>
        </div>

        <div className='mx-6 py-10 text-center md:text-left'>
          <div className='grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
            <div className='order-last md:order-first'>
              <AccessibleLink to='/' className='focus:outline-none'>
                <img
                  src='/assets/img/logo-gaha.png'
                  alt='Logo Gaha Aranda'
                  className='md:ml-4'
                />
              </AccessibleLink>
            </div>
            <div>
              <h6 className='mb-4 flex justify-center font-semibold uppercase md:justify-start'>
                Secciones
              </h6>
              <p className='mb-4'>
                <AccessibleLink to='servicios' className='focus:outline-none'>Servicios</AccessibleLink>
              </p>
              <p className='mb-4'>
                <AccessibleLink to='/productos' className='focus:outline-none'>Productos</AccessibleLink>
              </p>
              <p className='mb-4'>
                <AccessibleLink to='/nosotros' className='focus:outline-none'>Nosotros</AccessibleLink>
              </p>
              <p>
                <AccessibleLink to='/contacto' className='focus:outline-none'>Contacto</AccessibleLink>
              </p>
            </div>
            <div>
              <h6 className='mb-4 flex justify-center font-semibold uppercase md:justify-start'>
                Legal
              </h6>
              <p className='mb-4'>
                <AccessibleLink to='/aviso-legal' className='focus:outline-none'>Aviso Legal</AccessibleLink>
              </p>
              <p className='mb-4'>
                <AccessibleLink to='/privacidad' className='focus:outline-none'>
                  Política de privacidad
                </AccessibleLink>
              </p>
              <p className='mb-4'>
                <AccessibleLink to='/cookies' className='focus:outline-none'>
                  Política de cookies
                </AccessibleLink>
              </p>
              <p>
                <AccessibleLink to='/accesibilidad' className='focus:outline-none'>
                  Declaración de accesibilidad
                </AccessibleLink>
              </p>
            </div>
            <div>
              <h6 className='mb-4 flex justify-center font-semibold uppercase md:justify-start'>
                Contacto
              </h6>
              <p className='mb-4 flex items-center justify-center md:justify-start'>
                <span className='me-3'>
                  <MdPlace />
                </span>
                Calle Eúfrates, 12 41020 Sevilla
              </p>
              <p className='mb-4 flex items-center justify-center md:justify-start'>
                <span className='me-3'>
                  <MdOutlineMarkEmailRead />
                </span>
                info@gaha-aranda.com
              </p>
              <p className='mb-4 flex items-center justify-center md:justify-start'>
                <span className='me-3'>
                  <FaPhoneVolume />
                </span>
                954 519 009
              </p>
            </div>
          </div>
        </div>

        <div className='text-center flex justify-center items-center mt-2 border-t border-gray-400 p-4'>
          <img
            src='/assets/img/logo-fondos-europeos-blanco.jpeg'
            alt='Logo Kit Digital'
          />
        </div>
      </footer>
    </>
  );
};

export default Footer;
