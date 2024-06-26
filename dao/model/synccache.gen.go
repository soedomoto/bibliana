// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.

package model

const TableNameSyncCache = "syncCache"

// SyncCache mapped from table <syncCache>
type SyncCache struct {
	LibraryID        int32   `gorm:"column:libraryID;type:INT;primaryKey" json:"libraryID"`
	Key              string  `gorm:"column:key;type:TEXT;not null" json:"key"`
	SyncObjectTypeID int32   `gorm:"column:syncObjectTypeID;type:INT;not null" json:"syncObjectTypeID"`
	Version          int32   `gorm:"column:version;type:INT;not null" json:"version"`
	Data             *string `gorm:"column:data;type:TEXT" json:"data"`
}

// TableName SyncCache's table name
func (*SyncCache) TableName() string {
	return TableNameSyncCache
}
