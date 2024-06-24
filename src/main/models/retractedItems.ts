import * as Sequelize from 'sequelize'
import { DataTypes, Model, Optional } from 'sequelize'
import type { Items, ItemsId } from './items'

export interface RetractedItemsAttributes {
  itemID?: number
  data?: string
  flag?: number
}

export type RetractedItemsPk = 'itemID'
export type RetractedItemsId = RetractedItems[RetractedItemsPk]
export type RetractedItemsOptionalAttributes = 'itemID' | 'data' | 'flag'
export type RetractedItemsCreationAttributes = Optional<
  RetractedItemsAttributes,
  RetractedItemsOptionalAttributes
>

export class RetractedItems
  extends Model<RetractedItemsAttributes, RetractedItemsCreationAttributes>
  implements RetractedItemsAttributes
{
  itemID?: number
  data?: string
  flag?: number

  // RetractedItems belongsTo Items via itemID
  item!: Items
  getItem!: Sequelize.BelongsToGetAssociationMixin<Items>
  setItem!: Sequelize.BelongsToSetAssociationMixin<Items, ItemsId>
  createItem!: Sequelize.BelongsToCreateAssociationMixin<Items>

  static initModel(sequelize: Sequelize.Sequelize): typeof RetractedItems {
    return RetractedItems.init(
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
        data: {
          type: DataTypes.TEXT,
          allowNull: true
        },
        flag: {
          type: DataTypes.INTEGER,
          allowNull: true,
          defaultValue: 0
        }
      },
      {
        sequelize,
        tableName: 'retractedItems',
        timestamps: false
      }
    )
  }
}
