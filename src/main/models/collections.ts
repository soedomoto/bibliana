import * as Sequelize from 'sequelize'
import { DataTypes, Model, Optional } from 'sequelize'
import type { CollectionItems, CollectionItemsId } from './collectionItems'
import type { CollectionRelations, CollectionRelationsId } from './collectionRelations'
import type { DeletedCollections, DeletedCollectionsId } from './deletedCollections'
import type { Libraries, LibrariesId } from './libraries'

export interface CollectionsAttributes {
  collectionID?: number
  collectionName: string
  parentCollectionID?: number
  clientDateModified: Date
  libraryID: number
  key: string
  version: number
  synced: number
}

export type CollectionsPk = 'collectionID'
export type CollectionsId = Collections[CollectionsPk]
export type CollectionsOptionalAttributes =
  | 'collectionID'
  | 'parentCollectionID'
  | 'clientDateModified'
  | 'version'
  | 'synced'
export type CollectionsCreationAttributes = Optional<
  CollectionsAttributes,
  CollectionsOptionalAttributes
>

export class Collections
  extends Model<CollectionsAttributes, CollectionsCreationAttributes>
  implements CollectionsAttributes
{
  collectionID?: number
  collectionName!: string
  parentCollectionID?: number
  clientDateModified!: Date
  libraryID!: number
  key!: string
  version!: number
  synced!: number

  // Collections hasMany CollectionItems via collectionID
  collectionItems!: CollectionItems[]
  getCollectionItems!: Sequelize.HasManyGetAssociationsMixin<CollectionItems>
  setCollectionItems!: Sequelize.HasManySetAssociationsMixin<CollectionItems, CollectionItemsId>
  addCollectionItem!: Sequelize.HasManyAddAssociationMixin<CollectionItems, CollectionItemsId>
  addCollectionItems!: Sequelize.HasManyAddAssociationsMixin<CollectionItems, CollectionItemsId>
  createCollectionItem!: Sequelize.HasManyCreateAssociationMixin<CollectionItems>
  removeCollectionItem!: Sequelize.HasManyRemoveAssociationMixin<CollectionItems, CollectionItemsId>
  removeCollectionItems!: Sequelize.HasManyRemoveAssociationsMixin<
    CollectionItems,
    CollectionItemsId
  >
  hasCollectionItem!: Sequelize.HasManyHasAssociationMixin<CollectionItems, CollectionItemsId>
  hasCollectionItems!: Sequelize.HasManyHasAssociationsMixin<CollectionItems, CollectionItemsId>
  countCollectionItems!: Sequelize.HasManyCountAssociationsMixin
  // Collections hasMany CollectionRelations via collectionID
  collectionRelations!: CollectionRelations[]
  getCollectionRelations!: Sequelize.HasManyGetAssociationsMixin<CollectionRelations>
  setCollectionRelations!: Sequelize.HasManySetAssociationsMixin<
    CollectionRelations,
    CollectionRelationsId
  >
  addCollectionRelation!: Sequelize.HasManyAddAssociationMixin<
    CollectionRelations,
    CollectionRelationsId
  >
  addCollectionRelations!: Sequelize.HasManyAddAssociationsMixin<
    CollectionRelations,
    CollectionRelationsId
  >
  createCollectionRelation!: Sequelize.HasManyCreateAssociationMixin<CollectionRelations>
  removeCollectionRelation!: Sequelize.HasManyRemoveAssociationMixin<
    CollectionRelations,
    CollectionRelationsId
  >
  removeCollectionRelations!: Sequelize.HasManyRemoveAssociationsMixin<
    CollectionRelations,
    CollectionRelationsId
  >
  hasCollectionRelation!: Sequelize.HasManyHasAssociationMixin<
    CollectionRelations,
    CollectionRelationsId
  >
  hasCollectionRelations!: Sequelize.HasManyHasAssociationsMixin<
    CollectionRelations,
    CollectionRelationsId
  >
  countCollectionRelations!: Sequelize.HasManyCountAssociationsMixin
  // Collections belongsTo Collections via parentCollectionID
  parentCollection!: Collections
  getParentCollection!: Sequelize.BelongsToGetAssociationMixin<Collections>
  setParentCollection!: Sequelize.BelongsToSetAssociationMixin<Collections, CollectionsId>
  createParentCollection!: Sequelize.BelongsToCreateAssociationMixin<Collections>
  // Collections hasMany DeletedCollections via collectionID
  deletedCollections!: DeletedCollections[]
  getDeletedCollections!: Sequelize.HasManyGetAssociationsMixin<DeletedCollections>
  setDeletedCollections!: Sequelize.HasManySetAssociationsMixin<
    DeletedCollections,
    DeletedCollectionsId
  >
  addDeletedCollection!: Sequelize.HasManyAddAssociationMixin<
    DeletedCollections,
    DeletedCollectionsId
  >
  addDeletedCollections!: Sequelize.HasManyAddAssociationsMixin<
    DeletedCollections,
    DeletedCollectionsId
  >
  createDeletedCollection!: Sequelize.HasManyCreateAssociationMixin<DeletedCollections>
  removeDeletedCollection!: Sequelize.HasManyRemoveAssociationMixin<
    DeletedCollections,
    DeletedCollectionsId
  >
  removeDeletedCollections!: Sequelize.HasManyRemoveAssociationsMixin<
    DeletedCollections,
    DeletedCollectionsId
  >
  hasDeletedCollection!: Sequelize.HasManyHasAssociationMixin<
    DeletedCollections,
    DeletedCollectionsId
  >
  hasDeletedCollections!: Sequelize.HasManyHasAssociationsMixin<
    DeletedCollections,
    DeletedCollectionsId
  >
  countDeletedCollections!: Sequelize.HasManyCountAssociationsMixin
  // Collections belongsTo Libraries via libraryID
  library!: Libraries
  getLibrary!: Sequelize.BelongsToGetAssociationMixin<Libraries>
  setLibrary!: Sequelize.BelongsToSetAssociationMixin<Libraries, LibrariesId>
  createLibrary!: Sequelize.BelongsToCreateAssociationMixin<Libraries>

  static initModel(sequelize: Sequelize.Sequelize): typeof Collections {
    return Collections.init(
      {
        collectionID: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: true,
          primaryKey: true
        },
        collectionName: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        parentCollectionID: {
          type: DataTypes.INTEGER,
          allowNull: true,
          references: {
            model: 'collections',
            key: 'collectionID'
          }
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
        tableName: 'collections',
        hasTrigger: true,
        timestamps: false,
        indexes: [
          {
            name: 'sqlite_autoindex_collections_1',
            unique: true,
            fields: [{ name: 'libraryID' }, { name: 'key' }]
          },
          {
            name: 'collections_synced',
            fields: [{ name: 'synced' }]
          }
        ]
      }
    )
  }
}
