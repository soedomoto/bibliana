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

func newGroupItem(db *gorm.DB, opts ...gen.DOOption) groupItem {
	_groupItem := groupItem{}

	_groupItem.groupItemDo.UseDB(db, opts...)
	_groupItem.groupItemDo.UseModel(&model.GroupItem{})

	tableName := _groupItem.groupItemDo.TableName()
	_groupItem.ALL = field.NewAsterisk(tableName)
	_groupItem.ItemID = field.NewInt32(tableName, "itemID")
	_groupItem.CreatedByUserID = field.NewInt32(tableName, "createdByUserID")
	_groupItem.LastModifiedByUserID = field.NewInt32(tableName, "lastModifiedByUserID")

	_groupItem.fillFieldMap()

	return _groupItem
}

type groupItem struct {
	groupItemDo groupItemDo

	ALL                  field.Asterisk
	ItemID               field.Int32
	CreatedByUserID      field.Int32
	LastModifiedByUserID field.Int32

	fieldMap map[string]field.Expr
}

func (g groupItem) Table(newTableName string) *groupItem {
	g.groupItemDo.UseTable(newTableName)
	return g.updateTableName(newTableName)
}

func (g groupItem) As(alias string) *groupItem {
	g.groupItemDo.DO = *(g.groupItemDo.As(alias).(*gen.DO))
	return g.updateTableName(alias)
}

func (g *groupItem) updateTableName(table string) *groupItem {
	g.ALL = field.NewAsterisk(table)
	g.ItemID = field.NewInt32(table, "itemID")
	g.CreatedByUserID = field.NewInt32(table, "createdByUserID")
	g.LastModifiedByUserID = field.NewInt32(table, "lastModifiedByUserID")

	g.fillFieldMap()

	return g
}

func (g *groupItem) WithContext(ctx context.Context) *groupItemDo {
	return g.groupItemDo.WithContext(ctx)
}

func (g groupItem) TableName() string { return g.groupItemDo.TableName() }

func (g groupItem) Alias() string { return g.groupItemDo.Alias() }

func (g groupItem) Columns(cols ...field.Expr) gen.Columns { return g.groupItemDo.Columns(cols...) }

func (g *groupItem) GetFieldByName(fieldName string) (field.OrderExpr, bool) {
	_f, ok := g.fieldMap[fieldName]
	if !ok || _f == nil {
		return nil, false
	}
	_oe, ok := _f.(field.OrderExpr)
	return _oe, ok
}

func (g *groupItem) fillFieldMap() {
	g.fieldMap = make(map[string]field.Expr, 3)
	g.fieldMap["itemID"] = g.ItemID
	g.fieldMap["createdByUserID"] = g.CreatedByUserID
	g.fieldMap["lastModifiedByUserID"] = g.LastModifiedByUserID
}

func (g groupItem) clone(db *gorm.DB) groupItem {
	g.groupItemDo.ReplaceConnPool(db.Statement.ConnPool)
	return g
}

func (g groupItem) replaceDB(db *gorm.DB) groupItem {
	g.groupItemDo.ReplaceDB(db)
	return g
}

type groupItemDo struct{ gen.DO }

func (g groupItemDo) Debug() *groupItemDo {
	return g.withDO(g.DO.Debug())
}

func (g groupItemDo) WithContext(ctx context.Context) *groupItemDo {
	return g.withDO(g.DO.WithContext(ctx))
}

func (g groupItemDo) ReadDB() *groupItemDo {
	return g.Clauses(dbresolver.Read)
}

func (g groupItemDo) WriteDB() *groupItemDo {
	return g.Clauses(dbresolver.Write)
}

func (g groupItemDo) Session(config *gorm.Session) *groupItemDo {
	return g.withDO(g.DO.Session(config))
}

func (g groupItemDo) Clauses(conds ...clause.Expression) *groupItemDo {
	return g.withDO(g.DO.Clauses(conds...))
}

func (g groupItemDo) Returning(value interface{}, columns ...string) *groupItemDo {
	return g.withDO(g.DO.Returning(value, columns...))
}

func (g groupItemDo) Not(conds ...gen.Condition) *groupItemDo {
	return g.withDO(g.DO.Not(conds...))
}

func (g groupItemDo) Or(conds ...gen.Condition) *groupItemDo {
	return g.withDO(g.DO.Or(conds...))
}

func (g groupItemDo) Select(conds ...field.Expr) *groupItemDo {
	return g.withDO(g.DO.Select(conds...))
}

func (g groupItemDo) Where(conds ...gen.Condition) *groupItemDo {
	return g.withDO(g.DO.Where(conds...))
}

func (g groupItemDo) Order(conds ...field.Expr) *groupItemDo {
	return g.withDO(g.DO.Order(conds...))
}

func (g groupItemDo) Distinct(cols ...field.Expr) *groupItemDo {
	return g.withDO(g.DO.Distinct(cols...))
}

func (g groupItemDo) Omit(cols ...field.Expr) *groupItemDo {
	return g.withDO(g.DO.Omit(cols...))
}

func (g groupItemDo) Join(table schema.Tabler, on ...field.Expr) *groupItemDo {
	return g.withDO(g.DO.Join(table, on...))
}

func (g groupItemDo) LeftJoin(table schema.Tabler, on ...field.Expr) *groupItemDo {
	return g.withDO(g.DO.LeftJoin(table, on...))
}

