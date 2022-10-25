import { SequelizeStorage, Umzug } from 'umzug'
import './dotenv'
import { sequelize } from './src/models/sequelize'

const umzug = new Umzug({
  migrations: {glob: 'migrations/*.ts'},
  logger: console,
  context: sequelize.getQueryInterface(),
  storage: new SequelizeStorage({ sequelize })
})

export type Migration = typeof umzug._types.migration



(async () => {
  await umzug.up()
})()
