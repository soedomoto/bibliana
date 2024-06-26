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

func newPublicationsItem(db *gorm.DB, opts ...gen.DOOption) publicationsItem {
	_publicationsItem := publicationsItem{}

	_publicationsItem.publicationsItemDo.UseDB(db, opts...)
	_publicationsItem.publicationsItemDo.UseModel(&model.PublicationsItem{})

	tableName := _publicationsItem.publicationsItemDo.TableName()
	_publicationsItem.ALL = field.NewAsterisk(tableName)
	_publicationsItem.ItemID = field.NewInt32(tableName, "itemID")

	_publicationsItem.fillFieldMap()

	return _publicationsItem
}

type publicationsItem struct {
	publicationsItemDo publicationsItemDo

	ALL    field.Asterisk
	ItemID field.Int32

	fieldMap map[string]field.Expr
}

func (p publicationsItem) Table(newTableName string) *publicationsItem {
	p.publicationsItemDo.UseTable(newTableName)
	return p.updateTableName(newTableName)
}

func (p publicationsItem) As(alias string) *publicationsItem {
	p.publicationsItemDo.DO = *(p.publicationsItemDo.As(alias).(*gen.DO))
	return p.updateTableName(alias)
}

func (p *publicationsItem) updateTableName(table string) *publicationsItem {
	p.ALL = field.NewAsterisk(table)
	p.ItemID = field.NewInt32(table, "itemID")

	p.fillFieldMap()

	return p
}

func (p *publicationsItem) WithContext(ctx context.Context) *publicationsItemDo {
	return p.publicationsItemDo.WithContext(ctx)
}

func (p publicationsItem) TableName() string { return p.publicationsItemDo.TableName() }

func (p publicationsItem) Alias() string { return p.publicationsItemDo.Alias() }

func (p publicationsItem) Columns(cols ...field.Expr) gen.Columns {
	return p.publicationsItemDo.Columns(cols...)
}

func (p *publicationsItem) GetFieldByName(fieldName string) (field.OrderExpr, bool) {
	_f, ok := p.fieldMap[fieldName]
	if !ok || _f == nil {
		return nil, false
	}
	_oe, ok := _f.(field.OrderExpr)
	return _oe, ok
}

func (p *publicationsItem) fillFieldMap() {
	p.fieldMap = make(map[string]field.Expr, 1)
	p.fieldMap["itemID"] = p.ItemID
}

func (p publicationsItem) clone(db *gorm.DB) publicationsItem {
	p.publicationsItemDo.ReplaceConnPool(db.Statement.ConnPool)
	return p
}

func (p publicationsItem) replaceDB(db *gorm.DB) publicationsItem {
	p.publicationsItemDo.ReplaceDB(db)
	return p
}

type publicationsItemDo struct{ gen.DO }

func (p publicationsItemDo) Debug() *publicationsItemDo {
	return p.withDO(p.DO.Debug())
}

func (p publicationsItemDo) WithContext(ctx context.Context) *publicationsItemDo {
	return p.withDO(p.DO.WithContext(ctx))
}

func (p publicationsItemDo) ReadDB() *publicationsItemDo {
	return p.Clauses(dbresolver.Read)
}

func (p publicationsItemDo) WriteDB() *publicationsItemDo {
	return p.Clauses(dbresolver.Write)
}

func (p publicationsItemDo) Session(config *gorm.Session) *publicationsItemDo {
	return p.withDO(p.DO.Session(config))
}

func (p publicationsItemDo) Clauses(conds ...clause.Expression) *publicationsItemDo {
	return p.withDO(p.DO.Clauses(conds...))
}

func (p publicationsItemDo) Returning(value interface{}, columns ...string) *publicationsItemDo {
	return p.withDO(p.DO.Returning(value, columns...))
}

func (p publicationsItemDo) Not(conds ...gen.Condition) *publicationsItemDo {
	return p.withDO(p.DO.Not(conds...))
}

func (p publicationsItemDo) Or(conds ...gen.Condition) *publicationsItemDo {
	return p.withDO(p.DO.Or(conds...))
}

func (p publicationsItemDo) Select(conds ...field.Expr) *publicationsItemDo {
	return p.withDO(p.DO.Select(conds...))
}

func (p publicationsItemDo) Where(conds ...gen.Condition) *publicationsItemDo {
	return p.withDO(p.DO.Where(conds...))
}

func (p publicationsItemDo) Order(conds ...field.Expr) *publicationsItemDo {
	return p.withDO(p.DO.Order(conds...))
}

func (p publicationsItemDo) Distinct(cols ...field.Expr) *publicationsItemDo {
	return p.withDO(p.DO.Distinct(cols...))
}

func (p publicationsItemDo) Omit(cols ...field.Expr) *publicationsItemDo {
	return p.withDO(p.DO.Omit(cols...))
}

func (p publicationsItemDo) Join(table schema.Tabler, on ...field.Expr) *publicationsItemDo {
	return p.withDO(p.DO.Join(table, on...))
}

func (p publicationsItemDo) LeftJoin(table schema.Tabler, on ...field.Expr) *publicationsItemDo {
	return p.withDO(p.DO.LeftJoin(table, on...))
}

func (p publicationsItemDo) RightJoin(table schema.Tabler, on ...field.Expr) *publicationsItemDo {
	return p.withDO(p.DO.RightJoin(table, on...))
}

