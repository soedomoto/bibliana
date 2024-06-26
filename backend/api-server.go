package backend

import (
	"context"
	"fmt"
	"net/http"

	"github.com/gorilla/mux"
	"github.com/wailsapp/wails/v2/pkg/runtime"
	"gopkg.in/square/go-jose.v2/json"
)

type ApiServer struct {
	http.Handler
	ctx    context.Context
	router *mux.Router
}

func NewApiServer() *ApiServer {
	return &ApiServer{router: mux.NewRouter()}
}

func (h *ApiServer) OnStartup(ctx context.Context) {
	h.ctx = ctx

	h.router.HandleFunc("/api/data", func(w http.ResponseWriter, r *http.Request) {
		ItemDo := Q.Item.WithContext(h.ctx)
		_data, count, err := ItemDo.FindByPage(0, 100)

		if err != nil {
			runtime.LogError(h.ctx, err.Error())
		}

		data := make([]*Item, 0)
		for _, r := range _data {
			data = append(data, &Item{Item: r})
		}

		payload, err := json.Marshal(FindResult{
			Data:  data,
			Count: count,
		})
		if err != nil {
			fmt.Println(err)
		}

		w.Write(payload)
	}).Methods("GET")
}

func (h *ApiServer) ServeHTTP(res http.ResponseWriter, req *http.Request) {
	fmt.Println("DEBUG", req.URL.Path, req.Method)
	h.router.ServeHTTP(res, req)
}
