import * as Sequelize from 'sequelize'
import { DataTypes, Model, Optional } from 'sequelize'
import type { Items, ItemsId } from './items'
import type { Users, UsersId } from './users'

export interface GroupItemsAttributes {
  itemID?: number
  createdByUserID?: number
  lastModifiedByUserID?: number
}

export type GroupItemsPk = 'itemID'
export type GroupItemsId = GroupItems[GroupItemsPk]
export type GroupItemsOptionalAttributes = 'itemID' | 'createdByUserID' | 'lastModifiedByUserID'
export type GroupItemsCreationAttributes = Optional<
  GroupItemsAttributes,
  GroupItemsOptionalAttributes
>

export class GroupItems
  extends Model<GroupItemsAttributes, GroupItemsCreationAttributes>
  implements GroupItemsAttributes
{
  itemID?: number
  createdByUserID?: number
  lastModifiedByUserID?: number

  // GroupItems belongsTo Items via itemID
  item!: Items
  getItem!: Sequelize.BelongsToGetAssociationMixin<Items>
  setItem!: Sequelize.BelongsToSetAssociationMixin<Items, ItemsId>
  createItem!: Sequelize.BelongsToCreateAssociationMixin<Items>
  // GroupItems belongsTo Users via lastModifiedByUserID
  lastModifiedByUser!: Users
  getLastModifiedByUser!: Sequelize.BelongsToGetAssociationMixin<Users>
  setLastModifiedByUser!: Sequelize.BelongsToSetAssociationMixin<Users, UsersId>
  createLastModifiedByUser!: Sequelize.BelongsToCreateAssociationMixin<Users>
  // GroupItems belongsTo Users via createdByUserID
  createdByUser!: Users
  getCreatedByUser!: Sequelize.BelongsToGetAssociationMixin<Users>
  setCreatedByUser!: Sequelize.BelongsToSetAssociationMixin<Users, UsersId>
  createCreatedByUser!: Sequelize.BelongsToCreateAssociationMixin<Users>

  static initModel(sequelize: Sequelize.Sequelize): typeof GroupItems {
    return GroupItems.init(
      {
        itemID: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: true,
          references: {
            model: 'items',
            key: 'itemID'
          }
        },
        createdByUserID: {
          type: DataTypes.INTEGER,
          allowNull: true,
          references: {
            model: 'users',
            key: 'userID'
          }
        },
        lastModifiedByUserID: {
          type: DataTypes.INTEGER,
          allowNull: true,
          references: {
            model: 'users',
            key: 'userID'
          }
        }
      },
      {
        sequelize,
        tableName: 'groupItems',
        timestamps: false
      }
    )
  }
}
