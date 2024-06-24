import * as Sequelize from 'sequelize'
import { DataTypes, Model, Optional } from 'sequelize'
import type { Libraries, LibrariesId } from './libraries'

export interface StorageDeleteLogAttributes {
  libraryID: number
  key: string
  dateDeleted: string
}

export type StorageDeleteLogPk = 'libraryID' | 'key'
export type StorageDeleteLogId = StorageDeleteLog[StorageDeleteLogPk]
export type StorageDeleteLogOptionalAttributes = 'dateDeleted'
export type StorageDeleteLogCreationAttributes = Optional<
  StorageDeleteLogAttributes,
  StorageDeleteLogOptionalAttributes
>

export class StorageDeleteLog
  extends Model<StorageDeleteLogAttributes, StorageDeleteLogCreationAttributes>
  implements StorageDeleteLogAttributes
{
  libraryID!: number
  key!: string
  dateDeleted!: string

  // StorageDeleteLog belongsTo Libraries via libraryID
  library!: Libraries
  getLibrary!: Sequelize.BelongsToGetAssociationMixin<Libraries>
  setLibrary!: Sequelize.BelongsToSetAssociationMixin<Libraries, LibrariesId>
  createLibrary!: Sequelize.BelongsToCreateAssociationMixin<Libraries>

  static initModel(sequelize: Sequelize.Sequelize): typeof StorageDeleteLog {
    return StorageDeleteLog.init(
      {
        libraryID: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'libraries',
            key: 'libraryID'
          },
          unique: true
        },
        key: {
          type: DataTypes.TEXT,
          allowNull: false,
          primaryKey: true,
          unique: true
        },
        dateDeleted: {
          type: DataTypes.TEXT,
          allowNull: false,
          defaultValue: 'CURRENT_TIMESTAMP'
        }
      },
      {
        sequelize,
        tableName: 'storageDeleteLog',
        timestamps: false,
        indexes: [
          {
            name: 'sqlite_autoindex_storageDeleteLog_1',
            unique: true,
            fields: [{ name: 'libraryID' }, { name: 'key' }]
          }
        ]
      }
    )
  }
}
