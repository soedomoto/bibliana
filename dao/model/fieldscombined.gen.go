// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.

package model

const TableNameFieldsCombined = "fieldsCombined"

// FieldsCombined mapped from table <fieldsCombined>
type FieldsCombined struct {
	FieldID       int32   `gorm:"column:fieldID;type:INT;primaryKey" json:"fieldID"`
	FieldName     string  `gorm:"column:fieldName;type:TEXT;not null" json:"fieldName"`
	Label         *string `gorm:"column:label;type:TEXT" json:"label"`
	FieldFormatID *int32  `gorm:"column:fieldFormatID;type:INT" json:"fieldFormatID"`
	Custom        int32   `gorm:"column:custom;type:INT;not null" json:"custom"`
}

// TableName FieldsCombined's table name
func (*FieldsCombined) TableName() string {
	return TableNameFieldsCombined
}
