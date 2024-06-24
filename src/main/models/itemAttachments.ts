import * as Sequelize from 'sequelize'
import { DataTypes, Model, Optional } from 'sequelize'
import type { Charsets, CharsetsId } from './charsets'
import type { ItemAnnotations, ItemAnnotationsId } from './itemAnnotations'
import type { Items, ItemsId } from './items'

export interface ItemAttachmentsAttributes {
  itemID?: number
  parentItemID?: number
  linkMode?: number
  contentType?: string
  charsetID?: number
  path?: string
  syncState?: number
  storageModTime?: number
  storageHash?: string
  lastProcessedModificationTime?: number
}

export type ItemAttachmentsPk = 'itemID'
export type ItemAttachmentsId = ItemAttachments[ItemAttachmentsPk]
export type ItemAttachmentsOptionalAttributes =
  | 'itemID'
  | 'parentItemID'
  | 'linkMode'
  | 'contentType'
  | 'charsetID'
  | 'path'
  | 'syncState'
  | 'storageModTime'
  | 'storageHash'
  | 'lastProcessedModificationTime'
export type ItemAttachmentsCreationAttributes = Optional<
  ItemAttachmentsAttributes,
  ItemAttachmentsOptionalAttributes
>

export class ItemAttachments
  extends Model<ItemAttachmentsAttributes, ItemAttachmentsCreationAttributes>
  implements ItemAttachmentsAttributes
{
  itemID?: number
  parentItemID?: number
  linkMode?: number
  contentType?: string
  charsetID?: number
  path?: string
  syncState?: number
  storageModTime?: number
  storageHash?: string
  lastProcessedModificationTime?: number

  // ItemAttachments belongsTo Charsets via charsetID
  charset!: Charsets
  getCharset!: Sequelize.BelongsToGetAssociationMixin<Charsets>
  setCharset!: Sequelize.BelongsToSetAssociationMixin<Charsets, CharsetsId>
  createCharset!: Sequelize.BelongsToCreateAssociationMixin<Charsets>
  // ItemAttachments hasMany ItemAnnotations via parentItemID
  itemAnnotations!: ItemAnnotations[]
  getItemAnnotations!: Sequelize.HasManyGetAssociationsMixin<ItemAnnotations>
  setItemAnnotations!: Sequelize.HasManySetAssociationsMixin<ItemAnnotations, ItemAnnotationsId>
  addItemAnnotation!: Sequelize.HasManyAddAssociationMixin<ItemAnnotations, ItemAnnotationsId>
  addItemAnnotations!: Sequelize.HasManyAddAssociationsMixin<ItemAnnotations, ItemAnnotationsId>
  createItemAnnotation!: Sequelize.HasManyCreateAssociationMixin<ItemAnnotations>
  removeItemAnnotation!: Sequelize.HasManyRemoveAssociationMixin<ItemAnnotations, ItemAnnotationsId>
  removeItemAnnotations!: Sequelize.HasManyRemoveAssociationsMixin<
    ItemAnnotations,
    ItemAnnotationsId
  >
  hasItemAnnotation!: Sequelize.HasManyHasAssociationMixin<ItemAnnotations, ItemAnnotationsId>
  hasItemAnnotations!: Sequelize.HasManyHasAssociationsMixin<ItemAnnotations, ItemAnnotationsId>
  countItemAnnotations!: Sequelize.HasManyCountAssociationsMixin
  // ItemAttachments belongsTo Items via parentItemID
  parentItem!: Items
  getParentItem!: Sequelize.BelongsToGetAssociationMixin<Items>
  setParentItem!: Sequelize.BelongsToSetAssociationMixin<Items, ItemsId>
  createParentItem!: Sequelize.BelongsToCreateAssociationMixin<Items>
  // ItemAttachments belongsTo Items via itemID
  item!: Items
  getItem!: Sequelize.BelongsToGetAssociationMixin<Items>
  setItem!: Sequelize.BelongsToSetAssociationMixin<Items, ItemsId>
  createItem!: Sequelize.BelongsToCreateAssociationMixin<Items>

  static initModel(sequelize: Sequelize.Sequelize): typeof ItemAttachments {
    return ItemAttachments.init(
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
        parentItemID: {
          type: DataTypes.INTEGER,
          allowNull: true,
          references: {
            model: 'items',
            key: 'itemID'
          }
        },
        linkMode: {
          type: DataTypes.INTEGER,
          allowNull: true
        },
        contentType: {
          type: DataTypes.TEXT,
          allowNull: true
        },
        charsetID: {
          type: DataTypes.INTEGER,
          allowNull: true,
          references: {
            model: 'charsets',
            key: 'charsetID'
          }
        },
        path: {
          type: DataTypes.TEXT,
          allowNull: true
        },
        syncState: {
          type: DataTypes.INTEGER,
          allowNull: true,
          defaultValue: 0
        },
        storageModTime: {
          type: DataTypes.INTEGER,
          allowNull: true
        },
        storageHash: {
          type: DataTypes.TEXT,
          allowNull: true
        },
        lastProcessedModificationTime: {
          type: DataTypes.INTEGER,
          allowNull: true
        }
      },
      {
        sequelize,
        tableName: 'itemAttachments',
        hasTrigger: true,
        timestamps: false,
        indexes: [
          {
            name: 'itemAttachments_parentItemID',
            fields: [{ name: 'parentItemID' }]
          },
          {
            name: 'itemAttachments_charsetID',
            fields: [{ name: 'charsetID' }]
          },
          {
            name: 'itemAttachments_contentType',
            fields: [{ name: 'contentType' }]
          },
          {
            name: 'itemAttachments_syncState',
            fields: [{ name: 'syncState' }]
          },
          {
            name: 'itemAttachments_lastProcessedModificationTime',
            fields: [{ name: 'lastProcessedModificationTime' }]
          }
        ]
      }
    )
  }
}
