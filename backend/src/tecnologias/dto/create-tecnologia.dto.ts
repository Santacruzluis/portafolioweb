import { IsEnum, IsString, MinLength } from 'class-validator';
import { NivelTecnologia } from '../entities/tecnologia.entity';

export class CreateTecnologiaDto {
  @IsString()
  @MinLength(1)
  name: string;

  @IsEnum(NivelTecnologia)
  nivel: NivelTecnologia;

  @IsString()
  imagen: string;
} 