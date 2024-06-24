import * as Sequelize from 'sequelize'
import { DataTypes, Model, Optional } from 'sequelize'
import type { Collections, CollectionsId } from './collections'
import type { Items, ItemsId } from './items'

export interface CollectionItemsAttributes {
  collectionID: number
  itemID: number
  orderIndex: number
}

export type CollectionItemsPk = 'collectionID' | 'itemID'
export type CollectionItemsId = CollectionItems[CollectionItemsPk]
export type CollectionItemsOptionalAttributes = 'orderIndex'
export type CollectionItemsCreationAttributes = Optional<
  CollectionItemsAttributes,
  CollectionItemsOptionalAttributes
>

export class CollectionItems
  extends Model<CollectionItemsAttributes, CollectionItemsCreationAttributes>
  implements CollectionItemsAttributes
{
  collectionID!: number
  itemID!: number
  orderIndex!: number

  // CollectionItems belongsTo Collections via collectionID
  collection!: Collections
  getCollection!: Sequelize.BelongsToGetAssociationMixin<Collections>
  setCollection!: Sequelize.BelongsToSetAssociationMixin<Collections, CollectionsId>
  createCollection!: Sequelize.BelongsToCreateAssociationMixin<Collections>
  // CollectionItems belongsTo Items via itemID
  item!: Items
  getItem!: Sequelize.BelongsToGetAssociationMixin<Items>
  setItem!: Sequelize.BelongsToSetAssociationMixin<Items, ItemsId>
  createItem!: Sequelize.BelongsToCreateAssociationMixin<Items>

  static initModel(sequelize: Sequelize.Sequelize): typeof CollectionItems {
    return CollectionItems.init(
      {
        collectionID: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'collections',
            key: 'collectionID'
          },
          unique: true
        },
        itemID: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'items',
            key: 'itemID'
          }
        },
        orderIndex: {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: 0
        }
      },
      {
        sequelize,
        tableName: 'collectionItems',
        hasTrigger: true,
        timestamps: false,
        indexes: [
          {
            name: 'sqlite_autoindex_collectionItems_1',
            unique: true,
            fields: [{ name: 'collectionID' }, { name: 'itemID' }]
          },
          {
            name: 'collectionItems_itemID',
            fields: [{ name: 'itemID' }]
          }
        ]
      }
    )
  }
}
