export interface A3Response {
    data?: A3ResponseData
    errors?: ReadonlyArray<GraphQLError>;
}
export interface Api2Response {
    data?: Api2ResponseData
    errors?: ReadonlyArray<GraphQLError>;
}
export interface BCopy377Response {
    data?: BCopy377ResponseData
    errors?: ReadonlyArray<GraphQLError>;
}
export interface BCopy7vuResponse {
    data?: BCopy7vuResponseData
    errors?: ReadonlyArray<GraphQLError>;
}
export interface BCopycf6Response {
    data?: BCopycf6ResponseData
    errors?: ReadonlyArray<GraphQLError>;
}
export interface BCopydeaResponse {
    data?: BCopydeaResponseData
    errors?: ReadonlyArray<GraphQLError>;
}
export interface BCopyeuiResponse {
    data?: BCopyeuiResponseData
    errors?: ReadonlyArray<GraphQLError>;
}
export interface BCopyjf9Response {
    data?: BCopyjf9ResponseData
    errors?: ReadonlyArray<GraphQLError>;
}
export interface BCopyktlResponse {
    data?: BCopyktlResponseData
    errors?: ReadonlyArray<GraphQLError>;
}
export interface BCopyohaResponse {
    data?: BCopyohaResponseData
    errors?: ReadonlyArray<GraphQLError>;
}
export interface BCopyz27Response {
    data?: BCopyz27ResponseData
    errors?: ReadonlyArray<GraphQLError>;
}
export interface CreateResponse {
    data?: CreateResponseData
    errors?: ReadonlyArray<GraphQLError>;
}
export interface CreateTResponse {
    data?: CreateTResponseData
    errors?: ReadonlyArray<GraphQLError>;
}
export interface FindUserResponse {
    data?: FindUserResponseData
    errors?: ReadonlyArray<GraphQLError>;
}
export interface GetTResponse {
    data?: GetTResponseData
    errors?: ReadonlyArray<GraphQLError>;
}
export interface GetUResponse {
    data?: GetUResponseData
    errors?: ReadonlyArray<GraphQLError>;
}
export interface GetUser2Response {
    data?: GetUser2ResponseData
    errors?: ReadonlyArray<GraphQLError>;
}
export interface S2Response {
    data?: S2ResponseData
    errors?: ReadonlyArray<GraphQLError>;
}
export interface Test__A23Response {
    data?: Test__A23ResponseData
    errors?: ReadonlyArray<GraphQLError>;
}
export interface Test__BCopy1cgResponse {
    data?: Test__BCopy1cgResponseData
    errors?: ReadonlyArray<GraphQLError>;
}
export interface User__CreateOneUserResponse {
    data?: User__CreateOneUserResponseData
    errors?: ReadonlyArray<GraphQLError>;
}
export interface User__DeleteManyUserResponse {
    data?: User__DeleteManyUserResponseData
    errors?: ReadonlyArray<GraphQLError>;
}
export interface User__DeleteOneUserResponse {
    data?: User__DeleteOneUserResponseData
    errors?: ReadonlyArray<GraphQLError>;
}
export interface User__GetManyUserResponse {
    data?: User__GetManyUserResponseData
    errors?: ReadonlyArray<GraphQLError>;
}
export interface User__GetOneUserResponse {
    data?: User__GetOneUserResponseData
    errors?: ReadonlyArray<GraphQLError>;
}
export interface User__GetUserListResponse {
    data?: User__GetUserListResponseData
    errors?: ReadonlyArray<GraphQLError>;
}
export interface User__UpdateOneUserResponse {
    data?: User__UpdateOneUserResponseData
    errors?: ReadonlyArray<GraphQLError>;
}

