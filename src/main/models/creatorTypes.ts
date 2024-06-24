import * as Sequelize from 'sequelize'
import { DataTypes, Model, Optional } from 'sequelize'
import type { ItemCreators, ItemCreatorsId } from './itemCreators'
import type { ItemTypeCreatorTypes, ItemTypeCreatorTypesId } from './itemTypeCreatorTypes'

export interface CreatorTypesAttributes {
  creatorTypeID?: number
  creatorType?: string
}

export type CreatorTypesPk = 'creatorTypeID'
export type CreatorTypesId = CreatorTypes[CreatorTypesPk]
export type CreatorTypesOptionalAttributes = 'creatorTypeID' | 'creatorType'
export type CreatorTypesCreationAttributes = Optional<
  CreatorTypesAttributes,
  CreatorTypesOptionalAttributes
>

export class CreatorTypes
  extends Model<CreatorTypesAttributes, CreatorTypesCreationAttributes>
  implements CreatorTypesAttributes
{
  creatorTypeID?: number
  creatorType?: string

  // CreatorTypes hasMany ItemCreators via creatorTypeID
  itemCreators!: ItemCreators[]
  getItemCreators!: Sequelize.HasManyGetAssociationsMixin<ItemCreators>
  setItemCreators!: Sequelize.HasManySetAssociationsMixin<ItemCreators, ItemCreatorsId>
  addItemCreator!: Sequelize.HasManyAddAssociationMixin<ItemCreators, ItemCreatorsId>
  addItemCreators!: Sequelize.HasManyAddAssociationsMixin<ItemCreators, ItemCreatorsId>
  createItemCreator!: Sequelize.HasManyCreateAssociationMixin<ItemCreators>
  removeItemCreator!: Sequelize.HasManyRemoveAssociationMixin<ItemCreators, ItemCreatorsId>
  removeItemCreators!: Sequelize.HasManyRemoveAssociationsMixin<ItemCreators, ItemCreatorsId>
  hasItemCreator!: Sequelize.HasManyHasAssociationMixin<ItemCreators, ItemCreatorsId>
  hasItemCreators!: Sequelize.HasManyHasAssociationsMixin<ItemCreators, ItemCreatorsId>
  countItemCreators!: Sequelize.HasManyCountAssociationsMixin
  // CreatorTypes hasMany ItemTypeCreatorTypes via creatorTypeID
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

  static initModel(sequelize: Sequelize.Sequelize): typeof CreatorTypes {
    return CreatorTypes.init(
      {
        creatorTypeID: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: true,
          primaryKey: true
        },
        creatorType: {
          type: DataTypes.TEXT,
          allowNull: true
        }
      },
      {
        sequelize,
        tableName: 'creatorTypes',
        timestamps: false
      }
    )
  }
}
