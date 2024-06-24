import * as Sequelize from 'sequelize'
import { DataTypes, Model, Optional } from 'sequelize'
import type { CollectionRelations, CollectionRelationsId } from './collectionRelations'
import type { ItemRelations, ItemRelationsId } from './itemRelations'

export interface RelationPredicatesAttributes {
  predicateID?: number
  predicate?: string
}

export type RelationPredicatesPk = 'predicateID'
export type RelationPredicatesId = RelationPredicates[RelationPredicatesPk]
export type RelationPredicatesOptionalAttributes = 'predicateID' | 'predicate'
export type RelationPredicatesCreationAttributes = Optional<
  RelationPredicatesAttributes,
  RelationPredicatesOptionalAttributes
>

export class RelationPredicates
  extends Model<RelationPredicatesAttributes, RelationPredicatesCreationAttributes>
  implements RelationPredicatesAttributes
{
  predicateID?: number
  predicate?: string

  // RelationPredicates hasMany CollectionRelations via predicateID
  collectionRelations!: CollectionRelations[]
  getCollectionRelations!: Sequelize.HasManyGetAssociationsMixin<CollectionRelations>
  setCollectionRelations!: Sequelize.HasManySetAssociationsMixin<
    CollectionRelations,
    CollectionRelationsId
  >
  addCollectionRelation!: Sequelize.HasManyAddAssociationMixin<
    CollectionRelations,
    CollectionRelationsId
  >
  addCollectionRelations!: Sequelize.HasManyAddAssociationsMixin<
    CollectionRelations,
    CollectionRelationsId
  >
  createCollectionRelation!: Sequelize.HasManyCreateAssociationMixin<CollectionRelations>
  removeCollectionRelation!: Sequelize.HasManyRemoveAssociationMixin<
    CollectionRelations,
    CollectionRelationsId
  >
  removeCollectionRelations!: Sequelize.HasManyRemoveAssociationsMixin<
    CollectionRelations,
    CollectionRelationsId
  >
  hasCollectionRelation!: Sequelize.HasManyHasAssociationMixin<
    CollectionRelations,
    CollectionRelationsId
  >
  hasCollectionRelations!: Sequelize.HasManyHasAssociationsMixin<
    CollectionRelations,
    CollectionRelationsId
  >
  countCollectionRelations!: Sequelize.HasManyCountAssociationsMixin
  // RelationPredicates hasMany ItemRelations via predicateID
  itemRelations!: ItemRelations[]
  getItemRelations!: Sequelize.HasManyGetAssociationsMixin<ItemRelations>
  setItemRelations!: Sequelize.HasManySetAssociationsMixin<ItemRelations, ItemRelationsId>
  addItemRelation!: Sequelize.HasManyAddAssociationMixin<ItemRelations, ItemRelationsId>
  addItemRelations!: Sequelize.HasManyAddAssociationsMixin<ItemRelations, ItemRelationsId>
  createItemRelation!: Sequelize.HasManyCreateAssociationMixin<ItemRelations>
  removeItemRelation!: Sequelize.HasManyRemoveAssociationMixin<ItemRelations, ItemRelationsId>
  removeItemRelations!: Sequelize.HasManyRemoveAssociationsMixin<ItemRelations, ItemRelationsId>
  hasItemRelation!: Sequelize.HasManyHasAssociationMixin<ItemRelations, ItemRelationsId>
  hasItemRelations!: Sequelize.HasManyHasAssociationsMixin<ItemRelations, ItemRelationsId>
  countItemRelations!: Sequelize.HasManyCountAssociationsMixin

  static initModel(sequelize: Sequelize.Sequelize): typeof RelationPredicates {
    return RelationPredicates.init(
      {
        predicateID: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: true,
          primaryKey: true
        },
        predicate: {
          type: DataTypes.TEXT,
          allowNull: true,
          unique: true
        }
      },
      {
        sequelize,
        tableName: 'relationPredicates',
        timestamps: false,
        indexes: [
          {
            name: 'sqlite_autoindex_relationPredicates_1',
            unique: true,
            fields: [{ name: 'predicate' }]
          }
        ]
      }
    )
  }
}
