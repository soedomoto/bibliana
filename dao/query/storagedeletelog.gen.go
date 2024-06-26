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

func newStorageDeleteLog(db *gorm.DB, opts ...gen.DOOption) storageDeleteLog {
	_storageDeleteLog := storageDeleteLog{}

	_storageDeleteLog.storageDeleteLogDo.UseDB(db, opts...)
	_storageDeleteLog.storageDeleteLogDo.UseModel(&model.StorageDeleteLog{})

	tableName := _storageDeleteLog.storageDeleteLogDo.TableName()
	_storageDeleteLog.ALL = field.NewAsterisk(tableName)
	_storageDeleteLog.LibraryID = field.NewInt32(tableName, "libraryID")
	_storageDeleteLog.Key = field.NewString(tableName, "key")
	_storageDeleteLog.DateDeleted = field.NewString(tableName, "dateDeleted")

	_storageDeleteLog.fillFieldMap()

	return _storageDeleteLog
}

type storageDeleteLog struct {
	storageDeleteLogDo storageDeleteLogDo

	ALL         field.Asterisk
	LibraryID   field.Int32
	Key         field.String
	DateDeleted field.String

	fieldMap map[string]field.Expr
}

func (s storageDeleteLog) Table(newTableName string) *storageDeleteLog {
	s.storageDeleteLogDo.UseTable(newTableName)
	return s.updateTableName(newTableName)
}

func (s storageDeleteLog) As(alias string) *storageDeleteLog {
	s.storageDeleteLogDo.DO = *(s.storageDeleteLogDo.As(alias).(*gen.DO))
	return s.updateTableName(alias)
}

func (s *storageDeleteLog) updateTableName(table string) *storageDeleteLog {
	s.ALL = field.NewAsterisk(table)
	s.LibraryID = field.NewInt32(table, "libraryID")
	s.Key = field.NewString(table, "key")
	s.DateDeleted = field.NewString(table, "dateDeleted")

	s.fillFieldMap()

	return s
}

func (s *storageDeleteLog) WithContext(ctx context.Context) *storageDeleteLogDo {
	return s.storageDeleteLogDo.WithContext(ctx)
}

func (s storageDeleteLog) TableName() string { return s.storageDeleteLogDo.TableName() }

func (s storageDeleteLog) Alias() string { return s.storageDeleteLogDo.Alias() }

func (s storageDeleteLog) Columns(cols ...field.Expr) gen.Columns {
	return s.storageDeleteLogDo.Columns(cols...)
}

func (s *storageDeleteLog) GetFieldByName(fieldName string) (field.OrderExpr, bool) {
	_f, ok := s.fieldMap[fieldName]
	if !ok || _f == nil {
		return nil, false
	}
	_oe, ok := _f.(field.OrderExpr)
	return _oe, ok
}

func (s *storageDeleteLog) fillFieldMap() {
	s.fieldMap = make(map[string]field.Expr, 3)
	s.fieldMap["libraryID"] = s.LibraryID
	s.fieldMap["key"] = s.Key
	s.fieldMap["dateDeleted"] = s.DateDeleted
}

func (s storageDeleteLog) clone(db *gorm.DB) storageDeleteLog {
	s.storageDeleteLogDo.ReplaceConnPool(db.Statement.ConnPool)
	return s
}

func (s storageDeleteLog) replaceDB(db *gorm.DB) storageDeleteLog {
	s.storageDeleteLogDo.ReplaceDB(db)
	return s
}

type storageDeleteLogDo struct{ gen.DO }

func (s storageDeleteLogDo) Debug() *storageDeleteLogDo {
	return s.withDO(s.DO.Debug())
}

func (s storageDeleteLogDo) WithContext(ctx context.Context) *storageDeleteLogDo {
	return s.withDO(s.DO.WithContext(ctx))
}

func (s storageDeleteLogDo) ReadDB() *storageDeleteLogDo {
	return s.Clauses(dbresolver.Read)
}

