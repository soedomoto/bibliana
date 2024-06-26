// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.

package query

import (
	"context"
	"database/sql"

	"gorm.io/gorm"

	"gorm.io/gen"

	"gorm.io/plugin/dbresolver"
)

func Use(db *gorm.DB, opts ...gen.DOOption) *Query {
	return &Query{
		db:                        db,
		Attribute:                 newAttribute(db, opts...),
		BaseFieldMapping:          newBaseFieldMapping(db, opts...),
		BaseFieldMappingsCombined: newBaseFieldMappingsCombined(db, opts...),
		Charset:                   newCharset(db, opts...),
		Collection:                newCollection(db, opts...),
		CollectionItem:            newCollectionItem(db, opts...),
		CollectionRelation:        newCollectionRelation(db, opts...),
		Creator:                   newCreator(db, opts...),
		CreatorType:               newCreatorType(db, opts...),
		CustomBaseFieldMapping:    newCustomBaseFieldMapping(db, opts...),
		CustomField:               newCustomField(db, opts...),
		CustomItemType:            newCustomItemType(db, opts...),
		CustomItemTypeField:       newCustomItemTypeField(db, opts...),
		DbDebug1:                  newDbDebug1(db, opts...),
		DeletedCollection:         newDeletedCollection(db, opts...),
		DeletedItem:               newDeletedItem(db, opts...),
		DeletedSearch:             newDeletedSearch(db, opts...),
		Feed:                      newFeed(db, opts...),
		FeedItem:                  newFeedItem(db, opts...),
		FieldFormat:               newFieldFormat(db, opts...),
		FieldsCombined:            newFieldsCombined(db, opts...),
		FileType:                  newFileType(db, opts...),
		FileTypeMimeType:          newFileTypeMimeType(db, opts...),
		FulltextItem:              newFulltextItem(db, opts...),
		FulltextItemWord:          newFulltextItemWord(db, opts...),
		FulltextWord:              newFulltextWord(db, opts...),
		Group:                     newGroup(db, opts...),
		GroupItem:                 newGroupItem(db, opts...),
		Item:                      newItem(db, opts...),
		ItemAnnotation:            newItemAnnotation(db, opts...),
		ItemAttachment:            newItemAttachment(db, opts...),
		ItemCreator:               newItemCreator(db, opts...),
		ItemDataValue:             newItemDataValue(db, opts...),
		ItemDatum:                 newItemDatum(db, opts...),
		ItemNote:                  newItemNote(db, opts...),
		ItemRelation:              newItemRelation(db, opts...),
		ItemTag:                   newItemTag(db, opts...),
		ItemType:                  newItemType(db, opts...),
		ItemTypeCreatorType:       newItemTypeCreatorType(db, opts...),
		ItemTypeField:             newItemTypeField(db, opts...),
		ItemTypeFieldsCombined:    newItemTypeFieldsCombined(db, opts...),
		ItemTypesCombined:         newItemTypesCombined(db, opts...),
		Library:                   newLibrary(db, opts...),
		Proxy:                     newProxy(db, opts...),
		ProxyHost:                 newProxyHost(db, opts...),
		PublicationsItem:          newPublicationsItem(db, opts...),
		RelationPredicate:         newRelationPredicate(db, opts...),
		RetractedItem:             newRetractedItem(db, opts...),
		SavedSearch:               newSavedSearch(db, opts...),
		SavedSearchCondition:      newSavedSearchCondition(db, opts...),
		Setting:                   newSetting(db, opts...),
		StorageDeleteLog:          newStorageDeleteLog(db, opts...),
		SyncCache:                 newSyncCache(db, opts...),
		SyncDeleteLog:             newSyncDeleteLog(db, opts...),
		SyncObjectType:            newSyncObjectType(db, opts...),
		SyncQueue:                 newSyncQueue(db, opts...),
		SyncedSetting:             newSyncedSetting(db, opts...),
		Tag:                       newTag(db, opts...),
		TranslatorCache:           newTranslatorCache(db, opts...),
		User:                      newUser(db, opts...),
		Version:                   newVersion(db, opts...),
	}
}

