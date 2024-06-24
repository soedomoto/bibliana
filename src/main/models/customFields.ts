import * as Sequelize from 'sequelize'
import { DataTypes, Model, Optional } from 'sequelize'
import type { CustomBaseFieldMappings, CustomBaseFieldMappingsId } from './customBaseFieldMappings'
import type { CustomItemTypeFields, CustomItemTypeFieldsId } from './customItemTypeFields'

export interface CustomFieldsAttributes {
  customFieldID?: number
  fieldName?: string
  label?: string
}

export type CustomFieldsPk = 'customFieldID'
export type CustomFieldsId = CustomFields[CustomFieldsPk]
export type CustomFieldsOptionalAttributes = 'customFieldID' | 'fieldName' | 'label'
export type CustomFieldsCreationAttributes = Optional<
  CustomFieldsAttributes,
  CustomFieldsOptionalAttributes
>

export class CustomFields
  extends Model<CustomFieldsAttributes, CustomFieldsCreationAttributes>
  implements CustomFieldsAttributes
{
  customFieldID?: number
  fieldName?: string
  label?: string

  // CustomFields hasMany CustomBaseFieldMappings via customFieldID
  customBaseFieldMappings!: CustomBaseFieldMappings[]
  getCustomBaseFieldMappings!: Sequelize.HasManyGetAssociationsMixin<CustomBaseFieldMappings>
  setCustomBaseFieldMappings!: Sequelize.HasManySetAssociationsMixin<
    CustomBaseFieldMappings,
    CustomBaseFieldMappingsId
  >
  addCustomBaseFieldMapping!: Sequelize.HasManyAddAssociationMixin<
    CustomBaseFieldMappings,
    CustomBaseFieldMappingsId
  >
  addCustomBaseFieldMappings!: Sequelize.HasManyAddAssociationsMixin<
    CustomBaseFieldMappings,
    CustomBaseFieldMappingsId
  >
  createCustomBaseFieldMapping!: Sequelize.HasManyCreateAssociationMixin<CustomBaseFieldMappings>
  removeCustomBaseFieldMapping!: Sequelize.HasManyRemoveAssociationMixin<
    CustomBaseFieldMappings,
    CustomBaseFieldMappingsId
  >
  removeCustomBaseFieldMappings!: Sequelize.HasManyRemoveAssociationsMixin<
    CustomBaseFieldMappings,
    CustomBaseFieldMappingsId
  >
  hasCustomBaseFieldMapping!: Sequelize.HasManyHasAssociationMixin<
    CustomBaseFieldMappings,
    CustomBaseFieldMappingsId
  >
  hasCustomBaseFieldMappings!: Sequelize.HasManyHasAssociationsMixin<
    CustomBaseFieldMappings,
    CustomBaseFieldMappingsId
  >
  countCustomBaseFieldMappings!: Sequelize.HasManyCountAssociationsMixin
  // CustomFields hasMany CustomItemTypeFields via customFieldID
  customItemTypeFields!: CustomItemTypeFields[]
  getCustomItemTypeFields!: Sequelize.HasManyGetAssociationsMixin<CustomItemTypeFields>
  setCustomItemTypeFields!: Sequelize.HasManySetAssociationsMixin<
    CustomItemTypeFields,
    CustomItemTypeFieldsId
  >
  addCustomItemTypeField!: Sequelize.HasManyAddAssociationMixin<
    CustomItemTypeFields,
    CustomItemTypeFieldsId
  >
  addCustomItemTypeFields!: Sequelize.HasManyAddAssociationsMixin<
    CustomItemTypeFields,
    CustomItemTypeFieldsId
  >
  createCustomItemTypeField!: Sequelize.HasManyCreateAssociationMixin<CustomItemTypeFields>
  removeCustomItemTypeField!: Sequelize.HasManyRemoveAssociationMixin<
    CustomItemTypeFields,
    CustomItemTypeFieldsId
  >
  removeCustomItemTypeFields!: Sequelize.HasManyRemoveAssociationsMixin<
    CustomItemTypeFields,
    CustomItemTypeFieldsId
  >
  hasCustomItemTypeField!: Sequelize.HasManyHasAssociationMixin<
    CustomItemTypeFields,
    CustomItemTypeFieldsId
  >
  hasCustomItemTypeFields!: Sequelize.HasManyHasAssociationsMixin<
    CustomItemTypeFields,
    CustomItemTypeFieldsId
  >
  countCustomItemTypeFields!: Sequelize.HasManyCountAssociationsMixin

  static initModel(sequelize: Sequelize.Sequelize): typeof CustomFields {
    return CustomFields.init(
      {
        customFieldID: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: true,
          primaryKey: true
        },
        fieldName: {
          type: DataTypes.TEXT,
          allowNull: true
        },
        label: {
          type: DataTypes.TEXT,
          allowNull: true
        }
      },
      {
        sequelize,
        tableName: 'customFields',
        timestamps: false
      }
    )
  }
}
