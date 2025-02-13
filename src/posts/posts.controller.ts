import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { PostsService } from './providers/posts.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreatePostDto } from './dtos/create-post.dto';
import { UpdatePostDto } from './dtos/update-post.dto';

@Controller('posts')
@ApiTags('Posts')
export class PostsController {
 constructor(private readonly postService: PostsService){}

 @Get('/:userId?')
 public getPosts(@Param('userId') userId:string) {
  return this.postService.findAll(userId);
 }

 @ApiOperation({
  summary: 'Create a new blog post',
 })
 @ApiResponse({
  status: 201,
  description: 'You get a 201 response if your post is created successfully',
 })
 @Post()
 public postPost(@Body() createPostDta: CreatePostDto) {
  console.log(createPostDta);
  return 'You send a post request for users endpoint'
 }

 @ApiOperation({
  summary: 'Updates an existing blog post',
 })
 @ApiResponse({
  status: 200,
  description: 'You get a 200 response if your post is updated successfully',
 })
 @Patch()
 public patch(@Body() updatePostDto: UpdatePostDto) {
  console.log(updatePostDto)
 }

}
