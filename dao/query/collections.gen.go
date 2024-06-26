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

func newCollection(db *gorm.DB, opts ...gen.DOOption) collection {
	_collection := collection{}

	_collection.collectionDo.UseDB(db, opts...)
	_collection.collectionDo.UseModel(&model.Collection{})

	tableName := _collection.collectionDo.TableName()
	_collection.ALL = field.NewAsterisk(tableName)
	_collection.CollectionID = field.NewInt32(tableName, "collectionID")
	_collection.CollectionName = field.NewString(tableName, "collectionName")
	_collection.ParentCollectionID = field.NewInt32(tableName, "parentCollectionID")
	_collection.ClientDateModified = field.NewTime(tableName, "clientDateModified")
	_collection.LibraryID = field.NewInt32(tableName, "libraryID")
	_collection.Key = field.NewString(tableName, "key")
	_collection.Version = field.NewInt32(tableName, "version")
	_collection.Synced = field.NewInt32(tableName, "synced")

	_collection.fillFieldMap()

	return _collection
}

type collection struct {
	collectionDo collectionDo

	ALL                field.Asterisk
	CollectionID       field.Int32
	CollectionName     field.String
	ParentCollectionID field.Int32
	ClientDateModified field.Time
	LibraryID          field.Int32
	Key                field.String
	Version            field.Int32
	Synced             field.Int32

	fieldMap map[string]field.Expr
}

func (c collection) Table(newTableName string) *collection {
	c.collectionDo.UseTable(newTableName)
	return c.updateTableName(newTableName)
}

func (c collection) As(alias string) *collection {
	c.collectionDo.DO = *(c.collectionDo.As(alias).(*gen.DO))
	return c.updateTableName(alias)
}

func (c *collection) updateTableName(table string) *collection {
	c.ALL = field.NewAsterisk(table)
	c.CollectionID = field.NewInt32(table, "collectionID")
	c.CollectionName = field.NewString(table, "collectionName")
	c.ParentCollectionID = field.NewInt32(table, "parentCollectionID")
	c.ClientDateModified = field.NewTime(table, "clientDateModified")
	c.LibraryID = field.NewInt32(table, "libraryID")
	c.Key = field.NewString(table, "key")
	c.Version = field.NewInt32(table, "version")
	c.Synced = field.NewInt32(table, "synced")

	c.fillFieldMap()

	return c
}

func (c *collection) WithContext(ctx context.Context) *collectionDo {
	return c.collectionDo.WithContext(ctx)
}

func (c collection) TableName() string { return c.collectionDo.TableName() }

func (c collection) Alias() string { return c.collectionDo.Alias() }

func (c collection) Columns(cols ...field.Expr) gen.Columns { return c.collectionDo.Columns(cols...) }

func (c *collection) GetFieldByName(fieldName string) (field.OrderExpr, bool) {
	_f, ok := c.fieldMap[fieldName]
	if !ok || _f == nil {
		return nil, false
	}
	_oe, ok := _f.(field.OrderExpr)
	return _oe, ok
}

func (c *collection) fillFieldMap() {
	c.fieldMap = make(map[string]field.Expr, 8)
	c.fieldMap["collectionID"] = c.CollectionID
	c.fieldMap["collectionName"] = c.CollectionName
	c.fieldMap["parentCollectionID"] = c.ParentCollectionID
	c.fieldMap["clientDateModified"] = c.ClientDateModified
	c.fieldMap["libraryID"] = c.LibraryID
	c.fieldMap["key"] = c.Key
	c.fieldMap["version"] = c.Version
	c.fieldMap["synced"] = c.Synced
}

func (c collection) clone(db *gorm.DB) collection {
	c.collectionDo.ReplaceConnPool(db.Statement.ConnPool)
	return c
}

func (c collection) replaceDB(db *gorm.DB) collection {
	c.collectionDo.ReplaceDB(db)
	return c
}

type collectionDo struct{ gen.DO }

func (c collectionDo) Debug() *collectionDo {
	return c.withDO(c.DO.Debug())
}

func (c collectionDo) WithContext(ctx context.Context) *collectionDo {
	return c.withDO(c.DO.WithContext(ctx))
}

func (c collectionDo) ReadDB() *collectionDo {
	return c.Clauses(dbresolver.Read)
}

func (c collectionDo) WriteDB() *collectionDo {
	return c.Clauses(dbresolver.Write)
}

func (c collectionDo) Session(config *gorm.Session) *collectionDo {
	return c.withDO(c.DO.Session(config))
}

func (c collectionDo) Clauses(conds ...clause.Expression) *collectionDo {
	return c.withDO(c.DO.Clauses(conds...))
}

func (c collectionDo) Returning(value interface{}, columns ...string) *collectionDo {
	return c.withDO(c.DO.Returning(value, columns...))
}

func (c collectionDo) Not(conds ...gen.Condition) *collectionDo {
	return c.withDO(c.DO.Not(conds...))
}

func (c collectionDo) Or(conds ...gen.Condition) *collectionDo {
	return c.withDO(c.DO.Or(conds...))
}

func (c collectionDo) Select(conds ...field.Expr) *collectionDo {
	return c.withDO(c.DO.Select(conds...))
}

func (c collectionDo) Where(conds ...gen.Condition) *collectionDo {
	return c.withDO(c.DO.Where(conds...))
}

func (c collectionDo) Order(conds ...field.Expr) *collectionDo {
	return c.withDO(c.DO.Order(conds...))
}

