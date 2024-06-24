import type { Sequelize } from 'sequelize'
import { BaseFieldMappings as _BaseFieldMappings } from './baseFieldMappings'
import type {
  BaseFieldMappingsAttributes,
  BaseFieldMappingsCreationAttributes
} from './baseFieldMappings'
import { BaseFieldMappingsCombined as _BaseFieldMappingsCombined } from './baseFieldMappingsCombined'
import type {
  BaseFieldMappingsCombinedAttributes,
  BaseFieldMappingsCombinedCreationAttributes
} from './baseFieldMappingsCombined'
import { Charsets as _Charsets } from './charsets'
import type { CharsetsAttributes, CharsetsCreationAttributes } from './charsets'
import { CollectionItems as _CollectionItems } from './collectionItems'
import type {
  CollectionItemsAttributes,
  CollectionItemsCreationAttributes
} from './collectionItems'
import { CollectionRelations as _CollectionRelations } from './collectionRelations'
import type {
  CollectionRelationsAttributes,
  CollectionRelationsCreationAttributes
} from './collectionRelations'
import { Collections as _Collections } from './collections'
import type { CollectionsAttributes, CollectionsCreationAttributes } from './collections'
import { CreatorTypes as _CreatorTypes } from './creatorTypes'
import type { CreatorTypesAttributes, CreatorTypesCreationAttributes } from './creatorTypes'
import { Creators as _Creators } from './creators'
import type { CreatorsAttributes, CreatorsCreationAttributes } from './creators'
import { CustomBaseFieldMappings as _CustomBaseFieldMappings } from './customBaseFieldMappings'
import type {
  CustomBaseFieldMappingsAttributes,
  CustomBaseFieldMappingsCreationAttributes
} from './customBaseFieldMappings'
import { CustomFields as _CustomFields } from './customFields'
import type { CustomFieldsAttributes, CustomFieldsCreationAttributes } from './customFields'
import { CustomItemTypeFields as _CustomItemTypeFields } from './customItemTypeFields'
import type {
  CustomItemTypeFieldsAttributes,
  CustomItemTypeFieldsCreationAttributes
} from './customItemTypeFields'
import { CustomItemTypes as _CustomItemTypes } from './customItemTypes'
import type {
  CustomItemTypesAttributes,
  CustomItemTypesCreationAttributes
} from './customItemTypes'
import { DbDebug1 as _DbDebug1 } from './dbDebug1'
import type { DbDebug1Attributes, DbDebug1CreationAttributes } from './dbDebug1'
// import { DeletedCollections as _DeletedCollections } from './deletedCollections'
// import type {
//   DeletedCollectionsAttributes,
//   DeletedCollectionsCreationAttributes
// } from './deletedCollections'
// import { DeletedItems as _DeletedItems } from './deletedItems'
// import type { DeletedItemsAttributes, DeletedItemsCreationAttributes } from './deletedItems'
// import { DeletedSearches as _DeletedSearches } from './deletedSearches'
// import type {
//   DeletedSearchesAttributes,
//   DeletedSearchesCreationAttributes
// } from './deletedSearches'
import { FeedItems as _FeedItems } from './feedItems'
import type { FeedItemsAttributes, FeedItemsCreationAttributes } from './feedItems'
import { Feeds as _Feeds } from './feeds'
import type { FeedsAttributes, FeedsCreationAttributes } from './feeds'
import { FieldFormats as _FieldFormats } from './fieldFormats'
import type { FieldFormatsAttributes, FieldFormatsCreationAttributes } from './fieldFormats'
import { Fields as _Fields } from './fields'
import type { FieldsAttributes, FieldsCreationAttributes } from './fields'
import { FieldsCombined as _FieldsCombined } from './fieldsCombined'
import type { FieldsCombinedAttributes, FieldsCombinedCreationAttributes } from './fieldsCombined'
import { FileTypeMimeTypes as _FileTypeMimeTypes } from './fileTypeMimeTypes'
import type {
  FileTypeMimeTypesAttributes,
  FileTypeMimeTypesCreationAttributes
} from './fileTypeMimeTypes'
import { FileTypes as _FileTypes } from './fileTypes'
import type { FileTypesAttributes, FileTypesCreationAttributes } from './fileTypes'
import { FulltextItemWords as _FulltextItemWords } from './fulltextItemWords'
import type {
  FulltextItemWordsAttributes,
  FulltextItemWordsCreationAttributes
} from './fulltextItemWords'
import { FulltextItems as _FulltextItems } from './fulltextItems'
import type { FulltextItemsAttributes, FulltextItemsCreationAttributes } from './fulltextItems'
import { FulltextWords as _FulltextWords } from './fulltextWords'
import type { FulltextWordsAttributes, FulltextWordsCreationAttributes } from './fulltextWords'
import { GroupItems as _GroupItems } from './groupItems'
import type { GroupItemsAttributes, GroupItemsCreationAttributes } from './groupItems'
import { Groups as _Groups } from './groups'
import type { GroupsAttributes, GroupsCreationAttributes } from './groups'
import { ItemAnnotations as _ItemAnnotations } from './itemAnnotations'
import type {
  ItemAnnotationsAttributes,
  ItemAnnotationsCreationAttributes
} from './itemAnnotations'
import { ItemAttachments as _ItemAttachments } from './itemAttachments'
import type {
  ItemAttachmentsAttributes,
  ItemAttachmentsCreationAttributes
} from './itemAttachments'
import { ItemCreators as _ItemCreators } from './itemCreators'
import type { ItemCreatorsAttributes, ItemCreatorsCreationAttributes } from './itemCreators'
import { ItemData as _ItemData } from './itemData'
import type { ItemDataAttributes, ItemDataCreationAttributes } from './itemData'
import { ItemDataValues as _ItemDataValues } from './itemDataValues'
import type { ItemDataValuesAttributes, ItemDataValuesCreationAttributes } from './itemDataValues'
import { ItemNotes as _ItemNotes } from './itemNotes'
import type { ItemNotesAttributes, ItemNotesCreationAttributes } from './itemNotes'
import { ItemRelations as _ItemRelations } from './itemRelations'
import type { ItemRelationsAttributes, ItemRelationsCreationAttributes } from './itemRelations'
import { ItemTags as _ItemTags } from './itemTags'
import type { ItemTagsAttributes, ItemTagsCreationAttributes } from './itemTags'
import { ItemTypeCreatorTypes as _ItemTypeCreatorTypes } from './itemTypeCreatorTypes'
import type {
  ItemTypeCreatorTypesAttributes,
  ItemTypeCreatorTypesCreationAttributes
} from './itemTypeCreatorTypes'
import { ItemTypeFields as _ItemTypeFields } from './itemTypeFields'
import type { ItemTypeFieldsAttributes, ItemTypeFieldsCreationAttributes } from './itemTypeFields'
import { ItemTypeFieldsCombined as _ItemTypeFieldsCombined } from './itemTypeFieldsCombined'
import type {
  ItemTypeFieldsCombinedAttributes,
  ItemTypeFieldsCombinedCreationAttributes
} from './itemTypeFieldsCombined'
import { ItemTypes as _ItemTypes } from './itemTypes'
import type { ItemTypesAttributes, ItemTypesCreationAttributes } from './itemTypes'
import { ItemTypesCombined as _ItemTypesCombined } from './itemTypesCombined'
import type {
  ItemTypesCombinedAttributes,
  ItemTypesCombinedCreationAttributes
} from './itemTypesCombined'
import { Items as _Items } from './items'
import type { ItemsAttributes, ItemsCreationAttributes } from './items'
import { Libraries as _Libraries } from './libraries'
import type { LibrariesAttributes, LibrariesCreationAttributes } from './libraries'
import { Proxies as _Proxies } from './proxies'
import type { ProxiesAttributes, ProxiesCreationAttributes } from './proxies'
import { ProxyHosts as _ProxyHosts } from './proxyHosts'
import type { ProxyHostsAttributes, ProxyHostsCreationAttributes } from './proxyHosts'
import { PublicationsItems as _PublicationsItems } from './publicationsItems'
import type {
  PublicationsItemsAttributes,
  PublicationsItemsCreationAttributes
} from './publicationsItems'
import { RelationPredicates as _RelationPredicates } from './relationPredicates'
import type {
  RelationPredicatesAttributes,
  RelationPredicatesCreationAttributes
} from './relationPredicates'
import { RetractedItems as _RetractedItems } from './retractedItems'
import type { RetractedItemsAttributes, RetractedItemsCreationAttributes } from './retractedItems'
import { SavedSearchConditions as _SavedSearchConditions } from './savedSearchConditions'
import type {
  SavedSearchConditionsAttributes,
  SavedSearchConditionsCreationAttributes
} from './savedSearchConditions'
import { SavedSearches as _SavedSearches } from './savedSearches'
import type { SavedSearchesAttributes, SavedSearchesCreationAttributes } from './savedSearches'
import { Settings as _Settings } from './settings'
import type { SettingsAttributes, SettingsCreationAttributes } from './settings'
import { StorageDeleteLog as _StorageDeleteLog } from './storageDeleteLog'
import type {
  StorageDeleteLogAttributes,
  StorageDeleteLogCreationAttributes
} from './storageDeleteLog'
import { SyncCache as _SyncCache } from './syncCache'
import type { SyncCacheAttributes, SyncCacheCreationAttributes } from './syncCache'
import { SyncDeleteLog as _SyncDeleteLog } from './syncDeleteLog'
import type { SyncDeleteLogAttributes, SyncDeleteLogCreationAttributes } from './syncDeleteLog'
import { SyncObjectTypes as _SyncObjectTypes } from './syncObjectTypes'
import type {
  SyncObjectTypesAttributes,
  SyncObjectTypesCreationAttributes
} from './syncObjectTypes'
import { SyncQueue as _SyncQueue } from './syncQueue'
import type { SyncQueueAttributes, SyncQueueCreationAttributes } from './syncQueue'
import { SyncedSettings as _SyncedSettings } from './syncedSettings'
import type { SyncedSettingsAttributes, SyncedSettingsCreationAttributes } from './syncedSettings'
import { Tags as _Tags } from './tags'
import type { TagsAttributes, TagsCreationAttributes } from './tags'
import { TranslatorCache as _TranslatorCache } from './translatorCache'
import type {
  TranslatorCacheAttributes,
  TranslatorCacheCreationAttributes
} from './translatorCache'
import { Users as _Users } from './users'
import type { UsersAttributes, UsersCreationAttributes } from './users'
import { Version as _Version } from './version'
import type { VersionAttributes, VersionCreationAttributes } from './version'

