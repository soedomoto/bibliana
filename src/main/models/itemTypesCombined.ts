import * as Sequelize from 'sequelize'
import { DataTypes, Model, Optional } from 'sequelize'

export interface ItemTypesCombinedAttributes {
  itemTypeID: number
  typeName: string
  display: number
  custom: number
}

export type ItemTypesCombinedPk = 'itemTypeID'
export type ItemTypesCombinedId = ItemTypesCombined[ItemTypesCombinedPk]
export type ItemTypesCombinedOptionalAttributes = 'display'
export type ItemTypesCombinedCreationAttributes = Optional<
  ItemTypesCombinedAttributes,
  ItemTypesCombinedOptionalAttributes
>

export class ItemTypesCombined
  extends Model<ItemTypesCombinedAttributes, ItemTypesCombinedCreationAttributes>
  implements ItemTypesCombinedAttributes
{
  itemTypeID!: number
  typeName!: string
  display!: number
  custom!: number

  static initModel(sequelize: Sequelize.Sequelize): typeof ItemTypesCombined {
    return ItemTypesCombined.init(
      {
        itemTypeID: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          unique: true
        },
        typeName: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        display: {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: 1
        },
        custom: {
          type: DataTypes.INTEGER,
          allowNull: false
        }
      },
      {
        sequelize,
        tableName: 'itemTypesCombined',
        timestamps: false,
        indexes: [
          {
            name: 'sqlite_autoindex_itemTypesCombined_1',
            unique: true,
            fields: [{ name: 'itemTypeID' }]
          }
        ]
      }
    )
  }
}
