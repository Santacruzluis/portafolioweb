import { Tecnologia } from './tecnologia';

export interface Proyecto {
  id: number;
  name: string;
  descripcion: string;
  url_repositorio: string;
  imagen: string;
  tecnologias: Tecnologia[];
} 