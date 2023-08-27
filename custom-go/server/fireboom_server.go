package server

import (
    "github.com/joho/godotenv"
    authentication "custom-go/authentication"

    "custom-go/generated"
        
    operation_GetT "custom-go/operation/GetT"

    operation_User__GetOneUser "custom-go/operation/User/GetOneUser"
                    
    "custom-go/pkg/base"
    "custom-go/pkg/plugins"
    "custom-go/pkg/types"
    
)

const nodeEnvFilepath = "../.env"

func init() {
    _ = godotenv.Overload(nodeEnvFilepath)

    types.WdgHooksAndServerConfig = types.WunderGraphHooksAndServerConfig{
        Hooks: types.HooksConfiguration{
            Global: plugins.GlobalConfiguration{

            },
            Authentication: plugins.AuthenticationConfiguration{
                MutatingPostAuthentication: authentication.MutatingPostAuthentication,
                PostAuthentication: authentication.PostAuthentication,
            },
            Queries: base.OperationHooks{
                "GetT": {
                    MutatingPostResolve: plugins.ConvertBodyFunc[generated.GetTInternalInput, generated.GetTResponseData](operation_GetT.MutatingPostResolve),
                },
                "User/GetOneUser": {
                    PostResolve: plugins.ConvertBodyFunc[generated.User__GetOneUserInternalInput, generated.User__GetOneUserResponseData](operation_User__GetOneUser.PostResolve),
                },
            },
            Mutations: base.OperationHooks{
            },
            Uploads: map[string]plugins.UploadHooks{
                "tengxunyun": {
                },
            },
        },
    }
}