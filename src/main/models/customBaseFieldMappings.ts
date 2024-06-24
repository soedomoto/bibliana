import * as Sequelize from 'sequelize'
import { DataTypes, Model, Optional } from 'sequelize'
import type { CustomFields, CustomFieldsId } from './customFields'
import type { CustomItemTypes, CustomItemTypesId } from './customItemTypes'
import type { Fields, FieldsId } from './fields'

export interface CustomBaseFieldMappingsAttributes {
  customItemTypeID?: number
  baseFieldID?: number
  customFieldID?: number
}

export type CustomBaseFieldMappingsPk = 'customItemTypeID' | 'baseFieldID' | 'customFieldID'
export type CustomBaseFieldMappingsId = CustomBaseFieldMappings[CustomBaseFieldMappingsPk]
export type CustomBaseFieldMappingsOptionalAttributes =
  | 'customItemTypeID'
  | 'baseFieldID'
  | 'customFieldID'
export type CustomBaseFieldMappingsCreationAttributes = Optional<
  CustomBaseFieldMappingsAttributes,
  CustomBaseFieldMappingsOptionalAttributes
>

export class CustomBaseFieldMappings
  extends Model<CustomBaseFieldMappingsAttributes, CustomBaseFieldMappingsCreationAttributes>
  implements CustomBaseFieldMappingsAttributes
{
  customItemTypeID?: number
  baseFieldID?: number
  customFieldID?: number

  // CustomBaseFieldMappings belongsTo CustomFields via customFieldID
  customField!: CustomFields
  getCustomField!: Sequelize.BelongsToGetAssociationMixin<CustomFields>
  setCustomField!: Sequelize.BelongsToSetAssociationMixin<CustomFields, CustomFieldsId>
  createCustomField!: Sequelize.BelongsToCreateAssociationMixin<CustomFields>
  // CustomBaseFieldMappings belongsTo CustomItemTypes via customItemTypeID
  customItemType!: CustomItemTypes
  getCustomItemType!: Sequelize.BelongsToGetAssociationMixin<CustomItemTypes>
  setCustomItemType!: Sequelize.BelongsToSetAssociationMixin<CustomItemTypes, CustomItemTypesId>
  createCustomItemType!: Sequelize.BelongsToCreateAssociationMixin<CustomItemTypes>
  // CustomBaseFieldMappings belongsTo Fields via baseFieldID
  baseField!: Fields
  getBaseField!: Sequelize.BelongsToGetAssociationMixin<Fields>
  setBaseField!: Sequelize.BelongsToSetAssociationMixin<Fields, FieldsId>
  createBaseField!: Sequelize.BelongsToCreateAssociationMixin<Fields>

  static initModel(sequelize: Sequelize.Sequelize): typeof CustomBaseFieldMappings {
    return CustomBaseFieldMappings.init(
      {
        customItemTypeID: {
          type: DataTypes.INTEGER,
          allowNull: true,
          references: {
            model: 'customItemTypes',
            key: 'customItemTypeID'
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
        customFieldID: {
          type: DataTypes.INTEGER,
          allowNull: true,
          references: {
            model: 'customFields',
            key: 'customFieldID'
          }
        }
      },
      {
        sequelize,
        tableName: 'customBaseFieldMappings',
        timestamps: false,
        indexes: [
          {
            name: 'sqlite_autoindex_customBaseFieldMappings_1',
            unique: true,
            fields: [
              { name: 'customItemTypeID' },
              { name: 'baseFieldID' },
              { name: 'customFieldID' }
            ]
          },
          {
            name: 'customBaseFieldMappings_baseFieldID',
            fields: [{ name: 'baseFieldID' }]
          },
          {
            name: 'customBaseFieldMappings_customFieldID',
            fields: [{ name: 'customFieldID' }]
          }
        ]
      }
    )
  }
}
