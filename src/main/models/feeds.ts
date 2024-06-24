import * as Sequelize from 'sequelize'
import { DataTypes, Model, Optional } from 'sequelize'
import type { Libraries, LibrariesId } from './libraries'

export interface FeedsAttributes {
  libraryID?: number
  name: string
  url: string
  lastUpdate?: Date
  lastCheck?: Date
  lastCheckError?: string
  cleanupReadAfter?: number
  cleanupUnreadAfter?: number
  refreshInterval?: number
}

export type FeedsPk = 'libraryID'
export type FeedsId = Feeds[FeedsPk]
export type FeedsOptionalAttributes =
  | 'libraryID'
  | 'lastUpdate'
  | 'lastCheck'
  | 'lastCheckError'
  | 'cleanupReadAfter'
  | 'cleanupUnreadAfter'
  | 'refreshInterval'
export type FeedsCreationAttributes = Optional<FeedsAttributes, FeedsOptionalAttributes>

export class Feeds
  extends Model<FeedsAttributes, FeedsCreationAttributes>
  implements FeedsAttributes
{
  libraryID?: number
  name!: string
  url!: string
  lastUpdate?: Date
  lastCheck?: Date
  lastCheckError?: string
  cleanupReadAfter?: number
  cleanupUnreadAfter?: number
  refreshInterval?: number

  // Feeds belongsTo Libraries via libraryID
  library!: Libraries
  getLibrary!: Sequelize.BelongsToGetAssociationMixin<Libraries>
  setLibrary!: Sequelize.BelongsToSetAssociationMixin<Libraries, LibrariesId>
  createLibrary!: Sequelize.BelongsToCreateAssociationMixin<Libraries>

  static initModel(sequelize: Sequelize.Sequelize): typeof Feeds {
    return Feeds.init(
      {
        libraryID: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: true,
          references: {
            model: 'libraries',
            key: 'libraryID'
          }
        },
        name: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        url: {
          type: DataTypes.TEXT,
          allowNull: false,
          unique: true
        },
        lastUpdate: {
          type: DataTypes.DATE,
          allowNull: true
        },
        lastCheck: {
          type: DataTypes.DATE,
          allowNull: true
        },
        lastCheckError: {
          type: DataTypes.TEXT,
          allowNull: true
        },
        cleanupReadAfter: {
          type: DataTypes.INTEGER,
          allowNull: true
        },
        cleanupUnreadAfter: {
          type: DataTypes.INTEGER,
          allowNull: true
        },
        refreshInterval: {
          type: DataTypes.INTEGER,
          allowNull: true
        }
      },
      {
        sequelize,
        tableName: 'feeds',
        timestamps: false,
        indexes: [
          {
            name: 'sqlite_autoindex_feeds_1',
            unique: true,
            fields: [{ name: 'url' }]
          }
        ]
      }
    )
  }
}
