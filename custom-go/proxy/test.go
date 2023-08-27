package proxy

import (
	"custom-go/pkg/base"
	"custom-go/pkg/plugins"
	"custom-go/pkg/wgpb"
	"net/http"
)

func init() {
	plugins.RegisterProxyHook(ping)
}

var conf = &plugins.HookConfig{
	AuthRequired: true,
	AuthorizationConfig: &wgpb.OperationAuthorizationConfig{
		RoleConfig: &wgpb.OperationRoleConfig{
			RequireMatchAny: []string{"admin", "user"},
		},
	},
	EnableLiveQuery: false,
}

func ping(hook *base.HttpTransportHookRequest, body *plugins.HttpTransportBody) (*base.ClientResponse, error) {
	// do something here ...
	body.Response = &base.ClientResponse{
		StatusCode: http.StatusOK,
	}
	body.Response.OriginBody = []byte("ok")
	return body.Response, nil
}
