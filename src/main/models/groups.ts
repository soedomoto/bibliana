import * as Sequelize from 'sequelize'
import { DataTypes, Model, Optional } from 'sequelize'
import type { Libraries, LibrariesId } from './libraries'

export interface GroupsAttributes {
  groupID?: number
  libraryID: number
  name: string
  description: string
  version: number
}

export type GroupsPk = 'groupID'
export type GroupsId = Groups[GroupsPk]
export type GroupsOptionalAttributes = 'groupID'
export type GroupsCreationAttributes = Optional<GroupsAttributes, GroupsOptionalAttributes>

export class Groups
  extends Model<GroupsAttributes, GroupsCreationAttributes>
  implements GroupsAttributes
{
  groupID?: number
  libraryID!: number
  name!: string
  description!: string
  version!: number

  // Groups belongsTo Libraries via libraryID
  library!: Libraries
  getLibrary!: Sequelize.BelongsToGetAssociationMixin<Libraries>
  setLibrary!: Sequelize.BelongsToSetAssociationMixin<Libraries, LibrariesId>
  createLibrary!: Sequelize.BelongsToCreateAssociationMixin<Libraries>

  static initModel(sequelize: Sequelize.Sequelize): typeof Groups {
    return Groups.init(
      {
        groupID: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: true,
          primaryKey: true
        },
        libraryID: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'libraries',
            key: 'libraryID'
          },
          unique: true
        },
        name: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        description: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        version: {
          type: DataTypes.INTEGER,
          allowNull: false
        }
      },
      {
        sequelize,
        tableName: 'groups',
        timestamps: false,
        indexes: [
          {
            name: 'sqlite_autoindex_groups_1',
            unique: true,
            fields: [{ name: 'libraryID' }]
          }
        ]
      }
    )
  }
}