export interface A3Input {
}
export interface A3InternalInput {
}
export interface A3ResponseData {
    rb_createOneRole?:A3ResponseData_rb_createOneRole,
    rb_createOneT?:A3ResponseData_rb_createOneT,
}
export interface A3ResponseData_rb_createOneRole {
    code:string,
    name:string,
}
export interface A3ResponseData_rb_createOneT {
    id:number,
    name:string,
}
export interface Api2Input {
}
export interface Api2InternalInput {
}
export interface Api2ResponseData {
    rb_findFirstT?:Api2ResponseData_rb_findFirstT,
}
export interface Api2ResponseData_rb_findFirstT {
    des?:string,
    id:number,
    name:string,
}
export interface BCopy377Input {
}
export interface BCopy377InternalInput {
}
export interface BCopy377ResponseData {
    rb_findManyRole:BCopy377ResponseData_rb_findManyRole[],
}
export interface BCopy377ResponseData_rb_findManyRole {
    code:string,
    name:string,
}
export interface BCopy7vuInput {
}
export interface BCopy7vuInternalInput {
}
export interface BCopy7vuResponseData {
    rb_findManyRole:BCopy7vuResponseData_rb_findManyRole[],
}
export interface BCopy7vuResponseData_rb_findManyRole {
    code:string,
    name:string,
}
export interface BCopycf6Input {
}
export interface BCopycf6InternalInput {
}
export interface BCopycf6ResponseData {
    rb_findManyRole:BCopycf6ResponseData_rb_findManyRole[],
}
export interface BCopycf6ResponseData_rb_findManyRole {
    code:string,
    name:string,
}
export interface BCopydeaInput {
}
export interface BCopydeaInternalInput {
}
export interface BCopydeaResponseData {
    rb_findManyRole:BCopydeaResponseData_rb_findManyRole[],
}
export interface BCopydeaResponseData_rb_findManyRole {
    code:string,
    name:string,
}
export interface BCopyeuiInput {
}
export interface BCopyeuiInternalInput {
}
export interface BCopyeuiResponseData {
    rb_findManyRole:BCopyeuiResponseData_rb_findManyRole[],
}
export interface BCopyeuiResponseData_rb_findManyRole {
    code:string,
    name:string,
}
export interface BCopyjf9Input {
}
export interface BCopyjf9InternalInput {
}
export interface BCopyjf9ResponseData {
    rb_findManyRole:BCopyjf9ResponseData_rb_findManyRole[],
}
export interface BCopyjf9ResponseData_rb_findManyRole {
    code:string,
    name:string,
}
export interface BCopyktlInput {
}
export interface BCopyktlInternalInput {
}
export interface BCopyktlResponseData {
    rb_findManyRole:BCopyktlResponseData_rb_findManyRole[],
}
export interface BCopyktlResponseData_rb_findManyRole {
    code:string,
    name:string,
}
export interface BCopyohaInput {
}
export interface BCopyohaInternalInput {
}
export interface BCopyohaResponseData {
    rb_findManyRole:BCopyohaResponseData_rb_findManyRole[],
}
export interface BCopyohaResponseData_rb_findManyRole {
    code:string,
    name:string,
}
export interface BCopyz27Input {
}
export interface BCopyz27InternalInput {
}
export interface BCopyz27ResponseData {
    rb_findManyRole:BCopyz27ResponseData_rb_findManyRole[],
}
export interface BCopyz27ResponseData_rb_findManyRole {
    code:string,
    name:string,
}
export interface CreateInput {
}
export interface CreateInternalInput {
    name:string,
}
export interface CreateResponseData {
    rb_createOneT?:CreateResponseData_rb_createOneT,
}
export interface CreateResponseData_rb_createOneT {
    id:number,
    name:string,
}
export interface CreateTInput {
    des?:string,
    name?:string,
}
export interface CreateTInternalInput {
    des?:string,
    name?:string,
}
export interface CreateTResponseData {
    rb_createOneT?:CreateTResponseData_rb_createOneT,
}
export interface CreateTResponseData_rb_createOneT {
    des?:string,
    id:number,
    name:string,
}
export interface FindUserInput {
}
export interface FindUserInternalInput {
}
export interface FindUserResponseData {
    rb_findFirstUser?:FindUserResponseData_rb_findFirstUser,
}
export interface FindUserResponseData_rb_findFirstUser {
    Role?:FindUserResponseData_rb_findFirstUser_Role[],
    name:string,
    uid:string,
}
export interface FindUserResponseData_rb_findFirstUser_Role {
    code:string,
    name:string,
}
export interface GetTInput {
    id:number,
}
export interface GetTInternalInput {
    id:number,
}
export interface GetTResponseData {
    rb_findUniqueT?:GetTResponseData_rb_findUniqueT,
}
export interface GetTResponseData_rb_findUniqueT {
    des?:string,
    id:number,
    name:string,
}
export interface GetUInput {
    skip?:number,
}
export interface GetUInternalInput {
    skip?:number,
}
export interface GetUResponseData {
    rb_findManyUser:GetUResponseData_rb_findManyUser[],
}
export interface GetUResponseData_rb_findManyUser {
    name:string,
    roles?:GetUResponseData_rb_findManyUser_roles[],
    uid:string,
}
export interface GetUResponseData_rb_findManyUser_roles {
    code:string,
    name:string,
}
export interface GetUser2Input {
}
export interface GetUser2InternalInput {
}
export interface GetUser2ResponseData {
    rb_findFirstUser?:GetUser2ResponseData_rb_findFirstUser,
}
export interface GetUser2ResponseData_rb_findFirstUser {
    Role?:GetUser2ResponseData_rb_findFirstUser_Role[],
    name:string,
    uid:string,
}
export interface GetUser2ResponseData_rb_findFirstUser_Role {
    code:string,
    name:string,
}
export interface S2Input {
}
export interface S2InternalInput {
}
export interface S2ResponseData {
    statistic_feed?:S2ResponseData_statistic_feed,
}
export interface S2ResponseData_statistic_feed {
    id?:string,
}
export interface Test__A23Input {
}
export interface Test__A23InternalInput {
}
export interface Test__A23ResponseData {
    rb_findManyUser:Test__A23ResponseData_rb_findManyUser[],
}
export interface Test__A23ResponseData_rb_findManyUser {
    Role?:Test__A23ResponseData_rb_findManyUser_Role[],
    name:string,
    uid:string,
}
export interface Test__A23ResponseData_rb_findManyUser_Role {
    code:string,
    name:string,
}
export interface Test__BCopy1cgInput {
}
export interface Test__BCopy1cgInternalInput {
}
export interface Test__BCopy1cgResponseData {
    rb_findManyRole:Test__BCopy1cgResponseData_rb_findManyRole[],
}
export interface Test__BCopy1cgResponseData_rb_findManyRole {
    code:string,
    name:string,
}
export interface User__CreateOneUserInput {
    Role:rb_RoleCreateNestedManyWithoutUserInput,
    name:string,
    uid:string,
}
export interface User__CreateOneUserInternalInput {
    Role:rb_RoleCreateNestedManyWithoutUserInput,
    name:string,
    uid:string,
}
export interface User__CreateOneUserResponseData {
    data?:User__CreateOneUserResponseData_data,
}
export interface User__CreateOneUserResponseData_data {
    name:string,
    uid:string,
}
export interface User__DeleteManyUserInput {
    uids:string[],
}
export interface User__DeleteManyUserInternalInput {
    uids:string[],
}
export interface User__DeleteManyUserResponseData {
    data?:User__DeleteManyUserResponseData_data,
}
export interface User__DeleteManyUserResponseData_data {
    count:number,
}
export interface User__DeleteOneUserInput {
    uid:string,
}
export interface User__DeleteOneUserInternalInput {
    uid:string,
}
export interface User__DeleteOneUserResponseData {
    data?:User__DeleteOneUserResponseData_data,
}
export interface User__DeleteOneUserResponseData_data {
    uid:string,
}
export interface User__GetManyUserInput {
}
export interface User__GetManyUserInternalInput {
}
export interface User__GetManyUserResponseData {
    data:User__GetManyUserResponseData_data[],
}
export interface User__GetManyUserResponseData_data {
    name:string,
    uid:string,
}
export interface User__GetOneUserInput {
    uid:string,
}
export interface User__GetOneUserInternalInput {
    uid:string,
}
export interface User__GetOneUserResponseData {
    data?:User__GetOneUserResponseData_data,
}
export interface User__GetOneUserResponseData_data {
    name:string,
    uid:string,
}
export interface User__GetUserListInput {
    orderBy?:rb_UserOrderByWithRelationInput[],
    query?:rb_UserWhereInput,
    skip?:number,
    take?:number,
}
export interface User__GetUserListInternalInput {
    orderBy?:rb_UserOrderByWithRelationInput[],
    query?:rb_UserWhereInput,
    skip?:number,
    take?:number,
}
export interface User__GetUserListResponseData {
    data:User__GetUserListResponseData_data[],
    total:number,
}
export interface User__GetUserListResponseData_data {
    name:string,
    uid:string,
}
export interface User__UpdateOneUserInput {
    Role?:rb_RoleWhereUniqueInput,
    name?:string,
    uid:string,
}
export interface User__UpdateOneUserInternalInput {
    Role?:rb_RoleWhereUniqueInput,
    name?:string,
    uid:string,
}
export interface User__UpdateOneUserResponseData {
    data?:User__UpdateOneUserResponseData_data,
}
export interface User__UpdateOneUserResponseData_data {
    name:string,
    uid:string,
}
export interface function__loginInput {
    Res:loginRes,
    password:string,
    username:string,
}
export interface function__loginResponseData {
    data:string,
    msg:string,
}
export interface function__testInput {
    info?:loginInfo,
    password:string,
    username:string,
}
export interface function__testResponseData {
    data:string,
    msg:string,
}
export interface loginInfo {
    captcha?:string,
    code?:string,
}
export interface loginRes {
    data:string,
    msg:string,
}
export interface rb_BigIntFieldUpdateOperationsInput {
    decrement?:number,
    divide?:number,
    increment?:number,
    multiply?:number,
    set?:number,
}
export interface rb_BigIntFilter {
    equals?:number,
    gt?:number,
    gte?:number,
    in?:number[],
    lt?:number,
    lte?:number,
    not?:rb_NestedBigIntFilter,
    notIn?:number[],
}
export interface rb_IntFilter {
    equals?:number,
    gt?:number,
    gte?:number,
    in?:number[],
    lt?:number,
    lte?:number,
    not?:rb_NestedIntFilter,
    notIn?:number[],
}
export interface rb_NestedBigIntFilter {
    equals?:number,
    gt?:number,
    gte?:number,
    in?:number[],
    lt?:number,
    lte?:number,
    not?:rb_NestedBigIntFilter,
    notIn?:number[],
}
export interface rb_NestedIntFilter {
    equals?:number,
    gt?:number,
    gte?:number,
    in?:number[],
    lt?:number,
    lte?:number,
    not?:rb_NestedIntFilter,
    notIn?:number[],
}
export interface rb_NestedStringFilter {
    contains?:string,
    endsWith?:string,
    equals?:string,
    gt?:string,
    gte?:string,
    in?:string[],
    lt?:string,
    lte?:string,
    not?:rb_NestedStringFilter,
    notIn?:string[],
    startsWith?:string,
}
export interface rb_NestedStringNullableFilter {
    contains?:string,
    endsWith?:string,
    equals?:string,
    gt?:string,
    gte?:string,
    in?:string[],
    lt?:string,
    lte?:string,
    not?:rb_NestedStringNullableFilter,
    notIn?:string[],
    startsWith?:string,
}
export interface rb_NullableStringFieldUpdateOperationsInput {
    set?:string,
}
export interface rb_PermissionCreateNestedManyWithoutRoleInput {
    connect?:rb_PermissionWhereUniqueInput,
    connectOrCreate?:rb_PermissionCreateOrConnectWithoutRoleInput,
    create?:rb_PermissionCreateWithoutRoleInput,
}
export interface rb_PermissionCreateOrConnectWithoutRoleInput {
    create:rb_PermissionCreateWithoutRoleInput,
    where:rb_PermissionWhereUniqueInput,
}
export interface rb_PermissionCreateWithoutRoleInput {
    name:string,
    operationId:number,
    operationPath:string,
}
export interface rb_PermissionListRelationFilter {
    every?:rb_PermissionWhereInput,
    none?:rb_PermissionWhereInput,
    some?:rb_PermissionWhereInput,
}
export interface rb_PermissionScalarWhereInput {
    AND?:rb_PermissionScalarWhereInput,
    NOT?:rb_PermissionScalarWhereInput,
    OR?:rb_PermissionScalarWhereInput[],
    id?:rb_IntFilter,
    name?:rb_StringFilter,
    operationId?:rb_BigIntFilter,
    operationPath?:rb_StringFilter,
}
export interface rb_PermissionUpdateManyMutationInput {
    name?:rb_StringFieldUpdateOperationsInput,
    operationId?:rb_BigIntFieldUpdateOperationsInput,
    operationPath?:rb_StringFieldUpdateOperationsInput,
}
export interface rb_PermissionUpdateManyWithWhereWithoutRoleInput {
    data:rb_PermissionUpdateManyMutationInput,
    where:rb_PermissionScalarWhereInput,
}
export interface rb_PermissionUpdateManyWithoutRoleNestedInput {
    connect?:rb_PermissionWhereUniqueInput,
    connectOrCreate?:rb_PermissionCreateOrConnectWithoutRoleInput,
    create?:rb_PermissionCreateWithoutRoleInput,
    delete?:rb_PermissionWhereUniqueInput,
    deleteMany?:rb_PermissionScalarWhereInput,
    disconnect?:rb_PermissionWhereUniqueInput,
    set?:rb_PermissionWhereUniqueInput,
    update?:rb_PermissionUpdateWithWhereUniqueWithoutRoleInput,
    updateMany?:rb_PermissionUpdateManyWithWhereWithoutRoleInput,
    upsert?:rb_PermissionUpsertWithWhereUniqueWithoutRoleInput,
}
export interface rb_PermissionUpdateWithWhereUniqueWithoutRoleInput {
    data:rb_PermissionUpdateWithoutRoleInput,
    where:rb_PermissionWhereUniqueInput,
}
export interface rb_PermissionUpdateWithoutRoleInput {
    name?:rb_StringFieldUpdateOperationsInput,
    operationId?:rb_BigIntFieldUpdateOperationsInput,
    operationPath?:rb_StringFieldUpdateOperationsInput,
}
export interface rb_PermissionUpsertWithWhereUniqueWithoutRoleInput {
    create:rb_PermissionCreateWithoutRoleInput,
    update:rb_PermissionUpdateWithoutRoleInput,
    where:rb_PermissionWhereUniqueInput,
}
export interface rb_PermissionWhereInput {
    AND?:rb_PermissionWhereInput,
    NOT?:rb_PermissionWhereInput,
    OR?:rb_PermissionWhereInput[],
    Role?:rb_RoleListRelationFilter,
    id?:rb_IntFilter,
    name?:rb_StringFilter,
    operationId?:rb_BigIntFilter,
    operationPath?:rb_StringFilter,
}
export interface rb_PermissionWhereUniqueInput {
    id?:number,
    name?:string,
    operationId?:number,
    operationPath?:string,
}
export interface rb_RoleCreateInput {
    Permission?:rb_PermissionCreateNestedManyWithoutRoleInput,
    User?:rb_UserCreateNestedManyWithoutRoleInput,
    code:string,
    name:string,
}
export interface rb_RoleCreateNestedManyWithoutUserInput {
    connect?:rb_RoleWhereUniqueInput,
    connectOrCreate?:rb_RoleCreateOrConnectWithoutUserInput,
    create?:rb_RoleCreateWithoutUserInput,
}
export interface rb_RoleCreateOrConnectWithoutUserInput {
    create:rb_RoleCreateWithoutUserInput,
    where:rb_RoleWhereUniqueInput,
}
export interface rb_RoleCreateWithoutUserInput {
    Permission?:rb_PermissionCreateNestedManyWithoutRoleInput,
    code:string,
    name:string,
}
export interface rb_RoleListRelationFilter {
    every?:rb_RoleWhereInput,
    none?:rb_RoleWhereInput,
    some?:rb_RoleWhereInput,
}
export interface rb_RoleOrderByRelationAggregateInput {
    _count?:rb_SortOrder,
}
export interface rb_RoleScalarWhereInput {
    AND?:rb_RoleScalarWhereInput,
    NOT?:rb_RoleScalarWhereInput,
    OR?:rb_RoleScalarWhereInput[],
    code?:rb_StringFilter,
    name?:rb_StringFilter,
}
export interface rb_RoleUpdateManyMutationInput {
    code?:rb_StringFieldUpdateOperationsInput,
    name?:rb_StringFieldUpdateOperationsInput,
}
export interface rb_RoleUpdateManyWithWhereWithoutUserInput {
    data:rb_RoleUpdateManyMutationInput,
    where:rb_RoleScalarWhereInput,
}
export interface rb_RoleUpdateManyWithoutUserNestedInput {
    connect?:rb_RoleWhereUniqueInput,
    connectOrCreate?:rb_RoleCreateOrConnectWithoutUserInput,
    create?:rb_RoleCreateWithoutUserInput,
    delete?:rb_RoleWhereUniqueInput,
    deleteMany?:rb_RoleScalarWhereInput,
    disconnect?:rb_RoleWhereUniqueInput,
    set?:rb_RoleWhereUniqueInput,
    update?:rb_RoleUpdateWithWhereUniqueWithoutUserInput,
    updateMany?:rb_RoleUpdateManyWithWhereWithoutUserInput,
    upsert?:rb_RoleUpsertWithWhereUniqueWithoutUserInput,
}
export interface rb_RoleUpdateWithWhereUniqueWithoutUserInput {
    data:rb_RoleUpdateWithoutUserInput,
    where:rb_RoleWhereUniqueInput,
}
export interface rb_RoleUpdateWithoutUserInput {
    Permission?:rb_PermissionUpdateManyWithoutRoleNestedInput,
    code?:rb_StringFieldUpdateOperationsInput,
    name?:rb_StringFieldUpdateOperationsInput,
}
export interface rb_RoleUpsertWithWhereUniqueWithoutUserInput {
    create:rb_RoleCreateWithoutUserInput,
    update:rb_RoleUpdateWithoutUserInput,
    where:rb_RoleWhereUniqueInput,
}
export interface rb_RoleWhereInput {
    AND?:rb_RoleWhereInput,
    NOT?:rb_RoleWhereInput,
    OR?:rb_RoleWhereInput[],
    Permission?:rb_PermissionListRelationFilter,
    User?:rb_UserListRelationFilter,
    code?:rb_StringFilter,
    name?:rb_StringFilter,
}
export interface rb_RoleWhereUniqueInput {
    code?:string,
}
export interface rb_StringFieldUpdateOperationsInput {
    set?:string,
}
export interface rb_StringFilter {
    contains?:string,
    endsWith?:string,
    equals?:string,
    gt?:string,
    gte?:string,
    in?:string[],
    lt?:string,
    lte?:string,
    not?:rb_NestedStringFilter,
    notIn?:string[],
    startsWith?:string,
}
export interface rb_StringNullableFilter {
    contains?:string,
    endsWith?:string,
    equals?:string,
    gt?:string,
    gte?:string,
    in?:string[],
    lt?:string,
    lte?:string,
    not?:rb_NestedStringNullableFilter,
    notIn?:string[],
    startsWith?:string,
}
export interface rb_TCreateInput {
    des?:string,
    name:string,
}
export interface rb_TUpdateInput {
    des?:rb_NullableStringFieldUpdateOperationsInput,
    name?:rb_StringFieldUpdateOperationsInput,
}
export interface rb_TWhereInput {
    AND?:rb_TWhereInput,
    NOT?:rb_TWhereInput,
    OR?:rb_TWhereInput[],
    des?:rb_StringNullableFilter,
    id?:rb_IntFilter,
    name?:rb_StringFilter,
}
export interface rb_TWhereUniqueInput {
    id?:number,
}
export interface rb_UserCreateInput {
    Role?:rb_RoleCreateNestedManyWithoutUserInput,
    name:string,
    uid:string,
}
export interface rb_UserCreateNestedManyWithoutRoleInput {
    connect?:rb_UserWhereUniqueInput,
    connectOrCreate?:rb_UserCreateOrConnectWithoutRoleInput,
    create?:rb_UserCreateWithoutRoleInput,
}
export interface rb_UserCreateOrConnectWithoutRoleInput {
    create:rb_UserCreateWithoutRoleInput,
    where:rb_UserWhereUniqueInput,
}
export interface rb_UserCreateWithoutRoleInput {
    name:string,
    uid:string,
}
export interface rb_UserListRelationFilter {
    every?:rb_UserWhereInput,
    none?:rb_UserWhereInput,
    some?:rb_UserWhereInput,
}
export interface rb_UserOrderByWithRelationInput {
    Role?:rb_RoleOrderByRelationAggregateInput,
    name?:rb_SortOrder,
    uid?:rb_SortOrder,
}
export interface rb_UserUpdateInput {
    Role?:rb_RoleUpdateManyWithoutUserNestedInput,
    name?:rb_StringFieldUpdateOperationsInput,
    uid?:rb_StringFieldUpdateOperationsInput,
}
export interface rb_UserWhereInput {
    AND?:rb_UserWhereInput,
    NOT?:rb_UserWhereInput,
    OR?:rb_UserWhereInput[],
    Role?:rb_RoleListRelationFilter,
    name?:rb_StringFilter,
    uid?:rb_StringFilter,
}
export interface rb_UserWhereUniqueInput {
    uid?:string,
}
export interface tengxunyun_avatarProfileMeta {
}
enum rb_SortOrder {
    'asc',
    'desc',
}

export type JSONValue = string | number | boolean | JSONObject | Array<JSONValue>;

export type JSONObject = { [key: string]: JSONValue };

export interface GraphQLError {
    message: string;
    path?: ReadonlyArray<string | number>;
}