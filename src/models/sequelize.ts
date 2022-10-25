import { Sequelize } from 'sequelize-typescript'
import { User } from './User'
const env = process.env

export const sequelize = new Sequelize({
  database: env.MYSQL_DATABASE!,
  username: env.MYSQL_USERNAME,
  password: env.MYSQL_PASSWORD,
  port: Number(env.MYSQL_PORT),
  models: [User],
  dialect: 'mysql'
})