func (c collectionDo) Distinct(cols ...field.Expr) *collectionDo {
	return c.withDO(c.DO.Distinct(cols...))
}

func (c collectionDo) Omit(cols ...field.Expr) *collectionDo {
	return c.withDO(c.DO.Omit(cols...))
}

func (c collectionDo) Join(table schema.Tabler, on ...field.Expr) *collectionDo {
	return c.withDO(c.DO.Join(table, on...))
}

func (c collectionDo) LeftJoin(table schema.Tabler, on ...field.Expr) *collectionDo {
	return c.withDO(c.DO.LeftJoin(table, on...))
}

func (c collectionDo) RightJoin(table schema.Tabler, on ...field.Expr) *collectionDo {
	return c.withDO(c.DO.RightJoin(table, on...))
}

func (c collectionDo) Group(cols ...field.Expr) *collectionDo {
	return c.withDO(c.DO.Group(cols...))
}

func (c collectionDo) Having(conds ...gen.Condition) *collectionDo {
	return c.withDO(c.DO.Having(conds...))
}

func (c collectionDo) Limit(limit int) *collectionDo {
	return c.withDO(c.DO.Limit(limit))
}

func (c collectionDo) Offset(offset int) *collectionDo {
	return c.withDO(c.DO.Offset(offset))
}

func (c collectionDo) Scopes(funcs ...func(gen.Dao) gen.Dao) *collectionDo {
	return c.withDO(c.DO.Scopes(funcs...))
}

func (c collectionDo) Unscoped() *collectionDo {
	return c.withDO(c.DO.Unscoped())
}

func (c collectionDo) Create(values ...*model.Collection) error {
	if len(values) == 0 {
		return nil
	}
	return c.DO.Create(values)
}

func (c collectionDo) CreateInBatches(values []*model.Collection, batchSize int) error {
	return c.DO.CreateInBatches(values, batchSize)
}

// Save : !!! underlying implementation is different with GORM
// The method is equivalent to executing the statement: db.Clauses(clause.OnConflict{UpdateAll: true}).Create(values)
func (c collectionDo) Save(values ...*model.Collection) error {
	if len(values) == 0 {
		return nil
	}
	return c.DO.Save(values)
}

func (c collectionDo) First() (*model.Collection, error) {
	if result, err := c.DO.First(); err != nil {
		return nil, err
	} else {
		return result.(*model.Collection), nil
	}
}

func (c collectionDo) Take() (*model.Collection, error) {
	if result, err := c.DO.Take(); err != nil {
		return nil, err
	} else {
		return result.(*model.Collection), nil
	}
}

func (c collectionDo) Last() (*model.Collection, error) {
	if result, err := c.DO.Last(); err != nil {
		return nil, err
	} else {
		return result.(*model.Collection), nil
	}
}

func (c collectionDo) Find() ([]*model.Collection, error) {
	result, err := c.DO.Find()
	return result.([]*model.Collection), err
}

func (c collectionDo) FindInBatch(batchSize int, fc func(tx gen.Dao, batch int) error) (results []*model.Collection, err error) {
	buf := make([]*model.Collection, 0, batchSize)
	err = c.DO.FindInBatches(&buf, batchSize, func(tx gen.Dao, batch int) error {
		defer func() { results = append(results, buf...) }()
		return fc(tx, batch)
	})
	return results, err
}

func (c collectionDo) FindInBatches(result *[]*model.Collection, batchSize int, fc func(tx gen.Dao, batch int) error) error {
	return c.DO.FindInBatches(result, batchSize, fc)
}

func (c collectionDo) Attrs(attrs ...field.AssignExpr) *collectionDo {
	return c.withDO(c.DO.Attrs(attrs...))
}

func (c collectionDo) Assign(attrs ...field.AssignExpr) *collectionDo {
	return c.withDO(c.DO.Assign(attrs...))
}

func (c collectionDo) Joins(fields ...field.RelationField) *collectionDo {
	for _, _f := range fields {
		c = *c.withDO(c.DO.Joins(_f))
	}
	return &c
}

func (c collectionDo) Preload(fields ...field.RelationField) *collectionDo {
	for _, _f := range fields {
		c = *c.withDO(c.DO.Preload(_f))
	}
	return &c
}

func (c collectionDo) FirstOrInit() (*model.Collection, error) {
	if result, err := c.DO.FirstOrInit(); err != nil {
		return nil, err
	} else {
		return result.(*model.Collection), nil
	}
}

func (c collectionDo) FirstOrCreate() (*model.Collection, error) {
	if result, err := c.DO.FirstOrCreate(); err != nil {
		return nil, err
	} else {
		return result.(*model.Collection), nil
	}
}

func (c collectionDo) FindByPage(offset int, limit int) (result []*model.Collection, count int64, err error) {
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

func (c collectionDo) ScanByPage(result interface{}, offset int, limit int) (count int64, err error) {
	count, err = c.Count()
	if err != nil {
		return
	}

	err = c.Offset(offset).Limit(limit).Scan(result)
	return
}

func (c collectionDo) Scan(result interface{}) (err error) {
	return c.DO.Scan(result)
}

func (c collectionDo) Delete(models ...*model.Collection) (result gen.ResultInfo, err error) {
	return c.DO.Delete(models)
}

func (c *collectionDo) withDO(do gen.Dao) *collectionDo {
	c.DO = *do.(*gen.DO)
	return c
}
