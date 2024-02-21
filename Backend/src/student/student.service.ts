import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './student.entity';
import { CreateReportDto } from './dtos/create-report.dto';
import { User } from '../user/user.entity';
import { GetEstimateDto } from './dtos/get-estimate.dto';

@Injectable()
export class StudentService {
  constructor(@InjectRepository(Student) private repo: Repository<Student>) {}

  createEstimate({age, lop, gpa, hometown}: GetEstimateDto) {
    return this.repo
      .createQueryBuilder()
      .select('AVG(gpa)', 'gpa')
      .where('hometown = :hometown', { hometown })
      .andWhere('lop = :lop', { lop })
      .andWhere('age - :age BETWEEN -5 AND 5', { age})
      .andWhere('gpa - :gpa BETWEEN -1 AND 1', { gpa})
      .andWhere('approved IS TRUE')
      .limit(3)
      .getRawMany();
  }

  create(reportDto: CreateReportDto, user: User) {
    const student = this.repo.create(reportDto);
    student.user = user;
    return this.repo.save(student);
  }

  async changeApproval(id: string, approved: boolean) {
    const student = await this.repo.findOne({ where: { id: parseInt(id) } });

    if (!student) {
      throw new NotFoundException('report not found');
    }

    student.approved = approved;
    return this.repo.save(student);
  }
}

