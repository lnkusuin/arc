import fs, {createReadStream} from "fs"

const glob = require("glob")
const fm = require('front-matter')

import {getEnv} from "../../api/contentful";
import {sleep} from "../../misc/common";
import path from "path";


export default async (_path: string) => {
    console.log('start a integrate architect')
    _path = path.join(process.cwd(), _path)
    const contentfulEnv = await getEnv()

    async function* getFiles() {
        const files = glob.sync(_path, {ignore: [`**/node_modules/**`]})
        console.info(files)

        if(!files.length) {
            console.info('指定のフォルダが存在しません')
            process.kill(1)
        }

        for (const file of files) {
            const buff = await fs.promises.readFile(file, "utf-8");
            const content = fm(buff)
            yield { file, content }
        }
    }

    async function getContentfulArchitectData(item: any) {
        const attributes = item.content.attributes

        return {
            id: {'ja': attributes?.id },
            title: {'ja': attributes?.title },
            stakeholder: {'ja': attributes?.stakeholder },
            goal: {'ja': attributes?.goal },
            effect: {'ja': attributes?.effect },
            workload: {'ja': attributes?.workload },
            relations: {'ja': attributes?.relations },
            order: {'ja': attributes?.order },
            templateType: {'ja': attributes?.templateType },
            body: {'ja': item.content.body },
            category: {'ja': 'Portal' },
            design: {'ja': attributes?.design },
            source: {'ja': attributes?.source },
        }
    }

    async function getOverviewStr(item: any) {
        const path = require('path')
        const targetPath = path.join(path.dirname(item.file), item.content.attributes?.overview || '')

        try {
            const stat = fs.statSync(targetPath)
            if(stat.isFile()) {
                // 実体ファイルパスの解決
                return targetPath
            }
        }catch (err) {
            console.log(err)
        }

        return ''
    }

    for await (const item of getFiles()) {
        await sleep(250)
        console.info('250ミリ秒遅延')
        const data = await getContentfulArchitectData(item)


        const overviewStr = await getOverviewStr(item)
        console.log(overviewStr)


        if(overviewStr) {
            console.log('upload---: ' + overviewStr);

            (await contentfulEnv.getAssets({
                'fields.title': data.id['ja'],
            }))
                .items.forEach(item => {
                item.unpublish().then(entry => {
                    entry.delete()
                })
            })

            const asset = await contentfulEnv.createAssetFromFiles({
                fields: {
                    title: {
                        'ja': data.id['ja']
                    },
                    description: {
                        'ja': ''
                    },
                    file: {
                        'ja': {
                            contentType: 'image/svg+xml',
                            fileName: `${data.title['ja']}.svg`,
                            file: createReadStream(overviewStr)
                        },
                    }
                }
            })

            const processedAsset = await asset.processForAllLocales();

            await processedAsset.publish()

            // @ts-ignore
            data.overview = {
                ja: {
                    sys: { type: 'Link', linkType: 'Asset', id: asset.sys.id }
                }
            }
        }

        await contentfulEnv.getEntry(data.id['ja']).then(entry => {
            console.log('------ update entry ------')

            entry.fields = data

            entry.update().then((entry) => {
                entry.publish()
            })

            console.log('published')

        }).catch(async (err) => {
            const message = JSON.parse(err.message)

            if(message.status === 404) {
                console.log('create entry')
                await contentfulEnv.createEntryWithId('architect', data.id['ja'], {
                    fields: data
                }).then(async entry => {
                    await entry.publish()
                    console.log('published')
                }).catch(err => {
                    const message = JSON.parse(err.message)

                    console.log('====== error ======')
                    console.log(data)
                    console.log(message)
                    console.log(message.details)
                })
            }
        })
    }

    console.log('done')
}
