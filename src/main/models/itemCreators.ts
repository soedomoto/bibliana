import * as Sequelize from 'sequelize'
import { DataTypes, Model, Optional } from 'sequelize'
import type { CreatorTypes, CreatorTypesId } from './creatorTypes'
import type { Creators, CreatorsId } from './creators'
import type { Items, ItemsId } from './items'

export interface ItemCreatorsAttributes {
  itemID: number
  creatorID: number
  creatorTypeID: number
  orderIndex: number
}

export type ItemCreatorsPk = 'itemID' | 'creatorID' | 'creatorTypeID' | 'orderIndex'
export type ItemCreatorsId = ItemCreators[ItemCreatorsPk]
export type ItemCreatorsOptionalAttributes = 'creatorTypeID' | 'orderIndex'
export type ItemCreatorsCreationAttributes = Optional<
  ItemCreatorsAttributes,
  ItemCreatorsOptionalAttributes
>

export class ItemCreators
  extends Model<ItemCreatorsAttributes, ItemCreatorsCreationAttributes>
  implements ItemCreatorsAttributes
{
  itemID!: number
  creatorID!: number
  creatorTypeID!: number
  orderIndex!: number

  // ItemCreators belongsTo CreatorTypes via creatorTypeID
  creatorType!: CreatorTypes
  getCreatorType!: Sequelize.BelongsToGetAssociationMixin<CreatorTypes>
  setCreatorType!: Sequelize.BelongsToSetAssociationMixin<CreatorTypes, CreatorTypesId>
  createCreatorType!: Sequelize.BelongsToCreateAssociationMixin<CreatorTypes>
  // ItemCreators belongsTo Creators via creatorID
  creator!: Creators
  getCreator!: Sequelize.BelongsToGetAssociationMixin<Creators>
  setCreator!: Sequelize.BelongsToSetAssociationMixin<Creators, CreatorsId>
  createCreator!: Sequelize.BelongsToCreateAssociationMixin<Creators>
  // ItemCreators belongsTo Items via itemID
  item!: Items
  getItem!: Sequelize.BelongsToGetAssociationMixin<Items>
  setItem!: Sequelize.BelongsToSetAssociationMixin<Items, ItemsId>
  createItem!: Sequelize.BelongsToCreateAssociationMixin<Items>

  static initModel(sequelize: Sequelize.Sequelize): typeof ItemCreators {
    return ItemCreators.init(
      {
        itemID: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'items',
            key: 'itemID'
          },
          unique: true
        },
        creatorID: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'creators',
            key: 'creatorID'
          },
          unique: true
        },
        creatorTypeID: {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: 1,
          references: {
            model: 'creatorTypes',
            key: 'creatorTypeID'
          }
        },
        orderIndex: {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: 0,
          primaryKey: true,
          unique: true
        }
      },
      {
        sequelize,
        tableName: 'itemCreators',
        timestamps: false,
        indexes: [
          {
            name: 'sqlite_autoindex_itemCreators_1',
            unique: true,
            fields: [
              { name: 'itemID' },
              { name: 'creatorID' },
              { name: 'creatorTypeID' },
              { name: 'orderIndex' }
            ]
          },
          {
            name: 'sqlite_autoindex_itemCreators_2',
            unique: true,
            fields: [{ name: 'itemID' }, { name: 'orderIndex' }]
          },
          {
            name: 'itemCreators_creatorTypeID',
            fields: [{ name: 'creatorTypeID' }]
          }
        ]
      }
    )
  }
}
