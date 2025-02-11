import {
  Controller,
  Get,
  Post,
  Param,
  Query,
  Body,
  Headers,
  Ip,
  ParseIntPipe,
  DefaultValuePipe,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get('/:id/:optional?')
  public getUsers(
    @Param('id', ParseIntPipe) id: number | undefined,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  ) {
    console.log(typeof id);
    console.log(id);
    console.log(typeof limit);
    console.log(limit);
    console.log(typeof page);
    console.log(page);
    return 'You send a get request for users endpoint';
  }

  @Post()
  public postUser(
    @Body() request: any,
    @Headers() headers: any,
    @Ip() ip: any,
  ) {
    console.log(request);
    console.log(headers);
    console.log(ip);

    return 'You send a post request for users endpoint';
  }
}
