import * as Sequelize from 'sequelize'
import { DataTypes, Model, Optional } from 'sequelize'
import type { BaseFieldMappings, BaseFieldMappingsId } from './baseFieldMappings'
import type { CustomBaseFieldMappings, CustomBaseFieldMappingsId } from './customBaseFieldMappings'
import type { CustomItemTypeFields, CustomItemTypeFieldsId } from './customItemTypeFields'
import type { FieldFormats, FieldFormatsId } from './fieldFormats'
import type { ItemTypeFields, ItemTypeFieldsId } from './itemTypeFields'

export interface FieldsAttributes {
  fieldID?: number
  fieldName?: string
  fieldFormatID?: number
}

export type FieldsPk = 'fieldID'
export type FieldsId = Fields[FieldsPk]
export type FieldsOptionalAttributes = 'fieldID' | 'fieldName' | 'fieldFormatID'
export type FieldsCreationAttributes = Optional<FieldsAttributes, FieldsOptionalAttributes>

export class Fields
  extends Model<FieldsAttributes, FieldsCreationAttributes>
  implements FieldsAttributes
{
  fieldID?: number
  fieldName?: string
  fieldFormatID?: number

  // Fields belongsTo FieldFormats via fieldFormatID
  fieldFormat!: FieldFormats
  getFieldFormat!: Sequelize.BelongsToGetAssociationMixin<FieldFormats>
  setFieldFormat!: Sequelize.BelongsToSetAssociationMixin<FieldFormats, FieldFormatsId>
  createFieldFormat!: Sequelize.BelongsToCreateAssociationMixin<FieldFormats>
  // Fields hasMany BaseFieldMappings via fieldID
  baseFieldMappings!: BaseFieldMappings[]
  getBaseFieldMappings!: Sequelize.HasManyGetAssociationsMixin<BaseFieldMappings>
  setBaseFieldMappings!: Sequelize.HasManySetAssociationsMixin<
    BaseFieldMappings,
    BaseFieldMappingsId
  >
  addBaseFieldMapping!: Sequelize.HasManyAddAssociationMixin<BaseFieldMappings, BaseFieldMappingsId>
  addBaseFieldMappings!: Sequelize.HasManyAddAssociationsMixin<
    BaseFieldMappings,
    BaseFieldMappingsId
  >
  createBaseFieldMapping!: Sequelize.HasManyCreateAssociationMixin<BaseFieldMappings>
  removeBaseFieldMapping!: Sequelize.HasManyRemoveAssociationMixin<
    BaseFieldMappings,
    BaseFieldMappingsId
  >
  removeBaseFieldMappings!: Sequelize.HasManyRemoveAssociationsMixin<
    BaseFieldMappings,
    BaseFieldMappingsId
  >
  hasBaseFieldMapping!: Sequelize.HasManyHasAssociationMixin<BaseFieldMappings, BaseFieldMappingsId>
  hasBaseFieldMappings!: Sequelize.HasManyHasAssociationsMixin<
    BaseFieldMappings,
    BaseFieldMappingsId
  >
  countBaseFieldMappings!: Sequelize.HasManyCountAssociationsMixin
  // Fields hasMany BaseFieldMappings via baseFieldID
  baseField_baseFieldMappings!: BaseFieldMappings[]
  getBaseField_baseFieldMappings!: Sequelize.HasManyGetAssociationsMixin<BaseFieldMappings>
  setBaseField_baseFieldMappings!: Sequelize.HasManySetAssociationsMixin<
    BaseFieldMappings,
    BaseFieldMappingsId
  >
  addBaseField_baseFieldMapping!: Sequelize.HasManyAddAssociationMixin<
    BaseFieldMappings,
    BaseFieldMappingsId
  >
  addBaseField_baseFieldMappings!: Sequelize.HasManyAddAssociationsMixin<
    BaseFieldMappings,
    BaseFieldMappingsId
  >
  createBaseField_baseFieldMapping!: Sequelize.HasManyCreateAssociationMixin<BaseFieldMappings>
  removeBaseField_baseFieldMapping!: Sequelize.HasManyRemoveAssociationMixin<
    BaseFieldMappings,
    BaseFieldMappingsId
  >
  removeBaseField_baseFieldMappings!: Sequelize.HasManyRemoveAssociationsMixin<
    BaseFieldMappings,
    BaseFieldMappingsId
  >
  hasBaseField_baseFieldMapping!: Sequelize.HasManyHasAssociationMixin<
    BaseFieldMappings,
    BaseFieldMappingsId
  >
  hasBaseField_baseFieldMappings!: Sequelize.HasManyHasAssociationsMixin<
    BaseFieldMappings,
    BaseFieldMappingsId
  >
  countBaseField_baseFieldMappings!: Sequelize.HasManyCountAssociationsMixin
  // Fields hasMany CustomBaseFieldMappings via baseFieldID
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
  // Fields hasMany CustomItemTypeFields via fieldID
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
  // Fields hasMany ItemTypeFields via fieldID
  itemTypeFields!: ItemTypeFields[]
  getItemTypeFields!: Sequelize.HasManyGetAssociationsMixin<ItemTypeFields>
  setItemTypeFields!: Sequelize.HasManySetAssociationsMixin<ItemTypeFields, ItemTypeFieldsId>
  addItemTypeField!: Sequelize.HasManyAddAssociationMixin<ItemTypeFields, ItemTypeFieldsId>
  addItemTypeFields!: Sequelize.HasManyAddAssociationsMixin<ItemTypeFields, ItemTypeFieldsId>
  createItemTypeField!: Sequelize.HasManyCreateAssociationMixin<ItemTypeFields>
  removeItemTypeField!: Sequelize.HasManyRemoveAssociationMixin<ItemTypeFields, ItemTypeFieldsId>
  removeItemTypeFields!: Sequelize.HasManyRemoveAssociationsMixin<ItemTypeFields, ItemTypeFieldsId>
  hasItemTypeField!: Sequelize.HasManyHasAssociationMixin<ItemTypeFields, ItemTypeFieldsId>
  hasItemTypeFields!: Sequelize.HasManyHasAssociationsMixin<ItemTypeFields, ItemTypeFieldsId>
  countItemTypeFields!: Sequelize.HasManyCountAssociationsMixin

  static initModel(sequelize: Sequelize.Sequelize): typeof Fields {
    return Fields.init(
      {
        fieldID: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: true,
          primaryKey: true
        },
        fieldName: {
          type: DataTypes.TEXT,
          allowNull: true
        },
        fieldFormatID: {
          type: DataTypes.INTEGER,
          allowNull: true,
          references: {
            model: 'fieldFormats',
            key: 'fieldFormatID'
          }
        }
      },
      {
        sequelize,
        tableName: 'fields',
        timestamps: false
      }
    )
  }
}
