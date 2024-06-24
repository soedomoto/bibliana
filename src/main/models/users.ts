import * as Sequelize from 'sequelize'
import { DataTypes, Model, Optional } from 'sequelize'
import type { GroupItems, GroupItemsId } from './groupItems'

export interface UsersAttributes {
  userID?: number
  name: string
}

export type UsersPk = 'userID'
export type UsersId = Users[UsersPk]
export type UsersOptionalAttributes = 'userID'
export type UsersCreationAttributes = Optional<UsersAttributes, UsersOptionalAttributes>

export class Users
  extends Model<UsersAttributes, UsersCreationAttributes>
  implements UsersAttributes
{
  userID?: number
  name!: string

  // Users hasMany GroupItems via lastModifiedByUserID
  groupItems!: GroupItems[]
  getGroupItems!: Sequelize.HasManyGetAssociationsMixin<GroupItems>
  setGroupItems!: Sequelize.HasManySetAssociationsMixin<GroupItems, GroupItemsId>
  addGroupItem!: Sequelize.HasManyAddAssociationMixin<GroupItems, GroupItemsId>
  addGroupItems!: Sequelize.HasManyAddAssociationsMixin<GroupItems, GroupItemsId>
  createGroupItem!: Sequelize.HasManyCreateAssociationMixin<GroupItems>
  removeGroupItem!: Sequelize.HasManyRemoveAssociationMixin<GroupItems, GroupItemsId>
  removeGroupItems!: Sequelize.HasManyRemoveAssociationsMixin<GroupItems, GroupItemsId>
  hasGroupItem!: Sequelize.HasManyHasAssociationMixin<GroupItems, GroupItemsId>
  hasGroupItems!: Sequelize.HasManyHasAssociationsMixin<GroupItems, GroupItemsId>
  countGroupItems!: Sequelize.HasManyCountAssociationsMixin
  // Users hasMany GroupItems via createdByUserID
  createdByUser_groupItems!: GroupItems[]
  getCreatedByUser_groupItems!: Sequelize.HasManyGetAssociationsMixin<GroupItems>
  setCreatedByUser_groupItems!: Sequelize.HasManySetAssociationsMixin<GroupItems, GroupItemsId>
  addCreatedByUser_groupItem!: Sequelize.HasManyAddAssociationMixin<GroupItems, GroupItemsId>
  addCreatedByUser_groupItems!: Sequelize.HasManyAddAssociationsMixin<GroupItems, GroupItemsId>
  createCreatedByUser_groupItem!: Sequelize.HasManyCreateAssociationMixin<GroupItems>
  removeCreatedByUser_groupItem!: Sequelize.HasManyRemoveAssociationMixin<GroupItems, GroupItemsId>
  removeCreatedByUser_groupItems!: Sequelize.HasManyRemoveAssociationsMixin<
    GroupItems,
    GroupItemsId
  >
  hasCreatedByUser_groupItem!: Sequelize.HasManyHasAssociationMixin<GroupItems, GroupItemsId>
  hasCreatedByUser_groupItems!: Sequelize.HasManyHasAssociationsMixin<GroupItems, GroupItemsId>
  countCreatedByUser_groupItems!: Sequelize.HasManyCountAssociationsMixin

  static initModel(sequelize: Sequelize.Sequelize): typeof Users {
    return Users.init(
      {
        userID: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: true,
          primaryKey: true
        },
        name: {
          type: DataTypes.TEXT,
          allowNull: false
        }
      },
      {
        sequelize,
        tableName: 'users',
        timestamps: false
      }
    )
  }
}
