import * as Sequelize from 'sequelize'
import { DataTypes, Model, Optional } from 'sequelize'
import type { DeletedSearches, DeletedSearchesId } from './deletedSearches'
import type { Libraries, LibrariesId } from './libraries'
import type { SavedSearchConditions, SavedSearchConditionsId } from './savedSearchConditions'

export interface SavedSearchesAttributes {
  savedSearchID?: number
  savedSearchName: string
  clientDateModified: Date
  libraryID: number
  key: string
  version: number
  synced: number
}

export type SavedSearchesPk = 'savedSearchID'
export type SavedSearchesId = SavedSearches[SavedSearchesPk]
export type SavedSearchesOptionalAttributes =
  | 'savedSearchID'
  | 'clientDateModified'
  | 'version'
  | 'synced'
export type SavedSearchesCreationAttributes = Optional<
  SavedSearchesAttributes,
  SavedSearchesOptionalAttributes
>

export class SavedSearches
  extends Model<SavedSearchesAttributes, SavedSearchesCreationAttributes>
  implements SavedSearchesAttributes
{
  savedSearchID?: number
  savedSearchName!: string
  clientDateModified!: Date
  libraryID!: number
  key!: string
  version!: number
  synced!: number

  // SavedSearches belongsTo Libraries via libraryID
  library!: Libraries
  getLibrary!: Sequelize.BelongsToGetAssociationMixin<Libraries>
  setLibrary!: Sequelize.BelongsToSetAssociationMixin<Libraries, LibrariesId>
  createLibrary!: Sequelize.BelongsToCreateAssociationMixin<Libraries>
  // SavedSearches hasMany DeletedSearches via savedSearchID
  deletedSearches!: DeletedSearches[]
  getDeletedSearches!: Sequelize.HasManyGetAssociationsMixin<DeletedSearches>
  setDeletedSearches!: Sequelize.HasManySetAssociationsMixin<DeletedSearches, DeletedSearchesId>
  addDeletedSearch!: Sequelize.HasManyAddAssociationMixin<DeletedSearches, DeletedSearchesId>
  addDeletedSearches!: Sequelize.HasManyAddAssociationsMixin<DeletedSearches, DeletedSearchesId>
  createDeletedSearch!: Sequelize.HasManyCreateAssociationMixin<DeletedSearches>
  removeDeletedSearch!: Sequelize.HasManyRemoveAssociationMixin<DeletedSearches, DeletedSearchesId>
  removeDeletedSearches!: Sequelize.HasManyRemoveAssociationsMixin<
    DeletedSearches,
    DeletedSearchesId
  >
  hasDeletedSearch!: Sequelize.HasManyHasAssociationMixin<DeletedSearches, DeletedSearchesId>
  hasDeletedSearches!: Sequelize.HasManyHasAssociationsMixin<DeletedSearches, DeletedSearchesId>
  countDeletedSearches!: Sequelize.HasManyCountAssociationsMixin
  // SavedSearches hasMany SavedSearchConditions via savedSearchID
  savedSearchConditions!: SavedSearchConditions[]
  getSavedSearchConditions!: Sequelize.HasManyGetAssociationsMixin<SavedSearchConditions>
  setSavedSearchConditions!: Sequelize.HasManySetAssociationsMixin<
    SavedSearchConditions,
    SavedSearchConditionsId
  >
  addSavedSearchCondition!: Sequelize.HasManyAddAssociationMixin<
    SavedSearchConditions,
    SavedSearchConditionsId
  >
  addSavedSearchConditions!: Sequelize.HasManyAddAssociationsMixin<
    SavedSearchConditions,
    SavedSearchConditionsId
  >
  createSavedSearchCondition!: Sequelize.HasManyCreateAssociationMixin<SavedSearchConditions>
  removeSavedSearchCondition!: Sequelize.HasManyRemoveAssociationMixin<
    SavedSearchConditions,
    SavedSearchConditionsId
  >
  removeSavedSearchConditions!: Sequelize.HasManyRemoveAssociationsMixin<
    SavedSearchConditions,
    SavedSearchConditionsId
  >
  hasSavedSearchCondition!: Sequelize.HasManyHasAssociationMixin<
    SavedSearchConditions,
    SavedSearchConditionsId
  >
  hasSavedSearchConditions!: Sequelize.HasManyHasAssociationsMixin<
    SavedSearchConditions,
    SavedSearchConditionsId
  >
  countSavedSearchConditions!: Sequelize.HasManyCountAssociationsMixin

  static initModel(sequelize: Sequelize.Sequelize): typeof SavedSearches {
    return SavedSearches.init(
      {
        savedSearchID: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: true,
          primaryKey: true
        },
        savedSearchName: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        clientDateModified: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
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
        version: {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: 0
        },
        synced: {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: 0
        }
      },
      {
        sequelize,
        tableName: 'savedSearches',
        timestamps: false,
        indexes: [
          {
            name: 'sqlite_autoindex_savedSearches_1',
            unique: true,
            fields: [{ name: 'libraryID' }, { name: 'key' }]
          },
          {
            name: 'savedSearches_synced',
            fields: [{ name: 'synced' }]
          }
        ]
      }
    )
  }
}
