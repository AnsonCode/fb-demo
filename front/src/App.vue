<script lang="ts" setup>
import { client } from "./ts-client";
import { GetTResponseData } from "./ts-client/models";

import {
  User,
  GraphQLResponseError,
  ResponseError,
  InputValidationError
} from "fireboom-wundersdk/client";

import { ref } from "vue";

// const count = ref(1)
const user = ref<User | null>(null);
function handleLogin() {
  client.login("auth0");
}
async function getUserInfo() {
  const userinfo = await client.fetchUser();
  console.log(userinfo);
  user.value = userinfo;


}
getUserInfo();
async function logout() {
  client.logout({ logoutOpenidConnectProvider: true });
}

const sectionRef = ref<HTMLInputElement | null>(null);
function handleUpClick() {
  sectionRef.value?.click();
}

// 为啥无法上传？
async function handleFiles(e: Event) {
  const files = (e.target as HTMLInputElement)?.files;
  console.log(files);
  if (files == null) return
  const res = await client.uploadFiles({
    provider: "tengxunyun",
    files: files,
    profile: "avatar"
  })
  if(user.value){
    user.value.picture="https://test-1314985928.cos.ap-nanjing.myqcloud.com/"+res.fileKeys[0]
    console.log(res.fileKeys[0])
  }
}

const errMsg = ref("no error")
const tdata = ref<GetTResponseData | undefined>(undefined)
const tid = ref(1)
async function handleReq() {
  const { data, error } = await client.query({
    operationName: "GetT",
    input: {
      id: tid.value,
    },
  });
  tdata.value = data
  console.log(data)
  if (error != undefined) {
    if (error instanceof InputValidationError) {
      errMsg.value = "meet InputValidationError:" + error.message + error.statusCode
    }
    else if (error instanceof GraphQLResponseError) {
      console.log("meet GraphQLResponseError:", error.errors[0].location)
      errMsg.value = "meet GraphQLResponseError:" + error.errors[0].location + error.statusCode
    } else if (error instanceof ResponseError) {
      console.log("meet ResponseError:", error.statusCode)
      errMsg.value = "meet ResponseError:" + error.statusCode
    } else {
      errMsg.value = "meet UnknownError:" + JSON.stringify(error)
    }
  }
}
handleReq()

const name=ref("")
const des=ref("")
async function createData(){
  const {data}=await client.mutate({
    operationName:"CreateT",
    input:{
      name:name.value,
      des:des.value
    }
  })
  tid.value=data?.rb_createOneT?.id || 0
  console.log(data?.rb_createOneT?.id)
}

async function testFunc() {
  client.mutate({
    operationName:"function/login",
    input:{
      username:"ss",
      password:"ss",
      Res:{
        data:"ss",
        msg:"sss"
      }
    }
  })
}
testFunc()

</script>

<template>
  <div>
    <div>
      <div v-if="user">
        <img height="30" :src="user?.picture" @click="handleUpClick" />
        <span>{{ user.nickName }}</span>
        <input ref="sectionRef" style="display: none" type="file" multiple="false" accept=".jpg,.jpeg,.png,.gif"
          @change="handleFiles" />
        <div>
          <button @click="logout">logout</button>
        </div>

        <!-- /auth/cookie/user/logout -->
      </div>

      <div v-else>
        <button @click="handleLogin">login</button>
      </div>
    </div>
    <div>
      <div>
        <p>
          <input v-model="tid" @change="handleReq" type="number" />
        <p>error：{{ errMsg }}</p>
        <p>data：</p>
        <div v-if="tdata?.rb_findUniqueT?.id">
          <p>id:{{ tdata?.rb_findUniqueT?.id }}</p>
          <p>name:{{ tdata?.rb_findUniqueT?.name }}</p>
          <p>des:{{ tdata?.rb_findUniqueT?.des }}</p>
        </div>
        <div v-else>no data</div>

        </p>
        <button @click="handleReq">刷新</button>
      </div>
      <div>
        <p>
          <input v-model="name"   />
          <input v-model="des"   />
        </p>
        <button @click="createData">创建</button>
      </div>
    </div>
  </div>
</template>

<style></style>
