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

func newFulltextItemWord(db *gorm.DB, opts ...gen.DOOption) fulltextItemWord {
	_fulltextItemWord := fulltextItemWord{}

	_fulltextItemWord.fulltextItemWordDo.UseDB(db, opts...)
	_fulltextItemWord.fulltextItemWordDo.UseModel(&model.FulltextItemWord{})

	tableName := _fulltextItemWord.fulltextItemWordDo.TableName()
	_fulltextItemWord.ALL = field.NewAsterisk(tableName)
	_fulltextItemWord.WordID = field.NewInt32(tableName, "wordID")
	_fulltextItemWord.ItemID = field.NewInt32(tableName, "itemID")

	_fulltextItemWord.fillFieldMap()

	return _fulltextItemWord
}

type fulltextItemWord struct {
	fulltextItemWordDo fulltextItemWordDo

	ALL    field.Asterisk
	WordID field.Int32
	ItemID field.Int32

	fieldMap map[string]field.Expr
}

func (f fulltextItemWord) Table(newTableName string) *fulltextItemWord {
	f.fulltextItemWordDo.UseTable(newTableName)
	return f.updateTableName(newTableName)
}

func (f fulltextItemWord) As(alias string) *fulltextItemWord {
	f.fulltextItemWordDo.DO = *(f.fulltextItemWordDo.As(alias).(*gen.DO))
	return f.updateTableName(alias)
}

func (f *fulltextItemWord) updateTableName(table string) *fulltextItemWord {
	f.ALL = field.NewAsterisk(table)
	f.WordID = field.NewInt32(table, "wordID")
	f.ItemID = field.NewInt32(table, "itemID")

	f.fillFieldMap()

	return f
}

func (f *fulltextItemWord) WithContext(ctx context.Context) *fulltextItemWordDo {
	return f.fulltextItemWordDo.WithContext(ctx)
}

func (f fulltextItemWord) TableName() string { return f.fulltextItemWordDo.TableName() }

func (f fulltextItemWord) Alias() string { return f.fulltextItemWordDo.Alias() }

func (f fulltextItemWord) Columns(cols ...field.Expr) gen.Columns {
	return f.fulltextItemWordDo.Columns(cols...)
}

func (f *fulltextItemWord) GetFieldByName(fieldName string) (field.OrderExpr, bool) {
	_f, ok := f.fieldMap[fieldName]
	if !ok || _f == nil {
		return nil, false
	}
	_oe, ok := _f.(field.OrderExpr)
	return _oe, ok
}

func (f *fulltextItemWord) fillFieldMap() {
	f.fieldMap = make(map[string]field.Expr, 2)
	f.fieldMap["wordID"] = f.WordID
	f.fieldMap["itemID"] = f.ItemID
}

func (f fulltextItemWord) clone(db *gorm.DB) fulltextItemWord {
	f.fulltextItemWordDo.ReplaceConnPool(db.Statement.ConnPool)
	return f
}

func (f fulltextItemWord) replaceDB(db *gorm.DB) fulltextItemWord {
	f.fulltextItemWordDo.ReplaceDB(db)
	return f
}

type fulltextItemWordDo struct{ gen.DO }

func (f fulltextItemWordDo) Debug() *fulltextItemWordDo {
	return f.withDO(f.DO.Debug())
}

func (f fulltextItemWordDo) WithContext(ctx context.Context) *fulltextItemWordDo {
	return f.withDO(f.DO.WithContext(ctx))
}

func (f fulltextItemWordDo) ReadDB() *fulltextItemWordDo {
	return f.Clauses(dbresolver.Read)
}

func (f fulltextItemWordDo) WriteDB() *fulltextItemWordDo {
	return f.Clauses(dbresolver.Write)
}

func (f fulltextItemWordDo) Session(config *gorm.Session) *fulltextItemWordDo {
	return f.withDO(f.DO.Session(config))
}

func (f fulltextItemWordDo) Clauses(conds ...clause.Expression) *fulltextItemWordDo {
	return f.withDO(f.DO.Clauses(conds...))
}

func (f fulltextItemWordDo) Returning(value interface{}, columns ...string) *fulltextItemWordDo {
	return f.withDO(f.DO.Returning(value, columns...))
}

func (f fulltextItemWordDo) Not(conds ...gen.Condition) *fulltextItemWordDo {
	return f.withDO(f.DO.Not(conds...))
}

func (f fulltextItemWordDo) Or(conds ...gen.Condition) *fulltextItemWordDo {
	return f.withDO(f.DO.Or(conds...))
}

func (f fulltextItemWordDo) Select(conds ...field.Expr) *fulltextItemWordDo {
	return f.withDO(f.DO.Select(conds...))
}

func (f fulltextItemWordDo) Where(conds ...gen.Condition) *fulltextItemWordDo {
	return f.withDO(f.DO.Where(conds...))
}

func (f fulltextItemWordDo) Order(conds ...field.Expr) *fulltextItemWordDo {
	return f.withDO(f.DO.Order(conds...))
}

func (f fulltextItemWordDo) Distinct(cols ...field.Expr) *fulltextItemWordDo {
	return f.withDO(f.DO.Distinct(cols...))
}

func (f fulltextItemWordDo) Omit(cols ...field.Expr) *fulltextItemWordDo {
	return f.withDO(f.DO.Omit(cols...))
}

func (f fulltextItemWordDo) Join(table schema.Tabler, on ...field.Expr) *fulltextItemWordDo {
	return f.withDO(f.DO.Join(table, on...))
}

func (f fulltextItemWordDo) LeftJoin(table schema.Tabler, on ...field.Expr) *fulltextItemWordDo {
	return f.withDO(f.DO.LeftJoin(table, on...))
}

