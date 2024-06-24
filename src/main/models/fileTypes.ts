import * as Sequelize from 'sequelize'
import { DataTypes, Model, Optional } from 'sequelize'
import type { FileTypeMimeTypes, FileTypeMimeTypesId } from './fileTypeMimeTypes'

export interface FileTypesAttributes {
  fileTypeID?: number
  fileType?: string
}

export type FileTypesPk = 'fileTypeID'
export type FileTypesId = FileTypes[FileTypesPk]
export type FileTypesOptionalAttributes = 'fileTypeID' | 'fileType'
export type FileTypesCreationAttributes = Optional<FileTypesAttributes, FileTypesOptionalAttributes>

export class FileTypes
  extends Model<FileTypesAttributes, FileTypesCreationAttributes>
  implements FileTypesAttributes
{
  fileTypeID?: number
  fileType?: string

  // FileTypes hasMany FileTypeMimeTypes via fileTypeID
  fileTypeMimeTypes!: FileTypeMimeTypes[]
  getFileTypeMimeTypes!: Sequelize.HasManyGetAssociationsMixin<FileTypeMimeTypes>
  setFileTypeMimeTypes!: Sequelize.HasManySetAssociationsMixin<
    FileTypeMimeTypes,
    FileTypeMimeTypesId
  >
  addFileTypeMimeType!: Sequelize.HasManyAddAssociationMixin<FileTypeMimeTypes, FileTypeMimeTypesId>
  addFileTypeMimeTypes!: Sequelize.HasManyAddAssociationsMixin<
    FileTypeMimeTypes,
    FileTypeMimeTypesId
  >
  createFileTypeMimeType!: Sequelize.HasManyCreateAssociationMixin<FileTypeMimeTypes>
  removeFileTypeMimeType!: Sequelize.HasManyRemoveAssociationMixin<
    FileTypeMimeTypes,
    FileTypeMimeTypesId
  >
  removeFileTypeMimeTypes!: Sequelize.HasManyRemoveAssociationsMixin<
    FileTypeMimeTypes,
    FileTypeMimeTypesId
  >
  hasFileTypeMimeType!: Sequelize.HasManyHasAssociationMixin<FileTypeMimeTypes, FileTypeMimeTypesId>
  hasFileTypeMimeTypes!: Sequelize.HasManyHasAssociationsMixin<
    FileTypeMimeTypes,
    FileTypeMimeTypesId
  >
  countFileTypeMimeTypes!: Sequelize.HasManyCountAssociationsMixin

  static initModel(sequelize: Sequelize.Sequelize): typeof FileTypes {
    return FileTypes.init(
      {
        fileTypeID: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: true,
          primaryKey: true
        },
        fileType: {
          type: DataTypes.TEXT,
          allowNull: true
        }
      },
      {
        sequelize,
        tableName: 'fileTypes',
        timestamps: false,
        indexes: [
          {
            name: 'sqlite_autoindex_fileTypes_1',
            unique: true,
            fields: [{ name: 'fileType' }]
          },
          {
            name: 'fileTypes_fileType',
            fields: [{ name: 'fileType' }]
          }
        ]
      }
    )
  }
}
