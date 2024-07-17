// export class CreateUserDto {}

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';
import { BaseTableSearch } from 'src/utils/helper';

// ~ extends BaseTableSearch for table query (page, size)
// findAll
export class CustomerSearch extends BaseTableSearch {
  @ApiPropertyOptional()
  @IsOptional()
  name: string;
}

// Create
export class CreateUserDto {
  id: number;

  @ApiProperty({ type: String })
  name: string;

  @ApiProperty({ type: String })
  email: string;
}
