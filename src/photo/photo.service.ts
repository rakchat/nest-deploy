import { Injectable } from '@nestjs/common';
import { CreatePhotoDto } from './dto/create-photo.dto';
import { UpdatePhotoDto } from './dto/update-photo.dto';
import { Photo } from './entities/photo.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PhotoService {
  constructor(
    @InjectRepository(Photo)
    private photoRepository: Repository<Photo>,
  ) {}

  create(createPhotoDto: CreatePhotoDto) {
    return this.photoRepository.save(createPhotoDto);
  }

  findAll(): Promise<Photo[]> {
    return this.photoRepository.find();
  }

  findOne(id: number) {
    return this.photoRepository.findOneBy({ id });
  }

  update(id: number, updatePhotoDto: UpdatePhotoDto) {
    const update = this.photoRepository.update(id, updatePhotoDto);
    try {
      if (update) {
        return `Update id ${id} Success`;
      }
    } catch (error) {
      return error;
    }
  }

  async remove(id: number): Promise<string> {
    await this.photoRepository.delete(id);
    return `Delete Success id: ${id}`;
  }
}
