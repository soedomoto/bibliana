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

func newSyncedSetting(db *gorm.DB, opts ...gen.DOOption) syncedSetting {
	_syncedSetting := syncedSetting{}

	_syncedSetting.syncedSettingDo.UseDB(db, opts...)
	_syncedSetting.syncedSettingDo.UseModel(&model.SyncedSetting{})

	tableName := _syncedSetting.syncedSettingDo.TableName()
	_syncedSetting.ALL = field.NewAsterisk(tableName)
	_syncedSetting.Setting = field.NewString(tableName, "setting")
	_syncedSetting.LibraryID = field.NewInt32(tableName, "libraryID")
	_syncedSetting.Value = field.NewString(tableName, "value")
	_syncedSetting.Version = field.NewInt32(tableName, "version")
	_syncedSetting.Synced = field.NewInt32(tableName, "synced")

	_syncedSetting.fillFieldMap()

	return _syncedSetting
}

type syncedSetting struct {
	syncedSettingDo syncedSettingDo

	ALL       field.Asterisk
	Setting   field.String
	LibraryID field.Int32
	Value     field.String
	Version   field.Int32
	Synced    field.Int32

	fieldMap map[string]field.Expr
}

func (s syncedSetting) Table(newTableName string) *syncedSetting {
	s.syncedSettingDo.UseTable(newTableName)
	return s.updateTableName(newTableName)
}

func (s syncedSetting) As(alias string) *syncedSetting {
	s.syncedSettingDo.DO = *(s.syncedSettingDo.As(alias).(*gen.DO))
	return s.updateTableName(alias)
}

func (s *syncedSetting) updateTableName(table string) *syncedSetting {
	s.ALL = field.NewAsterisk(table)
	s.Setting = field.NewString(table, "setting")
	s.LibraryID = field.NewInt32(table, "libraryID")
	s.Value = field.NewString(table, "value")
	s.Version = field.NewInt32(table, "version")
	s.Synced = field.NewInt32(table, "synced")

	s.fillFieldMap()

	return s
}

func (s *syncedSetting) WithContext(ctx context.Context) *syncedSettingDo {
	return s.syncedSettingDo.WithContext(ctx)
}

func (s syncedSetting) TableName() string { return s.syncedSettingDo.TableName() }

func (s syncedSetting) Alias() string { return s.syncedSettingDo.Alias() }

func (s syncedSetting) Columns(cols ...field.Expr) gen.Columns {
	return s.syncedSettingDo.Columns(cols...)
}

func (s *syncedSetting) GetFieldByName(fieldName string) (field.OrderExpr, bool) {
	_f, ok := s.fieldMap[fieldName]
	if !ok || _f == nil {
		return nil, false
	}
	_oe, ok := _f.(field.OrderExpr)
	return _oe, ok
}

func (s *syncedSetting) fillFieldMap() {
	s.fieldMap = make(map[string]field.Expr, 5)
	s.fieldMap["setting"] = s.Setting
	s.fieldMap["libraryID"] = s.LibraryID
	s.fieldMap["value"] = s.Value
	s.fieldMap["version"] = s.Version
	s.fieldMap["synced"] = s.Synced
}

func (s syncedSetting) clone(db *gorm.DB) syncedSetting {
	s.syncedSettingDo.ReplaceConnPool(db.Statement.ConnPool)
	return s
}

func (s syncedSetting) replaceDB(db *gorm.DB) syncedSetting {
	s.syncedSettingDo.ReplaceDB(db)
	return s
}

type syncedSettingDo struct{ gen.DO }

func (s syncedSettingDo) Debug() *syncedSettingDo {
	return s.withDO(s.DO.Debug())
}

func (s syncedSettingDo) WithContext(ctx context.Context) *syncedSettingDo {
	return s.withDO(s.DO.WithContext(ctx))
}

func (s syncedSettingDo) ReadDB() *syncedSettingDo {
	return s.Clauses(dbresolver.Read)
}

func (s syncedSettingDo) WriteDB() *syncedSettingDo {
	return s.Clauses(dbresolver.Write)
}

func (s syncedSettingDo) Session(config *gorm.Session) *syncedSettingDo {
	return s.withDO(s.DO.Session(config))
}

func (s syncedSettingDo) Clauses(conds ...clause.Expression) *syncedSettingDo {
	return s.withDO(s.DO.Clauses(conds...))
}

func (s syncedSettingDo) Returning(value interface{}, columns ...string) *syncedSettingDo {
	return s.withDO(s.DO.Returning(value, columns...))
}

func (s syncedSettingDo) Not(conds ...gen.Condition) *syncedSettingDo {
	return s.withDO(s.DO.Not(conds...))
}

func (s syncedSettingDo) Or(conds ...gen.Condition) *syncedSettingDo {
	return s.withDO(s.DO.Or(conds...))
}

func (s syncedSettingDo) Select(conds ...field.Expr) *syncedSettingDo {
	return s.withDO(s.DO.Select(conds...))
}

func (s syncedSettingDo) Where(conds ...gen.Condition) *syncedSettingDo {
	return s.withDO(s.DO.Where(conds...))
}

func (s syncedSettingDo) Order(conds ...field.Expr) *syncedSettingDo {
	return s.withDO(s.DO.Order(conds...))
}

func (s syncedSettingDo) Distinct(cols ...field.Expr) *syncedSettingDo {
	return s.withDO(s.DO.Distinct(cols...))
}

func (s syncedSettingDo) Omit(cols ...field.Expr) *syncedSettingDo {
	return s.withDO(s.DO.Omit(cols...))
}

