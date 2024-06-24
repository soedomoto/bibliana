import * as Sequelize from 'sequelize'
import { DataTypes, Model, Optional } from 'sequelize'
import type { CollectionItems, CollectionItemsId } from './collectionItems'
import type { DeletedItems, DeletedItemsId } from './deletedItems'
import type { FeedItems, FeedItemsId } from './feedItems'
import type { FulltextItemWords, FulltextItemWordsId } from './fulltextItemWords'
import type { FulltextItems, FulltextItemsId } from './fulltextItems'
import type { GroupItems, GroupItemsId } from './groupItems'
import type { ItemAnnotations, ItemAnnotationsId } from './itemAnnotations'
import type { ItemAttachments, ItemAttachmentsId } from './itemAttachments'
import type { ItemCreators, ItemCreatorsId } from './itemCreators'
import type { ItemData, ItemDataId } from './itemData'
import type { ItemNotes, ItemNotesId } from './itemNotes'
import type { ItemRelations, ItemRelationsId } from './itemRelations'
import type { ItemTags, ItemTagsId } from './itemTags'
import type { Libraries, LibrariesId } from './libraries'
import type { RetractedItems, RetractedItemsId } from './retractedItems'

export interface ItemsAttributes {
  itemID?: number
  itemTypeID: number
  dateAdded: Date
  dateModified: Date
  clientDateModified: Date
  libraryID: number
  key: string
  version: number
  synced: number
}

export type ItemsPk = 'itemID'
export type ItemsId = Items[ItemsPk]
export type ItemsOptionalAttributes =
  | 'itemID'
  | 'dateAdded'
  | 'dateModified'
  | 'clientDateModified'
  | 'version'
  | 'synced'
export type ItemsCreationAttributes = Optional<ItemsAttributes, ItemsOptionalAttributes>

