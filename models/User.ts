import { Optional } from 'sequelize'
import { Column, DataType, Model, Table } from 'sequelize-typescript'

export interface UserAttributes {
  id: number
  firstName: string
  lastName: string
}

// interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}

@Table
export class User extends Model<UserAttributes, Optional<UserAttributes, 'id'>> {
  @Column(DataType.TEXT)
  firstName!: string

  @Column(DataType.TEXT)
  lastName!: string
}