func (s storageDeleteLogDo) WriteDB() *storageDeleteLogDo {
	return s.Clauses(dbresolver.Write)
}

func (s storageDeleteLogDo) Session(config *gorm.Session) *storageDeleteLogDo {
	return s.withDO(s.DO.Session(config))
}

func (s storageDeleteLogDo) Clauses(conds ...clause.Expression) *storageDeleteLogDo {
	return s.withDO(s.DO.Clauses(conds...))
}

func (s storageDeleteLogDo) Returning(value interface{}, columns ...string) *storageDeleteLogDo {
	return s.withDO(s.DO.Returning(value, columns...))
}

func (s storageDeleteLogDo) Not(conds ...gen.Condition) *storageDeleteLogDo {
	return s.withDO(s.DO.Not(conds...))
}

func (s storageDeleteLogDo) Or(conds ...gen.Condition) *storageDeleteLogDo {
	return s.withDO(s.DO.Or(conds...))
}

func (s storageDeleteLogDo) Select(conds ...field.Expr) *storageDeleteLogDo {
	return s.withDO(s.DO.Select(conds...))
}

func (s storageDeleteLogDo) Where(conds ...gen.Condition) *storageDeleteLogDo {
	return s.withDO(s.DO.Where(conds...))
}

func (s storageDeleteLogDo) Order(conds ...field.Expr) *storageDeleteLogDo {
	return s.withDO(s.DO.Order(conds...))
}

func (s storageDeleteLogDo) Distinct(cols ...field.Expr) *storageDeleteLogDo {
	return s.withDO(s.DO.Distinct(cols...))
}

func (s storageDeleteLogDo) Omit(cols ...field.Expr) *storageDeleteLogDo {
	return s.withDO(s.DO.Omit(cols...))
}

func (s storageDeleteLogDo) Join(table schema.Tabler, on ...field.Expr) *storageDeleteLogDo {
	return s.withDO(s.DO.Join(table, on...))
}

func (s storageDeleteLogDo) LeftJoin(table schema.Tabler, on ...field.Expr) *storageDeleteLogDo {
	return s.withDO(s.DO.LeftJoin(table, on...))
}

func (s storageDeleteLogDo) RightJoin(table schema.Tabler, on ...field.Expr) *storageDeleteLogDo {
	return s.withDO(s.DO.RightJoin(table, on...))
}

func (s storageDeleteLogDo) Group(cols ...field.Expr) *storageDeleteLogDo {
	return s.withDO(s.DO.Group(cols...))
}

func (s storageDeleteLogDo) Having(conds ...gen.Condition) *storageDeleteLogDo {
	return s.withDO(s.DO.Having(conds...))
}

func (s storageDeleteLogDo) Limit(limit int) *storageDeleteLogDo {
	return s.withDO(s.DO.Limit(limit))
}

func (s storageDeleteLogDo) Offset(offset int) *storageDeleteLogDo {
	return s.withDO(s.DO.Offset(offset))
}

func (s storageDeleteLogDo) Scopes(funcs ...func(gen.Dao) gen.Dao) *storageDeleteLogDo {
	return s.withDO(s.DO.Scopes(funcs...))
}

func (s storageDeleteLogDo) Unscoped() *storageDeleteLogDo {
	return s.withDO(s.DO.Unscoped())
}

func (s storageDeleteLogDo) Create(values ...*model.StorageDeleteLog) error {
	if len(values) == 0 {
		return nil
	}
	return s.DO.Create(values)
}

func (s storageDeleteLogDo) CreateInBatches(values []*model.StorageDeleteLog, batchSize int) error {
	return s.DO.CreateInBatches(values, batchSize)
}

// Save : !!! underlying implementation is different with GORM
// The method is equivalent to executing the statement: db.Clauses(clause.OnConflict{UpdateAll: true}).Create(values)
func (s storageDeleteLogDo) Save(values ...*model.StorageDeleteLog) error {
	if len(values) == 0 {
		return nil
	}
	return s.DO.Save(values)
}

