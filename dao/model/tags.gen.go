// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.

package model

const TableNameTag = "tags"

// Tag mapped from table <tags>
type Tag struct {
	TagID *int32 `gorm:"column:tagID;type:INTEGER;primaryKey" json:"tagID"`
	Name  string `gorm:"column:name;type:TEXT;not null" json:"name"`
}

// TableName Tag's table name
func (*Tag) TableName() string {
	return TableNameTag
}