import { ApiProperty } from '@nestjs/swagger';

export class IsAdminResponseDto {
  @ApiProperty()
  isAdmin!: boolean;
}