type Query struct {
	db *gorm.DB

	Attribute                 attribute
	BaseFieldMapping          baseFieldMapping
	BaseFieldMappingsCombined baseFieldMappingsCombined
	Charset                   charset
	Collection                collection
	CollectionItem            collectionItem
	CollectionRelation        collectionRelation
	Creator                   creator
	CreatorType               creatorType
	CustomBaseFieldMapping    customBaseFieldMapping
	CustomField               customField
	CustomItemType            customItemType
	CustomItemTypeField       customItemTypeField
	DbDebug1                  dbDebug1
	DeletedCollection         deletedCollection
	DeletedItem               deletedItem
	DeletedSearch             deletedSearch
	Feed                      feed
	FeedItem                  feedItem
	FieldFormat               fieldFormat
	FieldsCombined            fieldsCombined
	FileType                  fileType
	FileTypeMimeType          fileTypeMimeType
	FulltextItem              fulltextItem
	FulltextItemWord          fulltextItemWord
	FulltextWord              fulltextWord
	Group                     group
	GroupItem                 groupItem
	Item                      item
	ItemAnnotation            itemAnnotation
	ItemAttachment            itemAttachment
	ItemCreator               itemCreator
	ItemDataValue             itemDataValue
	ItemDatum                 itemDatum
	ItemNote                  itemNote
	ItemRelation              itemRelation
	ItemTag                   itemTag
	ItemType                  itemType
	ItemTypeCreatorType       itemTypeCreatorType
	ItemTypeField             itemTypeField
	ItemTypeFieldsCombined    itemTypeFieldsCombined
	ItemTypesCombined         itemTypesCombined
	Library                   library
	Proxy                     proxy
	ProxyHost                 proxyHost
	PublicationsItem          publicationsItem
	RelationPredicate         relationPredicate
	RetractedItem             retractedItem
	SavedSearch               savedSearch
	SavedSearchCondition      savedSearchCondition
	Setting                   setting
	StorageDeleteLog          storageDeleteLog
	SyncCache                 syncCache
	SyncDeleteLog             syncDeleteLog
	SyncObjectType            syncObjectType
	SyncQueue                 syncQueue
	SyncedSetting             syncedSetting
	Tag                       tag
	TranslatorCache           translatorCache
	User                      user
	Version                   version
}

func (q *Query) Available() bool { return q.db != nil }

func (q *Query) clone(db *gorm.DB) *Query {
	return &Query{
		db:                        db,
		Attribute:                 q.Attribute.clone(db),
		BaseFieldMapping:          q.BaseFieldMapping.clone(db),
		BaseFieldMappingsCombined: q.BaseFieldMappingsCombined.clone(db),
		Charset:                   q.Charset.clone(db),
		Collection:                q.Collection.clone(db),
		CollectionItem:            q.CollectionItem.clone(db),
		CollectionRelation:        q.CollectionRelation.clone(db),
		Creator:                   q.Creator.clone(db),
		CreatorType:               q.CreatorType.clone(db),
		CustomBaseFieldMapping:    q.CustomBaseFieldMapping.clone(db),
		CustomField:               q.CustomField.clone(db),
		CustomItemType:            q.CustomItemType.clone(db),
		CustomItemTypeField:       q.CustomItemTypeField.clone(db),
		DbDebug1:                  q.DbDebug1.clone(db),
		DeletedCollection:         q.DeletedCollection.clone(db),
		DeletedItem:               q.DeletedItem.clone(db),
		DeletedSearch:             q.DeletedSearch.clone(db),
		Feed:                      q.Feed.clone(db),
		FeedItem:                  q.FeedItem.clone(db),
		FieldFormat:               q.FieldFormat.clone(db),
		FieldsCombined:            q.FieldsCombined.clone(db),
		FileType:                  q.FileType.clone(db),
		FileTypeMimeType:          q.FileTypeMimeType.clone(db),
		FulltextItem:              q.FulltextItem.clone(db),
		FulltextItemWord:          q.FulltextItemWord.clone(db),
		FulltextWord:              q.FulltextWord.clone(db),
		Group:                     q.Group.clone(db),
		GroupItem:                 q.GroupItem.clone(db),
		Item:                      q.Item.clone(db),
		ItemAnnotation:            q.ItemAnnotation.clone(db),
		ItemAttachment:            q.ItemAttachment.clone(db),
		ItemCreator:               q.ItemCreator.clone(db),
		ItemDataValue:             q.ItemDataValue.clone(db),
		ItemDatum:                 q.ItemDatum.clone(db),
		ItemNote:                  q.ItemNote.clone(db),
		ItemRelation:              q.ItemRelation.clone(db),
		ItemTag:                   q.ItemTag.clone(db),
		ItemType:                  q.ItemType.clone(db),
		ItemTypeCreatorType:       q.ItemTypeCreatorType.clone(db),
		ItemTypeField:             q.ItemTypeField.clone(db),
		ItemTypeFieldsCombined:    q.ItemTypeFieldsCombined.clone(db),
		ItemTypesCombined:         q.ItemTypesCombined.clone(db),
		Library:                   q.Library.clone(db),
		Proxy:                     q.Proxy.clone(db),
		ProxyHost:                 q.ProxyHost.clone(db),
		PublicationsItem:          q.PublicationsItem.clone(db),
		RelationPredicate:         q.RelationPredicate.clone(db),
		RetractedItem:             q.RetractedItem.clone(db),
		SavedSearch:               q.SavedSearch.clone(db),
		SavedSearchCondition:      q.SavedSearchCondition.clone(db),
		Setting:                   q.Setting.clone(db),
		StorageDeleteLog:          q.StorageDeleteLog.clone(db),
		SyncCache:                 q.SyncCache.clone(db),
		SyncDeleteLog:             q.SyncDeleteLog.clone(db),
		SyncObjectType:            q.SyncObjectType.clone(db),
		SyncQueue:                 q.SyncQueue.clone(db),
		SyncedSetting:             q.SyncedSetting.clone(db),
		Tag:                       q.Tag.clone(db),
		TranslatorCache:           q.TranslatorCache.clone(db),
		User:                      q.User.clone(db),
		Version:                   q.Version.clone(db),
	}
}

