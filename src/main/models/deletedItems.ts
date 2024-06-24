import * as Sequelize from 'sequelize'
import { DataTypes, Model, Optional } from 'sequelize'
import type { Items, ItemsId } from './items'

export interface DeletedItemsAttributes {
  itemID?: number
  dateDeleted: any
}

export type DeletedItemsPk = 'itemID'
export type DeletedItemsId = DeletedItems[DeletedItemsPk]
export type DeletedItemsOptionalAttributes = 'itemID' | 'dateDeleted'
export type DeletedItemsCreationAttributes = Optional<
  DeletedItemsAttributes,
  DeletedItemsOptionalAttributes
>

export class DeletedItems
  extends Model<DeletedItemsAttributes, DeletedItemsCreationAttributes>
  implements DeletedItemsAttributes
{
  itemID?: number
  dateDeleted!: any

  // DeletedItems belongsTo Items via itemID
  item!: Items
  getItem!: Sequelize.BelongsToGetAssociationMixin<Items>
  setItem!: Sequelize.BelongsToSetAssociationMixin<Items, ItemsId>
  createItem!: Sequelize.BelongsToCreateAssociationMixin<Items>

  static initModel(sequelize: Sequelize.Sequelize): typeof DeletedItems {
    return DeletedItems.init(
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
        dateDeleted: {
          type: '',
          allowNull: false,
          defaultValue: 'CURRENT_TIMESTAMP'
        }
      },
      {
        sequelize,
        tableName: 'deletedItems',
        timestamps: false,
        indexes: [
          {
            name: 'deletedItems_dateDeleted',
            fields: [{ name: 'dateDeleted' }]
          }
        ]
      }
    )
  }
}
