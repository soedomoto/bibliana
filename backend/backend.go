package backend

import (
	"bibliana/dao/query"
	"context"
)

var Q *query.Query

type Ipc struct {
	Data *Data
}

func NewIpc() *Ipc {
	return &Ipc{
		Data: NewData(),
	}
}

func (a *Ipc) OnStartup(ctx context.Context) {
	a.Data.OnStartup(ctx)
}

func (a *Ipc) AllService() []interface{} {
	return []interface{}{
		a.Data,
	}
}
