import { Tecnologia } from '../../tecnologias/entities/tecnologia.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'proyectos' })
export class Proyecto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text', {
    unique: true,
  })
  name: string;

  @Column('text')
  descripcion: string;

  @Column('text')
  url_repositorio: string;

  @ManyToMany(() => Tecnologia, (tecnologia) => tecnologia.proyectos, {
    cascade: true,
  })
  @JoinTable({
    name: 'proyectos_tecnologias',
    joinColumn: {
      name: 'proyecto_id',
    },
    inverseJoinColumn: {
      name: 'tecnologia_id',
    },
  })
  tecnologias: Tecnologia[];
} 