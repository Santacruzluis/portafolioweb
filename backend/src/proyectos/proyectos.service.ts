import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { CreateProyectoDto } from './dto/create-proyecto.dto';
import { Proyecto } from './entities/proyecto.entity';
import { Tecnologia } from '../tecnologias/entities/tecnologia.entity';

@Injectable()
export class ProyectosService {
  constructor(
    @InjectRepository(Proyecto)
    private readonly proyectoRepository: Repository<Proyecto>,
    @InjectRepository(Tecnologia)
    private readonly tecnologiaRepository: Repository<Tecnologia>,
  ) {}

  async create(createProyectoDto: CreateProyectoDto): Promise<Proyecto> {
    const { tecnologiasIds, ...proyectoDetails } = createProyectoDto;

    const tecnologias = await this.tecnologiaRepository.findBy({
      id: In(tecnologiasIds),
    });

    if (tecnologias.length !== tecnologiasIds.length) {
      throw new NotFoundException(
        'Una o más tecnologías no fueron encontradas.',
      );
    }

    const proyecto = this.proyectoRepository.create({
      ...proyectoDetails,
      tecnologias,
    });

    return this.proyectoRepository.save(proyecto);
  }

  findAll() {
    return this.proyectoRepository.find({
      relations: {
        tecnologias: true,
      },
    });
  }
} 