import * as Sequelize from 'sequelize'
import { DataTypes, Model, Optional } from 'sequelize'
import type { Collections, CollectionsId } from './collections'
import type { Feeds, FeedsId } from './feeds'
import type { Groups, GroupsId } from './groups'
import type { Items, ItemsId } from './items'
import type { SavedSearches, SavedSearchesId } from './savedSearches'
import type { StorageDeleteLog, StorageDeleteLogId } from './storageDeleteLog'
import type { SyncCache, SyncCacheId } from './syncCache'
import type { SyncDeleteLog, SyncDeleteLogId } from './syncDeleteLog'
import type { SyncQueue, SyncQueueId } from './syncQueue'
import type { SyncedSettings, SyncedSettingsId } from './syncedSettings'

export interface LibrariesAttributes {
  libraryID?: number
  type: string
  editable: number
  filesEditable: number
  version: number
  storageVersion: number
  lastSync: number
  archived: number
}

export type LibrariesPk = 'libraryID'
export type LibrariesId = Libraries[LibrariesPk]
export type LibrariesOptionalAttributes =
  | 'libraryID'
  | 'version'
  | 'storageVersion'
  | 'lastSync'
  | 'archived'
export type LibrariesCreationAttributes = Optional<LibrariesAttributes, LibrariesOptionalAttributes>

