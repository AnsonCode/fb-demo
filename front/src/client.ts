import {
  Client,
  ClientConfig,
  CreateClientConfig,
  User,
  UploadRequestOptions,
  OperationMetadata,
  OperationsDefinition,
  OperationRequestOptions,
  SubscriptionRequestOptions,
  SubscriptionEventHandler,
  FetchUserRequestOptions,
  UploadValidationOptions,
  ExtractProfileName,
  ExtractMeta
} from "fireboom-wundersdk/client";

import type { CustomClaims, Role } from './claims'
import type { A3Response,A3ResponseData,Api2Response,Api2ResponseData,BCopy377Response,BCopy377ResponseData,BCopy7vuResponse,BCopy7vuResponseData,BCopycf6Response,BCopycf6ResponseData,BCopydeaResponse,BCopydeaResponseData,BCopyeuiResponse,BCopyeuiResponseData,BCopyjf9Response,BCopyjf9ResponseData,BCopyktlResponse,BCopyktlResponseData,BCopyohaResponse,BCopyohaResponseData,BCopyz27Response,BCopyz27ResponseData,CreateResponse,CreateResponseData,CreateTInput,CreateTResponse,CreateTResponseData,FindUserResponse,FindUserResponseData,GetTInput,GetTResponse,GetTResponseData,GetUInput,GetUResponse,GetUResponseData,GetUser2Response,GetUser2ResponseData,S2Response,S2ResponseData,Test__A23Response,Test__A23ResponseData,Test__BCopy1cgResponse,Test__BCopy1cgResponseData,User__CreateOneUserInput,User__CreateOneUserResponse,User__CreateOneUserResponseData,User__DeleteManyUserInput,User__DeleteManyUserResponse,User__DeleteManyUserResponseData,User__DeleteOneUserInput,User__DeleteOneUserResponse,User__DeleteOneUserResponseData,User__GetManyUserResponse,User__GetManyUserResponseData,User__GetOneUserInput,User__GetOneUserResponse,User__GetOneUserResponseData,User__GetUserListInput,User__GetUserListResponse,User__GetUserListResponseData,User__UpdateOneUserInput,User__UpdateOneUserResponse,User__UpdateOneUserResponseData,function__loginInput,function__loginResponse,function__loginResponseData,function__testInput,function__testResponse,function__testResponseData, } from './models'

export const WUNDERGRAPH_S3_ENABLED = true
export const WUNDERGRAPH_AUTH_ENABLED = true

export interface UploadResponse { key: string }

// TODO: missing upload profiles

type S3Providers ={
  tengxunyun: {
    hasProfiles: true,
    profiles: {
        avatar: any
    }
  }
}

const S3UploadProviderData: { [provider: string]: { [profile: string]: UploadValidationOptions } } = {
  tengxunyun: {
      avatar: {
        requireAuthentication: false,
        maxAllowedUploadSizeBytes: 10485760,
        
        maxAllowedFiles: 1,
                      },
  },
}

export enum AuthProviderId {
  "auth0" = "auth0",
  "casdoor" = "casdoor",
}

export interface AuthProvider {
  id: AuthProviderId;
  login: (redirectURI?: string) => void;
}

export const defaultClientConfig: ClientConfig = {
  applicationHash: "d41d8cd9",
  baseURL: "http://localhost:9991",
  sdkVersion: "",
}

