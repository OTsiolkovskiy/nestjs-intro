import { Injectable } from '@nestjs/common';
import { UserService } from 'src/users/providers/users.service';

@Injectable()
export class PostsService {
  constructor(private readonly userService: UserService){}

  public findAll(userId) {
    const user = this.userService.findById(userId)

    return [
      { 
        user,
        title: 'Test title',
        content: 'Test content'
      },
      {
        user,
        title: 'Test title2',
        content: 'Test content2'
      }
    ]
  }
}
