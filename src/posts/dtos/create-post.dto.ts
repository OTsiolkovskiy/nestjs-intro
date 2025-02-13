import { postType } from "../enums/postType.enum";
import { postStatus } from "../enums/postStatus.enum";
import { IsArray, IsEnum, IsISO8601, IsJSON, IsNotEmpty, IsOptional, IsString, IsUrl, Matches, MinLength, ValidateNested } from "class-validator";
import { CreatePostMetaOptionDto } from "./create-post-meta-options.dto";
import { Type } from "class-transformer";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CreatePostDto {
  @ApiProperty({
    example: 'This is a title',
    description: 'This is a title for a blog post'
  })
  @IsString()
  @MinLength(4)
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    enum: postType,
    description: 'Posible values: "post", "page", "story" and "series"'
  })
  @IsEnum(postType)
  @IsNotEmpty()
  postType: postType;
  
  @ApiProperty({
    description: 'For example: my-url',
    example: 'my-blog-post'
  })
  @IsString()
  @IsNotEmpty()
  @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
    message:
      'A slug should be all small letters and uses only "-" and without spaces. For example "my-url"',
  })
  slug: string;

  @ApiProperty({
    enum: postStatus,
    description: 'Posible values: "draft", "scheduled", "review" and "published"'
  })
  @IsEnum(postStatus)
  @IsNotEmpty()
  status: postStatus;
  
  @ApiPropertyOptional({
    description: 'This is the content of the post',
    example: 'The post content'
  })
  @IsString()
  @IsOptional()
  content?: string;
  
  @ApiPropertyOptional({
    description: 'Serialize your JSON object else a validation error will be thrown',
    example: '{\r\n    \"@context\": \"https:\/\/schema.org\",\r\n    \"@type\": \"Person\"\r\n  }'
  })
  @IsJSON()
  @IsOptional()
  schema?: string;
  
  @ApiPropertyOptional({
    description: 'Featured image for your blog post',
    example: 'http://localhost.com/images/image1.jpg'
  })
  @IsOptional()
  @IsUrl()
  featuredImageUrl?: string;
  
  @ApiPropertyOptional({
    description: 'The date on wich the blog post was published',
    example: '2024-03-16T07:46:32+0000'
  })
  @IsISO8601()
  @IsOptional()
  publishOn?: Date;
  
  @ApiPropertyOptional({
    description: 'Array of tags passed as string values',
    example: '["nestJS", "typescript"]'
  })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  @MinLength(3, { each: true })
  tags?: string[];
  
  @ApiPropertyOptional({
    type: 'array',
    required: false,
    items: {
      type: 'object',
      properties: {
        key: {
          type: 'string',
        },
        value: {
          type: 'string',
        },
      },
    },
  })
  @IsArray()
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreatePostMetaOptionDto)
  metaOptions?: CreatePostMetaOptionDto[];
}