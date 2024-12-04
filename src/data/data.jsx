import { MdOutlineDesignServices } from 'react-icons/md';
import { MdOutlineEngineering } from 'react-icons/md';
import { GrValidate } from 'react-icons/gr';
import { MdApproval } from 'react-icons/md';
import { MdPrecisionManufacturing } from 'react-icons/md';
import { MdProductionQuantityLimits } from 'react-icons/md';
import { GrVmMaintenance } from 'react-icons/gr';
import { LiaToolsSolid } from 'react-icons/lia';
import { BsAirplaneEngines } from 'react-icons/bs';
import { BsAirplane } from 'react-icons/bs';
import { GiMilitaryAmbulance } from 'react-icons/gi';
import { GiDeliveryDrone } from 'react-icons/gi';

export const servicesData = [
  {
    title: 'Diseño',
    content:
      'Especializados en el diseño de equipamiento aeronáutico y militar desde 1968.',
    icon: MdOutlineDesignServices,
  },
  {
    title: 'Ingeniería',
    content:
      'A la vanguardia de los avances tecnológicos diseñamos soluciones innovadoras y personalizadas.',
    icon: MdOutlineEngineering,
  },
  {
    title: 'Validación',
    content:
      'Todo el proceso de diseño, fabricación y montaje tienen la supervisión y validación por profesionales en el sector.',
    icon: GrValidate,
  },
  {
    title: 'Homologación',
    content:
      'Cumplimos con todas las especificaciones y características necesarias.',
    icon: MdApproval,
  },
  {
    title: 'Fabricación',
    content:
      'Realizamos todos los procesos necesarios para la fabricación de componentes aeronáuticos',
    icon: MdPrecisionManufacturing,
  },
  {
    title: 'Montaje',
    content:
      'Gracias a nuestra integración vertical, facilitamos el montaje de piezas y conjuntos aeronáuticos acabados y de alta.',
    icon: MdProductionQuantityLimits,
  },
  {
    title: 'MRO: Mantenimiento',
    content:
      'Mantenimiento, reparación y operaciones para mantener todos los activos en funcionamiento.',
    icon: GrVmMaintenance,
  },
  {
    title: 'Utillaje',
    content:
      'Disponemos de los instrumentos y herramientas necesarias para dar un servicio de la máxima calidad posible.',
    icon: LiaToolsSolid,
  },
];

export const productsData = [
  {
    title: 'Aeronautica Militar',
    content:
      'Suministramos y gestionamos el mantenimiento de equipos, repuestos, y sistemas en uso de las Fuerzas Armadas.',
    icon: BsAirplaneEngines,
  },
  {
    title: 'Aeronautica Civil',
    content:
      'Las principales empresas privadas del sector cuentan con nuestros productos para mantener operativas sus aeronaves.',
    icon: BsAirplane,
  },
  {
    title: 'Defensa',
    content:
      'Disponemos de materiales y servicios que satisfacen las necesidades del sector aeronáutico con total garantía y solvencia.',
    icon: GiMilitaryAmbulance,
  },
  {
    title: 'Aviones no tripulados',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae asperiores nam quod tempora suscipit necessitatibus nostrum fuga',
    icon: GiDeliveryDrone,
  },
];
