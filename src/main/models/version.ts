import * as Sequelize from 'sequelize'
import { DataTypes, Model, Optional } from 'sequelize'

export interface VersionAttributes {
  schema?: string
  version: number
}

export type VersionPk = 'schema'
export type VersionId = Version[VersionPk]
export type VersionOptionalAttributes = 'schema'
export type VersionCreationAttributes = Optional<VersionAttributes, VersionOptionalAttributes>

export class Version
  extends Model<VersionAttributes, VersionCreationAttributes>
  implements VersionAttributes
{
  schema?: string
  version!: number

  static initModel(sequelize: Sequelize.Sequelize): typeof Version {
    return Version.init(
      {
        schema: {
          type: DataTypes.TEXT,
          allowNull: true,
          primaryKey: true
        },
        version: {
          type: DataTypes.INTEGER,
          allowNull: false
        }
      },
      {
        sequelize,
        tableName: 'version',
        timestamps: false,
        indexes: [
          {
            name: 'sqlite_autoindex_version_1',
            unique: true,
            fields: [{ name: 'schema' }]
          },
          {
            name: 'schema',
            fields: [{ name: 'schema' }]
          }
        ]
      }
    )
  }
}
