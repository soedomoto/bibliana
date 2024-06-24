import * as Sequelize from 'sequelize'
import { DataTypes, Model, Optional } from 'sequelize'
import type { ItemTags, ItemTagsId } from './itemTags'

export interface TagsAttributes {
  tagID?: number
  name: string
}

export type TagsPk = 'tagID'
export type TagsId = Tags[TagsPk]
export type TagsOptionalAttributes = 'tagID'
export type TagsCreationAttributes = Optional<TagsAttributes, TagsOptionalAttributes>

export class Tags extends Model<TagsAttributes, TagsCreationAttributes> implements TagsAttributes {
  tagID?: number
  name!: string

  // Tags hasMany ItemTags via tagID
  itemTags!: ItemTags[]
  getItemTags!: Sequelize.HasManyGetAssociationsMixin<ItemTags>
  setItemTags!: Sequelize.HasManySetAssociationsMixin<ItemTags, ItemTagsId>
  addItemTag!: Sequelize.HasManyAddAssociationMixin<ItemTags, ItemTagsId>
  addItemTags!: Sequelize.HasManyAddAssociationsMixin<ItemTags, ItemTagsId>
  createItemTag!: Sequelize.HasManyCreateAssociationMixin<ItemTags>
  removeItemTag!: Sequelize.HasManyRemoveAssociationMixin<ItemTags, ItemTagsId>
  removeItemTags!: Sequelize.HasManyRemoveAssociationsMixin<ItemTags, ItemTagsId>
  hasItemTag!: Sequelize.HasManyHasAssociationMixin<ItemTags, ItemTagsId>
  hasItemTags!: Sequelize.HasManyHasAssociationsMixin<ItemTags, ItemTagsId>
  countItemTags!: Sequelize.HasManyCountAssociationsMixin

  static initModel(sequelize: Sequelize.Sequelize): typeof Tags {
    return Tags.init(
      {
        tagID: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: true,
          primaryKey: true
        },
        name: {
          type: DataTypes.TEXT,
          allowNull: false,
          unique: true
        }
      },
      {
        sequelize,
        tableName: 'tags',
        hasTrigger: true,
        timestamps: false,
        indexes: [
          {
            name: 'sqlite_autoindex_tags_1',
            unique: true,
            fields: [{ name: 'name' }]
          }
        ]
      }
    )
  }
}
