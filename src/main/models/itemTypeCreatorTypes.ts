import * as Sequelize from 'sequelize'
import { DataTypes, Model, Optional } from 'sequelize'
import type { CreatorTypes, CreatorTypesId } from './creatorTypes'
import type { ItemTypes, ItemTypesId } from './itemTypes'

export interface ItemTypeCreatorTypesAttributes {
  itemTypeID?: number
  creatorTypeID?: number
  primaryField?: number
}

export type ItemTypeCreatorTypesPk = 'itemTypeID' | 'creatorTypeID'
export type ItemTypeCreatorTypesId = ItemTypeCreatorTypes[ItemTypeCreatorTypesPk]
export type ItemTypeCreatorTypesOptionalAttributes = 'itemTypeID' | 'creatorTypeID' | 'primaryField'
export type ItemTypeCreatorTypesCreationAttributes = Optional<
  ItemTypeCreatorTypesAttributes,
  ItemTypeCreatorTypesOptionalAttributes
>

export class ItemTypeCreatorTypes
  extends Model<ItemTypeCreatorTypesAttributes, ItemTypeCreatorTypesCreationAttributes>
  implements ItemTypeCreatorTypesAttributes
{
  itemTypeID?: number
  creatorTypeID?: number
  primaryField?: number

  // ItemTypeCreatorTypes belongsTo CreatorTypes via creatorTypeID
  creatorType!: CreatorTypes
  getCreatorType!: Sequelize.BelongsToGetAssociationMixin<CreatorTypes>
  setCreatorType!: Sequelize.BelongsToSetAssociationMixin<CreatorTypes, CreatorTypesId>
  createCreatorType!: Sequelize.BelongsToCreateAssociationMixin<CreatorTypes>
  // ItemTypeCreatorTypes belongsTo ItemTypes via itemTypeID
  itemType!: ItemTypes
  getItemType!: Sequelize.BelongsToGetAssociationMixin<ItemTypes>
  setItemType!: Sequelize.BelongsToSetAssociationMixin<ItemTypes, ItemTypesId>
  createItemType!: Sequelize.BelongsToCreateAssociationMixin<ItemTypes>

  static initModel(sequelize: Sequelize.Sequelize): typeof ItemTypeCreatorTypes {
    return ItemTypeCreatorTypes.init(
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
        creatorTypeID: {
          type: DataTypes.INTEGER,
          allowNull: true,
          references: {
            model: 'creatorTypes',
            key: 'creatorTypeID'
          }
        },
        primaryField: {
          type: DataTypes.INTEGER,
          allowNull: true
        }
      },
      {
        sequelize,
        tableName: 'itemTypeCreatorTypes',
        timestamps: false,
        indexes: [
          {
            name: 'sqlite_autoindex_itemTypeCreatorTypes_1',
            unique: true,
            fields: [{ name: 'itemTypeID' }, { name: 'creatorTypeID' }]
          },
          {
            name: 'itemTypeCreatorTypes_creatorTypeID',
            fields: [{ name: 'creatorTypeID' }]
          }
        ]
      }
    )
  }
}
