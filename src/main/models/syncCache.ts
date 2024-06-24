import * as Sequelize from 'sequelize'
import { DataTypes, Model, Optional } from 'sequelize'
import type { Libraries, LibrariesId } from './libraries'
import type { SyncObjectTypes, SyncObjectTypesId } from './syncObjectTypes'

export interface SyncCacheAttributes {
  libraryID: number
  key: string
  syncObjectTypeID: number
  version: number
  data?: string
}

export type SyncCachePk = 'libraryID' | 'key' | 'syncObjectTypeID' | 'version'
export type SyncCacheId = SyncCache[SyncCachePk]
export type SyncCacheOptionalAttributes = 'data'
export type SyncCacheCreationAttributes = Optional<SyncCacheAttributes, SyncCacheOptionalAttributes>

export class SyncCache
  extends Model<SyncCacheAttributes, SyncCacheCreationAttributes>
  implements SyncCacheAttributes
{
  libraryID!: number
  key!: string
  syncObjectTypeID!: number
  version!: number
  data?: string

  // SyncCache belongsTo Libraries via libraryID
  library!: Libraries
  getLibrary!: Sequelize.BelongsToGetAssociationMixin<Libraries>
  setLibrary!: Sequelize.BelongsToSetAssociationMixin<Libraries, LibrariesId>
  createLibrary!: Sequelize.BelongsToCreateAssociationMixin<Libraries>
  // SyncCache belongsTo SyncObjectTypes via syncObjectTypeID
  syncObjectType!: SyncObjectTypes
  getSyncObjectType!: Sequelize.BelongsToGetAssociationMixin<SyncObjectTypes>
  setSyncObjectType!: Sequelize.BelongsToSetAssociationMixin<SyncObjectTypes, SyncObjectTypesId>
  createSyncObjectType!: Sequelize.BelongsToCreateAssociationMixin<SyncObjectTypes>

  static initModel(sequelize: Sequelize.Sequelize): typeof SyncCache {
    return SyncCache.init(
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
        version: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          unique: true
        },
        data: {
          type: DataTypes.TEXT,
          allowNull: true
        }
      },
      {
        sequelize,
        tableName: 'syncCache',
        timestamps: false,
        indexes: [
          {
            name: 'sqlite_autoindex_syncCache_1',
            unique: true,
            fields: [
              { name: 'libraryID' },
              { name: 'key' },
              { name: 'syncObjectTypeID' },
              { name: 'version' }
            ]
          }
        ]
      }
    )
  }
}
