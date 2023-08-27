package GetT

import (
	"custom-go/generated"
	"custom-go/pkg/base"
)

func MutatingPostResolve(hook *base.HookRequest, body generated.GetTBody) (res generated.GetTBody, err error) {
	hook.Logger().Info("MutatingPostResolve")
	return body, nil
}
