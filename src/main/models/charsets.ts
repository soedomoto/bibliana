import * as Sequelize from 'sequelize'
import { DataTypes, Model, Optional } from 'sequelize'
import type { ItemAttachments, ItemAttachmentsId } from './itemAttachments'

export interface CharsetsAttributes {
  charsetID?: number
  charset?: string
}

export type CharsetsPk = 'charsetID'
export type CharsetsId = Charsets[CharsetsPk]
export type CharsetsOptionalAttributes = 'charsetID' | 'charset'
export type CharsetsCreationAttributes = Optional<CharsetsAttributes, CharsetsOptionalAttributes>

export class Charsets
  extends Model<CharsetsAttributes, CharsetsCreationAttributes>
  implements CharsetsAttributes
{
  charsetID?: number
  charset?: string

  // Charsets hasMany ItemAttachments via charsetID
  itemAttachments!: ItemAttachments[]
  getItemAttachments!: Sequelize.HasManyGetAssociationsMixin<ItemAttachments>
  setItemAttachments!: Sequelize.HasManySetAssociationsMixin<ItemAttachments, ItemAttachmentsId>
  addItemAttachment!: Sequelize.HasManyAddAssociationMixin<ItemAttachments, ItemAttachmentsId>
  addItemAttachments!: Sequelize.HasManyAddAssociationsMixin<ItemAttachments, ItemAttachmentsId>
  createItemAttachment!: Sequelize.HasManyCreateAssociationMixin<ItemAttachments>
  removeItemAttachment!: Sequelize.HasManyRemoveAssociationMixin<ItemAttachments, ItemAttachmentsId>
  removeItemAttachments!: Sequelize.HasManyRemoveAssociationsMixin<
    ItemAttachments,
    ItemAttachmentsId
  >
  hasItemAttachment!: Sequelize.HasManyHasAssociationMixin<ItemAttachments, ItemAttachmentsId>
  hasItemAttachments!: Sequelize.HasManyHasAssociationsMixin<ItemAttachments, ItemAttachmentsId>
  countItemAttachments!: Sequelize.HasManyCountAssociationsMixin

  static initModel(sequelize: Sequelize.Sequelize): typeof Charsets {
    return Charsets.init(
      {
        charsetID: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: true,
          primaryKey: true
        },
        charset: {
          type: DataTypes.TEXT,
          allowNull: true
        }
      },
      {
        sequelize,
        tableName: 'charsets',
        timestamps: false,
        indexes: [
          {
            name: 'sqlite_autoindex_charsets_1',
            unique: true,
            fields: [{ name: 'charset' }]
          },
          {
            name: 'charsets_charset',
            fields: [{ name: 'charset' }]
          }
        ]
      }
    )
  }
}
