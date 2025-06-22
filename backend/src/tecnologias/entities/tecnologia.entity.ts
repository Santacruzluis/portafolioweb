import { Proyecto } from '../../proyectos/entities/proyecto.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

export enum NivelTecnologia {
  AVANZADO = 'Avanzado',
  INTERMEDIO = 'Intermedio',
  BASICO = 'Basico',
}

@Entity({ name: 'tecnologias' })
export class Tecnologia {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text', {
    unique: true,
  })
  name: string;

  @Column({
    type: 'enum',
    enum: NivelTecnologia,
  })
  nivel: NivelTecnologia;

  @Column('text')
  imagen: string;

  @ManyToMany(() => Proyecto, (proyecto) => proyecto.tecnologias)
  proyectos: Proyecto[];
} 