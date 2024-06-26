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

func newFieldsCombined(db *gorm.DB, opts ...gen.DOOption) fieldsCombined {
	_fieldsCombined := fieldsCombined{}

	_fieldsCombined.fieldsCombinedDo.UseDB(db, opts...)
	_fieldsCombined.fieldsCombinedDo.UseModel(&model.FieldsCombined{})

	tableName := _fieldsCombined.fieldsCombinedDo.TableName()
	_fieldsCombined.ALL = field.NewAsterisk(tableName)
	_fieldsCombined.FieldID = field.NewInt32(tableName, "fieldID")
	_fieldsCombined.FieldName = field.NewString(tableName, "fieldName")
	_fieldsCombined.Label = field.NewString(tableName, "label")
	_fieldsCombined.FieldFormatID = field.NewInt32(tableName, "fieldFormatID")
	_fieldsCombined.Custom = field.NewInt32(tableName, "custom")

	_fieldsCombined.fillFieldMap()

	return _fieldsCombined
}

type fieldsCombined struct {
	fieldsCombinedDo fieldsCombinedDo

	ALL           field.Asterisk
	FieldID       field.Int32
	FieldName     field.String
	Label         field.String
	FieldFormatID field.Int32
	Custom        field.Int32

	fieldMap map[string]field.Expr
}

func (f fieldsCombined) Table(newTableName string) *fieldsCombined {
	f.fieldsCombinedDo.UseTable(newTableName)
	return f.updateTableName(newTableName)
}

func (f fieldsCombined) As(alias string) *fieldsCombined {
	f.fieldsCombinedDo.DO = *(f.fieldsCombinedDo.As(alias).(*gen.DO))
	return f.updateTableName(alias)
}

func (f *fieldsCombined) updateTableName(table string) *fieldsCombined {
	f.ALL = field.NewAsterisk(table)
	f.FieldID = field.NewInt32(table, "fieldID")
	f.FieldName = field.NewString(table, "fieldName")
	f.Label = field.NewString(table, "label")
	f.FieldFormatID = field.NewInt32(table, "fieldFormatID")
	f.Custom = field.NewInt32(table, "custom")

	f.fillFieldMap()

	return f
}

func (f *fieldsCombined) WithContext(ctx context.Context) *fieldsCombinedDo {
	return f.fieldsCombinedDo.WithContext(ctx)
}

func (f fieldsCombined) TableName() string { return f.fieldsCombinedDo.TableName() }

func (f fieldsCombined) Alias() string { return f.fieldsCombinedDo.Alias() }

func (f fieldsCombined) Columns(cols ...field.Expr) gen.Columns {
	return f.fieldsCombinedDo.Columns(cols...)
}

func (f *fieldsCombined) GetFieldByName(fieldName string) (field.OrderExpr, bool) {
	_f, ok := f.fieldMap[fieldName]
	if !ok || _f == nil {
		return nil, false
	}
	_oe, ok := _f.(field.OrderExpr)
	return _oe, ok
}

func (f *fieldsCombined) fillFieldMap() {
	f.fieldMap = make(map[string]field.Expr, 5)
	f.fieldMap["fieldID"] = f.FieldID
	f.fieldMap["fieldName"] = f.FieldName
	f.fieldMap["label"] = f.Label
	f.fieldMap["fieldFormatID"] = f.FieldFormatID
	f.fieldMap["custom"] = f.Custom
}

func (f fieldsCombined) clone(db *gorm.DB) fieldsCombined {
	f.fieldsCombinedDo.ReplaceConnPool(db.Statement.ConnPool)
	return f
}

func (f fieldsCombined) replaceDB(db *gorm.DB) fieldsCombined {
	f.fieldsCombinedDo.ReplaceDB(db)
	return f
}

type fieldsCombinedDo struct{ gen.DO }

func (f fieldsCombinedDo) Debug() *fieldsCombinedDo {
	return f.withDO(f.DO.Debug())
}

