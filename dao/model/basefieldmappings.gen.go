// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.

package model

const TableNameBaseFieldMapping = "baseFieldMappings"

// BaseFieldMapping mapped from table <baseFieldMappings>
type BaseFieldMapping struct {
	ItemTypeID  *int32 `gorm:"column:itemTypeID;type:INT;primaryKey" json:"itemTypeID"`
	BaseFieldID *int32 `gorm:"column:baseFieldID;type:INT;index:baseFieldMappings_baseFieldID,priority:1" json:"baseFieldID"`
	FieldID     *int32 `gorm:"column:fieldID;type:INT;index:baseFieldMappings_fieldID,priority:1" json:"fieldID"`
}

// TableName BaseFieldMapping's table name
func (*BaseFieldMapping) TableName() string {
	return TableNameBaseFieldMapping
}
