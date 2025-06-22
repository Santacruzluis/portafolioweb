import { IsArray, IsInt, IsString, MinLength } from 'class-validator';

export class CreateProyectoDto {
  @IsString()
  @MinLength(1)
  name: string;

  @IsString()
  descripcion: string;

  @IsString()
  url_repositorio: string;

  @IsString()
  imagen: string;

  @IsArray()
  @IsInt({ each: true })
  tecnologiasIds: number[];
} 