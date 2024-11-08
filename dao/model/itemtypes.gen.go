// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.

package model

const TableNameItemType = "itemTypes"

// ItemType mapped from table <itemTypes>
type ItemType struct {
	ItemTypeID         *int32  `gorm:"column:itemTypeID;type:INTEGER;primaryKey" json:"itemTypeID"`
	TypeName           *string `gorm:"column:typeName;type:TEXT" json:"typeName"`
	TemplateItemTypeID *int32  `gorm:"column:templateItemTypeID;type:INT" json:"templateItemTypeID"`
	Display            *int32  `gorm:"column:display;type:INT;default:1" json:"display"`
}

// TableName ItemType's table name
func (*ItemType) TableName() string {
	return TableNameItemType
}
