import { Injectable, forwardRef, Inject } from "@nestjs/common";
import { GetUsersParamDto } from "../dtos/get-users-param.dto";
import { AuthService } from "src/auth/providers/auth.service";

/**
 * Class to connect to Users table and perform business operations
 */

@Injectable()
export class UserService {
  constructor(
    @Inject(forwardRef(()=> AuthService))
    private readonly authService: AuthService
  ) {}

  /**
   * The method to get all the users from the database
   */

  public findAll (
    getUserParamDto: GetUsersParamDto,
    limit: number,
    page: number
  ) {

    const isAuth = this.authService.isAuth();
    console.log(isAuth)

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

  /**
   * Find a single user using ID of the user
   */

  public findById(id: string) {
    return {
      id: 123,
      firstName: 'Alice',
      email: 'Alivce@doe.com'
    }
  }
}