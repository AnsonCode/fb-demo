package authentication

import (
	"custom-go/pkg/base"
	"custom-go/pkg/plugins"
)

func MutatingPostAuthentication(hook *base.AuthenticationHookRequest) (*plugins.AuthenticationResponse, error) {
	hook.User.CustomClaims = map[string]any{
		"key1": "sss",
		"key2": map[string]string{
			"key3": "sss",
		},
	}
	return &plugins.AuthenticationResponse{User: hook.User, Status: "ok"}, nil
}
