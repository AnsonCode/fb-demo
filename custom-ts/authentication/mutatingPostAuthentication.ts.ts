import { AuthenticationHookRequest, AuthenticationResponse } from 'fireboom-wundersdk/server'
import type { User } from "generated/claims"
export default async function mutatingPostAuthentication(hook: AuthenticationHookRequest) : Promise<AuthenticationResponse<User>>{
	// TODO: 在此处添加代码
	console.log("mutatingPostAuthentication")
	return {
		status:'deny',
		message: 'string'
	}
}