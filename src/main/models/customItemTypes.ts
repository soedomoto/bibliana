import * as Sequelize from 'sequelize'
import { DataTypes, Model, Optional } from 'sequelize'
import type { CustomBaseFieldMappings, CustomBaseFieldMappingsId } from './customBaseFieldMappings'
import type { CustomItemTypeFields, CustomItemTypeFieldsId } from './customItemTypeFields'

export interface CustomItemTypesAttributes {
  customItemTypeID?: number
  typeName?: string
  label?: string
  display?: number
  icon?: string
}

export type CustomItemTypesPk = 'customItemTypeID'
export type CustomItemTypesId = CustomItemTypes[CustomItemTypesPk]
export type CustomItemTypesOptionalAttributes =
  | 'customItemTypeID'
  | 'typeName'
  | 'label'
  | 'display'
  | 'icon'
export type CustomItemTypesCreationAttributes = Optional<
  CustomItemTypesAttributes,
  CustomItemTypesOptionalAttributes
>

export class CustomItemTypes
  extends Model<CustomItemTypesAttributes, CustomItemTypesCreationAttributes>
  implements CustomItemTypesAttributes
{
  customItemTypeID?: number
  typeName?: string
  label?: string
  display?: number
  icon?: string

  // CustomItemTypes hasMany CustomBaseFieldMappings via customItemTypeID
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
  // CustomItemTypes hasMany CustomItemTypeFields via customItemTypeID
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

  static initModel(sequelize: Sequelize.Sequelize): typeof CustomItemTypes {
    return CustomItemTypes.init(
      {
        customItemTypeID: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: true,
          primaryKey: true
        },
        typeName: {
          type: DataTypes.TEXT,
          allowNull: true
        },
        label: {
          type: DataTypes.TEXT,
          allowNull: true
        },
        display: {
          type: DataTypes.INTEGER,
          allowNull: true,
          defaultValue: 1
        },
        icon: {
          type: DataTypes.TEXT,
          allowNull: true
        }
      },
      {
        sequelize,
        tableName: 'customItemTypes',
        timestamps: false
      }
    )
  }
}
