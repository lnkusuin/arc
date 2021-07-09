import fs from 'fs'
import path from 'path'
import ejs from 'ejs'
import {getId} from '../uuid'

export default async function(){
    const text = ejs.render(fs.readFileSync(path.join(__dirname,'./architect.md'), 'utf8'), {
        id: getId()
    })

    console.log(text)
}