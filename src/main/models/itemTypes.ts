import * as Sequelize from 'sequelize'
import { DataTypes, Model, Optional } from 'sequelize'
import type { BaseFieldMappings, BaseFieldMappingsId } from './baseFieldMappings'
import type { ItemTypeCreatorTypes, ItemTypeCreatorTypesId } from './itemTypeCreatorTypes'
import type { ItemTypeFields, ItemTypeFieldsId } from './itemTypeFields'

export interface ItemTypesAttributes {
  itemTypeID?: number
  typeName?: string
  templateItemTypeID?: number
  display?: number
}

export type ItemTypesPk = 'itemTypeID'
export type ItemTypesId = ItemTypes[ItemTypesPk]
export type ItemTypesOptionalAttributes =
  | 'itemTypeID'
  | 'typeName'
  | 'templateItemTypeID'
  | 'display'
export type ItemTypesCreationAttributes = Optional<ItemTypesAttributes, ItemTypesOptionalAttributes>

export class ItemTypes
  extends Model<ItemTypesAttributes, ItemTypesCreationAttributes>
  implements ItemTypesAttributes
{
  itemTypeID?: number
  typeName?: string
  templateItemTypeID?: number
  display?: number

  // ItemTypes hasMany BaseFieldMappings via itemTypeID
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
  // ItemTypes hasMany ItemTypeCreatorTypes via itemTypeID
  itemTypeCreatorTypes!: ItemTypeCreatorTypes[]
  getItemTypeCreatorTypes!: Sequelize.HasManyGetAssociationsMixin<ItemTypeCreatorTypes>
  setItemTypeCreatorTypes!: Sequelize.HasManySetAssociationsMixin<
    ItemTypeCreatorTypes,
    ItemTypeCreatorTypesId
  >
  addItemTypeCreatorType!: Sequelize.HasManyAddAssociationMixin<
    ItemTypeCreatorTypes,
    ItemTypeCreatorTypesId
  >
  addItemTypeCreatorTypes!: Sequelize.HasManyAddAssociationsMixin<
    ItemTypeCreatorTypes,
    ItemTypeCreatorTypesId
  >
  createItemTypeCreatorType!: Sequelize.HasManyCreateAssociationMixin<ItemTypeCreatorTypes>
  removeItemTypeCreatorType!: Sequelize.HasManyRemoveAssociationMixin<
    ItemTypeCreatorTypes,
    ItemTypeCreatorTypesId
  >
  removeItemTypeCreatorTypes!: Sequelize.HasManyRemoveAssociationsMixin<
    ItemTypeCreatorTypes,
    ItemTypeCreatorTypesId
  >
  hasItemTypeCreatorType!: Sequelize.HasManyHasAssociationMixin<
    ItemTypeCreatorTypes,
    ItemTypeCreatorTypesId
  >
  hasItemTypeCreatorTypes!: Sequelize.HasManyHasAssociationsMixin<
    ItemTypeCreatorTypes,
    ItemTypeCreatorTypesId
  >
  countItemTypeCreatorTypes!: Sequelize.HasManyCountAssociationsMixin
  // ItemTypes hasMany ItemTypeFields via itemTypeID
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

  static initModel(sequelize: Sequelize.Sequelize): typeof ItemTypes {
    return ItemTypes.init(
      {
        itemTypeID: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: true,
          primaryKey: true
        },
        typeName: {
          type: DataTypes.TEXT,
          allowNull: true
        },
        templateItemTypeID: {
          type: DataTypes.INTEGER,
          allowNull: true
        },
        display: {
          type: DataTypes.INTEGER,
          allowNull: true,
          defaultValue: 1
        }
      },
      {
        sequelize,
        tableName: 'itemTypes',
        timestamps: false
      }
    )
  }
}
