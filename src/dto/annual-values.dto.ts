import {  IsArray, ValidateNested } from "class-validator";
import { AnnualValueDto } from "./annual-value.dto";
import { Type } from "class-transformer";


export class AnnualValuesDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => AnnualValueDto)
  services: AnnualValueDto[]
}
