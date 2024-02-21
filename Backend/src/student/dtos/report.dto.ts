import { Expose, Transform } from 'class-transformer';
import { User } from '../../user/user.entity';
import { Double } from 'typeorm';

export class ReportDto {
  @Expose()
  id: number;
  @Expose()
  name: string;
  @Expose()
  age: number;
  @Expose()
  lop: string;
  @Expose()
  gpa: Double;
  @Expose()
  hometown: string;
  @Expose()
  approved: boolean;

  @Transform(({ obj }) => obj.user.id)
  @Expose()
  userId: number;
}
