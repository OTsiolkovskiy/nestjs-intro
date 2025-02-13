import { IsInt, IsOptional } from "class-validator";
import { Type } from 'class-transformer';
import { ApiPropertyOptional } from "@nestjs/swagger";

export class GetUsersParamDto {
  @ApiPropertyOptional({
    description: "Get user by a sspecific id",
    example: "1234"
  })
  @IsInt()
  @IsOptional()
  @Type(() => Number)
  id?: number
}