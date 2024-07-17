import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import 'dotenv/config';

const config: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,

  database: 'postgres',
  synchronize: true,
  autoLoadEntities: true, // entities: [Photo, User],
};
export const typeOrmConfig = config;
