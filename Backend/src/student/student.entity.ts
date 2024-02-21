import { User } from '../user/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, Double, ManyToOne } from  'typeorm';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: false })
  approved: boolean;

  @Column()
  name: string;

  @Column()
  age: number;

  @Column()
  lop: string;

  @Column()
  gpa: number;

  @Column()
  hometown: string;

  @ManyToOne(() => User, (user) => user.students)
  user: User;
}
