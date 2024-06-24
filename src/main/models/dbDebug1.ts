import * as Sequelize from 'sequelize'
import { DataTypes, Model, Optional } from 'sequelize'

export interface DbDebug1Attributes {
  a?: number
}

export type DbDebug1Pk = 'a'
export type DbDebug1Id = DbDebug1[DbDebug1Pk]
export type DbDebug1OptionalAttributes = 'a'
export type DbDebug1CreationAttributes = Optional<DbDebug1Attributes, DbDebug1OptionalAttributes>

export class DbDebug1
  extends Model<DbDebug1Attributes, DbDebug1CreationAttributes>
  implements DbDebug1Attributes
{
  a?: number

  static initModel(sequelize: Sequelize.Sequelize): typeof DbDebug1 {
    return DbDebug1.init(
      {
        a: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: true,
          primaryKey: true
        }
      },
      {
        sequelize,
        tableName: 'dbDebug1',
        timestamps: false
      }
    )
  }
}
