// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.

package model

const TableNameSyncDeleteLog = "syncDeleteLog"

// SyncDeleteLog mapped from table <syncDeleteLog>
type SyncDeleteLog struct {
	SyncObjectTypeID int32  `gorm:"column:syncObjectTypeID;type:INT;not null" json:"syncObjectTypeID"`
	LibraryID        int32  `gorm:"column:libraryID;type:INT;not null" json:"libraryID"`
	Key              string `gorm:"column:key;type:TEXT;not null" json:"key"`
	DateDeleted      string `gorm:"column:dateDeleted;type:TEXT;not null;default:CURRENT_TIMESTAMP" json:"dateDeleted"`
}

// TableName SyncDeleteLog's table name
func (*SyncDeleteLog) TableName() string {
	return TableNameSyncDeleteLog
}
