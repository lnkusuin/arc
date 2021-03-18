import program from "../../index"

program
    .command('uuid')
    .action(async () => {
        console.log('generate uuid62')
        const uuid62 = require('uuid62')

        for (let i = 0; i < 100; i++) {
            const uuid = uuid62.v4()
            console.log(uuid)
        }

        console.log('done')
    })
