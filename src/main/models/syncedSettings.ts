import * as Sequelize from 'sequelize'
import { DataTypes, Model, Optional } from 'sequelize'
import type { Libraries, LibrariesId } from './libraries'

export interface SyncedSettingsAttributes {
  setting: string
  libraryID: number
  value: any
  version: number
  synced: number
}

export type SyncedSettingsPk = 'setting' | 'libraryID'
export type SyncedSettingsId = SyncedSettings[SyncedSettingsPk]
export type SyncedSettingsOptionalAttributes = 'version' | 'synced'
export type SyncedSettingsCreationAttributes = Optional<
  SyncedSettingsAttributes,
  SyncedSettingsOptionalAttributes
>

export class SyncedSettings
  extends Model<SyncedSettingsAttributes, SyncedSettingsCreationAttributes>
  implements SyncedSettingsAttributes
{
  setting!: string
  libraryID!: number
  value!: any
  version!: number
  synced!: number

  // SyncedSettings belongsTo Libraries via libraryID
  library!: Libraries
  getLibrary!: Sequelize.BelongsToGetAssociationMixin<Libraries>
  setLibrary!: Sequelize.BelongsToSetAssociationMixin<Libraries, LibrariesId>
  createLibrary!: Sequelize.BelongsToCreateAssociationMixin<Libraries>

  static initModel(sequelize: Sequelize.Sequelize): typeof SyncedSettings {
    return SyncedSettings.init(
      {
        setting: {
          type: DataTypes.TEXT,
          allowNull: false,
          primaryKey: true,
          unique: true
        },
        libraryID: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'libraries',
            key: 'libraryID'
          },
          unique: true
        },
        value: {
          type: '',
          allowNull: false
        },
        version: {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: 0
        },
        synced: {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: 0
        }
      },
      {
        sequelize,
        tableName: 'syncedSettings',
        timestamps: false,
        indexes: [
          {
            name: 'sqlite_autoindex_syncedSettings_1',
            unique: true,
            fields: [{ name: 'setting' }, { name: 'libraryID' }]
          }
        ]
      }
    )
  }
}
