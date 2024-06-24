import * as Sequelize from 'sequelize'
import { DataTypes, Model, Optional } from 'sequelize'

export interface PublicationsItemsAttributes {
  itemID?: number
}

export type PublicationsItemsPk = 'itemID'
export type PublicationsItemsId = PublicationsItems[PublicationsItemsPk]
export type PublicationsItemsOptionalAttributes = 'itemID'
export type PublicationsItemsCreationAttributes = Optional<
  PublicationsItemsAttributes,
  PublicationsItemsOptionalAttributes
>

export class PublicationsItems
  extends Model<PublicationsItemsAttributes, PublicationsItemsCreationAttributes>
  implements PublicationsItemsAttributes
{
  itemID?: number

  static initModel(sequelize: Sequelize.Sequelize): typeof PublicationsItems {
    return PublicationsItems.init(
      {
        itemID: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: true,
          primaryKey: true
        }
      },
      {
        sequelize,
        tableName: 'publicationsItems',
        timestamps: false
      }
    )
  }
}
