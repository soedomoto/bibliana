import * as Sequelize from 'sequelize'
import { DataTypes, Model, Optional } from 'sequelize'
import type { Items, ItemsId } from './items'

export interface FulltextItemsAttributes {
  itemID?: number
  indexedPages?: number
  totalPages?: number
  indexedChars?: number
  totalChars?: number
  version: number
  synced: number
}

export type FulltextItemsPk = 'itemID'
export type FulltextItemsId = FulltextItems[FulltextItemsPk]
export type FulltextItemsOptionalAttributes =
  | 'itemID'
  | 'indexedPages'
  | 'totalPages'
  | 'indexedChars'
  | 'totalChars'
  | 'version'
  | 'synced'
export type FulltextItemsCreationAttributes = Optional<
  FulltextItemsAttributes,
  FulltextItemsOptionalAttributes
>

export class FulltextItems
  extends Model<FulltextItemsAttributes, FulltextItemsCreationAttributes>
  implements FulltextItemsAttributes
{
  itemID?: number
  indexedPages?: number
  totalPages?: number
  indexedChars?: number
  totalChars?: number
  version!: number
  synced!: number

  // FulltextItems belongsTo Items via itemID
  item!: Items
  getItem!: Sequelize.BelongsToGetAssociationMixin<Items>
  setItem!: Sequelize.BelongsToSetAssociationMixin<Items, ItemsId>
  createItem!: Sequelize.BelongsToCreateAssociationMixin<Items>

  static initModel(sequelize: Sequelize.Sequelize): typeof FulltextItems {
    return FulltextItems.init(
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
        indexedPages: {
          type: DataTypes.INTEGER,
          allowNull: true
        },
        totalPages: {
          type: DataTypes.INTEGER,
          allowNull: true
        },
        indexedChars: {
          type: DataTypes.INTEGER,
          allowNull: true
        },
        totalChars: {
          type: DataTypes.INTEGER,
          allowNull: true
        },
        version: {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: 0
        },
        synced: {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: 0
        }
      },
      {
        sequelize,
        tableName: 'fulltextItems',
        timestamps: false,
        indexes: [
          {
            name: 'fulltextItems_synced',
            fields: [{ name: 'synced' }]
          },
          {
            name: 'fulltextItems_version',
            fields: [{ name: 'version' }]
          }
        ]
      }
    )
  }
}
