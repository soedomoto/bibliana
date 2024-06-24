import * as Sequelize from 'sequelize'
import { DataTypes, Model, Optional } from 'sequelize'
import type { Fields, FieldsId } from './fields'

export interface FieldFormatsAttributes {
  fieldFormatID?: number
  regex?: string
  isInteger?: number
}

export type FieldFormatsPk = 'fieldFormatID'
export type FieldFormatsId = FieldFormats[FieldFormatsPk]
export type FieldFormatsOptionalAttributes = 'fieldFormatID' | 'regex' | 'isInteger'
export type FieldFormatsCreationAttributes = Optional<
  FieldFormatsAttributes,
  FieldFormatsOptionalAttributes
>

export class FieldFormats
  extends Model<FieldFormatsAttributes, FieldFormatsCreationAttributes>
  implements FieldFormatsAttributes
{
  fieldFormatID?: number
  regex?: string
  isInteger?: number

  // FieldFormats hasMany Fields via fieldFormatID
  fields!: Fields[]
  getFields!: Sequelize.HasManyGetAssociationsMixin<Fields>
  setFields!: Sequelize.HasManySetAssociationsMixin<Fields, FieldsId>
  addField!: Sequelize.HasManyAddAssociationMixin<Fields, FieldsId>
  addFields!: Sequelize.HasManyAddAssociationsMixin<Fields, FieldsId>
  createField!: Sequelize.HasManyCreateAssociationMixin<Fields>
  removeField!: Sequelize.HasManyRemoveAssociationMixin<Fields, FieldsId>
  removeFields!: Sequelize.HasManyRemoveAssociationsMixin<Fields, FieldsId>
  hasField!: Sequelize.HasManyHasAssociationMixin<Fields, FieldsId>
  hasFields!: Sequelize.HasManyHasAssociationsMixin<Fields, FieldsId>
  countFields!: Sequelize.HasManyCountAssociationsMixin

  static initModel(sequelize: Sequelize.Sequelize): typeof FieldFormats {
    return FieldFormats.init(
      {
        fieldFormatID: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: true,
          primaryKey: true
        },
        regex: {
          type: DataTypes.TEXT,
          allowNull: true
        },
        isInteger: {
          type: DataTypes.INTEGER,
          allowNull: true
        }
      },
      {
        sequelize,
        tableName: 'fieldFormats',
        timestamps: false
      }
    )
  }
}
