// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.

package model

const TableNameCollectionRelation = "collectionRelations"

// CollectionRelation mapped from table <collectionRelations>
type CollectionRelation struct {
	CollectionID int32  `gorm:"column:collectionID;type:INT;primaryKey" json:"collectionID"`
	PredicateID  int32  `gorm:"column:predicateID;type:INT;not null;index:collectionRelations_predicateID,priority:1" json:"predicateID"`
	Object       string `gorm:"column:object;type:TEXT;not null;index:collectionRelations_object,priority:1" json:"object"`
}

// TableName CollectionRelation's table name
func (*CollectionRelation) TableName() string {
	return TableNameCollectionRelation
}