func (q *Query) ReadDB() *Query {
	return q.ReplaceDB(q.db.Clauses(dbresolver.Read))
}

func (q *Query) WriteDB() *Query {
	return q.ReplaceDB(q.db.Clauses(dbresolver.Write))
}

func (q *Query) ReplaceDB(db *gorm.DB) *Query {
	return &Query{
		db:                        db,
		Attribute:                 q.Attribute.replaceDB(db),
		BaseFieldMapping:          q.BaseFieldMapping.replaceDB(db),
		BaseFieldMappingsCombined: q.BaseFieldMappingsCombined.replaceDB(db),
		Charset:                   q.Charset.replaceDB(db),
		Collection:                q.Collection.replaceDB(db),
		CollectionItem:            q.CollectionItem.replaceDB(db),
		CollectionRelation:        q.CollectionRelation.replaceDB(db),
		Creator:                   q.Creator.replaceDB(db),
		CreatorType:               q.CreatorType.replaceDB(db),
		CustomBaseFieldMapping:    q.CustomBaseFieldMapping.replaceDB(db),
		CustomField:               q.CustomField.replaceDB(db),
		CustomItemType:            q.CustomItemType.replaceDB(db),
		CustomItemTypeField:       q.CustomItemTypeField.replaceDB(db),
		DbDebug1:                  q.DbDebug1.replaceDB(db),
		DeletedCollection:         q.DeletedCollection.replaceDB(db),
		DeletedItem:               q.DeletedItem.replaceDB(db),
		DeletedSearch:             q.DeletedSearch.replaceDB(db),
		Feed:                      q.Feed.replaceDB(db),
		FeedItem:                  q.FeedItem.replaceDB(db),
		FieldFormat:               q.FieldFormat.replaceDB(db),
		FieldsCombined:            q.FieldsCombined.replaceDB(db),
		FileType:                  q.FileType.replaceDB(db),
		FileTypeMimeType:          q.FileTypeMimeType.replaceDB(db),
		FulltextItem:              q.FulltextItem.replaceDB(db),
		FulltextItemWord:          q.FulltextItemWord.replaceDB(db),
		FulltextWord:              q.FulltextWord.replaceDB(db),
		Group:                     q.Group.replaceDB(db),
		GroupItem:                 q.GroupItem.replaceDB(db),
		Item:                      q.Item.replaceDB(db),
		ItemAnnotation:            q.ItemAnnotation.replaceDB(db),
		ItemAttachment:            q.ItemAttachment.replaceDB(db),
		ItemCreator:               q.ItemCreator.replaceDB(db),
		ItemDataValue:             q.ItemDataValue.replaceDB(db),
		ItemDatum:                 q.ItemDatum.replaceDB(db),
		ItemNote:                  q.ItemNote.replaceDB(db),
		ItemRelation:              q.ItemRelation.replaceDB(db),
		ItemTag:                   q.ItemTag.replaceDB(db),
		ItemType:                  q.ItemType.replaceDB(db),
		ItemTypeCreatorType:       q.ItemTypeCreatorType.replaceDB(db),
		ItemTypeField:             q.ItemTypeField.replaceDB(db),
		ItemTypeFieldsCombined:    q.ItemTypeFieldsCombined.replaceDB(db),
		ItemTypesCombined:         q.ItemTypesCombined.replaceDB(db),
		Library:                   q.Library.replaceDB(db),
		Proxy:                     q.Proxy.replaceDB(db),
		ProxyHost:                 q.ProxyHost.replaceDB(db),
		PublicationsItem:          q.PublicationsItem.replaceDB(db),
		RelationPredicate:         q.RelationPredicate.replaceDB(db),
		RetractedItem:             q.RetractedItem.replaceDB(db),
		SavedSearch:               q.SavedSearch.replaceDB(db),
		SavedSearchCondition:      q.SavedSearchCondition.replaceDB(db),
		Setting:                   q.Setting.replaceDB(db),
		StorageDeleteLog:          q.StorageDeleteLog.replaceDB(db),
		SyncCache:                 q.SyncCache.replaceDB(db),
		SyncDeleteLog:             q.SyncDeleteLog.replaceDB(db),
		SyncObjectType:            q.SyncObjectType.replaceDB(db),
		SyncQueue:                 q.SyncQueue.replaceDB(db),
		SyncedSetting:             q.SyncedSetting.replaceDB(db),
		Tag:                       q.Tag.replaceDB(db),
		TranslatorCache:           q.TranslatorCache.replaceDB(db),
		User:                      q.User.replaceDB(db),
		Version:                   q.Version.replaceDB(db),
	}
}

