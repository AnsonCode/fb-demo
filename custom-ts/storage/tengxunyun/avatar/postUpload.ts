import { Uploads } from 'generated/fireboom.hooks'

const postUpload: NonNullable<NonNullable<NonNullable<Uploads['tengxunyun']>['avatar']>['postUpload']> = async ({ user, file, meta, internalClient, error }) => {
  // TODO 在这里添加逻辑
  console.log("postUpload")
}

export default postUpload