func (s storageDeleteLogDo) First() (*model.StorageDeleteLog, error) {
	if result, err := s.DO.First(); err != nil {
		return nil, err
	} else {
		return result.(*model.StorageDeleteLog), nil
	}
}

func (s storageDeleteLogDo) Take() (*model.StorageDeleteLog, error) {
	if result, err := s.DO.Take(); err != nil {
		return nil, err
	} else {
		return result.(*model.StorageDeleteLog), nil
	}
}

func (s storageDeleteLogDo) Last() (*model.StorageDeleteLog, error) {
	if result, err := s.DO.Last(); err != nil {
		return nil, err
	} else {
		return result.(*model.StorageDeleteLog), nil
	}
}

func (s storageDeleteLogDo) Find() ([]*model.StorageDeleteLog, error) {
	result, err := s.DO.Find()
	return result.([]*model.StorageDeleteLog), err
}

func (s storageDeleteLogDo) FindInBatch(batchSize int, fc func(tx gen.Dao, batch int) error) (results []*model.StorageDeleteLog, err error) {
	buf := make([]*model.StorageDeleteLog, 0, batchSize)
	err = s.DO.FindInBatches(&buf, batchSize, func(tx gen.Dao, batch int) error {
		defer func() { results = append(results, buf...) }()
		return fc(tx, batch)
	})
	return results, err
}

func (s storageDeleteLogDo) FindInBatches(result *[]*model.StorageDeleteLog, batchSize int, fc func(tx gen.Dao, batch int) error) error {
	return s.DO.FindInBatches(result, batchSize, fc)
}

func (s storageDeleteLogDo) Attrs(attrs ...field.AssignExpr) *storageDeleteLogDo {
	return s.withDO(s.DO.Attrs(attrs...))
}

func (s storageDeleteLogDo) Assign(attrs ...field.AssignExpr) *storageDeleteLogDo {
	return s.withDO(s.DO.Assign(attrs...))
}

func (s storageDeleteLogDo) Joins(fields ...field.RelationField) *storageDeleteLogDo {
	for _, _f := range fields {
		s = *s.withDO(s.DO.Joins(_f))
	}
	return &s
}

func (s storageDeleteLogDo) Preload(fields ...field.RelationField) *storageDeleteLogDo {
	for _, _f := range fields {
		s = *s.withDO(s.DO.Preload(_f))
	}
	return &s
}

func (s storageDeleteLogDo) FirstOrInit() (*model.StorageDeleteLog, error) {
	if result, err := s.DO.FirstOrInit(); err != nil {
		return nil, err
	} else {
		return result.(*model.StorageDeleteLog), nil
	}
}

func (s storageDeleteLogDo) FirstOrCreate() (*model.StorageDeleteLog, error) {
	if result, err := s.DO.FirstOrCreate(); err != nil {
		return nil, err
	} else {
		return result.(*model.StorageDeleteLog), nil
	}
}

func (s storageDeleteLogDo) FindByPage(offset int, limit int) (result []*model.StorageDeleteLog, count int64, err error) {
	result, err = s.Offset(offset).Limit(limit).Find()
	if err != nil {
		return
	}

	if size := len(result); 0 < limit && 0 < size && size < limit {
		count = int64(size + offset)
		return
	}

	count, err = s.Offset(-1).Limit(-1).Count()
	return
}

func (s storageDeleteLogDo) ScanByPage(result interface{}, offset int, limit int) (count int64, err error) {
	count, err = s.Count()
	if err != nil {
		return
	}

	err = s.Offset(offset).Limit(limit).Scan(result)
	return
}

func (s storageDeleteLogDo) Scan(result interface{}) (err error) {
	return s.DO.Scan(result)
}

func (s storageDeleteLogDo) Delete(models ...*model.StorageDeleteLog) (result gen.ResultInfo, err error) {
	return s.DO.Delete(models)
}

func (s *storageDeleteLogDo) withDO(do gen.Dao) *storageDeleteLogDo {
	s.DO = *do.(*gen.DO)
	return s
}