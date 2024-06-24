import * as Sequelize from 'sequelize'
import { DataTypes, Model } from 'sequelize'
import type { Items, ItemsId } from './items'
import type { Tags, TagsId } from './tags'

export interface ItemTagsAttributes {
  itemID: number
  tagID: number
  type: number
}

export type ItemTagsPk = 'itemID' | 'tagID'
export type ItemTagsId = ItemTags[ItemTagsPk]
export type ItemTagsCreationAttributes = ItemTagsAttributes

export class ItemTags
  extends Model<ItemTagsAttributes, ItemTagsCreationAttributes>
  implements ItemTagsAttributes
{
  itemID!: number
  tagID!: number
  type!: number

  // ItemTags belongsTo Items via itemID
  item!: Items
  getItem!: Sequelize.BelongsToGetAssociationMixin<Items>
  setItem!: Sequelize.BelongsToSetAssociationMixin<Items, ItemsId>
  createItem!: Sequelize.BelongsToCreateAssociationMixin<Items>
  // ItemTags belongsTo Tags via tagID
  tag!: Tags
  getTag!: Sequelize.BelongsToGetAssociationMixin<Tags>
  setTag!: Sequelize.BelongsToSetAssociationMixin<Tags, TagsId>
  createTag!: Sequelize.BelongsToCreateAssociationMixin<Tags>

  static initModel(sequelize: Sequelize.Sequelize): typeof ItemTags {
    return ItemTags.init(
      {
        itemID: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'items',
            key: 'itemID'
          },
          unique: true
        },
        tagID: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'tags',
            key: 'tagID'
          }
        },
        type: {
          type: DataTypes.INTEGER,
          allowNull: false
        }
      },
      {
        sequelize,
        tableName: 'itemTags',
        timestamps: false,
        indexes: [
          {
            name: 'sqlite_autoindex_itemTags_1',
            unique: true,
            fields: [{ name: 'itemID' }, { name: 'tagID' }]
          },
          {
            name: 'itemTags_tagID',
            fields: [{ name: 'tagID' }]
          }
        ]
      }
    )
  }
}
