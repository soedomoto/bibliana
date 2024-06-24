import * as Sequelize from 'sequelize'
import { DataTypes, Model, Optional } from 'sequelize'
import type { Collections, CollectionsId } from './collections'

export interface DeletedCollectionsAttributes {
  collectionID?: number
  dateDeleted: any
}

export type DeletedCollectionsPk = 'collectionID'
export type DeletedCollectionsId = DeletedCollections[DeletedCollectionsPk]
export type DeletedCollectionsOptionalAttributes = 'collectionID' | 'dateDeleted'
export type DeletedCollectionsCreationAttributes = Optional<
  DeletedCollectionsAttributes,
  DeletedCollectionsOptionalAttributes
>

export class DeletedCollections
  extends Model<DeletedCollectionsAttributes, DeletedCollectionsCreationAttributes>
  implements DeletedCollectionsAttributes
{
  collectionID?: number
  dateDeleted!: any

  // DeletedCollections belongsTo Collections via collectionID
  collection!: Collections
  getCollection!: Sequelize.BelongsToGetAssociationMixin<Collections>
  setCollection!: Sequelize.BelongsToSetAssociationMixin<Collections, CollectionsId>
  createCollection!: Sequelize.BelongsToCreateAssociationMixin<Collections>

  static initModel(sequelize: Sequelize.Sequelize): typeof DeletedCollections {
    return DeletedCollections.init(
      {
        collectionID: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: true,
          references: {
            model: 'collections',
            key: 'collectionID'
          }
        },
        dateDeleted: {
          type: '',
          allowNull: false,
          defaultValue: 'CURRENT_TIMESTAMP'
        }
      },
      {
        sequelize,
        tableName: 'deletedCollections',
        timestamps: false,
        indexes: [
          {
            name: 'deletedCollections_dateDeleted',
            fields: [{ name: 'dateDeleted' }]
          }
        ]
      }
    )
  }
}
