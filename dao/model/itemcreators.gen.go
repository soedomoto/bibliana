// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.

package model

const TableNameItemCreator = "itemCreators"

// ItemCreator mapped from table <itemCreators>
type ItemCreator struct {
	ItemID        int32 `gorm:"column:itemID;type:INT;primaryKey" json:"itemID"`
	CreatorID     int32 `gorm:"column:creatorID;type:INT;not null" json:"creatorID"`
	CreatorTypeID int32 `gorm:"column:creatorTypeID;type:INT;not null;index:itemCreators_creatorTypeID,priority:1;default:1" json:"creatorTypeID"`
	OrderIndex    int32 `gorm:"column:orderIndex;type:INT;not null" json:"orderIndex"`
}

// TableName ItemCreator's table name
func (*ItemCreator) TableName() string {
	return TableNameItemCreator
}
