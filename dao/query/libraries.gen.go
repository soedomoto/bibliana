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

func newLibrary(db *gorm.DB, opts ...gen.DOOption) library {
	_library := library{}

	_library.libraryDo.UseDB(db, opts...)
	_library.libraryDo.UseModel(&model.Library{})

	tableName := _library.libraryDo.TableName()
	_library.ALL = field.NewAsterisk(tableName)
	_library.LibraryID = field.NewInt32(tableName, "libraryID")
	_library.Type = field.NewString(tableName, "type")
	_library.Editable = field.NewInt32(tableName, "editable")
	_library.FilesEditable = field.NewInt32(tableName, "filesEditable")
	_library.Version = field.NewInt32(tableName, "version")
	_library.StorageVersion = field.NewInt32(tableName, "storageVersion")
	_library.LastSync = field.NewInt32(tableName, "lastSync")
	_library.Archived = field.NewInt32(tableName, "archived")

	_library.fillFieldMap()

	return _library
}

type library struct {
	libraryDo libraryDo

	ALL            field.Asterisk
	LibraryID      field.Int32
	Type           field.String
	Editable       field.Int32
	FilesEditable  field.Int32
	Version        field.Int32
	StorageVersion field.Int32
	LastSync       field.Int32
	Archived       field.Int32

	fieldMap map[string]field.Expr
}

func (l library) Table(newTableName string) *library {
	l.libraryDo.UseTable(newTableName)
	return l.updateTableName(newTableName)
}

func (l library) As(alias string) *library {
	l.libraryDo.DO = *(l.libraryDo.As(alias).(*gen.DO))
	return l.updateTableName(alias)
}

func (l *library) updateTableName(table string) *library {
	l.ALL = field.NewAsterisk(table)
	l.LibraryID = field.NewInt32(table, "libraryID")
	l.Type = field.NewString(table, "type")
	l.Editable = field.NewInt32(table, "editable")
	l.FilesEditable = field.NewInt32(table, "filesEditable")
	l.Version = field.NewInt32(table, "version")
	l.StorageVersion = field.NewInt32(table, "storageVersion")
	l.LastSync = field.NewInt32(table, "lastSync")
	l.Archived = field.NewInt32(table, "archived")

	l.fillFieldMap()

	return l
}

func (l *library) WithContext(ctx context.Context) *libraryDo { return l.libraryDo.WithContext(ctx) }

func (l library) TableName() string { return l.libraryDo.TableName() }

func (l library) Alias() string { return l.libraryDo.Alias() }

func (l library) Columns(cols ...field.Expr) gen.Columns { return l.libraryDo.Columns(cols...) }

func (l *library) GetFieldByName(fieldName string) (field.OrderExpr, bool) {
	_f, ok := l.fieldMap[fieldName]
	if !ok || _f == nil {
		return nil, false
	}
	_oe, ok := _f.(field.OrderExpr)
	return _oe, ok
}

func (l *library) fillFieldMap() {
	l.fieldMap = make(map[string]field.Expr, 8)
	l.fieldMap["libraryID"] = l.LibraryID
	l.fieldMap["type"] = l.Type
	l.fieldMap["editable"] = l.Editable
	l.fieldMap["filesEditable"] = l.FilesEditable
	l.fieldMap["version"] = l.Version
	l.fieldMap["storageVersion"] = l.StorageVersion
	l.fieldMap["lastSync"] = l.LastSync
	l.fieldMap["archived"] = l.Archived
}

func (l library) clone(db *gorm.DB) library {
	l.libraryDo.ReplaceConnPool(db.Statement.ConnPool)
	return l
}

func (l library) replaceDB(db *gorm.DB) library {
	l.libraryDo.ReplaceDB(db)
	return l
}

type libraryDo struct{ gen.DO }

func (l libraryDo) Debug() *libraryDo {
	return l.withDO(l.DO.Debug())
}

func (l libraryDo) WithContext(ctx context.Context) *libraryDo {
	return l.withDO(l.DO.WithContext(ctx))
}

func (l libraryDo) ReadDB() *libraryDo {
	return l.Clauses(dbresolver.Read)
}

func (l libraryDo) WriteDB() *libraryDo {
	return l.Clauses(dbresolver.Write)
}

func (l libraryDo) Session(config *gorm.Session) *libraryDo {
	return l.withDO(l.DO.Session(config))
}

func (l libraryDo) Clauses(conds ...clause.Expression) *libraryDo {
	return l.withDO(l.DO.Clauses(conds...))
}

func (l libraryDo) Returning(value interface{}, columns ...string) *libraryDo {
	return l.withDO(l.DO.Returning(value, columns...))
}

func (l libraryDo) Not(conds ...gen.Condition) *libraryDo {
	return l.withDO(l.DO.Not(conds...))
}

func (l libraryDo) Or(conds ...gen.Condition) *libraryDo {
	return l.withDO(l.DO.Or(conds...))
}

func (l libraryDo) Select(conds ...field.Expr) *libraryDo {
	return l.withDO(l.DO.Select(conds...))
}

func (l libraryDo) Where(conds ...gen.Condition) *libraryDo {
	return l.withDO(l.DO.Where(conds...))
}

func (l libraryDo) Order(conds ...field.Expr) *libraryDo {
	return l.withDO(l.DO.Order(conds...))
}

func (l libraryDo) Distinct(cols ...field.Expr) *libraryDo {
	return l.withDO(l.DO.Distinct(cols...))
}

