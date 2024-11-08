// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.

package model

const TableNameGroup = "groups"

// Group mapped from table <groups>
type Group struct {
	GroupID     *int32 `gorm:"column:groupID;type:INTEGER;primaryKey" json:"groupID"`
	LibraryID   int32  `gorm:"column:libraryID;type:INT;not null" json:"libraryID"`
	Name        string `gorm:"column:name;type:TEXT;not null" json:"name"`
	Description string `gorm:"column:description;type:TEXT;not null" json:"description"`
	Version     int32  `gorm:"column:version;type:INT;not null" json:"version"`
}

// TableName Group's table name
func (*Group) TableName() string {
	return TableNameGroup
}
