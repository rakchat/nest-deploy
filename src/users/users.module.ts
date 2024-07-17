import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
// ~! add
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './entities/user.entity';

@Module({
  // ~! add
  imports: [TypeOrmModule.forFeature([Users])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
