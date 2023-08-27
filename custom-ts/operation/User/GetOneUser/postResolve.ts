import { HookRequest, HookRequestWithResponse } from 'generated/fireboom.hooks'
import { User__GetOneUserResponse } from 'generated/models'

export default async function postResolve(hook: HookRequest & HookRequestWithResponse<User__GetOneUserResponse>) : Promise<void>{
	// TODO: 在此处添加代码
	console.log("postResolve")
	
}