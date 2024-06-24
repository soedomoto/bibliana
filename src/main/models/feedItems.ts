import * as Sequelize from 'sequelize'
import { DataTypes, Model, Optional } from 'sequelize'
import type { Items, ItemsId } from './items'

export interface FeedItemsAttributes {
  itemID?: number
  guid: string
  readTime?: Date
  translatedTime?: Date
}

export type FeedItemsPk = 'itemID'
export type FeedItemsId = FeedItems[FeedItemsPk]
export type FeedItemsOptionalAttributes = 'itemID' | 'readTime' | 'translatedTime'
export type FeedItemsCreationAttributes = Optional<FeedItemsAttributes, FeedItemsOptionalAttributes>

export class FeedItems
  extends Model<FeedItemsAttributes, FeedItemsCreationAttributes>
  implements FeedItemsAttributes
{
  itemID?: number
  guid!: string
  readTime?: Date
  translatedTime?: Date

  // FeedItems belongsTo Items via itemID
  item!: Items
  getItem!: Sequelize.BelongsToGetAssociationMixin<Items>
  setItem!: Sequelize.BelongsToSetAssociationMixin<Items, ItemsId>
  createItem!: Sequelize.BelongsToCreateAssociationMixin<Items>

  static initModel(sequelize: Sequelize.Sequelize): typeof FeedItems {
    return FeedItems.init(
      {
        itemID: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: true,
          references: {
            model: 'items',
            key: 'itemID'
          }
        },
        guid: {
          type: DataTypes.TEXT,
          allowNull: false,
          unique: true
        },
        readTime: {
          type: DataTypes.DATE,
          allowNull: true
        },
        translatedTime: {
          type: DataTypes.DATE,
          allowNull: true
        }
      },
      {
        sequelize,
        tableName: 'feedItems',
        timestamps: false,
        indexes: [
          {
            name: 'sqlite_autoindex_feedItems_1',
            unique: true,
            fields: [{ name: 'guid' }]
          }
        ]
      }
    )
  }
}
