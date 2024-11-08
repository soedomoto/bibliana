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

func newCustomItemType(db *gorm.DB, opts ...gen.DOOption) customItemType {
	_customItemType := customItemType{}

	_customItemType.customItemTypeDo.UseDB(db, opts...)
	_customItemType.customItemTypeDo.UseModel(&model.CustomItemType{})

	tableName := _customItemType.customItemTypeDo.TableName()
	_customItemType.ALL = field.NewAsterisk(tableName)
	_customItemType.CustomItemTypeID = field.NewInt32(tableName, "customItemTypeID")
	_customItemType.TypeName = field.NewString(tableName, "typeName")
	_customItemType.Label = field.NewString(tableName, "label")
	_customItemType.Display = field.NewInt32(tableName, "display")
	_customItemType.Icon = field.NewString(tableName, "icon")

	_customItemType.fillFieldMap()

	return _customItemType
}

type customItemType struct {
	customItemTypeDo customItemTypeDo

	ALL              field.Asterisk
	CustomItemTypeID field.Int32
	TypeName         field.String
	Label            field.String
	Display          field.Int32
	Icon             field.String

	fieldMap map[string]field.Expr
}

func (c customItemType) Table(newTableName string) *customItemType {
	c.customItemTypeDo.UseTable(newTableName)
	return c.updateTableName(newTableName)
}

func (c customItemType) As(alias string) *customItemType {
	c.customItemTypeDo.DO = *(c.customItemTypeDo.As(alias).(*gen.DO))
	return c.updateTableName(alias)
}

func (c *customItemType) updateTableName(table string) *customItemType {
	c.ALL = field.NewAsterisk(table)
	c.CustomItemTypeID = field.NewInt32(table, "customItemTypeID")
	c.TypeName = field.NewString(table, "typeName")
	c.Label = field.NewString(table, "label")
	c.Display = field.NewInt32(table, "display")
	c.Icon = field.NewString(table, "icon")

	c.fillFieldMap()

	return c
}

func (c *customItemType) WithContext(ctx context.Context) *customItemTypeDo {
	return c.customItemTypeDo.WithContext(ctx)
}

func (c customItemType) TableName() string { return c.customItemTypeDo.TableName() }

func (c customItemType) Alias() string { return c.customItemTypeDo.Alias() }

func (c customItemType) Columns(cols ...field.Expr) gen.Columns {
	return c.customItemTypeDo.Columns(cols...)
}

func (c *customItemType) GetFieldByName(fieldName string) (field.OrderExpr, bool) {
	_f, ok := c.fieldMap[fieldName]
	if !ok || _f == nil {
		return nil, false
	}
	_oe, ok := _f.(field.OrderExpr)
	return _oe, ok
}

func (c *customItemType) fillFieldMap() {
	c.fieldMap = make(map[string]field.Expr, 5)
	c.fieldMap["customItemTypeID"] = c.CustomItemTypeID
	c.fieldMap["typeName"] = c.TypeName
	c.fieldMap["label"] = c.Label
	c.fieldMap["display"] = c.Display
	c.fieldMap["icon"] = c.Icon
}

func (c customItemType) clone(db *gorm.DB) customItemType {
	c.customItemTypeDo.ReplaceConnPool(db.Statement.ConnPool)
	return c
}

func (c customItemType) replaceDB(db *gorm.DB) customItemType {
	c.customItemTypeDo.ReplaceDB(db)
	return c
}

type customItemTypeDo struct{ gen.DO }

func (c customItemTypeDo) Debug() *customItemTypeDo {
	return c.withDO(c.DO.Debug())
}

func (c customItemTypeDo) WithContext(ctx context.Context) *customItemTypeDo {
	return c.withDO(c.DO.WithContext(ctx))
}

func (c customItemTypeDo) ReadDB() *customItemTypeDo {
	return c.Clauses(dbresolver.Read)
}

func (c customItemTypeDo) WriteDB() *customItemTypeDo {
	return c.Clauses(dbresolver.Write)
}

func (c customItemTypeDo) Session(config *gorm.Session) *customItemTypeDo {
	return c.withDO(c.DO.Session(config))
}

func (c customItemTypeDo) Clauses(conds ...clause.Expression) *customItemTypeDo {
	return c.withDO(c.DO.Clauses(conds...))
}

func (c customItemTypeDo) Returning(value interface{}, columns ...string) *customItemTypeDo {
	return c.withDO(c.DO.Returning(value, columns...))
}

func (c customItemTypeDo) Not(conds ...gen.Condition) *customItemTypeDo {
	return c.withDO(c.DO.Not(conds...))
}

func (c customItemTypeDo) Or(conds ...gen.Condition) *customItemTypeDo {
	return c.withDO(c.DO.Or(conds...))
}

func (c customItemTypeDo) Select(conds ...field.Expr) *customItemTypeDo {
	return c.withDO(c.DO.Select(conds...))
}

func (c customItemTypeDo) Where(conds ...gen.Condition) *customItemTypeDo {
	return c.withDO(c.DO.Where(conds...))
}

func (c customItemTypeDo) Order(conds ...field.Expr) *customItemTypeDo {
	return c.withDO(c.DO.Order(conds...))
}

func (c customItemTypeDo) Distinct(cols ...field.Expr) *customItemTypeDo {
	return c.withDO(c.DO.Distinct(cols...))
}

func (c customItemTypeDo) Omit(cols ...field.Expr) *customItemTypeDo {
	return c.withDO(c.DO.Omit(cols...))
}

func (c customItemTypeDo) Join(table schema.Tabler, on ...field.Expr) *customItemTypeDo {
	return c.withDO(c.DO.Join(table, on...))
}

