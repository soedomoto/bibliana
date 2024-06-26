// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.

package query

import (
	"context"

	"gorm.io/gorm"
	"gorm.io/gorm/clause"
	"gorm.io/gorm/schema"

	"gorm.io/gen"
	"gorm.io/gen/field"

	"gorm.io/plugin/dbresolver"

	"bibliana/dao/model"
)

func newFileType(db *gorm.DB, opts ...gen.DOOption) fileType {
	_fileType := fileType{}

	_fileType.fileTypeDo.UseDB(db, opts...)
	_fileType.fileTypeDo.UseModel(&model.FileType{})

	tableName := _fileType.fileTypeDo.TableName()
	_fileType.ALL = field.NewAsterisk(tableName)
	_fileType.FileTypeID = field.NewInt32(tableName, "fileTypeID")
	_fileType.FileType = field.NewString(tableName, "fileType")

	_fileType.fillFieldMap()

	return _fileType
}

type fileType struct {
	fileTypeDo fileTypeDo

	ALL        field.Asterisk
	FileTypeID field.Int32
	FileType   field.String

	fieldMap map[string]field.Expr
}

func (f fileType) Table(newTableName string) *fileType {
	f.fileTypeDo.UseTable(newTableName)
	return f.updateTableName(newTableName)
}

func (f fileType) As(alias string) *fileType {
	f.fileTypeDo.DO = *(f.fileTypeDo.As(alias).(*gen.DO))
	return f.updateTableName(alias)
}

func (f *fileType) updateTableName(table string) *fileType {
	f.ALL = field.NewAsterisk(table)
	f.FileTypeID = field.NewInt32(table, "fileTypeID")
	f.FileType = field.NewString(table, "fileType")

	f.fillFieldMap()

	return f
}

func (f *fileType) WithContext(ctx context.Context) *fileTypeDo { return f.fileTypeDo.WithContext(ctx) }

func (f fileType) TableName() string { return f.fileTypeDo.TableName() }

func (f fileType) Alias() string { return f.fileTypeDo.Alias() }

func (f fileType) Columns(cols ...field.Expr) gen.Columns { return f.fileTypeDo.Columns(cols...) }

func (f *fileType) GetFieldByName(fieldName string) (field.OrderExpr, bool) {
	_f, ok := f.fieldMap[fieldName]
	if !ok || _f == nil {
		return nil, false
	}
	_oe, ok := _f.(field.OrderExpr)
	return _oe, ok
}

func (f *fileType) fillFieldMap() {
	f.fieldMap = make(map[string]field.Expr, 2)
	f.fieldMap["fileTypeID"] = f.FileTypeID
	f.fieldMap["fileType"] = f.FileType
}

func (f fileType) clone(db *gorm.DB) fileType {
	f.fileTypeDo.ReplaceConnPool(db.Statement.ConnPool)
	return f
}

func (f fileType) replaceDB(db *gorm.DB) fileType {
	f.fileTypeDo.ReplaceDB(db)
	return f
}

type fileTypeDo struct{ gen.DO }

func (f fileTypeDo) Debug() *fileTypeDo {
	return f.withDO(f.DO.Debug())
}

func (f fileTypeDo) WithContext(ctx context.Context) *fileTypeDo {
	return f.withDO(f.DO.WithContext(ctx))
}

func (f fileTypeDo) ReadDB() *fileTypeDo {
	return f.Clauses(dbresolver.Read)
}

func (f fileTypeDo) WriteDB() *fileTypeDo {
	return f.Clauses(dbresolver.Write)
}

func (f fileTypeDo) Session(config *gorm.Session) *fileTypeDo {
	return f.withDO(f.DO.Session(config))
}

func (f fileTypeDo) Clauses(conds ...clause.Expression) *fileTypeDo {
	return f.withDO(f.DO.Clauses(conds...))
}

func (f fileTypeDo) Returning(value interface{}, columns ...string) *fileTypeDo {
	return f.withDO(f.DO.Returning(value, columns...))
}

func (f fileTypeDo) Not(conds ...gen.Condition) *fileTypeDo {
	return f.withDO(f.DO.Not(conds...))
}

func (f fileTypeDo) Or(conds ...gen.Condition) *fileTypeDo {
	return f.withDO(f.DO.Or(conds...))
}

func (f fileTypeDo) Select(conds ...field.Expr) *fileTypeDo {
	return f.withDO(f.DO.Select(conds...))
}

func (f fileTypeDo) Where(conds ...gen.Condition) *fileTypeDo {
	return f.withDO(f.DO.Where(conds...))
}

func (f fileTypeDo) Order(conds ...field.Expr) *fileTypeDo {
	return f.withDO(f.DO.Order(conds...))
}

func (f fileTypeDo) Distinct(cols ...field.Expr) *fileTypeDo {
	return f.withDO(f.DO.Distinct(cols...))
}

func (f fileTypeDo) Omit(cols ...field.Expr) *fileTypeDo {
	return f.withDO(f.DO.Omit(cols...))
}

func (f fileTypeDo) Join(table schema.Tabler, on ...field.Expr) *fileTypeDo {
	return f.withDO(f.DO.Join(table, on...))
}

func (f fileTypeDo) LeftJoin(table schema.Tabler, on ...field.Expr) *fileTypeDo {
	return f.withDO(f.DO.LeftJoin(table, on...))
}

