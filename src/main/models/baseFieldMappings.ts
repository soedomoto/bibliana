import * as Sequelize from 'sequelize'
import { DataTypes, Model, Optional } from 'sequelize'
import type { Fields, FieldsId } from './fields'
import type { ItemTypes, ItemTypesId } from './itemTypes'

export interface BaseFieldMappingsAttributes {
  itemTypeID?: number
  baseFieldID?: number
  fieldID?: number
}

export type BaseFieldMappingsPk = 'itemTypeID' | 'baseFieldID' | 'fieldID'
export type BaseFieldMappingsId = BaseFieldMappings[BaseFieldMappingsPk]
export type BaseFieldMappingsOptionalAttributes = 'itemTypeID' | 'baseFieldID' | 'fieldID'
export type BaseFieldMappingsCreationAttributes = Optional<
  BaseFieldMappingsAttributes,
  BaseFieldMappingsOptionalAttributes
>

export class BaseFieldMappings
  extends Model<BaseFieldMappingsAttributes, BaseFieldMappingsCreationAttributes>
  implements BaseFieldMappingsAttributes
{
  itemTypeID?: number
  baseFieldID?: number
  fieldID?: number

  // BaseFieldMappings belongsTo Fields via fieldID
  field!: Fields
  getField!: Sequelize.BelongsToGetAssociationMixin<Fields>
  setField!: Sequelize.BelongsToSetAssociationMixin<Fields, FieldsId>
  createField!: Sequelize.BelongsToCreateAssociationMixin<Fields>
  // BaseFieldMappings belongsTo Fields via baseFieldID
  baseField!: Fields
  getBaseField!: Sequelize.BelongsToGetAssociationMixin<Fields>
  setBaseField!: Sequelize.BelongsToSetAssociationMixin<Fields, FieldsId>
  createBaseField!: Sequelize.BelongsToCreateAssociationMixin<Fields>
  // BaseFieldMappings belongsTo ItemTypes via itemTypeID
  itemType!: ItemTypes
  getItemType!: Sequelize.BelongsToGetAssociationMixin<ItemTypes>
  setItemType!: Sequelize.BelongsToSetAssociationMixin<ItemTypes, ItemTypesId>
  createItemType!: Sequelize.BelongsToCreateAssociationMixin<ItemTypes>

  static initModel(sequelize: Sequelize.Sequelize): typeof BaseFieldMappings {
    return BaseFieldMappings.init(
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
        baseFieldID: {
          type: DataTypes.INTEGER,
          allowNull: true,
          references: {
            model: 'fields',
            key: 'fieldID'
          }
        },
        fieldID: {
          type: DataTypes.INTEGER,
          allowNull: true,
          references: {
            model: 'fields',
            key: 'fieldID'
          }
        }
      },
      {
        sequelize,
        tableName: 'baseFieldMappings',
        timestamps: false,
        indexes: [
          {
            name: 'sqlite_autoindex_baseFieldMappings_1',
            unique: true,
            fields: [{ name: 'itemTypeID' }, { name: 'baseFieldID' }, { name: 'fieldID' }]
          },
          {
            name: 'baseFieldMappings_baseFieldID',
            fields: [{ name: 'baseFieldID' }]
          },
          {
            name: 'baseFieldMappings_fieldID',
            fields: [{ name: 'fieldID' }]
          }
        ]
      }
    )
  }
}