export class Libraries
  extends Model<LibrariesAttributes, LibrariesCreationAttributes>
  implements LibrariesAttributes
{
  libraryID?: number
  type!: string
  editable!: number
  filesEditable!: number
  version!: number
  storageVersion!: number
  lastSync!: number
  archived!: number

  // Libraries hasMany Collections via libraryID
  collections!: Collections[]
  getCollections!: Sequelize.HasManyGetAssociationsMixin<Collections>
  setCollections!: Sequelize.HasManySetAssociationsMixin<Collections, CollectionsId>
  addCollection!: Sequelize.HasManyAddAssociationMixin<Collections, CollectionsId>
  addCollections!: Sequelize.HasManyAddAssociationsMixin<Collections, CollectionsId>
  createCollection!: Sequelize.HasManyCreateAssociationMixin<Collections>
  removeCollection!: Sequelize.HasManyRemoveAssociationMixin<Collections, CollectionsId>
  removeCollections!: Sequelize.HasManyRemoveAssociationsMixin<Collections, CollectionsId>
  hasCollection!: Sequelize.HasManyHasAssociationMixin<Collections, CollectionsId>
  hasCollections!: Sequelize.HasManyHasAssociationsMixin<Collections, CollectionsId>
  countCollections!: Sequelize.HasManyCountAssociationsMixin
  // Libraries hasMany Feeds via libraryID
  feeds!: Feeds[]
  getFeeds!: Sequelize.HasManyGetAssociationsMixin<Feeds>
  setFeeds!: Sequelize.HasManySetAssociationsMixin<Feeds, FeedsId>
  addFeed!: Sequelize.HasManyAddAssociationMixin<Feeds, FeedsId>
  addFeeds!: Sequelize.HasManyAddAssociationsMixin<Feeds, FeedsId>
  createFeed!: Sequelize.HasManyCreateAssociationMixin<Feeds>
  removeFeed!: Sequelize.HasManyRemoveAssociationMixin<Feeds, FeedsId>
  removeFeeds!: Sequelize.HasManyRemoveAssociationsMixin<Feeds, FeedsId>
  hasFeed!: Sequelize.HasManyHasAssociationMixin<Feeds, FeedsId>
  hasFeeds!: Sequelize.HasManyHasAssociationsMixin<Feeds, FeedsId>
  countFeeds!: Sequelize.HasManyCountAssociationsMixin
  // Libraries hasMany Groups via libraryID
  groups!: Groups[]
  getGroups!: Sequelize.HasManyGetAssociationsMixin<Groups>
  setGroups!: Sequelize.HasManySetAssociationsMixin<Groups, GroupsId>
  addGroup!: Sequelize.HasManyAddAssociationMixin<Groups, GroupsId>
  addGroups!: Sequelize.HasManyAddAssociationsMixin<Groups, GroupsId>
  createGroup!: Sequelize.HasManyCreateAssociationMixin<Groups>
  removeGroup!: Sequelize.HasManyRemoveAssociationMixin<Groups, GroupsId>
  removeGroups!: Sequelize.HasManyRemoveAssociationsMixin<Groups, GroupsId>
  hasGroup!: Sequelize.HasManyHasAssociationMixin<Groups, GroupsId>
  hasGroups!: Sequelize.HasManyHasAssociationsMixin<Groups, GroupsId>
  countGroups!: Sequelize.HasManyCountAssociationsMixin
  // Libraries hasMany Items via libraryID
  items!: Items[]
  getItems!: Sequelize.HasManyGetAssociationsMixin<Items>
  setItems!: Sequelize.HasManySetAssociationsMixin<Items, ItemsId>
  addItem!: Sequelize.HasManyAddAssociationMixin<Items, ItemsId>
  addItems!: Sequelize.HasManyAddAssociationsMixin<Items, ItemsId>
  createItem!: Sequelize.HasManyCreateAssociationMixin<Items>
  removeItem!: Sequelize.HasManyRemoveAssociationMixin<Items, ItemsId>
  removeItems!: Sequelize.HasManyRemoveAssociationsMixin<Items, ItemsId>
  hasItem!: Sequelize.HasManyHasAssociationMixin<Items, ItemsId>
  hasItems!: Sequelize.HasManyHasAssociationsMixin<Items, ItemsId>
  countItems!: Sequelize.HasManyCountAssociationsMixin
  // Libraries hasMany SavedSearches via libraryID
  savedSearches!: SavedSearches[]
  getSavedSearches!: Sequelize.HasManyGetAssociationsMixin<SavedSearches>
  setSavedSearches!: Sequelize.HasManySetAssociationsMixin<SavedSearches, SavedSearchesId>
  addSavedSearch!: Sequelize.HasManyAddAssociationMixin<SavedSearches, SavedSearchesId>
  addSavedSearches!: Sequelize.HasManyAddAssociationsMixin<SavedSearches, SavedSearchesId>
  createSavedSearch!: Sequelize.HasManyCreateAssociationMixin<SavedSearches>
  removeSavedSearch!: Sequelize.HasManyRemoveAssociationMixin<SavedSearches, SavedSearchesId>
  removeSavedSearches!: Sequelize.HasManyRemoveAssociationsMixin<SavedSearches, SavedSearchesId>
  hasSavedSearch!: Sequelize.HasManyHasAssociationMixin<SavedSearches, SavedSearchesId>
  hasSavedSearches!: Sequelize.HasManyHasAssociationsMixin<SavedSearches, SavedSearchesId>
  countSavedSearches!: Sequelize.HasManyCountAssociationsMixin
  // Libraries hasMany StorageDeleteLog via libraryID
  storageDeleteLogs!: StorageDeleteLog[]
  getStorageDeleteLogs!: Sequelize.HasManyGetAssociationsMixin<StorageDeleteLog>
  setStorageDeleteLogs!: Sequelize.HasManySetAssociationsMixin<StorageDeleteLog, StorageDeleteLogId>
  addStorageDeleteLog!: Sequelize.HasManyAddAssociationMixin<StorageDeleteLog, StorageDeleteLogId>
  addStorageDeleteLogs!: Sequelize.HasManyAddAssociationsMixin<StorageDeleteLog, StorageDeleteLogId>
  createStorageDeleteLog!: Sequelize.HasManyCreateAssociationMixin<StorageDeleteLog>
  removeStorageDeleteLog!: Sequelize.HasManyRemoveAssociationMixin<
    StorageDeleteLog,
    StorageDeleteLogId
  >
  removeStorageDeleteLogs!: Sequelize.HasManyRemoveAssociationsMixin<
    StorageDeleteLog,
    StorageDeleteLogId
  >
  hasStorageDeleteLog!: Sequelize.HasManyHasAssociationMixin<StorageDeleteLog, StorageDeleteLogId>
  hasStorageDeleteLogs!: Sequelize.HasManyHasAssociationsMixin<StorageDeleteLog, StorageDeleteLogId>
  countStorageDeleteLogs!: Sequelize.HasManyCountAssociationsMixin
  // Libraries hasMany SyncCache via libraryID
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
  // Libraries hasMany SyncDeleteLog via libraryID
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
  // Libraries hasMany SyncQueue via libraryID
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
  // Libraries hasMany SyncedSettings via libraryID
  syncedSettings!: SyncedSettings[]
  getSyncedSettings!: Sequelize.HasManyGetAssociationsMixin<SyncedSettings>
  setSyncedSettings!: Sequelize.HasManySetAssociationsMixin<SyncedSettings, SyncedSettingsId>
  addSyncedSetting!: Sequelize.HasManyAddAssociationMixin<SyncedSettings, SyncedSettingsId>
  addSyncedSettings!: Sequelize.HasManyAddAssociationsMixin<SyncedSettings, SyncedSettingsId>
  createSyncedSetting!: Sequelize.HasManyCreateAssociationMixin<SyncedSettings>
  removeSyncedSetting!: Sequelize.HasManyRemoveAssociationMixin<SyncedSettings, SyncedSettingsId>
  removeSyncedSettings!: Sequelize.HasManyRemoveAssociationsMixin<SyncedSettings, SyncedSettingsId>
  hasSyncedSetting!: Sequelize.HasManyHasAssociationMixin<SyncedSettings, SyncedSettingsId>
  hasSyncedSettings!: Sequelize.HasManyHasAssociationsMixin<SyncedSettings, SyncedSettingsId>
  countSyncedSettings!: Sequelize.HasManyCountAssociationsMixin

  static initModel(sequelize: Sequelize.Sequelize): typeof Libraries {
    return Libraries.init(
      {
        libraryID: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: true,
          primaryKey: true
        },
        type: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        editable: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        filesEditable: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        version: {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: 0
        },
        storageVersion: {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: 0
        },
        lastSync: {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: 0
        },
        archived: {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: 0
        }
      },
      {
        sequelize,
        tableName: 'libraries',
        timestamps: false
      }
    )
  }
}