type queryCtx struct {
	Attribute                 *attributeDo
	BaseFieldMapping          *baseFieldMappingDo
	BaseFieldMappingsCombined *baseFieldMappingsCombinedDo
	Charset                   *charsetDo
	Collection                *collectionDo
	CollectionItem            *collectionItemDo
	CollectionRelation        *collectionRelationDo
	Creator                   *creatorDo
	CreatorType               *creatorTypeDo
	CustomBaseFieldMapping    *customBaseFieldMappingDo
	CustomField               *customFieldDo
	CustomItemType            *customItemTypeDo
	CustomItemTypeField       *customItemTypeFieldDo
	DbDebug1                  *dbDebug1Do
	DeletedCollection         *deletedCollectionDo
	DeletedItem               *deletedItemDo
	DeletedSearch             *deletedSearchDo
	Feed                      *feedDo
	FeedItem                  *feedItemDo
	FieldFormat               *fieldFormatDo
	FieldsCombined            *fieldsCombinedDo
	FileType                  *fileTypeDo
	FileTypeMimeType          *fileTypeMimeTypeDo
	FulltextItem              *fulltextItemDo
	FulltextItemWord          *fulltextItemWordDo
	FulltextWord              *fulltextWordDo
	Group                     *groupDo
	GroupItem                 *groupItemDo
	Item                      *itemDo
	ItemAnnotation            *itemAnnotationDo
	ItemAttachment            *itemAttachmentDo
	ItemCreator               *itemCreatorDo
	ItemDataValue             *itemDataValueDo
	ItemDatum                 *itemDatumDo
	ItemNote                  *itemNoteDo
	ItemRelation              *itemRelationDo
	ItemTag                   *itemTagDo
	ItemType                  *itemTypeDo
	ItemTypeCreatorType       *itemTypeCreatorTypeDo
	ItemTypeField             *itemTypeFieldDo
	ItemTypeFieldsCombined    *itemTypeFieldsCombinedDo
	ItemTypesCombined         *itemTypesCombinedDo
	Library                   *libraryDo
	Proxy                     *proxyDo
	ProxyHost                 *proxyHostDo
	PublicationsItem          *publicationsItemDo
	RelationPredicate         *relationPredicateDo
	RetractedItem             *retractedItemDo
	SavedSearch               *savedSearchDo
	SavedSearchCondition      *savedSearchConditionDo
	Setting                   *settingDo
	StorageDeleteLog          *storageDeleteLogDo
	SyncCache                 *syncCacheDo
	SyncDeleteLog             *syncDeleteLogDo
	SyncObjectType            *syncObjectTypeDo
	SyncQueue                 *syncQueueDo
	SyncedSetting             *syncedSettingDo
	Tag                       *tagDo
	TranslatorCache           *translatorCacheDo
	User                      *userDo
	Version                   *versionDo
}

