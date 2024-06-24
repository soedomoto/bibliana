import * as Sequelize from 'sequelize'
import { DataTypes, Model, Optional } from 'sequelize'
import type { SyncCache, SyncCacheId } from './syncCache'
import type { SyncDeleteLog, SyncDeleteLogId } from './syncDeleteLog'
import type { SyncQueue, SyncQueueId } from './syncQueue'

export interface SyncObjectTypesAttributes {
  syncObjectTypeID?: number
  name?: string
}

export type SyncObjectTypesPk = 'syncObjectTypeID'
export type SyncObjectTypesId = SyncObjectTypes[SyncObjectTypesPk]
export type SyncObjectTypesOptionalAttributes = 'syncObjectTypeID' | 'name'
export type SyncObjectTypesCreationAttributes = Optional<
  SyncObjectTypesAttributes,
  SyncObjectTypesOptionalAttributes
>

export class SyncObjectTypes
  extends Model<SyncObjectTypesAttributes, SyncObjectTypesCreationAttributes>
  implements SyncObjectTypesAttributes
{
  syncObjectTypeID?: number
  name?: string

  // SyncObjectTypes hasMany SyncCache via syncObjectTypeID
  syncCaches!: SyncCache[]
  getSyncCaches!: Sequelize.HasManyGetAssociationsMixin<SyncCache>
  setSyncCaches!: Sequelize.HasManySetAssociationsMixin<SyncCache, SyncCacheId>
  addSyncCach!: Sequelize.HasManyAddAssociationMixin<SyncCache, SyncCacheId>
  addSyncCaches!: Sequelize.HasManyAddAssociationsMixin<SyncCache, SyncCacheId>
  createSyncCach!: Sequelize.HasManyCreateAssociationMixin<SyncCache>
  removeSyncCach!: Sequelize.HasManyRemoveAssociationMixin<SyncCache, SyncCacheId>
  removeSyncCaches!: Sequelize.HasManyRemoveAssociationsMixin<SyncCache, SyncCacheId>
  hasSyncCach!: Sequelize.HasManyHasAssociationMixin<SyncCache, SyncCacheId>
  hasSyncCaches!: Sequelize.HasManyHasAssociationsMixin<SyncCache, SyncCacheId>
  countSyncCaches!: Sequelize.HasManyCountAssociationsMixin
  // SyncObjectTypes hasMany SyncDeleteLog via syncObjectTypeID
  syncDeleteLogs!: SyncDeleteLog[]
  getSyncDeleteLogs!: Sequelize.HasManyGetAssociationsMixin<SyncDeleteLog>
  setSyncDeleteLogs!: Sequelize.HasManySetAssociationsMixin<SyncDeleteLog, SyncDeleteLogId>
  addSyncDeleteLog!: Sequelize.HasManyAddAssociationMixin<SyncDeleteLog, SyncDeleteLogId>
  addSyncDeleteLogs!: Sequelize.HasManyAddAssociationsMixin<SyncDeleteLog, SyncDeleteLogId>
  createSyncDeleteLog!: Sequelize.HasManyCreateAssociationMixin<SyncDeleteLog>
  removeSyncDeleteLog!: Sequelize.HasManyRemoveAssociationMixin<SyncDeleteLog, SyncDeleteLogId>
  removeSyncDeleteLogs!: Sequelize.HasManyRemoveAssociationsMixin<SyncDeleteLog, SyncDeleteLogId>
  hasSyncDeleteLog!: Sequelize.HasManyHasAssociationMixin<SyncDeleteLog, SyncDeleteLogId>
  hasSyncDeleteLogs!: Sequelize.HasManyHasAssociationsMixin<SyncDeleteLog, SyncDeleteLogId>
  countSyncDeleteLogs!: Sequelize.HasManyCountAssociationsMixin
  // SyncObjectTypes hasMany SyncQueue via syncObjectTypeID
  syncQueues!: SyncQueue[]
  getSyncQueues!: Sequelize.HasManyGetAssociationsMixin<SyncQueue>
  setSyncQueues!: Sequelize.HasManySetAssociationsMixin<SyncQueue, SyncQueueId>
  addSyncQueue!: Sequelize.HasManyAddAssociationMixin<SyncQueue, SyncQueueId>
  addSyncQueues!: Sequelize.HasManyAddAssociationsMixin<SyncQueue, SyncQueueId>
  createSyncQueue!: Sequelize.HasManyCreateAssociationMixin<SyncQueue>
  removeSyncQueue!: Sequelize.HasManyRemoveAssociationMixin<SyncQueue, SyncQueueId>
  removeSyncQueues!: Sequelize.HasManyRemoveAssociationsMixin<SyncQueue, SyncQueueId>
  hasSyncQueue!: Sequelize.HasManyHasAssociationMixin<SyncQueue, SyncQueueId>
  hasSyncQueues!: Sequelize.HasManyHasAssociationsMixin<SyncQueue, SyncQueueId>
  countSyncQueues!: Sequelize.HasManyCountAssociationsMixin

  static initModel(sequelize: Sequelize.Sequelize): typeof SyncObjectTypes {
    return SyncObjectTypes.init(
      {
        syncObjectTypeID: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: true,
          primaryKey: true
        },
        name: {
          type: DataTypes.TEXT,
          allowNull: true
        }
      },
      {
        sequelize,
        tableName: 'syncObjectTypes',
        timestamps: false,
        indexes: [
          {
            name: 'syncObjectTypes_name',
            fields: [{ name: 'name' }]
          }
        ]
      }
    )
  }
}