func (f fieldsCombinedDo) WithContext(ctx context.Context) *fieldsCombinedDo {
	return f.withDO(f.DO.WithContext(ctx))
}

func (f fieldsCombinedDo) ReadDB() *fieldsCombinedDo {
	return f.Clauses(dbresolver.Read)
}

func (f fieldsCombinedDo) WriteDB() *fieldsCombinedDo {
	return f.Clauses(dbresolver.Write)
}

func (f fieldsCombinedDo) Session(config *gorm.Session) *fieldsCombinedDo {
	return f.withDO(f.DO.Session(config))
}

func (f fieldsCombinedDo) Clauses(conds ...clause.Expression) *fieldsCombinedDo {
	return f.withDO(f.DO.Clauses(conds...))
}

func (f fieldsCombinedDo) Returning(value interface{}, columns ...string) *fieldsCombinedDo {
	return f.withDO(f.DO.Returning(value, columns...))
}

func (f fieldsCombinedDo) Not(conds ...gen.Condition) *fieldsCombinedDo {
	return f.withDO(f.DO.Not(conds...))
}

func (f fieldsCombinedDo) Or(conds ...gen.Condition) *fieldsCombinedDo {
	return f.withDO(f.DO.Or(conds...))
}

func (f fieldsCombinedDo) Select(conds ...field.Expr) *fieldsCombinedDo {
	return f.withDO(f.DO.Select(conds...))
}

func (f fieldsCombinedDo) Where(conds ...gen.Condition) *fieldsCombinedDo {
	return f.withDO(f.DO.Where(conds...))
}

func (f fieldsCombinedDo) Order(conds ...field.Expr) *fieldsCombinedDo {
	return f.withDO(f.DO.Order(conds...))
}

func (f fieldsCombinedDo) Distinct(cols ...field.Expr) *fieldsCombinedDo {
	return f.withDO(f.DO.Distinct(cols...))
}

func (f fieldsCombinedDo) Omit(cols ...field.Expr) *fieldsCombinedDo {
	return f.withDO(f.DO.Omit(cols...))
}

func (f fieldsCombinedDo) Join(table schema.Tabler, on ...field.Expr) *fieldsCombinedDo {
	return f.withDO(f.DO.Join(table, on...))
}

func (f fieldsCombinedDo) LeftJoin(table schema.Tabler, on ...field.Expr) *fieldsCombinedDo {
	return f.withDO(f.DO.LeftJoin(table, on...))
}

func (f fieldsCombinedDo) RightJoin(table schema.Tabler, on ...field.Expr) *fieldsCombinedDo {
	return f.withDO(f.DO.RightJoin(table, on...))
}

func (f fieldsCombinedDo) Group(cols ...field.Expr) *fieldsCombinedDo {
	return f.withDO(f.DO.Group(cols...))
}

func (f fieldsCombinedDo) Having(conds ...gen.Condition) *fieldsCombinedDo {
	return f.withDO(f.DO.Having(conds...))
}

func (f fieldsCombinedDo) Limit(limit int) *fieldsCombinedDo {
	return f.withDO(f.DO.Limit(limit))
}

func (f fieldsCombinedDo) Offset(offset int) *fieldsCombinedDo {
	return f.withDO(f.DO.Offset(offset))
}

func (f fieldsCombinedDo) Scopes(funcs ...func(gen.Dao) gen.Dao) *fieldsCombinedDo {
	return f.withDO(f.DO.Scopes(funcs...))
}

func (f fieldsCombinedDo) Unscoped() *fieldsCombinedDo {
	return f.withDO(f.DO.Unscoped())
}

func (f fieldsCombinedDo) Create(values ...*model.FieldsCombined) error {
	if len(values) == 0 {
		return nil
	}
	return f.DO.Create(values)
}

func (f fieldsCombinedDo) CreateInBatches(values []*model.FieldsCombined, batchSize int) error {
	return f.DO.CreateInBatches(values, batchSize)
}

