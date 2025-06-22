import { Module } from '@nestjs/common';
import { TecnologiasService } from './tecnologias.service';
import { TecnologiasController } from './tecnologias.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tecnologia } from './entities/tecnologia.entity';

@Module({
  controllers: [TecnologiasController],
  providers: [TecnologiasService],
  imports: [TypeOrmModule.forFeature([Tecnologia])],
  exports: [TypeOrmModule],
})
export class TecnologiasModule {} 