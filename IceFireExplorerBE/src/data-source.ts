import 'reflect-metadata';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: 'database.sqlite', // Use ':memory:' for in-memory DB
  synchronize: true,           // Auto-create tables
  logging: false,
  entities: [__dirname + '/entities/*.ts'],
  migrations: [__dirname + '/migrations/*.ts'],
});