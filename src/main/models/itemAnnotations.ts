import * as Sequelize from 'sequelize'
import { DataTypes, Model, Optional } from 'sequelize'
import type { ItemAttachments, ItemAttachmentsId } from './itemAttachments'
import type { Items, ItemsId } from './items'

export interface ItemAnnotationsAttributes {
  itemID?: number
  parentItemID: number
  type: number
  authorName?: string
  text?: string
  comment?: string
  color?: string
  pageLabel?: string
  sortIndex: string
  position: string
  isExternal: number
}

export type ItemAnnotationsPk = 'itemID'
export type ItemAnnotationsId = ItemAnnotations[ItemAnnotationsPk]
export type ItemAnnotationsOptionalAttributes =
  | 'itemID'
  | 'authorName'
  | 'text'
  | 'comment'
  | 'color'
  | 'pageLabel'
export type ItemAnnotationsCreationAttributes = Optional<
  ItemAnnotationsAttributes,
  ItemAnnotationsOptionalAttributes
>

export class ItemAnnotations
  extends Model<ItemAnnotationsAttributes, ItemAnnotationsCreationAttributes>
  implements ItemAnnotationsAttributes
{
  itemID?: number
  parentItemID!: number
  type!: number
  authorName?: string
  text?: string
  comment?: string
  color?: string
  pageLabel?: string
  sortIndex!: string
  position!: string
  isExternal!: number

  // ItemAnnotations belongsTo ItemAttachments via parentItemID
  parentItem!: ItemAttachments
  getParentItem!: Sequelize.BelongsToGetAssociationMixin<ItemAttachments>
  setParentItem!: Sequelize.BelongsToSetAssociationMixin<ItemAttachments, ItemAttachmentsId>
  createParentItem!: Sequelize.BelongsToCreateAssociationMixin<ItemAttachments>
  // ItemAnnotations belongsTo Items via itemID
  item!: Items
  getItem!: Sequelize.BelongsToGetAssociationMixin<Items>
  setItem!: Sequelize.BelongsToSetAssociationMixin<Items, ItemsId>
  createItem!: Sequelize.BelongsToCreateAssociationMixin<Items>

  static initModel(sequelize: Sequelize.Sequelize): typeof ItemAnnotations {
    return ItemAnnotations.init(
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
          allowNull: false,
          references: {
            model: 'itemAttachments',
            key: 'itemID'
          }
        },
        type: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        authorName: {
          type: DataTypes.TEXT,
          allowNull: true
        },
        text: {
          type: DataTypes.TEXT,
          allowNull: true
        },
        comment: {
          type: DataTypes.TEXT,
          allowNull: true
        },
        color: {
          type: DataTypes.TEXT,
          allowNull: true
        },
        pageLabel: {
          type: DataTypes.TEXT,
          allowNull: true
        },
        sortIndex: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        position: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        isExternal: {
          type: DataTypes.INTEGER,
          allowNull: false
        }
      },
      {
        sequelize,
        tableName: 'itemAnnotations',
        timestamps: false,
        indexes: [
          {
            name: 'itemAnnotations_parentItemID',
            fields: [{ name: 'parentItemID' }]
          }
        ]
      }
    )
  }
}
