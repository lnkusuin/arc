import program from '../../index'
import architect from "./architect";
import catalog from "./catalog";

program
    .command('integrate <content_type> <path>')
    .description('integrate a document to contentful')
    .action(async (content_type, path) => {
        switch (content_type){
            case 'architect':
                await architect(path)
                break
            case 'catalog':
                await catalog(path)
                break
        }
    })