func (p publicationsItemDo) Group(cols ...field.Expr) *publicationsItemDo {
	return p.withDO(p.DO.Group(cols...))
}

func (p publicationsItemDo) Having(conds ...gen.Condition) *publicationsItemDo {
	return p.withDO(p.DO.Having(conds...))
}

func (p publicationsItemDo) Limit(limit int) *publicationsItemDo {
	return p.withDO(p.DO.Limit(limit))
}

func (p publicationsItemDo) Offset(offset int) *publicationsItemDo {
	return p.withDO(p.DO.Offset(offset))
}

func (p publicationsItemDo) Scopes(funcs ...func(gen.Dao) gen.Dao) *publicationsItemDo {
	return p.withDO(p.DO.Scopes(funcs...))
}

func (p publicationsItemDo) Unscoped() *publicationsItemDo {
	return p.withDO(p.DO.Unscoped())
}

func (p publicationsItemDo) Create(values ...*model.PublicationsItem) error {
	if len(values) == 0 {
		return nil
	}
	return p.DO.Create(values)
}

func (p publicationsItemDo) CreateInBatches(values []*model.PublicationsItem, batchSize int) error {
	return p.DO.CreateInBatches(values, batchSize)
}

// Save : !!! underlying implementation is different with GORM
// The method is equivalent to executing the statement: db.Clauses(clause.OnConflict{UpdateAll: true}).Create(values)
func (p publicationsItemDo) Save(values ...*model.PublicationsItem) error {
	if len(values) == 0 {
		return nil
	}
	return p.DO.Save(values)
}

func (p publicationsItemDo) First() (*model.PublicationsItem, error) {
	if result, err := p.DO.First(); err != nil {
		return nil, err
	} else {
		return result.(*model.PublicationsItem), nil
	}
}

func (p publicationsItemDo) Take() (*model.PublicationsItem, error) {
	if result, err := p.DO.Take(); err != nil {
		return nil, err
	} else {
		return result.(*model.PublicationsItem), nil
	}
}

func (p publicationsItemDo) Last() (*model.PublicationsItem, error) {
	if result, err := p.DO.Last(); err != nil {
		return nil, err
	} else {
		return result.(*model.PublicationsItem), nil
	}
}

func (p publicationsItemDo) Find() ([]*model.PublicationsItem, error) {
	result, err := p.DO.Find()
	return result.([]*model.PublicationsItem), err
}

func (p publicationsItemDo) FindInBatch(batchSize int, fc func(tx gen.Dao, batch int) error) (results []*model.PublicationsItem, err error) {
	buf := make([]*model.PublicationsItem, 0, batchSize)
	err = p.DO.FindInBatches(&buf, batchSize, func(tx gen.Dao, batch int) error {
		defer func() { results = append(results, buf...) }()
		return fc(tx, batch)
	})
	return results, err
}

func (p publicationsItemDo) FindInBatches(result *[]*model.PublicationsItem, batchSize int, fc func(tx gen.Dao, batch int) error) error {
	return p.DO.FindInBatches(result, batchSize, fc)
}

func (p publicationsItemDo) Attrs(attrs ...field.AssignExpr) *publicationsItemDo {
	return p.withDO(p.DO.Attrs(attrs...))
}

func (p publicationsItemDo) Assign(attrs ...field.AssignExpr) *publicationsItemDo {
	return p.withDO(p.DO.Assign(attrs...))
}

func (p publicationsItemDo) Joins(fields ...field.RelationField) *publicationsItemDo {
	for _, _f := range fields {
		p = *p.withDO(p.DO.Joins(_f))
	}
	return &p
}

func (p publicationsItemDo) Preload(fields ...field.RelationField) *publicationsItemDo {
	for _, _f := range fields {
		p = *p.withDO(p.DO.Preload(_f))
	}
	return &p
}

func (p publicationsItemDo) FirstOrInit() (*model.PublicationsItem, error) {
	if result, err := p.DO.FirstOrInit(); err != nil {
		return nil, err
	} else {
		return result.(*model.PublicationsItem), nil
	}
}

func (p publicationsItemDo) FirstOrCreate() (*model.PublicationsItem, error) {
	if result, err := p.DO.FirstOrCreate(); err != nil {
		return nil, err
	} else {
		return result.(*model.PublicationsItem), nil
	}
}

func (p publicationsItemDo) FindByPage(offset int, limit int) (result []*model.PublicationsItem, count int64, err error) {
	result, err = p.Offset(offset).Limit(limit).Find()
	if err != nil {
		return
	}

	if size := len(result); 0 < limit && 0 < size && size < limit {
		count = int64(size + offset)
		return
	}

	count, err = p.Offset(-1).Limit(-1).Count()
	return
}

func (p publicationsItemDo) ScanByPage(result interface{}, offset int, limit int) (count int64, err error) {
	count, err = p.Count()
	if err != nil {
		return
	}

	err = p.Offset(offset).Limit(limit).Scan(result)
	return
}

func (p publicationsItemDo) Scan(result interface{}) (err error) {
	return p.DO.Scan(result)
}

func (p publicationsItemDo) Delete(models ...*model.PublicationsItem) (result gen.ResultInfo, err error) {
	return p.DO.Delete(models)
}

func (p *publicationsItemDo) withDO(do gen.Dao) *publicationsItemDo {
	p.DO = *do.(*gen.DO)
	return p
}