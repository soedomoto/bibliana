import * as Sequelize from 'sequelize'
import { DataTypes, Model, Optional } from 'sequelize'
import type { SavedSearches, SavedSearchesId } from './savedSearches'

export interface SavedSearchConditionsAttributes {
  savedSearchID: number
  searchConditionID: number
  condition: string
  operator?: string
  value?: string
  required?: any
}

export type SavedSearchConditionsPk = 'savedSearchID' | 'searchConditionID'
export type SavedSearchConditionsId = SavedSearchConditions[SavedSearchConditionsPk]
export type SavedSearchConditionsOptionalAttributes = 'operator' | 'value' | 'required'
export type SavedSearchConditionsCreationAttributes = Optional<
  SavedSearchConditionsAttributes,
  SavedSearchConditionsOptionalAttributes
>

export class SavedSearchConditions
  extends Model<SavedSearchConditionsAttributes, SavedSearchConditionsCreationAttributes>
  implements SavedSearchConditionsAttributes
{
  savedSearchID!: number
  searchConditionID!: number
  condition!: string
  operator?: string
  value?: string
  required?: any

  // SavedSearchConditions belongsTo SavedSearches via savedSearchID
  savedSearch!: SavedSearches
  getSavedSearch!: Sequelize.BelongsToGetAssociationMixin<SavedSearches>
  setSavedSearch!: Sequelize.BelongsToSetAssociationMixin<SavedSearches, SavedSearchesId>
  createSavedSearch!: Sequelize.BelongsToCreateAssociationMixin<SavedSearches>

  static initModel(sequelize: Sequelize.Sequelize): typeof SavedSearchConditions {
    return SavedSearchConditions.init(
      {
        savedSearchID: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'savedSearches',
            key: 'savedSearchID'
          },
          unique: true
        },
        searchConditionID: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          unique: true
        },
        condition: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        operator: {
          type: DataTypes.TEXT,
          allowNull: true
        },
        value: {
          type: DataTypes.TEXT,
          allowNull: true
        },
        required: {
          type: 'NONE',
          allowNull: true
        }
      },
      {
        sequelize,
        tableName: 'savedSearchConditions',
        timestamps: false,
        indexes: [
          {
            name: 'sqlite_autoindex_savedSearchConditions_1',
            unique: true,
            fields: [{ name: 'savedSearchID' }, { name: 'searchConditionID' }]
          }
        ]
      }
    )
  }
}