func (s syncedSettingDo) Join(table schema.Tabler, on ...field.Expr) *syncedSettingDo {
	return s.withDO(s.DO.Join(table, on...))
}

func (s syncedSettingDo) LeftJoin(table schema.Tabler, on ...field.Expr) *syncedSettingDo {
	return s.withDO(s.DO.LeftJoin(table, on...))
}

func (s syncedSettingDo) RightJoin(table schema.Tabler, on ...field.Expr) *syncedSettingDo {
	return s.withDO(s.DO.RightJoin(table, on...))
}

func (s syncedSettingDo) Group(cols ...field.Expr) *syncedSettingDo {
	return s.withDO(s.DO.Group(cols...))
}

func (s syncedSettingDo) Having(conds ...gen.Condition) *syncedSettingDo {
	return s.withDO(s.DO.Having(conds...))
}

func (s syncedSettingDo) Limit(limit int) *syncedSettingDo {
	return s.withDO(s.DO.Limit(limit))
}

func (s syncedSettingDo) Offset(offset int) *syncedSettingDo {
	return s.withDO(s.DO.Offset(offset))
}

func (s syncedSettingDo) Scopes(funcs ...func(gen.Dao) gen.Dao) *syncedSettingDo {
	return s.withDO(s.DO.Scopes(funcs...))
}

func (s syncedSettingDo) Unscoped() *syncedSettingDo {
	return s.withDO(s.DO.Unscoped())
}

func (s syncedSettingDo) Create(values ...*model.SyncedSetting) error {
	if len(values) == 0 {
		return nil
	}
	return s.DO.Create(values)
}

func (s syncedSettingDo) CreateInBatches(values []*model.SyncedSetting, batchSize int) error {
	return s.DO.CreateInBatches(values, batchSize)
}

// Save : !!! underlying implementation is different with GORM
// The method is equivalent to executing the statement: db.Clauses(clause.OnConflict{UpdateAll: true}).Create(values)
func (s syncedSettingDo) Save(values ...*model.SyncedSetting) error {
	if len(values) == 0 {
		return nil
	}
	return s.DO.Save(values)
}

func (s syncedSettingDo) First() (*model.SyncedSetting, error) {
	if result, err := s.DO.First(); err != nil {
		return nil, err
	} else {
		return result.(*model.SyncedSetting), nil
	}
}

func (s syncedSettingDo) Take() (*model.SyncedSetting, error) {
	if result, err := s.DO.Take(); err != nil {
		return nil, err
	} else {
		return result.(*model.SyncedSetting), nil
	}
}

func (s syncedSettingDo) Last() (*model.SyncedSetting, error) {
	if result, err := s.DO.Last(); err != nil {
		return nil, err
	} else {
		return result.(*model.SyncedSetting), nil
	}
}

func (s syncedSettingDo) Find() ([]*model.SyncedSetting, error) {
	result, err := s.DO.Find()
	return result.([]*model.SyncedSetting), err
}

func (s syncedSettingDo) FindInBatch(batchSize int, fc func(tx gen.Dao, batch int) error) (results []*model.SyncedSetting, err error) {
	buf := make([]*model.SyncedSetting, 0, batchSize)
	err = s.DO.FindInBatches(&buf, batchSize, func(tx gen.Dao, batch int) error {
		defer func() { results = append(results, buf...) }()
		return fc(tx, batch)
	})
	return results, err
}

func (s syncedSettingDo) FindInBatches(result *[]*model.SyncedSetting, batchSize int, fc func(tx gen.Dao, batch int) error) error {
	return s.DO.FindInBatches(result, batchSize, fc)
}

func (s syncedSettingDo) Attrs(attrs ...field.AssignExpr) *syncedSettingDo {
	return s.withDO(s.DO.Attrs(attrs...))
}

func (s syncedSettingDo) Assign(attrs ...field.AssignExpr) *syncedSettingDo {
	return s.withDO(s.DO.Assign(attrs...))
}

func (s syncedSettingDo) Joins(fields ...field.RelationField) *syncedSettingDo {
	for _, _f := range fields {
		s = *s.withDO(s.DO.Joins(_f))
	}
	return &s
}

func (s syncedSettingDo) Preload(fields ...field.RelationField) *syncedSettingDo {
	for _, _f := range fields {
		s = *s.withDO(s.DO.Preload(_f))
	}
	return &s
}

func (s syncedSettingDo) FirstOrInit() (*model.SyncedSetting, error) {
	if result, err := s.DO.FirstOrInit(); err != nil {
		return nil, err
	} else {
		return result.(*model.SyncedSetting), nil
	}
}

func (s syncedSettingDo) FirstOrCreate() (*model.SyncedSetting, error) {
	if result, err := s.DO.FirstOrCreate(); err != nil {
		return nil, err
	} else {
		return result.(*model.SyncedSetting), nil
	}
}

func (s syncedSettingDo) FindByPage(offset int, limit int) (result []*model.SyncedSetting, count int64, err error) {
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

func (s syncedSettingDo) ScanByPage(result interface{}, offset int, limit int) (count int64, err error) {
	count, err = s.Count()
	if err != nil {
		return
	}

	err = s.Offset(offset).Limit(limit).Scan(result)
	return
}

func (s syncedSettingDo) Scan(result interface{}) (err error) {
	return s.DO.Scan(result)
}

func (s syncedSettingDo) Delete(models ...*model.SyncedSetting) (result gen.ResultInfo, err error) {
	return s.DO.Delete(models)
}

func (s *syncedSettingDo) withDO(do gen.Dao) *syncedSettingDo {
	s.DO = *do.(*gen.DO)
	return s
}