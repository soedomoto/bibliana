import * as Sequelize from 'sequelize'
import { DataTypes, Model, Optional } from 'sequelize'
import type { ItemData, ItemDataId } from './itemData'

export interface FieldsCombinedAttributes {
  fieldID: number
  fieldName: string
  label?: string
  fieldFormatID?: number
  custom: number
}

export type FieldsCombinedPk = 'fieldID'
export type FieldsCombinedId = FieldsCombined[FieldsCombinedPk]
export type FieldsCombinedOptionalAttributes = 'label' | 'fieldFormatID'
export type FieldsCombinedCreationAttributes = Optional<
  FieldsCombinedAttributes,
  FieldsCombinedOptionalAttributes
>

export class FieldsCombined
  extends Model<FieldsCombinedAttributes, FieldsCombinedCreationAttributes>
  implements FieldsCombinedAttributes
{
  fieldID!: number
  fieldName!: string
  label?: string
  fieldFormatID?: number
  custom!: number

  // FieldsCombined hasMany ItemData via fieldID
  itemData!: ItemData[]
  getItemData!: Sequelize.HasManyGetAssociationsMixin<ItemData>
  setItemData!: Sequelize.HasManySetAssociationsMixin<ItemData, ItemDataId>
  addItemDatum!: Sequelize.HasManyAddAssociationMixin<ItemData, ItemDataId>
  addItemData!: Sequelize.HasManyAddAssociationsMixin<ItemData, ItemDataId>
  createItemDatum!: Sequelize.HasManyCreateAssociationMixin<ItemData>
  removeItemDatum!: Sequelize.HasManyRemoveAssociationMixin<ItemData, ItemDataId>
  removeItemData!: Sequelize.HasManyRemoveAssociationsMixin<ItemData, ItemDataId>
  hasItemDatum!: Sequelize.HasManyHasAssociationMixin<ItemData, ItemDataId>
  hasItemData!: Sequelize.HasManyHasAssociationsMixin<ItemData, ItemDataId>
  countItemData!: Sequelize.HasManyCountAssociationsMixin

  static initModel(sequelize: Sequelize.Sequelize): typeof FieldsCombined {
    return FieldsCombined.init(
      {
        fieldID: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          unique: true
        },
        fieldName: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        label: {
          type: DataTypes.TEXT,
          allowNull: true
        },
        fieldFormatID: {
          type: DataTypes.INTEGER,
          allowNull: true
        },
        custom: {
          type: DataTypes.INTEGER,
          allowNull: false
        }
      },
      {
        sequelize,
        tableName: 'fieldsCombined',
        timestamps: false,
        indexes: [
          {
            name: 'sqlite_autoindex_fieldsCombined_1',
            unique: true,
            fields: [{ name: 'fieldID' }]
          }
        ]
      }
    )
  }
}