export {
  _BaseFieldMappings as BaseFieldMappings,
  _BaseFieldMappingsCombined as BaseFieldMappingsCombined,
  _Charsets as Charsets,
  _CollectionItems as CollectionItems,
  _CollectionRelations as CollectionRelations,
  _Collections as Collections,
  _CreatorTypes as CreatorTypes,
  _Creators as Creators,
  _CustomBaseFieldMappings as CustomBaseFieldMappings,
  _CustomFields as CustomFields,
  _CustomItemTypeFields as CustomItemTypeFields,
  _CustomItemTypes as CustomItemTypes,
  _DbDebug1 as DbDebug1,
  // _DeletedCollections as DeletedCollections,
  // _DeletedItems as DeletedItems,
  // _DeletedSearches as DeletedSearches,
  _FeedItems as FeedItems,
  _Feeds as Feeds,
  _FieldFormats as FieldFormats,
  _Fields as Fields,
  _FieldsCombined as FieldsCombined,
  _FileTypeMimeTypes as FileTypeMimeTypes,
  _FileTypes as FileTypes,
  _FulltextItemWords as FulltextItemWords,
  _FulltextItems as FulltextItems,
  _FulltextWords as FulltextWords,
  _GroupItems as GroupItems,
  _Groups as Groups,
  _ItemAnnotations as ItemAnnotations,
  _ItemAttachments as ItemAttachments,
  _ItemCreators as ItemCreators,
  _ItemData as ItemData,
  _ItemDataValues as ItemDataValues,
  _ItemNotes as ItemNotes,
  _ItemRelations as ItemRelations,
  _ItemTags as ItemTags,
  _ItemTypeCreatorTypes as ItemTypeCreatorTypes,
  _ItemTypeFields as ItemTypeFields,
  _ItemTypeFieldsCombined as ItemTypeFieldsCombined,
  _ItemTypes as ItemTypes,
  _ItemTypesCombined as ItemTypesCombined,
  _Items as Items,
  _Libraries as Libraries,
  _Proxies as Proxies,
  _ProxyHosts as ProxyHosts,
  _PublicationsItems as PublicationsItems,
  _RelationPredicates as RelationPredicates,
  _RetractedItems as RetractedItems,
  _SavedSearchConditions as SavedSearchConditions,
  _SavedSearches as SavedSearches,
  _Settings as Settings,
  _StorageDeleteLog as StorageDeleteLog,
  _SyncCache as SyncCache,
  _SyncDeleteLog as SyncDeleteLog,
  _SyncObjectTypes as SyncObjectTypes,
  _SyncQueue as SyncQueue,
  _SyncedSettings as SyncedSettings,
  _Tags as Tags,
  _TranslatorCache as TranslatorCache,
  _Users as Users,
  _Version as Version
}

