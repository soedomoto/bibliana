package main

import (
	"bibliana/backend"
	"bibliana/dao/query"
	"context"
	"embed"
	"log"
	"net/http"
	"strings"

	"github.com/wailsapp/wails/v2"
	"github.com/wailsapp/wails/v2/pkg/logger"
	"github.com/wailsapp/wails/v2/pkg/options"
	"github.com/wailsapp/wails/v2/pkg/options/assetserver"
	"github.com/wailsapp/wails/v2/pkg/options/mac"
	"github.com/wailsapp/wails/v2/pkg/options/windows"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

//go:embed zotero.sqlite
var zoterodb embed.FS

//go:embed all:frontend/dist
var assets embed.FS

//go:embed build/appicon.png
var icon []byte

func main() {
	db, _ := gorm.Open(sqlite.Open("./zotero.sqlite"), &gorm.Config{})
	backend.Q = query.Use(db)

	// Create an instance of the app structure
	app := NewApp()
	counter := backend.NewCounter()
	ipc := backend.NewIpc()
	api := backend.NewApiServer()

	// Create application with options
	err := wails.Run(&options.App{
		Title:     "Bibliana",
		Width:     1024,
		Height:    768,
		MinWidth:  1024,
		MinHeight: 768,
		// MaxWidth:          1280,
		// MaxHeight:         800,
		DisableResize:     false,
		Fullscreen:        false,
		Frameless:         false,
		StartHidden:       false,
		HideWindowOnClose: false,
		BackgroundColour:  &options.RGBA{R: 255, G: 255, B: 255, A: 255},
		AssetServer: &assetserver.Options{
			Assets: assets,
			Middleware: func(next http.Handler) http.Handler {
				return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
					if strings.HasPrefix(r.URL.Path, "/api") {
						api.ServeHTTP(w, r)
					} else {
						next.ServeHTTP(w, r)
					}
				})
			},
		},
		Menu:     app.menu(),
		Logger:   nil,
		LogLevel: logger.DEBUG,
		OnStartup: func(ctx context.Context) {
			app.startup(ctx)
			ipc.OnStartup(ctx)
			api.OnStartup(ctx)
		},
		OnDomReady:       app.domReady,
		OnBeforeClose:    app.beforeClose,
		OnShutdown:       app.shutdown,
		WindowStartState: options.Normal,
		Bind: append([]interface{}{
			app,
			counter,
		}, ipc.AllService()...),
		SingleInstanceLock: &options.SingleInstanceLock{
			UniqueId:               "e3984e08-28dc-4e3d-b70a-45e961589cdc",
			OnSecondInstanceLaunch: app.onSecondInstanceLaunch,
		},
		// Windows platform specific options
		Windows: &windows.Options{
			WebviewIsTransparent: false,
			WindowIsTranslucent:  false,
			DisableWindowIcon:    false,
			// DisableFramelessWindowDecorations: false,
			WebviewUserDataPath: "",
			ZoomFactor:          1.0,
		},
		// Mac platform specific options
		Mac: &mac.Options{
			TitleBar: &mac.TitleBar{
				TitlebarAppearsTransparent: true,
				HideTitle:                  true,
				HideTitleBar:               false,
				FullSizeContent:            false,
				UseToolbar:                 false,
				HideToolbarSeparator:       true,
			},
			Appearance:           mac.DefaultAppearance,
			WebviewIsTransparent: true,
			WindowIsTranslucent:  true,
			About: &mac.AboutInfo{
				Title:   "Bibliana",
				Message: "",
				Icon:    icon,
			},
			OnUrlOpen: func(url string) { println(url) },
		},
	})

	if err != nil {
		log.Fatal(err)
	}
}
