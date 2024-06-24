import * as Sequelize from 'sequelize'
import { DataTypes, Model } from 'sequelize'
import type { Items, ItemsId } from './items'
import type { RelationPredicates, RelationPredicatesId } from './relationPredicates'

export interface ItemRelationsAttributes {
  itemID: number
  predicateID: number
  object: string
}

export type ItemRelationsPk = 'itemID' | 'predicateID' | 'object'
export type ItemRelationsId = ItemRelations[ItemRelationsPk]
export type ItemRelationsCreationAttributes = ItemRelationsAttributes

export class ItemRelations
  extends Model<ItemRelationsAttributes, ItemRelationsCreationAttributes>
  implements ItemRelationsAttributes
{
  itemID!: number
  predicateID!: number
  object!: string

  // ItemRelations belongsTo Items via itemID
  item!: Items
  getItem!: Sequelize.BelongsToGetAssociationMixin<Items>
  setItem!: Sequelize.BelongsToSetAssociationMixin<Items, ItemsId>
  createItem!: Sequelize.BelongsToCreateAssociationMixin<Items>
  // ItemRelations belongsTo RelationPredicates via predicateID
  predicate!: RelationPredicates
  getPredicate!: Sequelize.BelongsToGetAssociationMixin<RelationPredicates>
  setPredicate!: Sequelize.BelongsToSetAssociationMixin<RelationPredicates, RelationPredicatesId>
  createPredicate!: Sequelize.BelongsToCreateAssociationMixin<RelationPredicates>

  static initModel(sequelize: Sequelize.Sequelize): typeof ItemRelations {
    return ItemRelations.init(
      {
        itemID: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'items',
            key: 'itemID'
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
        tableName: 'itemRelations',
        timestamps: false,
        indexes: [
          {
            name: 'sqlite_autoindex_itemRelations_1',
            unique: true,
            fields: [{ name: 'itemID' }, { name: 'predicateID' }, { name: 'object' }]
          },
          {
            name: 'itemRelations_predicateID',
            fields: [{ name: 'predicateID' }]
          },
          {
            name: 'itemRelations_object',
            fields: [{ name: 'object' }]
          }
        ]
      }
    )
  }
}
