import {
    IsString,
    IsNumber,
    Min,
    Max,
  } from 'class-validator';
  
import { Transform } from 'class-transformer';

  export class GetEstimateDto {
    @IsString()
    lop: string;
  
    @IsString()
    hometown: string;
  
    @Transform(({value}) => parseInt(value))
    @IsNumber()
    @Min(15)
    @Max(25)
    age: number;
  
    @Transform(({value}) => parseInt(value))
    @IsNumber()
    @Min(0)
    @Max(1000000)
    gpa: number;
  }
  