// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.

package model

const TableNameDeletedCollection = "deletedCollections"

// DeletedCollection mapped from table <deletedCollections>
type DeletedCollection struct {
	CollectionID *int32 `gorm:"column:collectionID;type:INTEGER;primaryKey" json:"collectionID"`
	DateDeleted  string `gorm:"column:dateDeleted;type:DEFAULT;not null;index:deletedCollections_dateDeleted,priority:1" json:"dateDeleted"`
}

// TableName DeletedCollection's table name
func (*DeletedCollection) TableName() string {
	return TableNameDeletedCollection
}