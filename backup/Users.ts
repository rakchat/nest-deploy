// import { Injectable } from '@nestjs/common';
// import { CreateUserDto } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Users } from './entities/user.entity';
// import { Repository } from 'typeorm';

// @Injectable()
// export class UsersService {
//   constructor(
//     @InjectRepository(Users)
//     private userRepo: Repository<Users>,
//   ) {}

//   create(createUserDto: CreateUserDto) {
//     return this.userRepo.save(createUserDto);
//   }

//   findAll(): Promise<Users[]> {
//     return this.userRepo.find();
//   }

//   findOne(id: number) {
//     return this.userRepo.findOneBy({ id });
//   }

//   update(id: number, updateUserDto: UpdateUserDto) {
//     const update = this.userRepo.update(id, updateUserDto);
//     try {
//       if (update) {
//         return `Update id ${id} Success`;
//       }
//     } catch (error) {
//       return error;
//     }
//   }

//   async remove(id: number): Promise<string> {
//     await this.userRepo.delete(id);
//     return `Delete Success id: ${id}`;
//   }
// }
