package GetOneUser

import (
	"custom-go/generated"
	"custom-go/pkg/base"
)

func PostResolve(hook *base.HookRequest, body generated.User__GetOneUserBody) (res generated.User__GetOneUserBody, err error) {
	hook.Logger().Info("PostResolve")
	return body, nil
}
