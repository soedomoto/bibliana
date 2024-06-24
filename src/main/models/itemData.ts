import * as Sequelize from 'sequelize'
import { DataTypes, Model, Optional } from 'sequelize'
import type { FieldsCombined, FieldsCombinedId } from './fieldsCombined'
import type { ItemDataValues, ItemDataValuesId } from './itemDataValues'
import type { Items, ItemsId } from './items'

export interface ItemDataAttributes {
  itemID?: number
  fieldID?: number
  valueID?: any
}

export type ItemDataPk = 'itemID' | 'fieldID'
export type ItemDataId = ItemData[ItemDataPk]
export type ItemDataOptionalAttributes = 'itemID' | 'fieldID' | 'valueID'
export type ItemDataCreationAttributes = Optional<ItemDataAttributes, ItemDataOptionalAttributes>

export class ItemData
  extends Model<ItemDataAttributes, ItemDataCreationAttributes>
  implements ItemDataAttributes
{
  itemID?: number
  fieldID?: number
  valueID?: any

  // ItemData belongsTo FieldsCombined via fieldID
  field!: FieldsCombined
  getField!: Sequelize.BelongsToGetAssociationMixin<FieldsCombined>
  setField!: Sequelize.BelongsToSetAssociationMixin<FieldsCombined, FieldsCombinedId>
  createField!: Sequelize.BelongsToCreateAssociationMixin<FieldsCombined>
  // ItemData belongsTo ItemDataValues via valueID
  value!: ItemDataValues
  getValue!: Sequelize.BelongsToGetAssociationMixin<ItemDataValues>
  setValue!: Sequelize.BelongsToSetAssociationMixin<ItemDataValues, ItemDataValuesId>
  createValue!: Sequelize.BelongsToCreateAssociationMixin<ItemDataValues>
  // ItemData belongsTo Items via itemID
  item!: Items
  getItem!: Sequelize.BelongsToGetAssociationMixin<Items>
  setItem!: Sequelize.BelongsToSetAssociationMixin<Items, ItemsId>
  createItem!: Sequelize.BelongsToCreateAssociationMixin<Items>

  static initModel(sequelize: Sequelize.Sequelize): typeof ItemData {
    return ItemData.init(
      {
        itemID: {
          type: DataTypes.INTEGER,
          allowNull: true,
          references: {
            model: 'items',
            key: 'itemID'
          },
          unique: true,
          primaryKey: true
        },
        fieldID: {
          type: DataTypes.INTEGER,
          allowNull: true,
          references: {
            model: 'fieldsCombined',
            key: 'fieldID'
          },
          primaryKey: true
        },
        valueID: {
          type: '',
          allowNull: true,
          references: {
            model: 'itemDataValues',
            key: 'valueID'
          }
        }
      },
      {
        sequelize,
        tableName: 'itemData',
        timestamps: false,
        indexes: [
          {
            name: 'sqlite_autoindex_itemData_1',
            unique: true,
            fields: [{ name: 'itemID' }, { name: 'fieldID' }]
          },
          {
            name: 'itemData_fieldID',
            fields: [{ name: 'fieldID' }]
          }
        ]
      }
    )
  }
}