func (f fulltextItemWordDo) RightJoin(table schema.Tabler, on ...field.Expr) *fulltextItemWordDo {
	return f.withDO(f.DO.RightJoin(table, on...))
}

func (f fulltextItemWordDo) Group(cols ...field.Expr) *fulltextItemWordDo {
	return f.withDO(f.DO.Group(cols...))
}

func (f fulltextItemWordDo) Having(conds ...gen.Condition) *fulltextItemWordDo {
	return f.withDO(f.DO.Having(conds...))
}

func (f fulltextItemWordDo) Limit(limit int) *fulltextItemWordDo {
	return f.withDO(f.DO.Limit(limit))
}

func (f fulltextItemWordDo) Offset(offset int) *fulltextItemWordDo {
	return f.withDO(f.DO.Offset(offset))
}

func (f fulltextItemWordDo) Scopes(funcs ...func(gen.Dao) gen.Dao) *fulltextItemWordDo {
	return f.withDO(f.DO.Scopes(funcs...))
}

func (f fulltextItemWordDo) Unscoped() *fulltextItemWordDo {
	return f.withDO(f.DO.Unscoped())
}

func (f fulltextItemWordDo) Create(values ...*model.FulltextItemWord) error {
	if len(values) == 0 {
		return nil
	}
	return f.DO.Create(values)
}

func (f fulltextItemWordDo) CreateInBatches(values []*model.FulltextItemWord, batchSize int) error {
	return f.DO.CreateInBatches(values, batchSize)
}

// Save : !!! underlying implementation is different with GORM
// The method is equivalent to executing the statement: db.Clauses(clause.OnConflict{UpdateAll: true}).Create(values)
func (f fulltextItemWordDo) Save(values ...*model.FulltextItemWord) error {
	if len(values) == 0 {
		return nil
	}
	return f.DO.Save(values)
}

func (f fulltextItemWordDo) First() (*model.FulltextItemWord, error) {
	if result, err := f.DO.First(); err != nil {
		return nil, err
	} else {
		return result.(*model.FulltextItemWord), nil
	}
}

func (f fulltextItemWordDo) Take() (*model.FulltextItemWord, error) {
	if result, err := f.DO.Take(); err != nil {
		return nil, err
	} else {
		return result.(*model.FulltextItemWord), nil
	}
}

func (f fulltextItemWordDo) Last() (*model.FulltextItemWord, error) {
	if result, err := f.DO.Last(); err != nil {
		return nil, err
	} else {
		return result.(*model.FulltextItemWord), nil
	}
}

func (f fulltextItemWordDo) Find() ([]*model.FulltextItemWord, error) {
	result, err := f.DO.Find()
	return result.([]*model.FulltextItemWord), err
}

func (f fulltextItemWordDo) FindInBatch(batchSize int, fc func(tx gen.Dao, batch int) error) (results []*model.FulltextItemWord, err error) {
	buf := make([]*model.FulltextItemWord, 0, batchSize)
	err = f.DO.FindInBatches(&buf, batchSize, func(tx gen.Dao, batch int) error {
		defer func() { results = append(results, buf...) }()
		return fc(tx, batch)
	})
	return results, err
}

func (f fulltextItemWordDo) FindInBatches(result *[]*model.FulltextItemWord, batchSize int, fc func(tx gen.Dao, batch int) error) error {
	return f.DO.FindInBatches(result, batchSize, fc)
}

func (f fulltextItemWordDo) Attrs(attrs ...field.AssignExpr) *fulltextItemWordDo {
	return f.withDO(f.DO.Attrs(attrs...))
}

func (f fulltextItemWordDo) Assign(attrs ...field.AssignExpr) *fulltextItemWordDo {
	return f.withDO(f.DO.Assign(attrs...))
}

func (f fulltextItemWordDo) Joins(fields ...field.RelationField) *fulltextItemWordDo {
	for _, _f := range fields {
		f = *f.withDO(f.DO.Joins(_f))
	}
	return &f
}

func (f fulltextItemWordDo) Preload(fields ...field.RelationField) *fulltextItemWordDo {
	for _, _f := range fields {
		f = *f.withDO(f.DO.Preload(_f))
	}
	return &f
}

func (f fulltextItemWordDo) FirstOrInit() (*model.FulltextItemWord, error) {
	if result, err := f.DO.FirstOrInit(); err != nil {
		return nil, err
	} else {
		return result.(*model.FulltextItemWord), nil
	}
}

func (f fulltextItemWordDo) FirstOrCreate() (*model.FulltextItemWord, error) {
	if result, err := f.DO.FirstOrCreate(); err != nil {
		return nil, err
	} else {
		return result.(*model.FulltextItemWord), nil
	}
}

func (f fulltextItemWordDo) FindByPage(offset int, limit int) (result []*model.FulltextItemWord, count int64, err error) {
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

func (f fulltextItemWordDo) ScanByPage(result interface{}, offset int, limit int) (count int64, err error) {
	count, err = f.Count()
	if err != nil {
		return
	}

	err = f.Offset(offset).Limit(limit).Scan(result)
	return
}

func (f fulltextItemWordDo) Scan(result interface{}) (err error) {
	return f.DO.Scan(result)
}

func (f fulltextItemWordDo) Delete(models ...*model.FulltextItemWord) (result gen.ResultInfo, err error) {
	return f.DO.Delete(models)
}

func (f *fulltextItemWordDo) withDO(do gen.Dao) *fulltextItemWordDo {
	f.DO = *do.(*gen.DO)
	return f
}