func (l libraryDo) Omit(cols ...field.Expr) *libraryDo {
	return l.withDO(l.DO.Omit(cols...))
}

func (l libraryDo) Join(table schema.Tabler, on ...field.Expr) *libraryDo {
	return l.withDO(l.DO.Join(table, on...))
}

func (l libraryDo) LeftJoin(table schema.Tabler, on ...field.Expr) *libraryDo {
	return l.withDO(l.DO.LeftJoin(table, on...))
}

func (l libraryDo) RightJoin(table schema.Tabler, on ...field.Expr) *libraryDo {
	return l.withDO(l.DO.RightJoin(table, on...))
}

func (l libraryDo) Group(cols ...field.Expr) *libraryDo {
	return l.withDO(l.DO.Group(cols...))
}

func (l libraryDo) Having(conds ...gen.Condition) *libraryDo {
	return l.withDO(l.DO.Having(conds...))
}

func (l libraryDo) Limit(limit int) *libraryDo {
	return l.withDO(l.DO.Limit(limit))
}

func (l libraryDo) Offset(offset int) *libraryDo {
	return l.withDO(l.DO.Offset(offset))
}

func (l libraryDo) Scopes(funcs ...func(gen.Dao) gen.Dao) *libraryDo {
	return l.withDO(l.DO.Scopes(funcs...))
}

func (l libraryDo) Unscoped() *libraryDo {
	return l.withDO(l.DO.Unscoped())
}

func (l libraryDo) Create(values ...*model.Library) error {
	if len(values) == 0 {
		return nil
	}
	return l.DO.Create(values)
}

func (l libraryDo) CreateInBatches(values []*model.Library, batchSize int) error {
	return l.DO.CreateInBatches(values, batchSize)
}

// Save : !!! underlying implementation is different with GORM
// The method is equivalent to executing the statement: db.Clauses(clause.OnConflict{UpdateAll: true}).Create(values)
func (l libraryDo) Save(values ...*model.Library) error {
	if len(values) == 0 {
		return nil
	}
	return l.DO.Save(values)
}

func (l libraryDo) First() (*model.Library, error) {
	if result, err := l.DO.First(); err != nil {
		return nil, err
	} else {
		return result.(*model.Library), nil
	}
}

func (l libraryDo) Take() (*model.Library, error) {
	if result, err := l.DO.Take(); err != nil {
		return nil, err
	} else {
		return result.(*model.Library), nil
	}
}

func (l libraryDo) Last() (*model.Library, error) {
	if result, err := l.DO.Last(); err != nil {
		return nil, err
	} else {
		return result.(*model.Library), nil
	}
}

func (l libraryDo) Find() ([]*model.Library, error) {
	result, err := l.DO.Find()
	return result.([]*model.Library), err
}

func (l libraryDo) FindInBatch(batchSize int, fc func(tx gen.Dao, batch int) error) (results []*model.Library, err error) {
	buf := make([]*model.Library, 0, batchSize)
	err = l.DO.FindInBatches(&buf, batchSize, func(tx gen.Dao, batch int) error {
		defer func() { results = append(results, buf...) }()
		return fc(tx, batch)
	})
	return results, err
}

func (l libraryDo) FindInBatches(result *[]*model.Library, batchSize int, fc func(tx gen.Dao, batch int) error) error {
	return l.DO.FindInBatches(result, batchSize, fc)
}

func (l libraryDo) Attrs(attrs ...field.AssignExpr) *libraryDo {
	return l.withDO(l.DO.Attrs(attrs...))
}

func (l libraryDo) Assign(attrs ...field.AssignExpr) *libraryDo {
	return l.withDO(l.DO.Assign(attrs...))
}

func (l libraryDo) Joins(fields ...field.RelationField) *libraryDo {
	for _, _f := range fields {
		l = *l.withDO(l.DO.Joins(_f))
	}
	return &l
}

func (l libraryDo) Preload(fields ...field.RelationField) *libraryDo {
	for _, _f := range fields {
		l = *l.withDO(l.DO.Preload(_f))
	}
	return &l
}

func (l libraryDo) FirstOrInit() (*model.Library, error) {
	if result, err := l.DO.FirstOrInit(); err != nil {
		return nil, err
	} else {
		return result.(*model.Library), nil
	}
}

func (l libraryDo) FirstOrCreate() (*model.Library, error) {
	if result, err := l.DO.FirstOrCreate(); err != nil {
		return nil, err
	} else {
		return result.(*model.Library), nil
	}
}

func (l libraryDo) FindByPage(offset int, limit int) (result []*model.Library, count int64, err error) {
	result, err = l.Offset(offset).Limit(limit).Find()
	if err != nil {
		return
	}

	if size := len(result); 0 < limit && 0 < size && size < limit {
		count = int64(size + offset)
		return
	}

	count, err = l.Offset(-1).Limit(-1).Count()
	return
}

func (l libraryDo) ScanByPage(result interface{}, offset int, limit int) (count int64, err error) {
	count, err = l.Count()
	if err != nil {
		return
	}

	err = l.Offset(offset).Limit(limit).Scan(result)
	return
}

func (l libraryDo) Scan(result interface{}) (err error) {
	return l.DO.Scan(result)
}

func (l libraryDo) Delete(models ...*model.Library) (result gen.ResultInfo, err error) {
	return l.DO.Delete(models)
}

func (l *libraryDo) withDO(do gen.Dao) *libraryDo {
	l.DO = *do.(*gen.DO)
	return l
}
