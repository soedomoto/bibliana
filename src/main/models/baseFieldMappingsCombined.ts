import * as Sequelize from 'sequelize'
import { DataTypes, Model, Optional } from 'sequelize'

export interface BaseFieldMappingsCombinedAttributes {
  itemTypeID?: number
  baseFieldID?: number
  fieldID?: number
}

export type BaseFieldMappingsCombinedPk = 'itemTypeID' | 'baseFieldID' | 'fieldID'
export type BaseFieldMappingsCombinedId = BaseFieldMappingsCombined[BaseFieldMappingsCombinedPk]
export type BaseFieldMappingsCombinedOptionalAttributes = 'itemTypeID' | 'baseFieldID' | 'fieldID'
export type BaseFieldMappingsCombinedCreationAttributes = Optional<
  BaseFieldMappingsCombinedAttributes,
  BaseFieldMappingsCombinedOptionalAttributes
>

export class BaseFieldMappingsCombined
  extends Model<BaseFieldMappingsCombinedAttributes, BaseFieldMappingsCombinedCreationAttributes>
  implements BaseFieldMappingsCombinedAttributes
{
  itemTypeID?: number
  baseFieldID?: number
  fieldID?: number

  static initModel(sequelize: Sequelize.Sequelize): typeof BaseFieldMappingsCombined {
    return BaseFieldMappingsCombined.init(
      {
        itemTypeID: {
          type: DataTypes.INTEGER,
          allowNull: true,
          primaryKey: true,
          unique: true
        },
        baseFieldID: {
          type: DataTypes.INTEGER,
          allowNull: true,
          primaryKey: true
        },
        fieldID: {
          type: DataTypes.INTEGER,
          allowNull: true,
          primaryKey: true
        }
      },
      {
        sequelize,
        tableName: 'baseFieldMappingsCombined',
        timestamps: false,
        indexes: [
          {
            name: 'sqlite_autoindex_baseFieldMappingsCombined_1',
            unique: true,
            fields: [{ name: 'itemTypeID' }, { name: 'baseFieldID' }, { name: 'fieldID' }]
          },
          {
            name: 'baseFieldMappingsCombined_baseFieldID',
            fields: [{ name: 'baseFieldID' }]
          },
          {
            name: 'baseFieldMappingsCombined_fieldID',
            fields: [{ name: 'fieldID' }]
          }
        ]
      }
    )
  }
}
