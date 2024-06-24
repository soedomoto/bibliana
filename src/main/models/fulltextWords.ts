import * as Sequelize from 'sequelize'
import { DataTypes, Model, Optional } from 'sequelize'
import type { FulltextItemWords, FulltextItemWordsId } from './fulltextItemWords'

export interface FulltextWordsAttributes {
  wordID?: number
  word?: string
}

export type FulltextWordsPk = 'wordID'
export type FulltextWordsId = FulltextWords[FulltextWordsPk]
export type FulltextWordsOptionalAttributes = 'wordID' | 'word'
export type FulltextWordsCreationAttributes = Optional<
  FulltextWordsAttributes,
  FulltextWordsOptionalAttributes
>

export class FulltextWords
  extends Model<FulltextWordsAttributes, FulltextWordsCreationAttributes>
  implements FulltextWordsAttributes
{
  wordID?: number
  word?: string

  // FulltextWords hasMany FulltextItemWords via wordID
  fulltextItemWords!: FulltextItemWords[]
  getFulltextItemWords!: Sequelize.HasManyGetAssociationsMixin<FulltextItemWords>
  setFulltextItemWords!: Sequelize.HasManySetAssociationsMixin<
    FulltextItemWords,
    FulltextItemWordsId
  >
  addFulltextItemWord!: Sequelize.HasManyAddAssociationMixin<FulltextItemWords, FulltextItemWordsId>
  addFulltextItemWords!: Sequelize.HasManyAddAssociationsMixin<
    FulltextItemWords,
    FulltextItemWordsId
  >
  createFulltextItemWord!: Sequelize.HasManyCreateAssociationMixin<FulltextItemWords>
  removeFulltextItemWord!: Sequelize.HasManyRemoveAssociationMixin<
    FulltextItemWords,
    FulltextItemWordsId
  >
  removeFulltextItemWords!: Sequelize.HasManyRemoveAssociationsMixin<
    FulltextItemWords,
    FulltextItemWordsId
  >
  hasFulltextItemWord!: Sequelize.HasManyHasAssociationMixin<FulltextItemWords, FulltextItemWordsId>
  hasFulltextItemWords!: Sequelize.HasManyHasAssociationsMixin<
    FulltextItemWords,
    FulltextItemWordsId
  >
  countFulltextItemWords!: Sequelize.HasManyCountAssociationsMixin

  static initModel(sequelize: Sequelize.Sequelize): typeof FulltextWords {
    return FulltextWords.init(
      {
        wordID: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: true,
          primaryKey: true
        },
        word: {
          type: DataTypes.TEXT,
          allowNull: true,
          unique: true
        }
      },
      {
        sequelize,
        tableName: 'fulltextWords',
        timestamps: false,
        indexes: [
          {
            name: 'sqlite_autoindex_fulltextWords_1',
            unique: true,
            fields: [{ name: 'word' }]
          }
        ]
      }
    )
  }
}
