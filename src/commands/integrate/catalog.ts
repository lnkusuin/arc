import fs from "fs";
import path from "path";
import YAML from "yaml";
import {getEnv} from "../../api/contentful";

export default async (_path: string) => {
    console.log('start a integrate catalog')
    _path = path.join(process.cwd(), _path)

    try {
        fs.existsSync(_path)
    } catch(err) {
        console.error(err)
        process.kill(1)
    }

    const contentfulEnv = await getEnv()

    function getCatalogData() {
        console.log(_path)
        const file = fs.readFileSync(_path, 'utf8')
        return YAML.parse(file)
    }

    function getCatalogContentfulData() {
        const catalogData = getCatalogData()

        return {
            id: {'ja': catalogData.id },
            title: {'ja': catalogData.title },
            goal: {'ja': catalogData.goal },
            effect: {'ja': catalogData.effect },
            workload: {'ja': catalogData.workload },
            stakeholders: {'ja': catalogData.stakeholders },
            order: {'ja': catalogData.order },
            status: {'ja': catalogData.status },
            pined: {'ja': catalogData.pined },
            resources: {'ja': catalogData.resources },
            context: {'ja': catalogData.context },
            contents: {'ja': catalogData.contents },
        }
    }

    const contentfulData = getCatalogContentfulData()
    const encodedUUID62 = contentfulData.id['ja']

    await contentfulEnv.getEntry(encodedUUID62).then(entry => {
        console.log('----------- update entry -----------')

        entry.fields = contentfulData

        entry.update()
            .then((entry) => entry.publish())
            .then(() => console.log('published'))


    }).catch(async (err) => {
        const message = JSON.parse(err.message)

        if(message.status === 404) {
            console.log('----------- create entry -----------')
            const entry = await contentfulEnv.createEntryWithId('catalog', encodedUUID62, {
                fields: contentfulData
            })

            await entry.publish()
            console.log('published')
        }
    })


    console.log('Done!!')
}
