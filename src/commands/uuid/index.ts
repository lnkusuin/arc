import program from '../../index'

program
    .command('uuid')
    .action(async () => {
        console.log('generate uuid62')

        for (let i = 0; i < 100; i++) {
            const uuid = getId()
            console.log(uuid)
        }

        console.log('done')
    })


export function getId(): string {
    const uuid62 = require('uuid62')
    return uuid62.v4()
}