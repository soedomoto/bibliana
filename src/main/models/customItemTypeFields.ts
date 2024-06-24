import * as Sequelize from 'sequelize'
import { DataTypes, Model, Optional } from 'sequelize'
import type { CustomFields, CustomFieldsId } from './customFields'
import type { CustomItemTypes, CustomItemTypesId } from './customItemTypes'
import type { Fields, FieldsId } from './fields'

export interface CustomItemTypeFieldsAttributes {
  customItemTypeID: number
  fieldID?: number
  customFieldID?: number
  hide: number
  orderIndex: number
}

export type CustomItemTypeFieldsPk = 'customItemTypeID' | 'orderIndex'
export type CustomItemTypeFieldsId = CustomItemTypeFields[CustomItemTypeFieldsPk]
export type CustomItemTypeFieldsOptionalAttributes = 'fieldID' | 'customFieldID'
export type CustomItemTypeFieldsCreationAttributes = Optional<
  CustomItemTypeFieldsAttributes,
  CustomItemTypeFieldsOptionalAttributes
>

export class CustomItemTypeFields
  extends Model<CustomItemTypeFieldsAttributes, CustomItemTypeFieldsCreationAttributes>
  implements CustomItemTypeFieldsAttributes
{
  customItemTypeID!: number
  fieldID?: number
  customFieldID?: number
  hide!: number
  orderIndex!: number

  // CustomItemTypeFields belongsTo CustomFields via customFieldID
  customField!: CustomFields
  getCustomField!: Sequelize.BelongsToGetAssociationMixin<CustomFields>
  setCustomField!: Sequelize.BelongsToSetAssociationMixin<CustomFields, CustomFieldsId>
  createCustomField!: Sequelize.BelongsToCreateAssociationMixin<CustomFields>
  // CustomItemTypeFields belongsTo CustomItemTypes via customItemTypeID
  customItemType!: CustomItemTypes
  getCustomItemType!: Sequelize.BelongsToGetAssociationMixin<CustomItemTypes>
  setCustomItemType!: Sequelize.BelongsToSetAssociationMixin<CustomItemTypes, CustomItemTypesId>
  createCustomItemType!: Sequelize.BelongsToCreateAssociationMixin<CustomItemTypes>
  // CustomItemTypeFields belongsTo Fields via fieldID
  field!: Fields
  getField!: Sequelize.BelongsToGetAssociationMixin<Fields>
  setField!: Sequelize.BelongsToSetAssociationMixin<Fields, FieldsId>
  createField!: Sequelize.BelongsToCreateAssociationMixin<Fields>

  static initModel(sequelize: Sequelize.Sequelize): typeof CustomItemTypeFields {
    return CustomItemTypeFields.init(
      {
        customItemTypeID: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'customItemTypes',
            key: 'customItemTypeID'
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
        customFieldID: {
          type: DataTypes.INTEGER,
          allowNull: true,
          references: {
            model: 'customFields',
            key: 'customFieldID'
          }
        },
        hide: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        orderIndex: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          unique: true
        }
      },
      {
        sequelize,
        tableName: 'customItemTypeFields',
        timestamps: false,
        indexes: [
          {
            name: 'sqlite_autoindex_customItemTypeFields_1',
            unique: true,
            fields: [{ name: 'customItemTypeID' }, { name: 'orderIndex' }]
          },
          {
            name: 'customItemTypeFields_fieldID',
            fields: [{ name: 'fieldID' }]
          },
          {
            name: 'customItemTypeFields_customFieldID',
            fields: [{ name: 'customFieldID' }]
          }
        ]
      }
    )
  }
}
