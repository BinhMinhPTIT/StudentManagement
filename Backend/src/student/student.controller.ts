import {
    Controller,
    Post,
    Body,
    UseGuards,
    Patch,
    Param,
    Get,
    Query,
  } from '@nestjs/common';
  import { CreateReportDto } from './dtos/create-report.dto';
  import { StudentService } from './student.service';
  import { AuthGuard } from '../guards/auth.guard';
  import { CurrentUser } from '../user/decorators/current-user.decorator';
  import { User } from '../user/user.entity';
  import { ReportDto } from './dtos/report.dto';
  import { Serialize } from '../interceptors/serialize.interceptor';
  import { ApproveReportDto } from './dtos/approve-report.dto';
  import { AdminGuard } from '../guards/admin.guard';
  import { GetEstimateDto } from './dtos/get-estimate.dto';
  
  @Controller('students')
  export class StudentController {
    constructor(private studentService: StudentService) {}
  
    @Get()
    getEstimate(@Query() query: GetEstimateDto) {
      return this.studentService.createEstimate(query);
    }
  
    @Post()
    @UseGuards(AuthGuard)
    @Serialize(ReportDto)
    createReport(@Body() body: CreateReportDto, @CurrentUser() user: User) {
      return this.studentService.create(body, user);
    }
  
    @Patch('/:id')
    @UseGuards(AdminGuard)
    approveReport(@Param('id') id: string, @Body() body: ApproveReportDto) {
      return this.studentService.changeApproval(id, body.approved);
    }
  }
  