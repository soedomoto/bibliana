package backend

import "context"

type Counter struct {
	ctx   context.Context
	count int32
}

func NewCounter() *Counter {
	return &Counter{
		count: 0,
	}
}

func (a *Counter) Increase() int32 {
	a.count = a.count + 1
	return a.count
}