func (g groupItemDo) RightJoin(table schema.Tabler, on ...field.Expr) *groupItemDo {
	return g.withDO(g.DO.RightJoin(table, on...))
}

func (g groupItemDo) Group(cols ...field.Expr) *groupItemDo {
	return g.withDO(g.DO.Group(cols...))
}

func (g groupItemDo) Having(conds ...gen.Condition) *groupItemDo {
	return g.withDO(g.DO.Having(conds...))
}

func (g groupItemDo) Limit(limit int) *groupItemDo {
	return g.withDO(g.DO.Limit(limit))
}

func (g groupItemDo) Offset(offset int) *groupItemDo {
	return g.withDO(g.DO.Offset(offset))
}

func (g groupItemDo) Scopes(funcs ...func(gen.Dao) gen.Dao) *groupItemDo {
	return g.withDO(g.DO.Scopes(funcs...))
}

func (g groupItemDo) Unscoped() *groupItemDo {
	return g.withDO(g.DO.Unscoped())
}

func (g groupItemDo) Create(values ...*model.GroupItem) error {
	if len(values) == 0 {
		return nil
	}
	return g.DO.Create(values)
}

func (g groupItemDo) CreateInBatches(values []*model.GroupItem, batchSize int) error {
	return g.DO.CreateInBatches(values, batchSize)
}

// Save : !!! underlying implementation is different with GORM
// The method is equivalent to executing the statement: db.Clauses(clause.OnConflict{UpdateAll: true}).Create(values)
func (g groupItemDo) Save(values ...*model.GroupItem) error {
	if len(values) == 0 {
		return nil
	}
	return g.DO.Save(values)
}

func (g groupItemDo) First() (*model.GroupItem, error) {
	if result, err := g.DO.First(); err != nil {
		return nil, err
	} else {
		return result.(*model.GroupItem), nil
	}
}

func (g groupItemDo) Take() (*model.GroupItem, error) {
	if result, err := g.DO.Take(); err != nil {
		return nil, err
	} else {
		return result.(*model.GroupItem), nil
	}
}

func (g groupItemDo) Last() (*model.GroupItem, error) {
	if result, err := g.DO.Last(); err != nil {
		return nil, err
	} else {
		return result.(*model.GroupItem), nil
	}
}

func (g groupItemDo) Find() ([]*model.GroupItem, error) {
	result, err := g.DO.Find()
	return result.([]*model.GroupItem), err
}

func (g groupItemDo) FindInBatch(batchSize int, fc func(tx gen.Dao, batch int) error) (results []*model.GroupItem, err error) {
	buf := make([]*model.GroupItem, 0, batchSize)
	err = g.DO.FindInBatches(&buf, batchSize, func(tx gen.Dao, batch int) error {
		defer func() { results = append(results, buf...) }()
		return fc(tx, batch)
	})
	return results, err
}

func (g groupItemDo) FindInBatches(result *[]*model.GroupItem, batchSize int, fc func(tx gen.Dao, batch int) error) error {
	return g.DO.FindInBatches(result, batchSize, fc)
}

func (g groupItemDo) Attrs(attrs ...field.AssignExpr) *groupItemDo {
	return g.withDO(g.DO.Attrs(attrs...))
}

func (g groupItemDo) Assign(attrs ...field.AssignExpr) *groupItemDo {
	return g.withDO(g.DO.Assign(attrs...))
}

func (g groupItemDo) Joins(fields ...field.RelationField) *groupItemDo {
	for _, _f := range fields {
		g = *g.withDO(g.DO.Joins(_f))
	}
	return &g
}

func (g groupItemDo) Preload(fields ...field.RelationField) *groupItemDo {
	for _, _f := range fields {
		g = *g.withDO(g.DO.Preload(_f))
	}
	return &g
}

func (g groupItemDo) FirstOrInit() (*model.GroupItem, error) {
	if result, err := g.DO.FirstOrInit(); err != nil {
		return nil, err
	} else {
		return result.(*model.GroupItem), nil
	}
}

func (g groupItemDo) FirstOrCreate() (*model.GroupItem, error) {
	if result, err := g.DO.FirstOrCreate(); err != nil {
		return nil, err
	} else {
		return result.(*model.GroupItem), nil
	}
}

func (g groupItemDo) FindByPage(offset int, limit int) (result []*model.GroupItem, count int64, err error) {
	result, err = g.Offset(offset).Limit(limit).Find()
	if err != nil {
		return
	}

	if size := len(result); 0 < limit && 0 < size && size < limit {
		count = int64(size + offset)
		return
	}

	count, err = g.Offset(-1).Limit(-1).Count()
	return
}

func (g groupItemDo) ScanByPage(result interface{}, offset int, limit int) (count int64, err error) {
	count, err = g.Count()
	if err != nil {
		return
	}

	err = g.Offset(offset).Limit(limit).Scan(result)
	return
}

func (g groupItemDo) Scan(result interface{}) (err error) {
	return g.DO.Scan(result)
}

func (g groupItemDo) Delete(models ...*model.GroupItem) (result gen.ResultInfo, err error) {
	return g.DO.Delete(models)
}

func (g *groupItemDo) withDO(do gen.Dao) *groupItemDo {
	g.DO = *do.(*gen.DO)
	return g
}