import {getContentTypeCatalog} from "../../api/contentful";

export default async () => {
    console.log('start the create catalog process')
    const contentTypeCatalog = await getContentTypeCatalog()

    contentTypeCatalog.name = 'Catalog'
    contentTypeCatalog.description = 'カタログ資料の管理'
    contentTypeCatalog.displayField = 'title'
    contentTypeCatalog.fields = require('./scheme.catalog').default

    return contentTypeCatalog.update().then(() => {
        console.log('Success !!')
    })
}
