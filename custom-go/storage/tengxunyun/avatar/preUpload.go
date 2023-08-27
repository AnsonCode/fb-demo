package avatar

import (
	"custom-go/generated"
	"custom-go/pkg/base"
	"custom-go/pkg/plugins"
)

func PreUpload(request *base.UploadHookRequest, body *plugins.UploadBody[generated.Tengxunyun_avatarProfileMeta]) (*base.UploadHookResponse, error) {
	return &base.UploadHookResponse{FileKey: body.File.Name}, nil
}
