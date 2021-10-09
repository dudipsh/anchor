import {
  IsString,
  IsInt,
  IsOptional,
  IsIn
} from "class-validator";

const DAY_OF_WEEK = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
const PERIOD = ["weekly", "monthly"];

export class AnnualValueDto {
  @IsString() name: string;

  @IsString()
  @IsIn(PERIOD)
  period;

  @IsOptional()
  @IsIn(DAY_OF_WEEK)
  dayOfWeek;

  @IsOptional()
  dayOfMonth?: "last" | number;

  @IsInt() price: number;

}

