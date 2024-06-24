import * as Sequelize from 'sequelize'
import { DataTypes, Model, Optional } from 'sequelize'
import type { Libraries, LibrariesId } from './libraries'
import type { SyncObjectTypes, SyncObjectTypesId } from './syncObjectTypes'

export interface SyncDeleteLogAttributes {
  syncObjectTypeID: number
  libraryID: number
  key: string
  dateDeleted: string
}

export type SyncDeleteLogOptionalAttributes = 'dateDeleted'
export type SyncDeleteLogCreationAttributes = Optional<
  SyncDeleteLogAttributes,
  SyncDeleteLogOptionalAttributes
>

export class SyncDeleteLog
  extends Model<SyncDeleteLogAttributes, SyncDeleteLogCreationAttributes>
  implements SyncDeleteLogAttributes
{
  syncObjectTypeID!: number
  libraryID!: number
  key!: string
  dateDeleted!: string

  // SyncDeleteLog belongsTo Libraries via libraryID
  library!: Libraries
  getLibrary!: Sequelize.BelongsToGetAssociationMixin<Libraries>
  setLibrary!: Sequelize.BelongsToSetAssociationMixin<Libraries, LibrariesId>
  createLibrary!: Sequelize.BelongsToCreateAssociationMixin<Libraries>
  // SyncDeleteLog belongsTo SyncObjectTypes via syncObjectTypeID
  syncObjectType!: SyncObjectTypes
  getSyncObjectType!: Sequelize.BelongsToGetAssociationMixin<SyncObjectTypes>
  setSyncObjectType!: Sequelize.BelongsToSetAssociationMixin<SyncObjectTypes, SyncObjectTypesId>
  createSyncObjectType!: Sequelize.BelongsToCreateAssociationMixin<SyncObjectTypes>

  static initModel(sequelize: Sequelize.Sequelize): typeof SyncDeleteLog {
    return SyncDeleteLog.init(
      {
        syncObjectTypeID: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'syncObjectTypes',
            key: 'syncObjectTypeID'
          },
          unique: true
        },
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
        tableName: 'syncDeleteLog',
        timestamps: false,
        indexes: [
          {
            name: 'sqlite_autoindex_syncDeleteLog_1',
            unique: true,
            fields: [{ name: 'syncObjectTypeID' }, { name: 'libraryID' }, { name: 'key' }]
          }
        ]
      }
    )
  }
}
