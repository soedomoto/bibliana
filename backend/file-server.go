package backend

import (
	"fmt"
	"net/http"
	"os"
	"strings"
)

type FileServer struct {
	http.Handler
}

func NewFileServer() *FileServer {
	return &FileServer{}
}

func (h *FileServer) ServeHTTP(res http.ResponseWriter, req *http.Request) {
	var err error
	requestedFilename := strings.TrimPrefix(req.URL.Path, "/")
	println("Requesting file:", requestedFilename)
	fileData, err := os.ReadFile(requestedFilename)
	if err != nil {
		res.WriteHeader(http.StatusBadRequest)
		res.Write([]byte(fmt.Sprintf("Could not load file %s", requestedFilename)))
	}

	res.Write(fileData)
}
