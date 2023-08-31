package proxy

import (
	"custom-go/pkg/base"
	"custom-go/pkg/plugins"
	"net/http"
)

func init() {
	plugins.RegisterProxyHook(ping)
}

func ping(hook *base.HttpTransportHookRequest, body *plugins.HttpTransportBody) (*base.ClientResponse, error) {
	// do something here ...
	body.Response = &base.ClientResponse{
		StatusCode: http.StatusOK,
	}
	body.Response.OriginBody = []byte("ok")
	return body.Response, nil
}
