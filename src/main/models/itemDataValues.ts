import * as Sequelize from 'sequelize'
import { DataTypes, Model, Optional } from 'sequelize'
import type { ItemData, ItemDataId } from './itemData'

export interface ItemDataValuesAttributes {
  valueID?: number
  value?: any
}

export type ItemDataValuesPk = 'valueID'
export type ItemDataValuesId = ItemDataValues[ItemDataValuesPk]
export type ItemDataValuesOptionalAttributes = 'valueID' | 'value'
export type ItemDataValuesCreationAttributes = Optional<
  ItemDataValuesAttributes,
  ItemDataValuesOptionalAttributes
>

export class ItemDataValues
  extends Model<ItemDataValuesAttributes, ItemDataValuesCreationAttributes>
  implements ItemDataValuesAttributes
{
  valueID?: number
  value?: any

  // ItemDataValues hasMany ItemData via valueID
  itemData!: ItemData[]
  getItemData!: Sequelize.HasManyGetAssociationsMixin<ItemData>
  setItemData!: Sequelize.HasManySetAssociationsMixin<ItemData, ItemDataId>
  addItemDatum!: Sequelize.HasManyAddAssociationMixin<ItemData, ItemDataId>
  addItemData!: Sequelize.HasManyAddAssociationsMixin<ItemData, ItemDataId>
  createItemDatum!: Sequelize.HasManyCreateAssociationMixin<ItemData>
  removeItemDatum!: Sequelize.HasManyRemoveAssociationMixin<ItemData, ItemDataId>
  removeItemData!: Sequelize.HasManyRemoveAssociationsMixin<ItemData, ItemDataId>
  hasItemDatum!: Sequelize.HasManyHasAssociationMixin<ItemData, ItemDataId>
  hasItemData!: Sequelize.HasManyHasAssociationsMixin<ItemData, ItemDataId>
  countItemData!: Sequelize.HasManyCountAssociationsMixin

  static initModel(sequelize: Sequelize.Sequelize): typeof ItemDataValues {
    return ItemDataValues.init(
      {
        valueID: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: true,
          primaryKey: true
        },
        value: {
          type: '',
          allowNull: true,
          unique: true
        }
      },
      {
        sequelize,
        tableName: 'itemDataValues',
        timestamps: false,
        indexes: [
          {
            name: 'sqlite_autoindex_itemDataValues_1',
            unique: true,
            fields: [{ name: 'value' }]
          }
        ]
      }
    )
  }
}