export const operationMetadata: OperationMetadata = {
  "A3": {
    requiresAuthentication: false
  }
  ,
  "Api2": {
    requiresAuthentication: false
  }
  ,
  "BCopy377": {
    requiresAuthentication: false
  }
  ,
  "BCopy7vu": {
    requiresAuthentication: false
  }
  ,
  "BCopycf6": {
    requiresAuthentication: false
  }
  ,
  "BCopydea": {
    requiresAuthentication: false
  }
  ,
  "BCopyeui": {
    requiresAuthentication: false
  }
  ,
  "BCopyjf9": {
    requiresAuthentication: false
  }
  ,
  "BCopyktl": {
    requiresAuthentication: false
  }
  ,
  "BCopyoha": {
    requiresAuthentication: false
  }
  ,
  "BCopyz27": {
    requiresAuthentication: false
  }
  ,
  "Create": {
    requiresAuthentication: true
  }
  ,
  "CreateT": {
    requiresAuthentication: false
  }
  ,
  "FindUser": {
    requiresAuthentication: false
  }
  ,
  "GetT": {
    requiresAuthentication: false
  }
  ,
  "GetU": {
    requiresAuthentication: false
  }
  ,
  "GetUser2": {
    requiresAuthentication: false
  }
  ,
  "S2": {
    requiresAuthentication: false
  }
  ,
  "Test/A23": {
    requiresAuthentication: true
  }
  ,
  "Test/BCopy1cg": {
    requiresAuthentication: false
  }
  ,
  "User/CreateOneUser": {
    requiresAuthentication: false
  }
  ,
  "User/DeleteManyUser": {
    requiresAuthentication: false
  }
  ,
  "User/DeleteOneUser": {
    requiresAuthentication: false
  }
  ,
  "User/GetManyUser": {
    requiresAuthentication: false
  }
  ,
  "User/GetOneUser": {
    requiresAuthentication: false
  }
  ,
  "User/GetUserList": {
    requiresAuthentication: false
  }
  ,
  "User/UpdateOneUser": {
    requiresAuthentication: false
  }
  ,
  "function/login": {
    requiresAuthentication: false
  }
  ,
  "function/test": {
    requiresAuthentication: false
  }
  
}

export class WunderGraphClient extends Client {
	query<
		OperationName extends Extract<keyof Operations['queries'], string>,
		Input extends Operations['queries'][OperationName]['input'] = Operations['queries'][OperationName]['input'],
		Data extends Operations['queries'][OperationName]['data'] = Operations['queries'][OperationName]['data']
	>(options: OperationName extends string ? OperationRequestOptions<OperationName, Input> : OperationRequestOptions) {
		return super.query<OperationRequestOptions, Data>(options);
	}
	mutate<
		OperationName extends Extract<keyof Operations['mutations'], string>,
		Input extends Operations['mutations'][OperationName]['input'] = Operations['mutations'][OperationName]['input'],
		Data extends Operations['mutations'][OperationName]['data'] = Operations['mutations'][OperationName]['data']
	>(options: OperationName extends string ? OperationRequestOptions<OperationName, Input> : OperationRequestOptions) {
		return super.mutate<OperationRequestOptions, Data>(options);
	}
	subscribe<
		OperationName extends Extract<keyof Operations['subscriptions'], string>,
		Input extends Operations['subscriptions'][OperationName]['input'] = Operations['subscriptions'][OperationName]['input'],
		Data extends Operations['subscriptions'][OperationName]['data'] = Operations['subscriptions'][OperationName]['data']
	>(
		options: OperationName extends string
			? SubscriptionRequestOptions<OperationName, Input>
			: SubscriptionRequestOptions,
		cb: SubscriptionEventHandler<Data>
	) {
		return super.subscribe(options, cb);
	}
    public async uploadFiles<
        ProviderName extends Extract<keyof S3Providers, string>,
        ProfileName extends ExtractProfileName<S3Providers[ProviderName]['profiles']> = ExtractProfileName<
        S3Providers[ProviderName]['profiles']
        >,
        Meta extends ExtractMeta<S3Providers[ProviderName]['profiles'], ProfileName> = ExtractMeta<
        S3Providers[ProviderName]['profiles'],
        ProfileName
        >
    >(config: UploadRequestOptions<ProviderName, ProfileName, Meta>) {
        const profile = config.profile ? S3UploadProviderData[config.provider][config.profile as string] : undefined;
        return super.uploadFiles(config, profile);
    }
	public login(authProviderID: Operations['authProvider'], redirectURI?: string) {
		return super.login(authProviderID, redirectURI);
	}
	public async fetchUser<TUser extends User = User<Role, CustomClaims>>(options?: FetchUserRequestOptions) {
		return super.fetchUser<TUser>(options);
	}
}

