// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.

package model

const TableNameItemTypeFieldsCombined = "itemTypeFieldsCombined"

// ItemTypeFieldsCombined mapped from table <itemTypeFieldsCombined>
type ItemTypeFieldsCombined struct {
	ItemTypeID int32  `gorm:"column:itemTypeID;type:INT;primaryKey" json:"itemTypeID"`
	FieldID    int32  `gorm:"column:fieldID;type:INT;not null;index:itemTypeFieldsCombined_fieldID,priority:1" json:"fieldID"`
	Hide       *int32 `gorm:"column:hide;type:INT" json:"hide"`
	OrderIndex int32  `gorm:"column:orderIndex;type:INT;not null" json:"orderIndex"`
}

// TableName ItemTypeFieldsCombined's table name
func (*ItemTypeFieldsCombined) TableName() string {
	return TableNameItemTypeFieldsCombined
}
