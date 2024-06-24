import * as Sequelize from 'sequelize'
import { DataTypes, Model, Optional } from 'sequelize'
import type { ItemCreators, ItemCreatorsId } from './itemCreators'

export interface CreatorsAttributes {
  creatorID?: number
  firstName?: string
  lastName?: string
  fieldMode?: number
}

export type CreatorsPk = 'creatorID'
export type CreatorsId = Creators[CreatorsPk]
export type CreatorsOptionalAttributes = 'creatorID' | 'firstName' | 'lastName' | 'fieldMode'
export type CreatorsCreationAttributes = Optional<CreatorsAttributes, CreatorsOptionalAttributes>

export class Creators
  extends Model<CreatorsAttributes, CreatorsCreationAttributes>
  implements CreatorsAttributes
{
  creatorID?: number
  firstName?: string
  lastName?: string
  fieldMode?: number

  // Creators hasMany ItemCreators via creatorID
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

  static initModel(sequelize: Sequelize.Sequelize): typeof Creators {
    return Creators.init(
      {
        creatorID: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: true,
          primaryKey: true
        },
        firstName: {
          type: DataTypes.TEXT,
          allowNull: true,
          unique: true
        },
        lastName: {
          type: DataTypes.TEXT,
          allowNull: true,
          unique: true
        },
        fieldMode: {
          type: DataTypes.INTEGER,
          allowNull: true,
          unique: true
        }
      },
      {
        sequelize,
        tableName: 'creators',
        hasTrigger: true,
        timestamps: false,
        indexes: [
          {
            name: 'sqlite_autoindex_creators_1',
            unique: true,
            fields: [{ name: 'lastName' }, { name: 'firstName' }, { name: 'fieldMode' }]
          }
        ]
      }
    )
  }
}