export const createClient = (config?: CreateClientConfig) => {
  return new WunderGraphClient({
    ...defaultClientConfig,
    ...config,
    operationMetadata,
    csrfEnabled: false,
  });
};

export type Queries = {
  'Api2': {
    input?: undefined
    data: Api2ResponseData
    requiresAuthentication: false
    
  }
  'BCopy377': {
    input?: undefined
    data: BCopy377ResponseData
    requiresAuthentication: false
    
  }
  'BCopy7vu': {
    input?: undefined
    data: BCopy7vuResponseData
    requiresAuthentication: false
    
  }
  'BCopycf6': {
    input?: undefined
    data: BCopycf6ResponseData
    requiresAuthentication: false
    
  }
  'BCopydea': {
    input?: undefined
    data: BCopydeaResponseData
    requiresAuthentication: false
    
  }
  'BCopyeui': {
    input?: undefined
    data: BCopyeuiResponseData
    requiresAuthentication: false
    
  }
  'BCopyjf9': {
    input?: undefined
    data: BCopyjf9ResponseData
    requiresAuthentication: false
    
  }
  'BCopyktl': {
    input?: undefined
    data: BCopyktlResponseData
    requiresAuthentication: false
    
  }
  'BCopyoha': {
    input?: undefined
    data: BCopyohaResponseData
    requiresAuthentication: false
    
  }
  'BCopyz27': {
    input?: undefined
    data: BCopyz27ResponseData
    requiresAuthentication: false
    
  }
  'FindUser': {
    input?: undefined
    data: FindUserResponseData
    requiresAuthentication: false
    
  }
  'GetT': {
    input: GetTInput
    data: GetTResponseData
    requiresAuthentication: false
    
  }
  'GetU': {
    input: GetUInput
    data: GetUResponseData
    requiresAuthentication: false
    
  }
  'GetUser2': {
    input?: undefined
    data: GetUser2ResponseData
    requiresAuthentication: false
    
  }
  'Test/A23': {
    input?: undefined
    data: Test__A23ResponseData
    requiresAuthentication: true
    liveQuery: boolean
  }
  'Test/BCopy1cg': {
    input?: undefined
    data: Test__BCopy1cgResponseData
    requiresAuthentication: false
    
  }
  'User/GetManyUser': {
    input?: undefined
    data: User__GetManyUserResponseData
    requiresAuthentication: false
    
  }
  'User/GetOneUser': {
    input: User__GetOneUserInput
    data: User__GetOneUserResponseData
    requiresAuthentication: false
    
  }
  'User/GetUserList': {
    input: User__GetUserListInput
    data: User__GetUserListResponseData
    requiresAuthentication: false
    
  }
}

export type Mutations = {
  'A3': {
    input?: undefined
    data: A3ResponseData
    requiresAuthentication: false
  }
  'Create': {
    input?: undefined
    data: CreateResponseData
    requiresAuthentication: true
  }
  'CreateT': {
    input: CreateTInput
    data: CreateTResponseData
    requiresAuthentication: false
  }
  'User/CreateOneUser': {
    input: User__CreateOneUserInput
    data: User__CreateOneUserResponseData
    requiresAuthentication: false
  }
  'User/DeleteManyUser': {
    input: User__DeleteManyUserInput
    data: User__DeleteManyUserResponseData
    requiresAuthentication: false
  }
  'User/DeleteOneUser': {
    input: User__DeleteOneUserInput
    data: User__DeleteOneUserResponseData
    requiresAuthentication: false
  }
  'User/UpdateOneUser': {
    input: User__UpdateOneUserInput
    data: User__UpdateOneUserResponseData
    requiresAuthentication: false
  }
  'function/login': {
    input: function__loginInput
    data: function__loginResponseData
    requiresAuthentication: false
  }
  'function/test': {
    input: function__testInput
    data: function__testResponseData
    requiresAuthentication: false
  }
}

export type Subscriptions = {
  'S2': {
    input?: undefined
    data: S2ResponseData
    requiresAuthentication: false
  }
}

export type LiveQueries = {
}

export interface Operations extends OperationsDefinition<Queries, Mutations, Subscriptions, Role,S3Providers,keyof typeof AuthProviderId> {}