export class Items
  extends Model<ItemsAttributes, ItemsCreationAttributes>
  implements ItemsAttributes
{
  itemID?: number
  itemTypeID!: number
  dateAdded!: Date
  dateModified!: Date
  clientDateModified!: Date
  libraryID!: number
  key!: string
  version!: number
  synced!: number

  // Items hasMany CollectionItems via itemID
  collectionItems!: CollectionItems[]
  getCollectionItems!: Sequelize.HasManyGetAssociationsMixin<CollectionItems>
  setCollectionItems!: Sequelize.HasManySetAssociationsMixin<CollectionItems, CollectionItemsId>
  addCollectionItem!: Sequelize.HasManyAddAssociationMixin<CollectionItems, CollectionItemsId>
  addCollectionItems!: Sequelize.HasManyAddAssociationsMixin<CollectionItems, CollectionItemsId>
  createCollectionItem!: Sequelize.HasManyCreateAssociationMixin<CollectionItems>
  removeCollectionItem!: Sequelize.HasManyRemoveAssociationMixin<CollectionItems, CollectionItemsId>
  removeCollectionItems!: Sequelize.HasManyRemoveAssociationsMixin<
    CollectionItems,
    CollectionItemsId
  >
  hasCollectionItem!: Sequelize.HasManyHasAssociationMixin<CollectionItems, CollectionItemsId>
  hasCollectionItems!: Sequelize.HasManyHasAssociationsMixin<CollectionItems, CollectionItemsId>
  countCollectionItems!: Sequelize.HasManyCountAssociationsMixin
  // Items hasMany DeletedItems via itemID
  deletedItems!: DeletedItems[]
  getDeletedItems!: Sequelize.HasManyGetAssociationsMixin<DeletedItems>
  setDeletedItems!: Sequelize.HasManySetAssociationsMixin<DeletedItems, DeletedItemsId>
  addDeletedItem!: Sequelize.HasManyAddAssociationMixin<DeletedItems, DeletedItemsId>
  addDeletedItems!: Sequelize.HasManyAddAssociationsMixin<DeletedItems, DeletedItemsId>
  createDeletedItem!: Sequelize.HasManyCreateAssociationMixin<DeletedItems>
  removeDeletedItem!: Sequelize.HasManyRemoveAssociationMixin<DeletedItems, DeletedItemsId>
  removeDeletedItems!: Sequelize.HasManyRemoveAssociationsMixin<DeletedItems, DeletedItemsId>
  hasDeletedItem!: Sequelize.HasManyHasAssociationMixin<DeletedItems, DeletedItemsId>
  hasDeletedItems!: Sequelize.HasManyHasAssociationsMixin<DeletedItems, DeletedItemsId>
  countDeletedItems!: Sequelize.HasManyCountAssociationsMixin
  // Items hasMany FeedItems via itemID
  feedItems!: FeedItems[]
  getFeedItems!: Sequelize.HasManyGetAssociationsMixin<FeedItems>
  setFeedItems!: Sequelize.HasManySetAssociationsMixin<FeedItems, FeedItemsId>
  addFeedItem!: Sequelize.HasManyAddAssociationMixin<FeedItems, FeedItemsId>
  addFeedItems!: Sequelize.HasManyAddAssociationsMixin<FeedItems, FeedItemsId>
  createFeedItem!: Sequelize.HasManyCreateAssociationMixin<FeedItems>
  removeFeedItem!: Sequelize.HasManyRemoveAssociationMixin<FeedItems, FeedItemsId>
  removeFeedItems!: Sequelize.HasManyRemoveAssociationsMixin<FeedItems, FeedItemsId>
  hasFeedItem!: Sequelize.HasManyHasAssociationMixin<FeedItems, FeedItemsId>
  hasFeedItems!: Sequelize.HasManyHasAssociationsMixin<FeedItems, FeedItemsId>
  countFeedItems!: Sequelize.HasManyCountAssociationsMixin
  // Items hasMany FulltextItemWords via itemID
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
  // Items hasMany FulltextItems via itemID
  fulltextItems!: FulltextItems[]
  getFulltextItems!: Sequelize.HasManyGetAssociationsMixin<FulltextItems>
  setFulltextItems!: Sequelize.HasManySetAssociationsMixin<FulltextItems, FulltextItemsId>
  addFulltextItem!: Sequelize.HasManyAddAssociationMixin<FulltextItems, FulltextItemsId>
  addFulltextItems!: Sequelize.HasManyAddAssociationsMixin<FulltextItems, FulltextItemsId>
  createFulltextItem!: Sequelize.HasManyCreateAssociationMixin<FulltextItems>
  removeFulltextItem!: Sequelize.HasManyRemoveAssociationMixin<FulltextItems, FulltextItemsId>
  removeFulltextItems!: Sequelize.HasManyRemoveAssociationsMixin<FulltextItems, FulltextItemsId>
  hasFulltextItem!: Sequelize.HasManyHasAssociationMixin<FulltextItems, FulltextItemsId>
  hasFulltextItems!: Sequelize.HasManyHasAssociationsMixin<FulltextItems, FulltextItemsId>
  countFulltextItems!: Sequelize.HasManyCountAssociationsMixin
  // Items hasMany GroupItems via itemID
  groupItems!: GroupItems[]
  getGroupItems!: Sequelize.HasManyGetAssociationsMixin<GroupItems>
  setGroupItems!: Sequelize.HasManySetAssociationsMixin<GroupItems, GroupItemsId>
  addGroupItem!: Sequelize.HasManyAddAssociationMixin<GroupItems, GroupItemsId>
  addGroupItems!: Sequelize.HasManyAddAssociationsMixin<GroupItems, GroupItemsId>
  createGroupItem!: Sequelize.HasManyCreateAssociationMixin<GroupItems>
  removeGroupItem!: Sequelize.HasManyRemoveAssociationMixin<GroupItems, GroupItemsId>
  removeGroupItems!: Sequelize.HasManyRemoveAssociationsMixin<GroupItems, GroupItemsId>
  hasGroupItem!: Sequelize.HasManyHasAssociationMixin<GroupItems, GroupItemsId>
  hasGroupItems!: Sequelize.HasManyHasAssociationsMixin<GroupItems, GroupItemsId>
  countGroupItems!: Sequelize.HasManyCountAssociationsMixin
  // Items hasMany ItemAnnotations via itemID
  itemAnnotations!: ItemAnnotations[]
  getItemAnnotations!: Sequelize.HasManyGetAssociationsMixin<ItemAnnotations>
  setItemAnnotations!: Sequelize.HasManySetAssociationsMixin<ItemAnnotations, ItemAnnotationsId>
  addItemAnnotation!: Sequelize.HasManyAddAssociationMixin<ItemAnnotations, ItemAnnotationsId>
  addItemAnnotations!: Sequelize.HasManyAddAssociationsMixin<ItemAnnotations, ItemAnnotationsId>
  createItemAnnotation!: Sequelize.HasManyCreateAssociationMixin<ItemAnnotations>
  removeItemAnnotation!: Sequelize.HasManyRemoveAssociationMixin<ItemAnnotations, ItemAnnotationsId>
  removeItemAnnotations!: Sequelize.HasManyRemoveAssociationsMixin<
    ItemAnnotations,
    ItemAnnotationsId
  >
  hasItemAnnotation!: Sequelize.HasManyHasAssociationMixin<ItemAnnotations, ItemAnnotationsId>
  hasItemAnnotations!: Sequelize.HasManyHasAssociationsMixin<ItemAnnotations, ItemAnnotationsId>
  countItemAnnotations!: Sequelize.HasManyCountAssociationsMixin
  // Items hasMany ItemAttachments via parentItemID
  itemAttachments!: ItemAttachments[]
  getItemAttachments!: Sequelize.HasManyGetAssociationsMixin<ItemAttachments>
  setItemAttachments!: Sequelize.HasManySetAssociationsMixin<ItemAttachments, ItemAttachmentsId>
  addItemAttachment!: Sequelize.HasManyAddAssociationMixin<ItemAttachments, ItemAttachmentsId>
  addItemAttachments!: Sequelize.HasManyAddAssociationsMixin<ItemAttachments, ItemAttachmentsId>
  createItemAttachment!: Sequelize.HasManyCreateAssociationMixin<ItemAttachments>
  removeItemAttachment!: Sequelize.HasManyRemoveAssociationMixin<ItemAttachments, ItemAttachmentsId>
  removeItemAttachments!: Sequelize.HasManyRemoveAssociationsMixin<
    ItemAttachments,
    ItemAttachmentsId
  >
  hasItemAttachment!: Sequelize.HasManyHasAssociationMixin<ItemAttachments, ItemAttachmentsId>
  hasItemAttachments!: Sequelize.HasManyHasAssociationsMixin<ItemAttachments, ItemAttachmentsId>
  countItemAttachments!: Sequelize.HasManyCountAssociationsMixin
  // Items hasMany ItemAttachments via itemID
  item_itemAttachments!: ItemAttachments[]
  getItem_itemAttachments!: Sequelize.HasManyGetAssociationsMixin<ItemAttachments>
  setItem_itemAttachments!: Sequelize.HasManySetAssociationsMixin<
    ItemAttachments,
    ItemAttachmentsId
  >
  addItem_itemAttachment!: Sequelize.HasManyAddAssociationMixin<ItemAttachments, ItemAttachmentsId>
  addItem_itemAttachments!: Sequelize.HasManyAddAssociationsMixin<
    ItemAttachments,
    ItemAttachmentsId
  >
  createItem_itemAttachment!: Sequelize.HasManyCreateAssociationMixin<ItemAttachments>
  removeItem_itemAttachment!: Sequelize.HasManyRemoveAssociationMixin<
    ItemAttachments,
    ItemAttachmentsId
  >
  removeItem_itemAttachments!: Sequelize.HasManyRemoveAssociationsMixin<
    ItemAttachments,
    ItemAttachmentsId
  >
  hasItem_itemAttachment!: Sequelize.HasManyHasAssociationMixin<ItemAttachments, ItemAttachmentsId>
  hasItem_itemAttachments!: Sequelize.HasManyHasAssociationsMixin<
    ItemAttachments,
    ItemAttachmentsId
  >
  countItem_itemAttachments!: Sequelize.HasManyCountAssociationsMixin
  // Items hasMany ItemCreators via itemID
  itemCreators!: ItemCreators[]
  getItemCreators!: Sequelize.HasManyGetAssociationsMixin<ItemCreators>
  setItemCreators!: Sequelize.HasManySetAssociationsMixin<ItemCreators, ItemCreatorsId>
  addItemCreator!: Sequelize.HasManyAddAssociationMixin<ItemCreators, ItemCreatorsId>
  addItemCreators!: Sequelize.HasManyAddAssociationsMixin<ItemCreators, ItemCreatorsId>
  createItemCreator!: Sequelize.HasManyCreateAssociationMixin<ItemCreators>
  removeItemCreator!: Sequelize.HasManyRemoveAssociationMixin<ItemCreators, ItemCreatorsId>
  removeItemCreators!: Sequelize.HasManyRemoveAssociationsMixin<ItemCreators, ItemCreatorsId>
  hasItemCreator!: Sequelize.HasManyHasAssociationMixin<ItemCreators, ItemCreatorsId>
  hasItemCreators!: Sequelize.HasManyHasAssociationsMixin<ItemCreators, ItemCreatorsId>
  countItemCreators!: Sequelize.HasManyCountAssociationsMixin
  // Items hasMany ItemData via itemID
  itemData!: ItemData[]
  getItemData!: Sequelize.HasManyGetAssociationsMixin<ItemData>
  setItemData!: Sequelize.HasManySetAssociationsMixin<ItemData, ItemDataId>
  addItemDatum!: Sequelize.HasManyAddAssociationMixin<ItemData, ItemDataId>
  addItemData!: Sequelize.HasManyAddAssociationsMixin<ItemData, ItemDataId>
  createItemDatum!: Sequelize.HasManyCreateAssociationMixin<ItemData>
  removeItemDatum!: Sequelize.HasManyRemoveAssociationMixin<ItemData, ItemDataId>
  removeItemData!: Sequelize.HasManyRemoveAssociationsMixin<ItemData, ItemDataId>
  hasItemDatum!: Sequelize.HasManyHasAssociationMixin<ItemData, ItemDataId>
  hasItemData!: Sequelize.HasManyHasAssociationsMixin<ItemData, ItemDataId>
  countItemData!: Sequelize.HasManyCountAssociationsMixin
  // Items hasMany ItemNotes via parentItemID
  itemNotes!: ItemNotes[]
  getItemNotes!: Sequelize.HasManyGetAssociationsMixin<ItemNotes>
  setItemNotes!: Sequelize.HasManySetAssociationsMixin<ItemNotes, ItemNotesId>
  addItemNote!: Sequelize.HasManyAddAssociationMixin<ItemNotes, ItemNotesId>
  addItemNotes!: Sequelize.HasManyAddAssociationsMixin<ItemNotes, ItemNotesId>
  createItemNote!: Sequelize.HasManyCreateAssociationMixin<ItemNotes>
  removeItemNote!: Sequelize.HasManyRemoveAssociationMixin<ItemNotes, ItemNotesId>
  removeItemNotes!: Sequelize.HasManyRemoveAssociationsMixin<ItemNotes, ItemNotesId>
  hasItemNote!: Sequelize.HasManyHasAssociationMixin<ItemNotes, ItemNotesId>
  hasItemNotes!: Sequelize.HasManyHasAssociationsMixin<ItemNotes, ItemNotesId>
  countItemNotes!: Sequelize.HasManyCountAssociationsMixin
  // Items hasMany ItemNotes via itemID
  item_itemNotes!: ItemNotes[]
  getItem_itemNotes!: Sequelize.HasManyGetAssociationsMixin<ItemNotes>
  setItem_itemNotes!: Sequelize.HasManySetAssociationsMixin<ItemNotes, ItemNotesId>
  addItem_itemNote!: Sequelize.HasManyAddAssociationMixin<ItemNotes, ItemNotesId>
  addItem_itemNotes!: Sequelize.HasManyAddAssociationsMixin<ItemNotes, ItemNotesId>
  createItem_itemNote!: Sequelize.HasManyCreateAssociationMixin<ItemNotes>
  removeItem_itemNote!: Sequelize.HasManyRemoveAssociationMixin<ItemNotes, ItemNotesId>
  removeItem_itemNotes!: Sequelize.HasManyRemoveAssociationsMixin<ItemNotes, ItemNotesId>
  hasItem_itemNote!: Sequelize.HasManyHasAssociationMixin<ItemNotes, ItemNotesId>
  hasItem_itemNotes!: Sequelize.HasManyHasAssociationsMixin<ItemNotes, ItemNotesId>
  countItem_itemNotes!: Sequelize.HasManyCountAssociationsMixin
  // Items hasMany ItemRelations via itemID
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
  // Items hasMany ItemTags via itemID
  itemTags!: ItemTags[]
  getItemTags!: Sequelize.HasManyGetAssociationsMixin<ItemTags>
  setItemTags!: Sequelize.HasManySetAssociationsMixin<ItemTags, ItemTagsId>
  addItemTag!: Sequelize.HasManyAddAssociationMixin<ItemTags, ItemTagsId>
  addItemTags!: Sequelize.HasManyAddAssociationsMixin<ItemTags, ItemTagsId>
  createItemTag!: Sequelize.HasManyCreateAssociationMixin<ItemTags>
  removeItemTag!: Sequelize.HasManyRemoveAssociationMixin<ItemTags, ItemTagsId>
  removeItemTags!: Sequelize.HasManyRemoveAssociationsMixin<ItemTags, ItemTagsId>
  hasItemTag!: Sequelize.HasManyHasAssociationMixin<ItemTags, ItemTagsId>
  hasItemTags!: Sequelize.HasManyHasAssociationsMixin<ItemTags, ItemTagsId>
  countItemTags!: Sequelize.HasManyCountAssociationsMixin
  // Items hasMany RetractedItems via itemID
  retractedItems!: RetractedItems[]
  getRetractedItems!: Sequelize.HasManyGetAssociationsMixin<RetractedItems>
  setRetractedItems!: Sequelize.HasManySetAssociationsMixin<RetractedItems, RetractedItemsId>
  addRetractedItem!: Sequelize.HasManyAddAssociationMixin<RetractedItems, RetractedItemsId>
  addRetractedItems!: Sequelize.HasManyAddAssociationsMixin<RetractedItems, RetractedItemsId>
  createRetractedItem!: Sequelize.HasManyCreateAssociationMixin<RetractedItems>
  removeRetractedItem!: Sequelize.HasManyRemoveAssociationMixin<RetractedItems, RetractedItemsId>
  removeRetractedItems!: Sequelize.HasManyRemoveAssociationsMixin<RetractedItems, RetractedItemsId>
  hasRetractedItem!: Sequelize.HasManyHasAssociationMixin<RetractedItems, RetractedItemsId>
  hasRetractedItems!: Sequelize.HasManyHasAssociationsMixin<RetractedItems, RetractedItemsId>
  countRetractedItems!: Sequelize.HasManyCountAssociationsMixin
  // Items belongsTo Libraries via libraryID
  library!: Libraries
  getLibrary!: Sequelize.BelongsToGetAssociationMixin<Libraries>
  setLibrary!: Sequelize.BelongsToSetAssociationMixin<Libraries, LibrariesId>
  createLibrary!: Sequelize.BelongsToCreateAssociationMixin<Libraries>

  static initModel(sequelize: Sequelize.Sequelize): typeof Items {
    return Items.init(
      {
        itemID: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: true,
          primaryKey: true
        },
        itemTypeID: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        dateAdded: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
        },
        dateModified: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
        },
        clientDateModified: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
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
        key: {
          type: DataTypes.TEXT,
          allowNull: false,
          unique: true
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
        tableName: 'items',
        timestamps: false,
        indexes: [
          {
            name: 'sqlite_autoindex_items_1',
            unique: true,
            fields: [{ name: 'libraryID' }, { name: 'key' }]
          },
          {
            name: 'items_synced',
            fields: [{ name: 'synced' }]
          }
        ]
      }
    )
  }
}
