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

func newItemTypesCombined(db *gorm.DB, opts ...gen.DOOption) itemTypesCombined {
	_itemTypesCombined := itemTypesCombined{}

	_itemTypesCombined.itemTypesCombinedDo.UseDB(db, opts...)
	_itemTypesCombined.itemTypesCombinedDo.UseModel(&model.ItemTypesCombined{})

	tableName := _itemTypesCombined.itemTypesCombinedDo.TableName()
	_itemTypesCombined.ALL = field.NewAsterisk(tableName)
	_itemTypesCombined.ItemTypeID = field.NewInt32(tableName, "itemTypeID")
	_itemTypesCombined.TypeName = field.NewString(tableName, "typeName")
	_itemTypesCombined.Display = field.NewInt32(tableName, "display")
	_itemTypesCombined.Custom = field.NewInt32(tableName, "custom")

	_itemTypesCombined.fillFieldMap()

	return _itemTypesCombined
}

type itemTypesCombined struct {
	itemTypesCombinedDo itemTypesCombinedDo

	ALL        field.Asterisk
	ItemTypeID field.Int32
	TypeName   field.String
	Display    field.Int32
	Custom     field.Int32

	fieldMap map[string]field.Expr
}

func (i itemTypesCombined) Table(newTableName string) *itemTypesCombined {
	i.itemTypesCombinedDo.UseTable(newTableName)
	return i.updateTableName(newTableName)
}

func (i itemTypesCombined) As(alias string) *itemTypesCombined {
	i.itemTypesCombinedDo.DO = *(i.itemTypesCombinedDo.As(alias).(*gen.DO))
	return i.updateTableName(alias)
}

func (i *itemTypesCombined) updateTableName(table string) *itemTypesCombined {
	i.ALL = field.NewAsterisk(table)
	i.ItemTypeID = field.NewInt32(table, "itemTypeID")
	i.TypeName = field.NewString(table, "typeName")
	i.Display = field.NewInt32(table, "display")
	i.Custom = field.NewInt32(table, "custom")

	i.fillFieldMap()

	return i
}

func (i *itemTypesCombined) WithContext(ctx context.Context) *itemTypesCombinedDo {
	return i.itemTypesCombinedDo.WithContext(ctx)
}

func (i itemTypesCombined) TableName() string { return i.itemTypesCombinedDo.TableName() }

func (i itemTypesCombined) Alias() string { return i.itemTypesCombinedDo.Alias() }

func (i itemTypesCombined) Columns(cols ...field.Expr) gen.Columns {
	return i.itemTypesCombinedDo.Columns(cols...)
}

func (i *itemTypesCombined) GetFieldByName(fieldName string) (field.OrderExpr, bool) {
	_f, ok := i.fieldMap[fieldName]
	if !ok || _f == nil {
		return nil, false
	}
	_oe, ok := _f.(field.OrderExpr)
	return _oe, ok
}

func (i *itemTypesCombined) fillFieldMap() {
	i.fieldMap = make(map[string]field.Expr, 4)
	i.fieldMap["itemTypeID"] = i.ItemTypeID
	i.fieldMap["typeName"] = i.TypeName
	i.fieldMap["display"] = i.Display
	i.fieldMap["custom"] = i.Custom
}

func (i itemTypesCombined) clone(db *gorm.DB) itemTypesCombined {
	i.itemTypesCombinedDo.ReplaceConnPool(db.Statement.ConnPool)
	return i
}

func (i itemTypesCombined) replaceDB(db *gorm.DB) itemTypesCombined {
	i.itemTypesCombinedDo.ReplaceDB(db)
	return i
}

type itemTypesCombinedDo struct{ gen.DO }

func (i itemTypesCombinedDo) Debug() *itemTypesCombinedDo {
	return i.withDO(i.DO.Debug())
}

func (i itemTypesCombinedDo) WithContext(ctx context.Context) *itemTypesCombinedDo {
	return i.withDO(i.DO.WithContext(ctx))
}

func (i itemTypesCombinedDo) ReadDB() *itemTypesCombinedDo {
	return i.Clauses(dbresolver.Read)
}