export type {
  BaseFieldMappingsAttributes,
  BaseFieldMappingsCreationAttributes,
  BaseFieldMappingsCombinedAttributes,
  BaseFieldMappingsCombinedCreationAttributes,
  CharsetsAttributes,
  CharsetsCreationAttributes,
  CollectionItemsAttributes,
  CollectionItemsCreationAttributes,
  CollectionRelationsAttributes,
  CollectionRelationsCreationAttributes,
  CollectionsAttributes,
  CollectionsCreationAttributes,
  CreatorTypesAttributes,
  CreatorTypesCreationAttributes,
  CreatorsAttributes,
  CreatorsCreationAttributes,
  CustomBaseFieldMappingsAttributes,
  CustomBaseFieldMappingsCreationAttributes,
  CustomFieldsAttributes,
  CustomFieldsCreationAttributes,
  CustomItemTypeFieldsAttributes,
  CustomItemTypeFieldsCreationAttributes,
  CustomItemTypesAttributes,
  CustomItemTypesCreationAttributes,
  DbDebug1Attributes,
  DbDebug1CreationAttributes,
  // DeletedCollectionsAttributes,
  // DeletedCollectionsCreationAttributes,
  // DeletedItemsAttributes,
  // DeletedItemsCreationAttributes,
  // DeletedSearchesAttributes,
  // DeletedSearchesCreationAttributes,
  FeedItemsAttributes,
  FeedItemsCreationAttributes,
  FeedsAttributes,
  FeedsCreationAttributes,
  FieldFormatsAttributes,
  FieldFormatsCreationAttributes,
  FieldsAttributes,
  FieldsCreationAttributes,
  FieldsCombinedAttributes,
  FieldsCombinedCreationAttributes,
  FileTypeMimeTypesAttributes,
  FileTypeMimeTypesCreationAttributes,
  FileTypesAttributes,
  FileTypesCreationAttributes,
  FulltextItemWordsAttributes,
  FulltextItemWordsCreationAttributes,
  FulltextItemsAttributes,
  FulltextItemsCreationAttributes,
  FulltextWordsAttributes,
  FulltextWordsCreationAttributes,
  GroupItemsAttributes,
  GroupItemsCreationAttributes,
  GroupsAttributes,
  GroupsCreationAttributes,
  ItemAnnotationsAttributes,
  ItemAnnotationsCreationAttributes,
  ItemAttachmentsAttributes,
  ItemAttachmentsCreationAttributes,
  ItemCreatorsAttributes,
  ItemCreatorsCreationAttributes,
  ItemDataAttributes,
  ItemDataCreationAttributes,
  ItemDataValuesAttributes,
  ItemDataValuesCreationAttributes,
  ItemNotesAttributes,
  ItemNotesCreationAttributes,
  ItemRelationsAttributes,
  ItemRelationsCreationAttributes,
  ItemTagsAttributes,
  ItemTagsCreationAttributes,
  ItemTypeCreatorTypesAttributes,
  ItemTypeCreatorTypesCreationAttributes,
  ItemTypeFieldsAttributes,
  ItemTypeFieldsCreationAttributes,
  ItemTypeFieldsCombinedAttributes,
  ItemTypeFieldsCombinedCreationAttributes,
  ItemTypesAttributes,
  ItemTypesCreationAttributes,
  ItemTypesCombinedAttributes,
  ItemTypesCombinedCreationAttributes,
  ItemsAttributes,
  ItemsCreationAttributes,
  LibrariesAttributes,
  LibrariesCreationAttributes,
  ProxiesAttributes,
  ProxiesCreationAttributes,
  ProxyHostsAttributes,
  ProxyHostsCreationAttributes,
  PublicationsItemsAttributes,
  PublicationsItemsCreationAttributes,
  RelationPredicatesAttributes,
  RelationPredicatesCreationAttributes,
  RetractedItemsAttributes,
  RetractedItemsCreationAttributes,
  SavedSearchConditionsAttributes,
  SavedSearchConditionsCreationAttributes,
  SavedSearchesAttributes,
  SavedSearchesCreationAttributes,
  SettingsAttributes,
  SettingsCreationAttributes,
  StorageDeleteLogAttributes,
  StorageDeleteLogCreationAttributes,
  SyncCacheAttributes,
  SyncCacheCreationAttributes,
  SyncDeleteLogAttributes,
  SyncDeleteLogCreationAttributes,
  SyncObjectTypesAttributes,
  SyncObjectTypesCreationAttributes,
  SyncQueueAttributes,
  SyncQueueCreationAttributes,
  SyncedSettingsAttributes,
  SyncedSettingsCreationAttributes,
  TagsAttributes,
  TagsCreationAttributes,
  TranslatorCacheAttributes,
  TranslatorCacheCreationAttributes,
  UsersAttributes,
  UsersCreationAttributes,
  VersionAttributes,
  VersionCreationAttributes
}

