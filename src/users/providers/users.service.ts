import { Injectable } from "@nestjs/common";
import { GetUsersParamDto } from "../dtos/get-users-param.dto";

@Injectable()
export class UserService {

  public findAll (
    getUserParamDto: GetUsersParamDto,
    limit: number,
    page: number
  ) {
    return [
      {
        firstName: 'John',
        email: 'John@doe.com'
      },
      {
        firstName: 'Alice',
        email: 'Alivce@doe.com'
      }
    ]
  }

  public findById(id: string) {
    return {
      id: 123,
      firstName: 'Alice',
      email: 'Alivce@doe.com'
    }
  }
}