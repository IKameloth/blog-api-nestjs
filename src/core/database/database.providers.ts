import { Sequelize } from "sequelize-typescript";
import { User } from "src/modules/users/user.entity";
import { SEQUELIZE, DEV, TEST, PROD } from '../constants'
import { databaseConfig } from "./database.config";

export const databaseProviders = [{
  provide: SEQUELIZE,
  useFactory: async () => {
    let config
    switch (process.env.NODE_ENV) {
      case DEV:
        config = databaseConfig.development
        break;
      case TEST:
        config = databaseConfig.test
        break
      case PROD:
        config = databaseConfig.production
        break
      default:
        config = databaseConfig.development
        break;
    }

    const sequelize = new Sequelize(config)
    sequelize.addModels([User])
    await sequelize.sync()
    return sequelize
  }
}]