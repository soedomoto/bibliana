import * as Sequelize from 'sequelize'
import { DataTypes, Model, Optional } from 'sequelize'
import type { Libraries, LibrariesId } from './libraries'
import type { SyncObjectTypes, SyncObjectTypesId } from './syncObjectTypes'

export interface SyncQueueAttributes {
  libraryID: number
  key: string
  syncObjectTypeID: number
  lastCheck?: Date
  tries?: number
}

export type SyncQueuePk = 'libraryID' | 'key' | 'syncObjectTypeID'
export type SyncQueueId = SyncQueue[SyncQueuePk]
export type SyncQueueOptionalAttributes = 'lastCheck' | 'tries'
export type SyncQueueCreationAttributes = Optional<SyncQueueAttributes, SyncQueueOptionalAttributes>

export class SyncQueue
  extends Model<SyncQueueAttributes, SyncQueueCreationAttributes>
  implements SyncQueueAttributes
{
  libraryID!: number
  key!: string
  syncObjectTypeID!: number
  lastCheck?: Date
  tries?: number

  // SyncQueue belongsTo Libraries via libraryID
  library!: Libraries
  getLibrary!: Sequelize.BelongsToGetAssociationMixin<Libraries>
  setLibrary!: Sequelize.BelongsToSetAssociationMixin<Libraries, LibrariesId>
  createLibrary!: Sequelize.BelongsToCreateAssociationMixin<Libraries>
  // SyncQueue belongsTo SyncObjectTypes via syncObjectTypeID
  syncObjectType!: SyncObjectTypes
  getSyncObjectType!: Sequelize.BelongsToGetAssociationMixin<SyncObjectTypes>
  setSyncObjectType!: Sequelize.BelongsToSetAssociationMixin<SyncObjectTypes, SyncObjectTypesId>
  createSyncObjectType!: Sequelize.BelongsToCreateAssociationMixin<SyncObjectTypes>

  static initModel(sequelize: Sequelize.Sequelize): typeof SyncQueue {
    return SyncQueue.init(
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
        syncObjectTypeID: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'syncObjectTypes',
            key: 'syncObjectTypeID'
          },
          unique: true
        },
        lastCheck: {
          type: DataTypes.DATE,
          allowNull: true
        },
        tries: {
          type: DataTypes.INTEGER,
          allowNull: true
        }
      },
      {
        sequelize,
        tableName: 'syncQueue',
        timestamps: false,
        indexes: [
          {
            name: 'sqlite_autoindex_syncQueue_1',
            unique: true,
            fields: [{ name: 'libraryID' }, { name: 'key' }, { name: 'syncObjectTypeID' }]
          }
        ]
      }
    )
  }
}