func (c customItemTypeDo) LeftJoin(table schema.Tabler, on ...field.Expr) *customItemTypeDo {
	return c.withDO(c.DO.LeftJoin(table, on...))
}

func (c customItemTypeDo) RightJoin(table schema.Tabler, on ...field.Expr) *customItemTypeDo {
	return c.withDO(c.DO.RightJoin(table, on...))
}

func (c customItemTypeDo) Group(cols ...field.Expr) *customItemTypeDo {
	return c.withDO(c.DO.Group(cols...))
}

func (c customItemTypeDo) Having(conds ...gen.Condition) *customItemTypeDo {
	return c.withDO(c.DO.Having(conds...))
}

func (c customItemTypeDo) Limit(limit int) *customItemTypeDo {
	return c.withDO(c.DO.Limit(limit))
}

func (c customItemTypeDo) Offset(offset int) *customItemTypeDo {
	return c.withDO(c.DO.Offset(offset))
}

func (c customItemTypeDo) Scopes(funcs ...func(gen.Dao) gen.Dao) *customItemTypeDo {
	return c.withDO(c.DO.Scopes(funcs...))
}

func (c customItemTypeDo) Unscoped() *customItemTypeDo {
	return c.withDO(c.DO.Unscoped())
}

func (c customItemTypeDo) Create(values ...*model.CustomItemType) error {
	if len(values) == 0 {
		return nil
	}
	return c.DO.Create(values)
}

func (c customItemTypeDo) CreateInBatches(values []*model.CustomItemType, batchSize int) error {
	return c.DO.CreateInBatches(values, batchSize)
}

// Save : !!! underlying implementation is different with GORM
// The method is equivalent to executing the statement: db.Clauses(clause.OnConflict{UpdateAll: true}).Create(values)
func (c customItemTypeDo) Save(values ...*model.CustomItemType) error {
	if len(values) == 0 {
		return nil
	}
	return c.DO.Save(values)
}

func (c customItemTypeDo) First() (*model.CustomItemType, error) {
	if result, err := c.DO.First(); err != nil {
		return nil, err
	} else {
		return result.(*model.CustomItemType), nil
	}
}

func (c customItemTypeDo) Take() (*model.CustomItemType, error) {
	if result, err := c.DO.Take(); err != nil {
		return nil, err
	} else {
		return result.(*model.CustomItemType), nil
	}
}

func (c customItemTypeDo) Last() (*model.CustomItemType, error) {
	if result, err := c.DO.Last(); err != nil {
		return nil, err
	} else {
		return result.(*model.CustomItemType), nil
	}
}

func (c customItemTypeDo) Find() ([]*model.CustomItemType, error) {
	result, err := c.DO.Find()
	return result.([]*model.CustomItemType), err
}

func (c customItemTypeDo) FindInBatch(batchSize int, fc func(tx gen.Dao, batch int) error) (results []*model.CustomItemType, err error) {
	buf := make([]*model.CustomItemType, 0, batchSize)
	err = c.DO.FindInBatches(&buf, batchSize, func(tx gen.Dao, batch int) error {
		defer func() { results = append(results, buf...) }()
		return fc(tx, batch)
	})
	return results, err
}

func (c customItemTypeDo) FindInBatches(result *[]*model.CustomItemType, batchSize int, fc func(tx gen.Dao, batch int) error) error {
	return c.DO.FindInBatches(result, batchSize, fc)
}

func (c customItemTypeDo) Attrs(attrs ...field.AssignExpr) *customItemTypeDo {
	return c.withDO(c.DO.Attrs(attrs...))
}

func (c customItemTypeDo) Assign(attrs ...field.AssignExpr) *customItemTypeDo {
	return c.withDO(c.DO.Assign(attrs...))
}

func (c customItemTypeDo) Joins(fields ...field.RelationField) *customItemTypeDo {
	for _, _f := range fields {
		c = *c.withDO(c.DO.Joins(_f))
	}
	return &c
}

func (c customItemTypeDo) Preload(fields ...field.RelationField) *customItemTypeDo {
	for _, _f := range fields {
		c = *c.withDO(c.DO.Preload(_f))
	}
	return &c
}

func (c customItemTypeDo) FirstOrInit() (*model.CustomItemType, error) {
	if result, err := c.DO.FirstOrInit(); err != nil {
		return nil, err
	} else {
		return result.(*model.CustomItemType), nil
	}
}

func (c customItemTypeDo) FirstOrCreate() (*model.CustomItemType, error) {
	if result, err := c.DO.FirstOrCreate(); err != nil {
		return nil, err
	} else {
		return result.(*model.CustomItemType), nil
	}
}

func (c customItemTypeDo) FindByPage(offset int, limit int) (result []*model.CustomItemType, count int64, err error) {
	result, err = c.Offset(offset).Limit(limit).Find()
	if err != nil {
		return
	}

	if size := len(result); 0 < limit && 0 < size && size < limit {
		count = int64(size + offset)
		return
	}

	count, err = c.Offset(-1).Limit(-1).Count()
	return
}

func (c customItemTypeDo) ScanByPage(result interface{}, offset int, limit int) (count int64, err error) {
	count, err = c.Count()
	if err != nil {
		return
	}

	err = c.Offset(offset).Limit(limit).Scan(result)
	return
}

func (c customItemTypeDo) Scan(result interface{}) (err error) {
	return c.DO.Scan(result)
}

func (c customItemTypeDo) Delete(models ...*model.CustomItemType) (result gen.ResultInfo, err error) {
	return c.DO.Delete(models)
}

func (c *customItemTypeDo) withDO(do gen.Dao) *customItemTypeDo {
	c.DO = *do.(*gen.DO)
	return c
}
