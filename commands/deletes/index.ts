import program from "../../index"
import {getEnv} from "../../api/contentful";
import {sleep} from "../../misc/common";

program
    .command('deletes')
    .action(async () => {
        const contentfulEnv = await getEnv()

        contentfulEnv.getEntries().then(entries => {
            entries.items.forEach(async function (entry) {
                console.log(entry.fields.title)
                console.log('削除')

                await sleep(1000)
                await entry.unpublish()
                await entry.delete()
            })
        })

    })
