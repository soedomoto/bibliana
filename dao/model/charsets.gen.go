// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.

package model

const TableNameCharset = "charsets"

// Charset mapped from table <charsets>
type Charset struct {
	CharsetID *int32  `gorm:"column:charsetID;type:INTEGER;primaryKey" json:"charsetID"`
	Charset   *string `gorm:"column:charset;type:TEXT;index:charsets_charset,priority:1" json:"charset"`
}

// TableName Charset's table name
func (*Charset) TableName() string {
	return TableNameCharset
}