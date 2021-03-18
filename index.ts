import {Command} from "commander";


const program = new Command()
program.version('0.0.1')
export default program

import './commands'

program.parse(process.argv)


