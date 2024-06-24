import * as Sequelize from 'sequelize'
import { DataTypes, Model, Optional } from 'sequelize'

export interface TranslatorCacheAttributes {
  fileName?: string
  metadataJSON?: string
  lastModifiedTime?: number
}

export type TranslatorCachePk = 'fileName'
export type TranslatorCacheId = TranslatorCache[TranslatorCachePk]
export type TranslatorCacheOptionalAttributes = 'fileName' | 'metadataJSON' | 'lastModifiedTime'
export type TranslatorCacheCreationAttributes = Optional<
  TranslatorCacheAttributes,
  TranslatorCacheOptionalAttributes
>

export class TranslatorCache
  extends Model<TranslatorCacheAttributes, TranslatorCacheCreationAttributes>
  implements TranslatorCacheAttributes
{
  fileName?: string
  metadataJSON?: string
  lastModifiedTime?: number

  static initModel(sequelize: Sequelize.Sequelize): typeof TranslatorCache {
    return TranslatorCache.init(
      {
        fileName: {
          type: DataTypes.TEXT,
          allowNull: true,
          primaryKey: true,
          unique: true
        },
        metadataJSON: {
          type: DataTypes.TEXT,
          allowNull: true
        },
        lastModifiedTime: {
          type: DataTypes.INTEGER,
          allowNull: true
        }
      },
      {
        sequelize,
        tableName: 'translatorCache',
        timestamps: false,
        indexes: [
          {
            name: 'sqlite_autoindex_translatorCache_1',
            unique: true,
            fields: [{ name: 'fileName' }]
          }
        ]
      }
    )
  }
}
