import { Controller, Get } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

@Controller('database')
export class DatabaseController {
  constructor(@InjectDataSource() private readonly dataSource: DataSource) {}

  @Get('status')
  async getDatabaseStatus() {
    try {
      await this.dataSource.query('SELECT 1');
      return { status: 'ok', message: 'Database connection successful' };
    } catch (error) {
      return {
        status: 'error',
        message: 'Database connection failed',
        error: error.message,
      };
    }
  }
} 