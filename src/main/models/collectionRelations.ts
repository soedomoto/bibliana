import * as Sequelize from 'sequelize'
import { DataTypes, Model } from 'sequelize'
import type { Collections, CollectionsId } from './collections'
import type { RelationPredicates, RelationPredicatesId } from './relationPredicates'

export interface CollectionRelationsAttributes {
  collectionID: number
  predicateID: number
  object: string
}

export type CollectionRelationsPk = 'collectionID' | 'predicateID' | 'object'
export type CollectionRelationsId = CollectionRelations[CollectionRelationsPk]
export type CollectionRelationsCreationAttributes = CollectionRelationsAttributes

export class CollectionRelations
  extends Model<CollectionRelationsAttributes, CollectionRelationsCreationAttributes>
  implements CollectionRelationsAttributes
{
  collectionID!: number
  predicateID!: number
  object!: string

  // CollectionRelations belongsTo Collections via collectionID
  collection!: Collections
  getCollection!: Sequelize.BelongsToGetAssociationMixin<Collections>
  setCollection!: Sequelize.BelongsToSetAssociationMixin<Collections, CollectionsId>
  createCollection!: Sequelize.BelongsToCreateAssociationMixin<Collections>
  // CollectionRelations belongsTo RelationPredicates via predicateID
  predicate!: RelationPredicates
  getPredicate!: Sequelize.BelongsToGetAssociationMixin<RelationPredicates>
  setPredicate!: Sequelize.BelongsToSetAssociationMixin<RelationPredicates, RelationPredicatesId>
  createPredicate!: Sequelize.BelongsToCreateAssociationMixin<RelationPredicates>

  static initModel(sequelize: Sequelize.Sequelize): typeof CollectionRelations {
    return CollectionRelations.init(
      {
        collectionID: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'collections',
            key: 'collectionID'
          },
          unique: true
        },
        predicateID: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'relationPredicates',
            key: 'predicateID'
          }
        },
        object: {
          type: DataTypes.TEXT,
          allowNull: false,
          primaryKey: true
        }
      },
      {
        sequelize,
        tableName: 'collectionRelations',
        timestamps: false,
        indexes: [
          {
            name: 'sqlite_autoindex_collectionRelations_1',
            unique: true,
            fields: [{ name: 'collectionID' }, { name: 'predicateID' }, { name: 'object' }]
          },
          {
            name: 'collectionRelations_predicateID',
            fields: [{ name: 'predicateID' }]
          },
          {
            name: 'collectionRelations_object',
            fields: [{ name: 'object' }]
          }
        ]
      }
    )
  }
}
