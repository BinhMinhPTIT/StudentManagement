import {
    IsString,
    IsNumber,
    Min,
    Max,
  } from 'class-validator';
import { Double } from 'typeorm';
  
  export class CreateReportDto {
    @IsString()
    name: string;
    
    @IsString()
    lop: string;
  
    @IsString()
    hometown: string;
  
    @IsNumber()
    @Min(15)
    @Max(25)
    age: number;
  
    @IsNumber()
    @Min(0)
    @Max(4.0)
    gpa: number;
  }
  