// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.

package model

const TableNameFileType = "fileTypes"

// FileType mapped from table <fileTypes>
type FileType struct {
	FileTypeID *int32  `gorm:"column:fileTypeID;type:INTEGER;primaryKey" json:"fileTypeID"`
	FileType   *string `gorm:"column:fileType;type:TEXT;index:fileTypes_fileType,priority:1" json:"fileType"`
}

// TableName FileType's table name
func (*FileType) TableName() string {
	return TableNameFileType
}
