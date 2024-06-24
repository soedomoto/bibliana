import * as Sequelize from 'sequelize'
import { DataTypes, Model, Optional } from 'sequelize'

export interface ItemTypeFieldsCombinedAttributes {
  itemTypeID: number
  fieldID: number
  hide?: number
  orderIndex: number
}

export type ItemTypeFieldsCombinedPk = 'itemTypeID' | 'orderIndex'
export type ItemTypeFieldsCombinedId = ItemTypeFieldsCombined[ItemTypeFieldsCombinedPk]
export type ItemTypeFieldsCombinedOptionalAttributes = 'hide'
export type ItemTypeFieldsCombinedCreationAttributes = Optional<
  ItemTypeFieldsCombinedAttributes,
  ItemTypeFieldsCombinedOptionalAttributes
>

export class ItemTypeFieldsCombined
  extends Model<ItemTypeFieldsCombinedAttributes, ItemTypeFieldsCombinedCreationAttributes>
  implements ItemTypeFieldsCombinedAttributes
{
  itemTypeID!: number
  fieldID!: number
  hide?: number
  orderIndex!: number

  static initModel(sequelize: Sequelize.Sequelize): typeof ItemTypeFieldsCombined {
    return ItemTypeFieldsCombined.init(
      {
        itemTypeID: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          unique: true
        },
        fieldID: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        hide: {
          type: DataTypes.INTEGER,
          allowNull: true
        },
        orderIndex: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          unique: true
        }
      },
      {
        sequelize,
        tableName: 'itemTypeFieldsCombined',
        timestamps: false,
        indexes: [
          {
            name: 'sqlite_autoindex_itemTypeFieldsCombined_1',
            unique: true,
            fields: [{ name: 'itemTypeID' }, { name: 'orderIndex' }]
          },
          {
            name: 'sqlite_autoindex_itemTypeFieldsCombined_2',
            unique: true,
            fields: [{ name: 'itemTypeID' }, { name: 'fieldID' }]
          },
          {
            name: 'itemTypeFieldsCombined_fieldID',
            fields: [{ name: 'fieldID' }]
          }
        ]
      }
    )
  }
}
