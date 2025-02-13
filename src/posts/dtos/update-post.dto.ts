import { ApiProperty, PartialType } from "@nestjs/swagger"
import { CreatePostDto } from "./create-post.dto"
import { IsInt, IsNotEmpty } from "class-validator";

export class UpdatePostDto extends PartialType(CreatePostDto) {
  @ApiProperty({
    description: 'The id of the post that needs to be updated',
    example: 1234
  })
  @IsNotEmpty()
  @IsInt()
  id: number;
}