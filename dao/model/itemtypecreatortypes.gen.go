// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.

package model

const TableNameItemTypeCreatorType = "itemTypeCreatorTypes"

// ItemTypeCreatorType mapped from table <itemTypeCreatorTypes>
type ItemTypeCreatorType struct {
	ItemTypeID    *int32 `gorm:"column:itemTypeID;type:INT;primaryKey" json:"itemTypeID"`
	CreatorTypeID *int32 `gorm:"column:creatorTypeID;type:INT;index:itemTypeCreatorTypes_creatorTypeID,priority:1" json:"creatorTypeID"`
	PrimaryField  *int32 `gorm:"column:primaryField;type:INT" json:"primaryField"`
}

// TableName ItemTypeCreatorType's table name
func (*ItemTypeCreatorType) TableName() string {
	return TableNameItemTypeCreatorType
}
