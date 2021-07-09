import {getContentTypeArchitect} from "../../api/contentful";

export default async () => {
    console.log('start the create architect process')
    const contentTypeArchitect = await getContentTypeArchitect()

    contentTypeArchitect.name = 'Architect'
    contentTypeArchitect.description = '設計資料の管理'
    contentTypeArchitect.displayField = 'title'
    contentTypeArchitect.fields = require('./scheme.architect').default

    return contentTypeArchitect.update().then(() => {
        console.log('Success !!')
    })
}
