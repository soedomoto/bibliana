import * as Sequelize from 'sequelize'
import { DataTypes, Model, Optional } from 'sequelize'
import type { FulltextWords, FulltextWordsId } from './fulltextWords'
import type { Items, ItemsId } from './items'

export interface FulltextItemWordsAttributes {
  wordID?: number
  itemID?: number
}

export type FulltextItemWordsPk = 'wordID' | 'itemID'
export type FulltextItemWordsId = FulltextItemWords[FulltextItemWordsPk]
export type FulltextItemWordsOptionalAttributes = 'wordID' | 'itemID'
export type FulltextItemWordsCreationAttributes = Optional<
  FulltextItemWordsAttributes,
  FulltextItemWordsOptionalAttributes
>

export class FulltextItemWords
  extends Model<FulltextItemWordsAttributes, FulltextItemWordsCreationAttributes>
  implements FulltextItemWordsAttributes
{
  wordID?: number
  itemID?: number

  // FulltextItemWords belongsTo FulltextWords via wordID
  word!: FulltextWords
  getWord!: Sequelize.BelongsToGetAssociationMixin<FulltextWords>
  setWord!: Sequelize.BelongsToSetAssociationMixin<FulltextWords, FulltextWordsId>
  createWord!: Sequelize.BelongsToCreateAssociationMixin<FulltextWords>
  // FulltextItemWords belongsTo Items via itemID
  item!: Items
  getItem!: Sequelize.BelongsToGetAssociationMixin<Items>
  setItem!: Sequelize.BelongsToSetAssociationMixin<Items, ItemsId>
  createItem!: Sequelize.BelongsToCreateAssociationMixin<Items>

  static initModel(sequelize: Sequelize.Sequelize): typeof FulltextItemWords {
    return FulltextItemWords.init(
      {
        wordID: {
          type: DataTypes.INTEGER,
          allowNull: true,
          references: {
            model: 'fulltextWords',
            key: 'wordID'
          },
          unique: true
        },
        itemID: {
          type: DataTypes.INTEGER,
          allowNull: true,
          references: {
            model: 'items',
            key: 'itemID'
          }
        }
      },
      {
        sequelize,
        tableName: 'fulltextItemWords',
        timestamps: false,
        indexes: [
          {
            name: 'sqlite_autoindex_fulltextItemWords_1',
            unique: true,
            fields: [{ name: 'wordID' }, { name: 'itemID' }]
          },
          {
            name: 'fulltextItemWords_itemID',
            fields: [{ name: 'itemID' }]
          }
        ]
      }
    )
  }
}
