import { Injectable } from '@nestjs/common';
import { CreateUserDto, UserSearch } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './entities/user.entity';
import { Repository } from 'typeorm';
import { IBaseTable } from 'src/utils/helper';

const path = 'users';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private userRepo: Repository<Users>,
  ) {}

  create(createUserDto: CreateUserDto) {
    return this.userRepo.save(createUserDto);
  }

  async findAll(search: UserSearch) {
    const { size, query, sortBy, orderBy, name } = search;

    const builder = this.userRepo.createQueryBuilder(path);

    // ~ LIKE
    // if (query) {
    //   builder.where('customers.name LIKE :search', { search: `%${query}%` });
    // }
    // ~ %LIKE%
    if (query) {
      builder.where(
        `users.name LIKE '%${query}%' or users.email LIKE '%${query}%'`,
      );
    }

    if (name) {
      const nameList: string[] = name.split(',');
      builder.andWhere('users.name IN (:...name)', {
        name: nameList,
      });
    }

    if (sortBy || orderBy) {
      builder.orderBy(sortBy ?? 'id', orderBy);
    }

    const result = {} as IBaseTable<Users[]>;

    const page: number = parseInt(search.page as any) || 1;
    const perPage: number = +size;
    const total = await builder.getCount();
    builder.offset((page - 1) * perPage).limit(perPage);
    const data = await builder.getMany();

    result.currentPage = page;
    result.total = total;
    result.perPage = perPage;
    result.totalPage = Math.ceil(total / size ?? 10);
    result.data = data;

    return result;
  }

  // findAll2(): Promise<Users[]> {
  //   return this.userRepo.find();
  // }

  findOne(id: number) {
    return this.userRepo.findOneBy({ id });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const update = this.userRepo.update(id, updateUserDto);
    try {
      if (update) {
        return `Update id ${id} Success`;
      }
    } catch (error) {
      return error;
    }
  }

  async remove(id: number): Promise<string> {
    await this.userRepo.delete(id);
    return `Delete Success id: ${id}`;
  }
}
