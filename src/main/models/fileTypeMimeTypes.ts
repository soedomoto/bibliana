import * as Sequelize from 'sequelize'
import { DataTypes, Model, Optional } from 'sequelize'
import type { FileTypes, FileTypesId } from './fileTypes'

export interface FileTypeMimeTypesAttributes {
  fileTypeID?: number
  mimeType?: string
}

export type FileTypeMimeTypesPk = 'fileTypeID' | 'mimeType'
export type FileTypeMimeTypesId = FileTypeMimeTypes[FileTypeMimeTypesPk]
export type FileTypeMimeTypesOptionalAttributes = 'fileTypeID' | 'mimeType'
export type FileTypeMimeTypesCreationAttributes = Optional<
  FileTypeMimeTypesAttributes,
  FileTypeMimeTypesOptionalAttributes
>

export class FileTypeMimeTypes
  extends Model<FileTypeMimeTypesAttributes, FileTypeMimeTypesCreationAttributes>
  implements FileTypeMimeTypesAttributes
{
  fileTypeID?: number
  mimeType?: string

  // FileTypeMimeTypes belongsTo FileTypes via fileTypeID
  fileType!: FileTypes
  getFileType!: Sequelize.BelongsToGetAssociationMixin<FileTypes>
  setFileType!: Sequelize.BelongsToSetAssociationMixin<FileTypes, FileTypesId>
  createFileType!: Sequelize.BelongsToCreateAssociationMixin<FileTypes>

  static initModel(sequelize: Sequelize.Sequelize): typeof FileTypeMimeTypes {
    return FileTypeMimeTypes.init(
      {
        fileTypeID: {
          type: DataTypes.INTEGER,
          allowNull: true,
          references: {
            model: 'fileTypes',
            key: 'fileTypeID'
          },
          unique: true
        },
        mimeType: {
          type: DataTypes.TEXT,
          allowNull: true,
          primaryKey: true
        }
      },
      {
        sequelize,
        tableName: 'fileTypeMimeTypes',
        timestamps: false,
        indexes: [
          {
            name: 'sqlite_autoindex_fileTypeMimeTypes_1',
            unique: true,
            fields: [{ name: 'fileTypeID' }, { name: 'mimeType' }]
          },
          {
            name: 'fileTypeMimeTypes_mimeType',
            fields: [{ name: 'mimeType' }]
          }
        ]
      }
    )
  }
}
