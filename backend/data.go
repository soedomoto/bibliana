package backend

import (
	"bibliana/dao/model"
	"bibliana/dao/query"
	"context"

	"github.com/wailsapp/wails/v2/pkg/runtime"
)

type FindParam struct {
	Take   int     `json:"take"`
	Skip   int     `json:"skip"`
	Filter *string `json:"filter"`
}

type Item struct {
	*model.Item
}

type FindResult struct {
	Count int64   `json:"count"`
	Data  []*Item `json:"data"`
}

type Data struct {
	ctx context.Context
	Q   *query.Query
}

func NewData() *Data {
	return &Data{}
}

func (a *Data) OnStartup(ctx context.Context) {
	a.ctx = ctx
}

func (a *Data) Find(param FindParam) FindResult {
	ItemDo := Q.Item.WithContext(a.ctx)
	_data, count, err := ItemDo.FindByPage(param.Skip, param.Take)

	if err != nil {
		runtime.LogError(a.ctx, err.Error())
	}

	data := make([]*Item, 0)
	for _, r := range _data {
		data = append(data, &Item{Item: r})
	}

	return FindResult{
		Data:  data,
		Count: count,
	}
}
