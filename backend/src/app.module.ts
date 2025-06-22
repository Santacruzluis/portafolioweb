import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from './database/database.module';
import { ProyectosModule } from './proyectos/proyectos.module';
import { TecnologiasModule } from './tecnologias/tecnologias.module';

@Module({
  imports: [
    // Configura ConfigModule para cargar variables de entorno.
    ConfigModule.forRoot(),
    // Configura la conexión principal a la base de datos PostgreSQL usando TypeORM.
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT || '5432'),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: true,
      ssl: process.env.DB_SSL === 'true',
      ...(process.env.DB_SSL === 'true' && {
        extra: {
          ssl: {
            rejectUnauthorized: false,
          },
        },
      }),
    }),
    DatabaseModule,
    ProyectosModule,
    TecnologiasModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
