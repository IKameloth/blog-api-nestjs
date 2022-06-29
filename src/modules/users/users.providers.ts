import { User } from "./user.entity";
import { USER_RESPOSITORY } from '../../core/constants'

export const usersProviders = [{
  provide: USER_RESPOSITORY,
  useValue: User
}]
