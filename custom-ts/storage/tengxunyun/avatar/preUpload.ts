import { Uploads } from 'generated/fireboom.hooks'

const preUpload: NonNullable<NonNullable<NonNullable<Uploads['tengxunyun']>['avatar']>['preUpload']> = ({ user, file, meta }) => {
  // TODO 在这里添加逻辑
  console.log(user)
  console.log("preUpload测试...")
  return {
    fileKey:file.name
  }
}

export default preUpload