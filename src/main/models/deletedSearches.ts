import * as Sequelize from 'sequelize'
import { DataTypes, Model, Optional } from 'sequelize'
import type { SavedSearches, SavedSearchesId } from './savedSearches'

export interface DeletedSearchesAttributes {
  savedSearchID?: number
  dateDeleted: any
}

export type DeletedSearchesPk = 'savedSearchID'
export type DeletedSearchesId = DeletedSearches[DeletedSearchesPk]
export type DeletedSearchesOptionalAttributes = 'savedSearchID' | 'dateDeleted'
export type DeletedSearchesCreationAttributes = Optional<
  DeletedSearchesAttributes,
  DeletedSearchesOptionalAttributes
>

export class DeletedSearches
  extends Model<DeletedSearchesAttributes, DeletedSearchesCreationAttributes>
  implements DeletedSearchesAttributes
{
  savedSearchID?: number
  dateDeleted!: any

  // DeletedSearches belongsTo SavedSearches via savedSearchID
  savedSearch!: SavedSearches
  getSavedSearch!: Sequelize.BelongsToGetAssociationMixin<SavedSearches>
  setSavedSearch!: Sequelize.BelongsToSetAssociationMixin<SavedSearches, SavedSearchesId>
  createSavedSearch!: Sequelize.BelongsToCreateAssociationMixin<SavedSearches>

  static initModel(sequelize: Sequelize.Sequelize): typeof DeletedSearches {
    return DeletedSearches.init(
      {
        savedSearchID: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: true,
          references: {
            model: 'savedSearches',
            key: 'savedSearchID'
          }
        },
        dateDeleted: {
          type: '',
          allowNull: false,
          defaultValue: 'CURRENT_TIMESTAMP'
        }
      },
      {
        sequelize,
        tableName: 'deletedSearches',
        timestamps: false,
        indexes: [
          {
            name: 'deletedSearches_dateDeleted',
            fields: [{ name: 'dateDeleted' }]
          }
        ]
      }
    )
  }
}
