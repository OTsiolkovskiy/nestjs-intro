import {
  Controller,
  Get,
  Post,
  Param,
  Query,
  Body,
  ParseIntPipe,
  DefaultValuePipe,
  Patch,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { GetUsersParamDto } from './dtos/get-users-param.dto';
import { PatchUserDto } from './dtos/patch-user.dto';
import { UserService } from './providers/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @Get('/:id?/')
  public getUsers(
    @Param() getUserParamDto: GetUsersParamDto,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  ) {

    return this.userService.findAll(getUserParamDto, limit, page);
  }

  @Post()
  public postUser(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto instanceof CreateUserDto);
    return 'You send a post request for users endpoint';
  }

  @Patch()
  public patchtUser(@Body() patchUserDto: PatchUserDto) {
    return 'You send a patch request for users endpoint';
  }
}