// Save : !!! underlying implementation is different with GORM
// The method is equivalent to executing the statement: db.Clauses(clause.OnConflict{UpdateAll: true}).Create(values)
func (f fieldsCombinedDo) Save(values ...*model.FieldsCombined) error {
	if len(values) == 0 {
		return nil
	}
	return f.DO.Save(values)
}

func (f fieldsCombinedDo) First() (*model.FieldsCombined, error) {
	if result, err := f.DO.First(); err != nil {
		return nil, err
	} else {
		return result.(*model.FieldsCombined), nil
	}
}

func (f fieldsCombinedDo) Take() (*model.FieldsCombined, error) {
	if result, err := f.DO.Take(); err != nil {
		return nil, err
	} else {
		return result.(*model.FieldsCombined), nil
	}
}

func (f fieldsCombinedDo) Last() (*model.FieldsCombined, error) {
	if result, err := f.DO.Last(); err != nil {
		return nil, err
	} else {
		return result.(*model.FieldsCombined), nil
	}
}

func (f fieldsCombinedDo) Find() ([]*model.FieldsCombined, error) {
	result, err := f.DO.Find()
	return result.([]*model.FieldsCombined), err
}

func (f fieldsCombinedDo) FindInBatch(batchSize int, fc func(tx gen.Dao, batch int) error) (results []*model.FieldsCombined, err error) {
	buf := make([]*model.FieldsCombined, 0, batchSize)
	err = f.DO.FindInBatches(&buf, batchSize, func(tx gen.Dao, batch int) error {
		defer func() { results = append(results, buf...) }()
		return fc(tx, batch)
	})
	return results, err
}

func (f fieldsCombinedDo) FindInBatches(result *[]*model.FieldsCombined, batchSize int, fc func(tx gen.Dao, batch int) error) error {
	return f.DO.FindInBatches(result, batchSize, fc)
}

func (f fieldsCombinedDo) Attrs(attrs ...field.AssignExpr) *fieldsCombinedDo {
	return f.withDO(f.DO.Attrs(attrs...))
}

func (f fieldsCombinedDo) Assign(attrs ...field.AssignExpr) *fieldsCombinedDo {
	return f.withDO(f.DO.Assign(attrs...))
}

func (f fieldsCombinedDo) Joins(fields ...field.RelationField) *fieldsCombinedDo {
	for _, _f := range fields {
		f = *f.withDO(f.DO.Joins(_f))
	}
	return &f
}

func (f fieldsCombinedDo) Preload(fields ...field.RelationField) *fieldsCombinedDo {
	for _, _f := range fields {
		f = *f.withDO(f.DO.Preload(_f))
	}
	return &f
}

func (f fieldsCombinedDo) FirstOrInit() (*model.FieldsCombined, error) {
	if result, err := f.DO.FirstOrInit(); err != nil {
		return nil, err
	} else {
		return result.(*model.FieldsCombined), nil
	}
}

func (f fieldsCombinedDo) FirstOrCreate() (*model.FieldsCombined, error) {
	if result, err := f.DO.FirstOrCreate(); err != nil {
		return nil, err
	} else {
		return result.(*model.FieldsCombined), nil
	}
}

func (f fieldsCombinedDo) FindByPage(offset int, limit int) (result []*model.FieldsCombined, count int64, err error) {
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

func (f fieldsCombinedDo) ScanByPage(result interface{}, offset int, limit int) (count int64, err error) {
	count, err = f.Count()
	if err != nil {
		return
	}

	err = f.Offset(offset).Limit(limit).Scan(result)
	return
}

func (f fieldsCombinedDo) Scan(result interface{}) (err error) {
	return f.DO.Scan(result)
}

func (f fieldsCombinedDo) Delete(models ...*model.FieldsCombined) (result gen.ResultInfo, err error) {
	return f.DO.Delete(models)
}

func (f *fieldsCombinedDo) withDO(do gen.Dao) *fieldsCombinedDo {
	f.DO = *do.(*gen.DO)
	return f
}