func (f fileTypeDo) RightJoin(table schema.Tabler, on ...field.Expr) *fileTypeDo {
	return f.withDO(f.DO.RightJoin(table, on...))
}

func (f fileTypeDo) Group(cols ...field.Expr) *fileTypeDo {
	return f.withDO(f.DO.Group(cols...))
}

func (f fileTypeDo) Having(conds ...gen.Condition) *fileTypeDo {
	return f.withDO(f.DO.Having(conds...))
}

func (f fileTypeDo) Limit(limit int) *fileTypeDo {
	return f.withDO(f.DO.Limit(limit))
}

func (f fileTypeDo) Offset(offset int) *fileTypeDo {
	return f.withDO(f.DO.Offset(offset))
}

func (f fileTypeDo) Scopes(funcs ...func(gen.Dao) gen.Dao) *fileTypeDo {
	return f.withDO(f.DO.Scopes(funcs...))
}

func (f fileTypeDo) Unscoped() *fileTypeDo {
	return f.withDO(f.DO.Unscoped())
}

func (f fileTypeDo) Create(values ...*model.FileType) error {
	if len(values) == 0 {
		return nil
	}
	return f.DO.Create(values)
}

func (f fileTypeDo) CreateInBatches(values []*model.FileType, batchSize int) error {
	return f.DO.CreateInBatches(values, batchSize)
}

// Save : !!! underlying implementation is different with GORM
// The method is equivalent to executing the statement: db.Clauses(clause.OnConflict{UpdateAll: true}).Create(values)
func (f fileTypeDo) Save(values ...*model.FileType) error {
	if len(values) == 0 {
		return nil
	}
	return f.DO.Save(values)
}

func (f fileTypeDo) First() (*model.FileType, error) {
	if result, err := f.DO.First(); err != nil {
		return nil, err
	} else {
		return result.(*model.FileType), nil
	}
}

func (f fileTypeDo) Take() (*model.FileType, error) {
	if result, err := f.DO.Take(); err != nil {
		return nil, err
	} else {
		return result.(*model.FileType), nil
	}
}

func (f fileTypeDo) Last() (*model.FileType, error) {
	if result, err := f.DO.Last(); err != nil {
		return nil, err
	} else {
		return result.(*model.FileType), nil
	}
}

func (f fileTypeDo) Find() ([]*model.FileType, error) {
	result, err := f.DO.Find()
	return result.([]*model.FileType), err
}

func (f fileTypeDo) FindInBatch(batchSize int, fc func(tx gen.Dao, batch int) error) (results []*model.FileType, err error) {
	buf := make([]*model.FileType, 0, batchSize)
	err = f.DO.FindInBatches(&buf, batchSize, func(tx gen.Dao, batch int) error {
		defer func() { results = append(results, buf...) }()
		return fc(tx, batch)
	})
	return results, err
}

func (f fileTypeDo) FindInBatches(result *[]*model.FileType, batchSize int, fc func(tx gen.Dao, batch int) error) error {
	return f.DO.FindInBatches(result, batchSize, fc)
}

func (f fileTypeDo) Attrs(attrs ...field.AssignExpr) *fileTypeDo {
	return f.withDO(f.DO.Attrs(attrs...))
}

func (f fileTypeDo) Assign(attrs ...field.AssignExpr) *fileTypeDo {
	return f.withDO(f.DO.Assign(attrs...))
}

func (f fileTypeDo) Joins(fields ...field.RelationField) *fileTypeDo {
	for _, _f := range fields {
		f = *f.withDO(f.DO.Joins(_f))
	}
	return &f
}

func (f fileTypeDo) Preload(fields ...field.RelationField) *fileTypeDo {
	for _, _f := range fields {
		f = *f.withDO(f.DO.Preload(_f))
	}
	return &f
}

func (f fileTypeDo) FirstOrInit() (*model.FileType, error) {
	if result, err := f.DO.FirstOrInit(); err != nil {
		return nil, err
	} else {
		return result.(*model.FileType), nil
	}
}

func (f fileTypeDo) FirstOrCreate() (*model.FileType, error) {
	if result, err := f.DO.FirstOrCreate(); err != nil {
		return nil, err
	} else {
		return result.(*model.FileType), nil
	}
}

func (f fileTypeDo) FindByPage(offset int, limit int) (result []*model.FileType, count int64, err error) {
	result, err = f.Offset(offset).Limit(limit).Find()
	if err != nil {
		return
	}

	if size := len(result); 0 < limit && 0 < size && size < limit {
		count = int64(size + offset)
		return
	}

	count, err = f.Offset(-1).Limit(-1).Count()
	return
}

func (f fileTypeDo) ScanByPage(result interface{}, offset int, limit int) (count int64, err error) {
	count, err = f.Count()
	if err != nil {
		return
	}

	err = f.Offset(offset).Limit(limit).Scan(result)
	return
}

func (f fileTypeDo) Scan(result interface{}) (err error) {
	return f.DO.Scan(result)
}

func (f fileTypeDo) Delete(models ...*model.FileType) (result gen.ResultInfo, err error) {
	return f.DO.Delete(models)
}

func (f *fileTypeDo) withDO(do gen.Dao) *fileTypeDo {
	f.DO = *do.(*gen.DO)
	return f
}