import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTecnologiaDto } from './dto/create-tecnologia.dto';
import { Tecnologia } from './entities/tecnologia.entity';

@Injectable()
export class TecnologiasService {
  constructor(
    @InjectRepository(Tecnologia)
    private readonly tecnologiaRepository: Repository<Tecnologia>,
  ) {}

  create(createTecnologiaDto: CreateTecnologiaDto) {
    const tecnologia = this.tecnologiaRepository.create(createTecnologiaDto);
    return this.tecnologiaRepository.save(tecnologia);
  }

  findAll() {
    return this.tecnologiaRepository.find({});
  }
} 