func (i itemTypesCombinedDo) WriteDB() *itemTypesCombinedDo {
	return i.Clauses(dbresolver.Write)
}

func (i itemTypesCombinedDo) Session(config *gorm.Session) *itemTypesCombinedDo {
	return i.withDO(i.DO.Session(config))
}

func (i itemTypesCombinedDo) Clauses(conds ...clause.Expression) *itemTypesCombinedDo {
	return i.withDO(i.DO.Clauses(conds...))
}

func (i itemTypesCombinedDo) Returning(value interface{}, columns ...string) *itemTypesCombinedDo {
	return i.withDO(i.DO.Returning(value, columns...))
}

func (i itemTypesCombinedDo) Not(conds ...gen.Condition) *itemTypesCombinedDo {
	return i.withDO(i.DO.Not(conds...))
}

func (i itemTypesCombinedDo) Or(conds ...gen.Condition) *itemTypesCombinedDo {
	return i.withDO(i.DO.Or(conds...))
}

func (i itemTypesCombinedDo) Select(conds ...field.Expr) *itemTypesCombinedDo {
	return i.withDO(i.DO.Select(conds...))
}

func (i itemTypesCombinedDo) Where(conds ...gen.Condition) *itemTypesCombinedDo {
	return i.withDO(i.DO.Where(conds...))
}

func (i itemTypesCombinedDo) Order(conds ...field.Expr) *itemTypesCombinedDo {
	return i.withDO(i.DO.Order(conds...))
}

func (i itemTypesCombinedDo) Distinct(cols ...field.Expr) *itemTypesCombinedDo {
	return i.withDO(i.DO.Distinct(cols...))
}

func (i itemTypesCombinedDo) Omit(cols ...field.Expr) *itemTypesCombinedDo {
	return i.withDO(i.DO.Omit(cols...))
}

func (i itemTypesCombinedDo) Join(table schema.Tabler, on ...field.Expr) *itemTypesCombinedDo {
	return i.withDO(i.DO.Join(table, on...))
}

func (i itemTypesCombinedDo) LeftJoin(table schema.Tabler, on ...field.Expr) *itemTypesCombinedDo {
	return i.withDO(i.DO.LeftJoin(table, on...))
}

func (i itemTypesCombinedDo) RightJoin(table schema.Tabler, on ...field.Expr) *itemTypesCombinedDo {
	return i.withDO(i.DO.RightJoin(table, on...))
}

func (i itemTypesCombinedDo) Group(cols ...field.Expr) *itemTypesCombinedDo {
	return i.withDO(i.DO.Group(cols...))
}

func (i itemTypesCombinedDo) Having(conds ...gen.Condition) *itemTypesCombinedDo {
	return i.withDO(i.DO.Having(conds...))
}

func (i itemTypesCombinedDo) Limit(limit int) *itemTypesCombinedDo {
	return i.withDO(i.DO.Limit(limit))
}

func (i itemTypesCombinedDo) Offset(offset int) *itemTypesCombinedDo {
	return i.withDO(i.DO.Offset(offset))
}

func (i itemTypesCombinedDo) Scopes(funcs ...func(gen.Dao) gen.Dao) *itemTypesCombinedDo {
	return i.withDO(i.DO.Scopes(funcs...))
}

func (i itemTypesCombinedDo) Unscoped() *itemTypesCombinedDo {
	return i.withDO(i.DO.Unscoped())
}

func (i itemTypesCombinedDo) Create(values ...*model.ItemTypesCombined) error {
	if len(values) == 0 {
		return nil
	}
	return i.DO.Create(values)
}

func (i itemTypesCombinedDo) CreateInBatches(values []*model.ItemTypesCombined, batchSize int) error {
	return i.DO.CreateInBatches(values, batchSize)
}

// Save : !!! underlying implementation is different with GORM
// The method is equivalent to executing the statement: db.Clauses(clause.OnConflict{UpdateAll: true}).Create(values)
func (i itemTypesCombinedDo) Save(values ...*model.ItemTypesCombined) error {
	if len(values) == 0 {
		return nil
	}
	return i.DO.Save(values)
}

