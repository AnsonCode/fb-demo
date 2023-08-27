package function

import (
	"custom-go/pkg/base"
	"custom-go/pkg/plugins"
)

func init() {
	plugins.RegisterFunction[loginReq, loginRes](login)
}

type loginReq struct {
	Username string `json:"username"`
	Password string `json:"password"`
	Res      loginRes
}

type loginRes struct {
	Msg  string `json:"msg"`
	Data string `json:"data"`
}

func login(hook *base.HookRequest, body *base.OperationBody[loginReq, loginRes]) (*base.OperationBody[loginReq, loginRes], error) {
	body.Response = &base.OperationBodyResponse[loginRes]{Data: loginRes{Msg: "123"}}
	return body, nil
}
