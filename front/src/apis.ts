const baseUrl = 'http://localhost:9991'

export type ID = string

export type TodoItem = {
  id: ID
  title: string
  completed: boolean
}

type RequestOptions = Record<string, any> & { method: string }

export async function request<T>(url: string, opts?: RequestOptions) {
  let body = null
  if (opts) {
    const { method, ...rest } = opts
    body = rest ?? {}
  }
  const resp = await fetch(`${baseUrl}/operations/${url}`, {
    method: opts?.method,
    body: opts?.method.toLowerCase() !== 'get' && body ? JSON.stringify(body) : null,
    credentials: "include"// 带上cookie

  })
  if (resp.ok) {
    return resp.json().then(res => ({
      data: res.data.data as T,
      error: null
    }))
  } else {
    console.log("请求错误：" + resp.statusText)
    alert("请求错误：" + resp.statusText)
    return {
      data: null,
      error: resp.statusText
    }
  }
}

// 「实时]获取全部待做事项
export async function getAllTodos(callback: (data: TodoItem[]) => void) {
  const resp = await fetch(`${baseUrl}/operations/GetAllTodos?wg_live=true`, {
    credentials: "include"// 带上cookie
  });
  if (resp.ok) {
    const reader = resp.body?.pipeThrough(new TextDecoderStream()).getReader();
    while (true) {
      const read = await reader?.read();
      try {
        if (read?.done) {
          break;
        }
        if (read?.value) {
          const json = JSON.parse(read.value);
          callback(json.data.data as TodoItem[]);
        }
      } catch (error) {
        //
      }
    }
  }
}
// 完成单个待做事项
export async function completedTodo(id: ID, completed: boolean) {
  const { error } = await request("CompleteTodo", {
    id,
    completed,
    method: "post",
  });
  return !error;
}
// 完成所有待做事项
export async function completedAllTodos(completed: boolean) {
  const { error } = await request("CompleteAllTodos", {
    completed,
    method: "post",
  });
  return !error;
}
// 创建待做事项
export async function createTodo(title: string) {
  const { error, data } = await request("CreateTodo", {
    method: "post",
    title,
  });
  return error ? false : data;
}
// 更新待做事项
export async function updateTitle(id: string, title: string) {
  const { error } = await request("UpdateTodoTitle", {
    method: "post",
    id,
    title,
  });
  return !error;
}
// 删除待做事项
export async function removeTodo(id: string) {
  const { error } = await request("RemoveTodo", { method: "post", id });
  return !error;
}
// 删除已完成的待做事项
export async function removeCompleted() {
  const { error } = await request("RemoveCompleted", { method: "post" });
  return !error;
}

export async function logout() {
  const url = `${baseUrl}/auth/cookie/user/logout`;

  const response = await fetch(url, {
    method: 'GET',
    credentials: "include"// 带上cookie
  });
  window.location.reload();

  return response.ok;
}

// GET https://<hostname>/auth/cookie/user
export async function getUserInfo() {
  const resp = await fetch(`${baseUrl}/auth/cookie/user`, {
    method: "get",
    body: null,
    credentials: "include"// 带上cookie
  })
  if (resp.ok) {
    return {
      data: await resp.json(),
      error: null
    }
  } else {
    return {
      data: null,
      error: resp.statusText
    }
  }
}


export async function upload(file: File, profile: string): Promise<string | null> {
  const fb = new FormData()
  fb.append('files', file)
  try {

    const resp = await fetch(`${baseUrl}/s3/tengxunyun/upload?directory=avatar`, {
      method: 'post',
      headers: profile ? { "X-Upload-Profile": profile } : undefined,
      body: fb,
      credentials: "include"// 带上cookie
    })
    if (resp.ok) {
      const list = await resp.json()
      return `http://test-1314985928.cos.ap-nanjing.myqcloud.com/${list[0].key}`
    }
    return null
  } catch (error) {
    return null
  }
}

