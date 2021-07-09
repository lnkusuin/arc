import program from '../../index'
import upsertContentTypeArchitect from "./upsertContentTypeArchitect";
import upsertContentTypeCatalog from "./upsertContentTypeCatalog";

program
    .command('create <content_type>')
    .description('create a content type of contentful')
    .action(async (content_type) => {
        switch (content_type) {
            case 'architect':
                await upsertContentTypeArchitect()
                break
            case 'catalog':
                await upsertContentTypeCatalog()
                break
        }
    });
