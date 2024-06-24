import * as Sequelize from 'sequelize'
import { DataTypes, Model, Optional } from 'sequelize'
import type { Items, ItemsId } from './items'

export interface ItemNotesAttributes {
  itemID?: number
  parentItemID?: number
  note?: string
  title?: string
}

export type ItemNotesPk = 'itemID'
export type ItemNotesId = ItemNotes[ItemNotesPk]
export type ItemNotesOptionalAttributes = 'itemID' | 'parentItemID' | 'note' | 'title'
export type ItemNotesCreationAttributes = Optional<ItemNotesAttributes, ItemNotesOptionalAttributes>

export class ItemNotes
  extends Model<ItemNotesAttributes, ItemNotesCreationAttributes>
  implements ItemNotesAttributes
{
  itemID?: number
  parentItemID?: number
  note?: string
  title?: string

  // ItemNotes belongsTo Items via parentItemID
  parentItem!: Items
  getParentItem!: Sequelize.BelongsToGetAssociationMixin<Items>
  setParentItem!: Sequelize.BelongsToSetAssociationMixin<Items, ItemsId>
  createParentItem!: Sequelize.BelongsToCreateAssociationMixin<Items>
  // ItemNotes belongsTo Items via itemID
  item!: Items
  getItem!: Sequelize.BelongsToGetAssociationMixin<Items>
  setItem!: Sequelize.BelongsToSetAssociationMixin<Items, ItemsId>
  createItem!: Sequelize.BelongsToCreateAssociationMixin<Items>

  static initModel(sequelize: Sequelize.Sequelize): typeof ItemNotes {
    return ItemNotes.init(
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
        note: {
          type: DataTypes.TEXT,
          allowNull: true
        },
        title: {
          type: DataTypes.TEXT,
          allowNull: true
        }
      },
      {
        sequelize,
        tableName: 'itemNotes',
        hasTrigger: true,
        timestamps: false,
        indexes: [
          {
            name: 'itemNotes_parentItemID',
            fields: [{ name: 'parentItemID' }]
          }
        ]
      }
    )
  }
}
