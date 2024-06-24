import * as Sequelize from 'sequelize'
import { DataTypes, Model, Optional } from 'sequelize'
import type { Fields, FieldsId } from './fields'
import type { ItemTypes, ItemTypesId } from './itemTypes'

export interface ItemTypeFieldsAttributes {
  itemTypeID?: number
  fieldID?: number
  hide?: number
  orderIndex?: number
}

export type ItemTypeFieldsPk = 'itemTypeID' | 'orderIndex'
export type ItemTypeFieldsId = ItemTypeFields[ItemTypeFieldsPk]
export type ItemTypeFieldsOptionalAttributes = 'itemTypeID' | 'fieldID' | 'hide' | 'orderIndex'
export type ItemTypeFieldsCreationAttributes = Optional<
  ItemTypeFieldsAttributes,
  ItemTypeFieldsOptionalAttributes
>

export class ItemTypeFields
  extends Model<ItemTypeFieldsAttributes, ItemTypeFieldsCreationAttributes>
  implements ItemTypeFieldsAttributes
{
  itemTypeID?: number
  fieldID?: number
  hide?: number
  orderIndex?: number

  // ItemTypeFields belongsTo Fields via fieldID
  field!: Fields
  getField!: Sequelize.BelongsToGetAssociationMixin<Fields>
  setField!: Sequelize.BelongsToSetAssociationMixin<Fields, FieldsId>
  createField!: Sequelize.BelongsToCreateAssociationMixin<Fields>
  // ItemTypeFields belongsTo ItemTypes via itemTypeID
  itemType!: ItemTypes
  getItemType!: Sequelize.BelongsToGetAssociationMixin<ItemTypes>
  setItemType!: Sequelize.BelongsToSetAssociationMixin<ItemTypes, ItemTypesId>
  createItemType!: Sequelize.BelongsToCreateAssociationMixin<ItemTypes>

  static initModel(sequelize: Sequelize.Sequelize): typeof ItemTypeFields {
    return ItemTypeFields.init(
      {
        itemTypeID: {
          type: DataTypes.INTEGER,
          allowNull: true,
          references: {
            model: 'itemTypes',
            key: 'itemTypeID'
          },
          unique: true
        },
        fieldID: {
          type: DataTypes.INTEGER,
          allowNull: true,
          references: {
            model: 'fields',
            key: 'fieldID'
          }
        },
        hide: {
          type: DataTypes.INTEGER,
          allowNull: true
        },
        orderIndex: {
          type: DataTypes.INTEGER,
          allowNull: true,
          primaryKey: true,
          unique: true
        }
      },
      {
        sequelize,
        tableName: 'itemTypeFields',
        timestamps: false,
        indexes: [
          {
            name: 'sqlite_autoindex_itemTypeFields_1',
            unique: true,
            fields: [{ name: 'itemTypeID' }, { name: 'orderIndex' }]
          },
          {
            name: 'sqlite_autoindex_itemTypeFields_2',
            unique: true,
            fields: [{ name: 'itemTypeID' }, { name: 'fieldID' }]
          },
          {
            name: 'itemTypeFields_fieldID',
            fields: [{ name: 'fieldID' }]
          }
        ]
      }
    )
  }
}
