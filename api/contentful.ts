import { createClient } from 'contentful-management'

const env = process.env

if(!env.ARC_CONTENT_FUL_MANAGE_ACCESS_TOKEN) {
    console.error('アクセストークン: ARC_CONTENT_FUL_MANAGE_ACCESS_TOKEN を設定してください。')
    process.exit(1)
}

if(!env.ARC_SPACE_ID) {
    console.error('スペースID: ARC_SPACE_ID を設定してください。')
    process.exit(1)
}

const client = createClient({
    // This is the access token for this space. Normally you get the token in the Contentful web app
    accessToken: env.ARC_CONTENT_FUL_MANAGE_ACCESS_TOKEN,
})

export const getSpace = () => {
    return client.getSpace(env.ARC_SPACE_ID || "")
}


export const getEnv = async () => {
    const space = await getSpace()

    return space.getEnvironment('master')
}


export const getContentTypeArchitect = async () => {
    const env = await getEnv()

    return env.getContentType('architect')
}


export const getContentTypeCatalog = async () => {
    const env = await getEnv()

    return env.getContentType('catalog')
}