export function initModels(sequelize: Sequelize) {
  const BaseFieldMappings = _BaseFieldMappings.initModel(sequelize)
  const BaseFieldMappingsCombined = _BaseFieldMappingsCombined.initModel(sequelize)
  const Charsets = _Charsets.initModel(sequelize)
  const CollectionItems = _CollectionItems.initModel(sequelize)
  const CollectionRelations = _CollectionRelations.initModel(sequelize)
  const Collections = _Collections.initModel(sequelize)
  const CreatorTypes = _CreatorTypes.initModel(sequelize)
  const Creators = _Creators.initModel(sequelize)
  const CustomBaseFieldMappings = _CustomBaseFieldMappings.initModel(sequelize)
  const CustomFields = _CustomFields.initModel(sequelize)
  const CustomItemTypeFields = _CustomItemTypeFields.initModel(sequelize)
  const CustomItemTypes = _CustomItemTypes.initModel(sequelize)
  const DbDebug1 = _DbDebug1.initModel(sequelize)
  // const DeletedCollections = _DeletedCollections.initModel(sequelize)
  // const DeletedItems = _DeletedItems.initModel(sequelize)
  // const DeletedSearches = _DeletedSearches.initModel(sequelize)
  const FeedItems = _FeedItems.initModel(sequelize)
  const Feeds = _Feeds.initModel(sequelize)
  const FieldFormats = _FieldFormats.initModel(sequelize)
  const Fields = _Fields.initModel(sequelize)
  const FieldsCombined = _FieldsCombined.initModel(sequelize)
  const FileTypeMimeTypes = _FileTypeMimeTypes.initModel(sequelize)
  const FileTypes = _FileTypes.initModel(sequelize)
  const FulltextItemWords = _FulltextItemWords.initModel(sequelize)
  const FulltextItems = _FulltextItems.initModel(sequelize)
  const FulltextWords = _FulltextWords.initModel(sequelize)
  const GroupItems = _GroupItems.initModel(sequelize)
  const Groups = _Groups.initModel(sequelize)
  const ItemAnnotations = _ItemAnnotations.initModel(sequelize)
  const ItemAttachments = _ItemAttachments.initModel(sequelize)
  const ItemCreators = _ItemCreators.initModel(sequelize)
  const ItemData = _ItemData.initModel(sequelize)
  const ItemDataValues = _ItemDataValues.initModel(sequelize)
  const ItemNotes = _ItemNotes.initModel(sequelize)
  const ItemRelations = _ItemRelations.initModel(sequelize)
  const ItemTags = _ItemTags.initModel(sequelize)
  const ItemTypeCreatorTypes = _ItemTypeCreatorTypes.initModel(sequelize)
  const ItemTypeFields = _ItemTypeFields.initModel(sequelize)
  const ItemTypeFieldsCombined = _ItemTypeFieldsCombined.initModel(sequelize)
  const ItemTypes = _ItemTypes.initModel(sequelize)
  const ItemTypesCombined = _ItemTypesCombined.initModel(sequelize)
  const Items = _Items.initModel(sequelize)
  const Libraries = _Libraries.initModel(sequelize)
  const Proxies = _Proxies.initModel(sequelize)
  const ProxyHosts = _ProxyHosts.initModel(sequelize)
  const PublicationsItems = _PublicationsItems.initModel(sequelize)
  const RelationPredicates = _RelationPredicates.initModel(sequelize)
  const RetractedItems = _RetractedItems.initModel(sequelize)
  const SavedSearchConditions = _SavedSearchConditions.initModel(sequelize)
  const SavedSearches = _SavedSearches.initModel(sequelize)
  const Settings = _Settings.initModel(sequelize)
  const StorageDeleteLog = _StorageDeleteLog.initModel(sequelize)
  const SyncCache = _SyncCache.initModel(sequelize)
  const SyncDeleteLog = _SyncDeleteLog.initModel(sequelize)
  const SyncObjectTypes = _SyncObjectTypes.initModel(sequelize)
  const SyncQueue = _SyncQueue.initModel(sequelize)
  const SyncedSettings = _SyncedSettings.initModel(sequelize)
  const Tags = _Tags.initModel(sequelize)
  const TranslatorCache = _TranslatorCache.initModel(sequelize)
  const Users = _Users.initModel(sequelize)
  const Version = _Version.initModel(sequelize)

  ItemAttachments.belongsTo(Charsets, { as: 'charset', foreignKey: 'charsetID' })
  Charsets.hasMany(ItemAttachments, { as: 'itemAttachments', foreignKey: 'charsetID' })
  CollectionItems.belongsTo(Collections, { as: 'collection', foreignKey: 'collectionID' })
  Collections.hasMany(CollectionItems, { as: 'collectionItems', foreignKey: 'collectionID' })
  CollectionRelations.belongsTo(Collections, { as: 'collection', foreignKey: 'collectionID' })
  Collections.hasMany(CollectionRelations, {
    as: 'collectionRelations',
    foreignKey: 'collectionID'
  })
  Collections.belongsTo(Collections, { as: 'parentCollection', foreignKey: 'parentCollectionID' })
  Collections.hasMany(Collections, { as: 'collections', foreignKey: 'parentCollectionID' })
  // DeletedCollections.belongsTo(Collections, { as: 'collection', foreignKey: 'collectionID' })
  // Collections.hasMany(DeletedCollections, { as: 'deletedCollections', foreignKey: 'collectionID' })
  ItemCreators.belongsTo(CreatorTypes, { as: 'creatorType', foreignKey: 'creatorTypeID' })
  CreatorTypes.hasMany(ItemCreators, { as: 'itemCreators', foreignKey: 'creatorTypeID' })
  ItemTypeCreatorTypes.belongsTo(CreatorTypes, { as: 'creatorType', foreignKey: 'creatorTypeID' })
  CreatorTypes.hasMany(ItemTypeCreatorTypes, {
    as: 'itemTypeCreatorTypes',
    foreignKey: 'creatorTypeID'
  })
  ItemCreators.belongsTo(Creators, { as: 'creator', foreignKey: 'creatorID' })
  Creators.hasMany(ItemCreators, { as: 'itemCreators', foreignKey: 'creatorID' })
  CustomBaseFieldMappings.belongsTo(CustomFields, {
    as: 'customField',
    foreignKey: 'customFieldID'
  })
  CustomFields.hasMany(CustomBaseFieldMappings, {
    as: 'customBaseFieldMappings',
    foreignKey: 'customFieldID'
  })
  CustomItemTypeFields.belongsTo(CustomFields, { as: 'customField', foreignKey: 'customFieldID' })
  CustomFields.hasMany(CustomItemTypeFields, {
    as: 'customItemTypeFields',
    foreignKey: 'customFieldID'
  })
  CustomBaseFieldMappings.belongsTo(CustomItemTypes, {
    as: 'customItemType',
    foreignKey: 'customItemTypeID'
  })
  CustomItemTypes.hasMany(CustomBaseFieldMappings, {
    as: 'customBaseFieldMappings',
    foreignKey: 'customItemTypeID'
  })
  CustomItemTypeFields.belongsTo(CustomItemTypes, {
    as: 'customItemType',
    foreignKey: 'customItemTypeID'
  })
  CustomItemTypes.hasMany(CustomItemTypeFields, {
    as: 'customItemTypeFields',
    foreignKey: 'customItemTypeID'
  })
  Fields.belongsTo(FieldFormats, { as: 'fieldFormat', foreignKey: 'fieldFormatID' })
  FieldFormats.hasMany(Fields, { as: 'fields', foreignKey: 'fieldFormatID' })
  BaseFieldMappings.belongsTo(Fields, { as: 'field', foreignKey: 'fieldID' })
  Fields.hasMany(BaseFieldMappings, { as: 'baseFieldMappings', foreignKey: 'fieldID' })
  BaseFieldMappings.belongsTo(Fields, { as: 'baseField', foreignKey: 'baseFieldID' })
  Fields.hasMany(BaseFieldMappings, {
    as: 'baseField_baseFieldMappings',
    foreignKey: 'baseFieldID'
  })
  CustomBaseFieldMappings.belongsTo(Fields, { as: 'baseField', foreignKey: 'baseFieldID' })
  Fields.hasMany(CustomBaseFieldMappings, {
    as: 'customBaseFieldMappings',
    foreignKey: 'baseFieldID'
  })
  CustomItemTypeFields.belongsTo(Fields, { as: 'field', foreignKey: 'fieldID' })
  Fields.hasMany(CustomItemTypeFields, { as: 'customItemTypeFields', foreignKey: 'fieldID' })
  ItemTypeFields.belongsTo(Fields, { as: 'field', foreignKey: 'fieldID' })
  Fields.hasMany(ItemTypeFields, { as: 'itemTypeFields', foreignKey: 'fieldID' })
  ItemData.belongsTo(FieldsCombined, { as: 'field', foreignKey: 'fieldID' })
  FieldsCombined.hasMany(ItemData, { as: 'itemData', foreignKey: 'fieldID' })
  FileTypeMimeTypes.belongsTo(FileTypes, { as: 'fileType', foreignKey: 'fileTypeID' })
  FileTypes.hasMany(FileTypeMimeTypes, { as: 'fileTypeMimeTypes', foreignKey: 'fileTypeID' })
  FulltextItemWords.belongsTo(FulltextWords, { as: 'word', foreignKey: 'wordID' })
  FulltextWords.hasMany(FulltextItemWords, { as: 'fulltextItemWords', foreignKey: 'wordID' })
  ItemAnnotations.belongsTo(ItemAttachments, { as: 'parentItem', foreignKey: 'parentItemID' })
  ItemAttachments.hasMany(ItemAnnotations, { as: 'itemAnnotations', foreignKey: 'parentItemID' })
  ItemData.belongsTo(ItemDataValues, { as: 'value', foreignKey: 'valueID' })
  ItemDataValues.hasMany(ItemData, { as: 'itemData', foreignKey: 'valueID' })
  BaseFieldMappings.belongsTo(ItemTypes, { as: 'itemType', foreignKey: 'itemTypeID' })
  ItemTypes.hasMany(BaseFieldMappings, { as: 'baseFieldMappings', foreignKey: 'itemTypeID' })
  ItemTypeCreatorTypes.belongsTo(ItemTypes, { as: 'itemType', foreignKey: 'itemTypeID' })
  ItemTypes.hasMany(ItemTypeCreatorTypes, { as: 'itemTypeCreatorTypes', foreignKey: 'itemTypeID' })
  ItemTypeFields.belongsTo(ItemTypes, { as: 'itemType', foreignKey: 'itemTypeID' })
  ItemTypes.hasMany(ItemTypeFields, { as: 'itemTypeFields', foreignKey: 'itemTypeID' })
  CollectionItems.belongsTo(Items, { as: 'item', foreignKey: 'itemID' })
  Items.hasMany(CollectionItems, { as: 'collectionItems', foreignKey: 'itemID' })
  // DeletedItems.belongsTo(Items, { as: 'item', foreignKey: 'itemID' })
  // Items.hasMany(DeletedItems, { as: 'deletedItems', foreignKey: 'itemID' })
  FeedItems.belongsTo(Items, { as: 'item', foreignKey: 'itemID' })
  Items.hasMany(FeedItems, { as: 'feedItems', foreignKey: 'itemID' })
  FulltextItemWords.belongsTo(Items, { as: 'item', foreignKey: 'itemID' })
  Items.hasMany(FulltextItemWords, { as: 'fulltextItemWords', foreignKey: 'itemID' })
  FulltextItems.belongsTo(Items, { as: 'item', foreignKey: 'itemID' })
  Items.hasMany(FulltextItems, { as: 'fulltextItems', foreignKey: 'itemID' })
  GroupItems.belongsTo(Items, { as: 'item', foreignKey: 'itemID' })
  Items.hasMany(GroupItems, { as: 'groupItems', foreignKey: 'itemID' })
  ItemAnnotations.belongsTo(Items, { as: 'item', foreignKey: 'itemID' })
  Items.hasMany(ItemAnnotations, { as: 'itemAnnotations', foreignKey: 'itemID' })
  ItemAttachments.belongsTo(Items, { as: 'parentItem', foreignKey: 'parentItemID' })
  Items.hasMany(ItemAttachments, { as: 'itemAttachments', foreignKey: 'parentItemID' })
  ItemAttachments.belongsTo(Items, { as: 'item', foreignKey: 'itemID' })
  Items.hasMany(ItemAttachments, { as: 'item_itemAttachments', foreignKey: 'itemID' })
  ItemCreators.belongsTo(Items, { as: 'item', foreignKey: 'itemID' })
  Items.hasMany(ItemCreators, { as: 'itemCreators', foreignKey: 'itemID' })
  ItemData.belongsTo(Items, { as: 'item', foreignKey: 'itemID' })
  Items.hasMany(ItemData, { as: 'itemData', foreignKey: 'itemID' })
  ItemNotes.belongsTo(Items, { as: 'parentItem', foreignKey: 'parentItemID' })
  Items.hasMany(ItemNotes, { as: 'itemNotes', foreignKey: 'parentItemID' })
  ItemNotes.belongsTo(Items, { as: 'item', foreignKey: 'itemID' })
  Items.hasMany(ItemNotes, { as: 'item_itemNotes', foreignKey: 'itemID' })
  ItemRelations.belongsTo(Items, { as: 'item', foreignKey: 'itemID' })
  Items.hasMany(ItemRelations, { as: 'itemRelations', foreignKey: 'itemID' })
  ItemTags.belongsTo(Items, { as: 'item', foreignKey: 'itemID' })
  Items.hasMany(ItemTags, { as: 'itemTags', foreignKey: 'itemID' })
  RetractedItems.belongsTo(Items, { as: 'item', foreignKey: 'itemID' })
  Items.hasMany(RetractedItems, { as: 'retractedItems', foreignKey: 'itemID' })
  Collections.belongsTo(Libraries, { as: 'library', foreignKey: 'libraryID' })
  Libraries.hasMany(Collections, { as: 'collections', foreignKey: 'libraryID' })
  Feeds.belongsTo(Libraries, { as: 'library', foreignKey: 'libraryID' })
  Libraries.hasMany(Feeds, { as: 'feeds', foreignKey: 'libraryID' })
  Groups.belongsTo(Libraries, { as: 'library', foreignKey: 'libraryID' })
  Libraries.hasMany(Groups, { as: 'groups', foreignKey: 'libraryID' })
  Items.belongsTo(Libraries, { as: 'library', foreignKey: 'libraryID' })
  Libraries.hasMany(Items, { as: 'items', foreignKey: 'libraryID' })
  SavedSearches.belongsTo(Libraries, { as: 'library', foreignKey: 'libraryID' })
  Libraries.hasMany(SavedSearches, { as: 'savedSearches', foreignKey: 'libraryID' })
  StorageDeleteLog.belongsTo(Libraries, { as: 'library', foreignKey: 'libraryID' })
  Libraries.hasMany(StorageDeleteLog, { as: 'storageDeleteLogs', foreignKey: 'libraryID' })
  SyncCache.belongsTo(Libraries, { as: 'library', foreignKey: 'libraryID' })
  Libraries.hasMany(SyncCache, { as: 'syncCaches', foreignKey: 'libraryID' })
  SyncDeleteLog.belongsTo(Libraries, { as: 'library', foreignKey: 'libraryID' })
  Libraries.hasMany(SyncDeleteLog, { as: 'syncDeleteLogs', foreignKey: 'libraryID' })
  SyncQueue.belongsTo(Libraries, { as: 'library', foreignKey: 'libraryID' })
  Libraries.hasMany(SyncQueue, { as: 'syncQueues', foreignKey: 'libraryID' })
  SyncedSettings.belongsTo(Libraries, { as: 'library', foreignKey: 'libraryID' })
  Libraries.hasMany(SyncedSettings, { as: 'syncedSettings', foreignKey: 'libraryID' })
  ProxyHosts.belongsTo(Proxies, { as: 'proxy', foreignKey: 'proxyID' })
  Proxies.hasMany(ProxyHosts, { as: 'proxyHosts', foreignKey: 'proxyID' })
  CollectionRelations.belongsTo(RelationPredicates, { as: 'predicate', foreignKey: 'predicateID' })
  RelationPredicates.hasMany(CollectionRelations, {
    as: 'collectionRelations',
    foreignKey: 'predicateID'
  })
  ItemRelations.belongsTo(RelationPredicates, { as: 'predicate', foreignKey: 'predicateID' })
  RelationPredicates.hasMany(ItemRelations, { as: 'itemRelations', foreignKey: 'predicateID' })
  // DeletedSearches.belongsTo(SavedSearches, { as: 'savedSearch', foreignKey: 'savedSearchID' })
  // SavedSearches.hasMany(DeletedSearches, { as: 'deletedSearches', foreignKey: 'savedSearchID' })
  SavedSearchConditions.belongsTo(SavedSearches, { as: 'savedSearch', foreignKey: 'savedSearchID' })
  SavedSearches.hasMany(SavedSearchConditions, {
    as: 'savedSearchConditions',
    foreignKey: 'savedSearchID'
  })
  SyncCache.belongsTo(SyncObjectTypes, { as: 'syncObjectType', foreignKey: 'syncObjectTypeID' })
  SyncObjectTypes.hasMany(SyncCache, { as: 'syncCaches', foreignKey: 'syncObjectTypeID' })
  SyncDeleteLog.belongsTo(SyncObjectTypes, { as: 'syncObjectType', foreignKey: 'syncObjectTypeID' })
  SyncObjectTypes.hasMany(SyncDeleteLog, { as: 'syncDeleteLogs', foreignKey: 'syncObjectTypeID' })
  SyncQueue.belongsTo(SyncObjectTypes, { as: 'syncObjectType', foreignKey: 'syncObjectTypeID' })
  SyncObjectTypes.hasMany(SyncQueue, { as: 'syncQueues', foreignKey: 'syncObjectTypeID' })
  ItemTags.belongsTo(Tags, { as: 'tag', foreignKey: 'tagID' })
  Tags.hasMany(ItemTags, { as: 'itemTags', foreignKey: 'tagID' })
  GroupItems.belongsTo(Users, { as: 'lastModifiedByUser', foreignKey: 'lastModifiedByUserID' })
  Users.hasMany(GroupItems, { as: 'groupItems', foreignKey: 'lastModifiedByUserID' })
  GroupItems.belongsTo(Users, { as: 'createdByUser', foreignKey: 'createdByUserID' })
  Users.hasMany(GroupItems, { as: 'createdByUser_groupItems', foreignKey: 'createdByUserID' })

  return {
    BaseFieldMappings: BaseFieldMappings,
    BaseFieldMappingsCombined: BaseFieldMappingsCombined,
    Charsets: Charsets,
    CollectionItems: CollectionItems,
    CollectionRelations: CollectionRelations,
    Collections: Collections,
    CreatorTypes: CreatorTypes,
    Creators: Creators,
    CustomBaseFieldMappings: CustomBaseFieldMappings,
    CustomFields: CustomFields,
    CustomItemTypeFields: CustomItemTypeFields,
    CustomItemTypes: CustomItemTypes,
    DbDebug1: DbDebug1,
    // DeletedCollections: DeletedCollections,
    // DeletedItems: DeletedItems,
    // DeletedSearches: DeletedSearches,
    FeedItems: FeedItems,
    Feeds: Feeds,
    FieldFormats: FieldFormats,
    Fields: Fields,
    FieldsCombined: FieldsCombined,
    FileTypeMimeTypes: FileTypeMimeTypes,
    FileTypes: FileTypes,
    FulltextItemWords: FulltextItemWords,
    FulltextItems: FulltextItems,
    FulltextWords: FulltextWords,
    GroupItems: GroupItems,
    Groups: Groups,
    ItemAnnotations: ItemAnnotations,
    ItemAttachments: ItemAttachments,
    ItemCreators: ItemCreators,
    ItemData: ItemData,
    ItemDataValues: ItemDataValues,
    ItemNotes: ItemNotes,
    ItemRelations: ItemRelations,
    ItemTags: ItemTags,
    ItemTypeCreatorTypes: ItemTypeCreatorTypes,
    ItemTypeFields: ItemTypeFields,
    ItemTypeFieldsCombined: ItemTypeFieldsCombined,
    ItemTypes: ItemTypes,
    ItemTypesCombined: ItemTypesCombined,
    Items: Items,
    Libraries: Libraries,
    Proxies: Proxies,
    ProxyHosts: ProxyHosts,
    PublicationsItems: PublicationsItems,
    RelationPredicates: RelationPredicates,
    RetractedItems: RetractedItems,
    SavedSearchConditions: SavedSearchConditions,
    SavedSearches: SavedSearches,
    Settings: Settings,
    StorageDeleteLog: StorageDeleteLog,
    SyncCache: SyncCache,
    SyncDeleteLog: SyncDeleteLog,
    SyncObjectTypes: SyncObjectTypes,
    SyncQueue: SyncQueue,
    SyncedSettings: SyncedSettings,
    Tags: Tags,
    TranslatorCache: TranslatorCache,
    Users: Users,
    Version: Version
  }
}
