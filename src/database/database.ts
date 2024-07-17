import { TypeOrmModule } from '@nestjs/typeorm';

export const connectDatabase = [
  TypeOrmModule.forRoot({
    type: 'postgres',
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT),
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    autoLoadEntities: true,
    // entities: ['dist/**/*.entity.js'], // autoLoadEntities: true, // entities: [Photo, User]
    // entities: ['dist/**/*.entity.js'], // autoLoadEntities: true, // entities: [Photo, User]
    synchronize: true,
  }),
];
