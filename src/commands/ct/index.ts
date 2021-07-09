import program from '../../index'
import architect from './architect'
import catalog from './catalog'

program.command('ct <template_type>')
    .description('create a template with template_type')
    .action(async (template_type) => {
        switch (template_type) {
            case 'architect':
                return await architect()
            case 'catalog':
                return await catalog()
        }


        console.error('template_typeは`architect` か `catalog` を指定ください。')
    })