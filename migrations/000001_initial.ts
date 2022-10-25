import { DataType } from 'sequelize-typescript'
import { Migration } from '../migrate'

export const up: Migration = async ({ context: sequelize }) => {
  await sequelize.addColumn('Users', 'firstName', {type: DataType.STRING})
  await sequelize.addColumn('Users', 'lastName', {type: DataType.STRING})
}


export const down: Migration = async ({ context: sequelize }) => {
  await sequelize.removeColumn('Users', 'firstName')
  await sequelize.removeColumn('Users', 'lastName')
}
