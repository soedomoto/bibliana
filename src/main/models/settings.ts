import * as Sequelize from 'sequelize'
import { DataTypes, Model, Optional } from 'sequelize'

export interface SettingsAttributes {
  setting?: string
  key?: string
  value?: any
}

export type SettingsPk = 'setting' | 'key'
export type SettingsId = Settings[SettingsPk]
export type SettingsOptionalAttributes = 'setting' | 'key' | 'value'
export type SettingsCreationAttributes = Optional<SettingsAttributes, SettingsOptionalAttributes>

export class Settings
  extends Model<SettingsAttributes, SettingsCreationAttributes>
  implements SettingsAttributes
{
  setting?: string
  key?: string
  value?: any

  static initModel(sequelize: Sequelize.Sequelize): typeof Settings {
    return Settings.init(
      {
        setting: {
          type: DataTypes.TEXT,
          allowNull: true,
          primaryKey: true,
          unique: true
        },
        key: {
          type: DataTypes.TEXT,
          allowNull: true,
          primaryKey: true,
          unique: true
        },
        value: {
          type: '',
          allowNull: true
        }
      },
      {
        sequelize,
        tableName: 'settings',
        timestamps: false,
        indexes: [
          {
            name: 'sqlite_autoindex_settings_1',
            unique: true,
            fields: [{ name: 'setting' }, { name: 'key' }]
          }
        ]
      }
    )
  }
}
