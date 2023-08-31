package function

import (
	"custom-go/pkg/base"
	"custom-go/pkg/plugins"
	"custom-go/pkg/wgpb"
)

func init() {
	plugins.RegisterFunction[loginReq2, loginRes2](test2, wgpb.OperationType_MUTATION)
}

type loginReq2 struct {
	Username string    `json:"username"`
	Password string    `json:"password"`
	Info     loginInfo `json:"info,omitempty"`
}

type loginInfo struct {
	Code    string `json:"code,omitempty"`
	Captcha string `json:"captcha,omitempty"`
}

type loginRes2 struct {
	Msg  string `json:"msg"`
	Data string `json:"data"`
}

func test2(hook *base.HookRequest, body *base.OperationBody[loginReq2, loginRes2]) (*base.OperationBody[loginReq2, loginRes2], error) {
	if body.Input.Username != "John" || body.Input.Password != "123456" {
		body.Response = &base.OperationBodyResponse[loginRes2]{
			Errors: []base.GraphQLError{{Message: "username or password wrong"}},
		}
		return body, nil
	}

	body.Response = &base.OperationBodyResponse[loginRes2]{Data: loginRes2{Msg: "login success"}}
	return body, nil
}