func (i itemTypesCombinedDo) First() (*model.ItemTypesCombined, error) {
	if result, err := i.DO.First(); err != nil {
		return nil, err
	} else {
		return result.(*model.ItemTypesCombined), nil
	}
}

func (i itemTypesCombinedDo) Take() (*model.ItemTypesCombined, error) {
	if result, err := i.DO.Take(); err != nil {
		return nil, err
	} else {
		return result.(*model.ItemTypesCombined), nil
	}
}

func (i itemTypesCombinedDo) Last() (*model.ItemTypesCombined, error) {
	if result, err := i.DO.Last(); err != nil {
		return nil, err
	} else {
		return result.(*model.ItemTypesCombined), nil
	}
}

func (i itemTypesCombinedDo) Find() ([]*model.ItemTypesCombined, error) {
	result, err := i.DO.Find()
	return result.([]*model.ItemTypesCombined), err
}

func (i itemTypesCombinedDo) FindInBatch(batchSize int, fc func(tx gen.Dao, batch int) error) (results []*model.ItemTypesCombined, err error) {
	buf := make([]*model.ItemTypesCombined, 0, batchSize)
	err = i.DO.FindInBatches(&buf, batchSize, func(tx gen.Dao, batch int) error {
		defer func() { results = append(results, buf...) }()
		return fc(tx, batch)
	})
	return results, err
}

func (i itemTypesCombinedDo) FindInBatches(result *[]*model.ItemTypesCombined, batchSize int, fc func(tx gen.Dao, batch int) error) error {
	return i.DO.FindInBatches(result, batchSize, fc)
}

func (i itemTypesCombinedDo) Attrs(attrs ...field.AssignExpr) *itemTypesCombinedDo {
	return i.withDO(i.DO.Attrs(attrs...))
}

func (i itemTypesCombinedDo) Assign(attrs ...field.AssignExpr) *itemTypesCombinedDo {
	return i.withDO(i.DO.Assign(attrs...))
}

func (i itemTypesCombinedDo) Joins(fields ...field.RelationField) *itemTypesCombinedDo {
	for _, _f := range fields {
		i = *i.withDO(i.DO.Joins(_f))
	}
	return &i
}

func (i itemTypesCombinedDo) Preload(fields ...field.RelationField) *itemTypesCombinedDo {
	for _, _f := range fields {
		i = *i.withDO(i.DO.Preload(_f))
	}
	return &i
}

func (i itemTypesCombinedDo) FirstOrInit() (*model.ItemTypesCombined, error) {
	if result, err := i.DO.FirstOrInit(); err != nil {
		return nil, err
	} else {
		return result.(*model.ItemTypesCombined), nil
	}
}

func (i itemTypesCombinedDo) FirstOrCreate() (*model.ItemTypesCombined, error) {
	if result, err := i.DO.FirstOrCreate(); err != nil {
		return nil, err
	} else {
		return result.(*model.ItemTypesCombined), nil
	}
}

func (i itemTypesCombinedDo) FindByPage(offset int, limit int) (result []*model.ItemTypesCombined, count int64, err error) {
	result, err = i.Offset(offset).Limit(limit).Find()
	if err != nil {
		return
	}

	if size := len(result); 0 < limit && 0 < size && size < limit {
		count = int64(size + offset)
		return
	}

	count, err = i.Offset(-1).Limit(-1).Count()
	return
}

func (i itemTypesCombinedDo) ScanByPage(result interface{}, offset int, limit int) (count int64, err error) {
	count, err = i.Count()
	if err != nil {
		return
	}

	err = i.Offset(offset).Limit(limit).Scan(result)
	return
}

func (i itemTypesCombinedDo) Scan(result interface{}) (err error) {
	return i.DO.Scan(result)
}

func (i itemTypesCombinedDo) Delete(models ...*model.ItemTypesCombined) (result gen.ResultInfo, err error) {
	return i.DO.Delete(models)
}

func (i *itemTypesCombinedDo) withDO(do gen.Dao) *itemTypesCombinedDo {
	i.DO = *do.(*gen.DO)
	return i
}