func (q *Query) WithContext(ctx context.Context) *queryCtx {
	return &queryCtx{
		Attribute:                 q.Attribute.WithContext(ctx),
		BaseFieldMapping:          q.BaseFieldMapping.WithContext(ctx),
		BaseFieldMappingsCombined: q.BaseFieldMappingsCombined.WithContext(ctx),
		Charset:                   q.Charset.WithContext(ctx),
		Collection:                q.Collection.WithContext(ctx),
		CollectionItem:            q.CollectionItem.WithContext(ctx),
		CollectionRelation:        q.CollectionRelation.WithContext(ctx),
		Creator:                   q.Creator.WithContext(ctx),
		CreatorType:               q.CreatorType.WithContext(ctx),
		CustomBaseFieldMapping:    q.CustomBaseFieldMapping.WithContext(ctx),
		CustomField:               q.CustomField.WithContext(ctx),
		CustomItemType:            q.CustomItemType.WithContext(ctx),
		CustomItemTypeField:       q.CustomItemTypeField.WithContext(ctx),
		DbDebug1:                  q.DbDebug1.WithContext(ctx),
		DeletedCollection:         q.DeletedCollection.WithContext(ctx),
		DeletedItem:               q.DeletedItem.WithContext(ctx),
		DeletedSearch:             q.DeletedSearch.WithContext(ctx),
		Feed:                      q.Feed.WithContext(ctx),
		FeedItem:                  q.FeedItem.WithContext(ctx),
		FieldFormat:               q.FieldFormat.WithContext(ctx),
		FieldsCombined:            q.FieldsCombined.WithContext(ctx),
		FileType:                  q.FileType.WithContext(ctx),
		FileTypeMimeType:          q.FileTypeMimeType.WithContext(ctx),
		FulltextItem:              q.FulltextItem.WithContext(ctx),
		FulltextItemWord:          q.FulltextItemWord.WithContext(ctx),
		FulltextWord:              q.FulltextWord.WithContext(ctx),
		Group:                     q.Group.WithContext(ctx),
		GroupItem:                 q.GroupItem.WithContext(ctx),
		Item:                      q.Item.WithContext(ctx),
		ItemAnnotation:            q.ItemAnnotation.WithContext(ctx),
		ItemAttachment:            q.ItemAttachment.WithContext(ctx),
		ItemCreator:               q.ItemCreator.WithContext(ctx),
		ItemDataValue:             q.ItemDataValue.WithContext(ctx),
		ItemDatum:                 q.ItemDatum.WithContext(ctx),
		ItemNote:                  q.ItemNote.WithContext(ctx),
		ItemRelation:              q.ItemRelation.WithContext(ctx),
		ItemTag:                   q.ItemTag.WithContext(ctx),
		ItemType:                  q.ItemType.WithContext(ctx),
		ItemTypeCreatorType:       q.ItemTypeCreatorType.WithContext(ctx),
		ItemTypeField:             q.ItemTypeField.WithContext(ctx),
		ItemTypeFieldsCombined:    q.ItemTypeFieldsCombined.WithContext(ctx),
		ItemTypesCombined:         q.ItemTypesCombined.WithContext(ctx),
		Library:                   q.Library.WithContext(ctx),
		Proxy:                     q.Proxy.WithContext(ctx),
		ProxyHost:                 q.ProxyHost.WithContext(ctx),
		PublicationsItem:          q.PublicationsItem.WithContext(ctx),
		RelationPredicate:         q.RelationPredicate.WithContext(ctx),
		RetractedItem:             q.RetractedItem.WithContext(ctx),
		SavedSearch:               q.SavedSearch.WithContext(ctx),
		SavedSearchCondition:      q.SavedSearchCondition.WithContext(ctx),
		Setting:                   q.Setting.WithContext(ctx),
		StorageDeleteLog:          q.StorageDeleteLog.WithContext(ctx),
		SyncCache:                 q.SyncCache.WithContext(ctx),
		SyncDeleteLog:             q.SyncDeleteLog.WithContext(ctx),
		SyncObjectType:            q.SyncObjectType.WithContext(ctx),
		SyncQueue:                 q.SyncQueue.WithContext(ctx),
		SyncedSetting:             q.SyncedSetting.WithContext(ctx),
		Tag:                       q.Tag.WithContext(ctx),
		TranslatorCache:           q.TranslatorCache.WithContext(ctx),
		User:                      q.User.WithContext(ctx),
		Version:                   q.Version.WithContext(ctx),
	}
}

func (q *Query) Transaction(fc func(tx *Query) error, opts ...*sql.TxOptions) error {
	return q.db.Transaction(func(tx *gorm.DB) error { return fc(q.clone(tx)) }, opts...)
}

func (q *Query) Begin(opts ...*sql.TxOptions) *QueryTx {
	tx := q.db.Begin(opts...)
	return &QueryTx{Query: q.clone(tx), Error: tx.Error}
}

type QueryTx struct {
	*Query
	Error error
}

func (q *QueryTx) Commit() error {
	return q.db.Commit().Error
}

func (q *QueryTx) Rollback() error {
	return q.db.Rollback().Error
}

func (q *QueryTx) SavePoint(name string) error {
	return q.db.SavePoint(name).Error
}

func (q *QueryTx) RollbackTo(name string) error {
	return q.db.RollbackTo(name).Error
}
