// const fs = require('fs')
const inquirer = require('inquirer')
// const uuidv4 = require('uuid').v4
// const colors = require('colors')
// const Table = require('cli-table3')
const _ = require('lodash')

const { messageTitle } = require('./support/messages')
const { lookupTable } = require('./support/menu')
// const { db } = require('./support/utility')



const run = async (id = null) => {
    messageTitle(id)

    let result = await inquirer.prompt([
        //Entry Menu
        {
            type: 'list',
            name: 'answer',
            message: 'Choose an option',
            when: id == null,
            choices: [
                { name: 'Create new list', value: 'new' },
                { name: 'Select list', value: 'select' },
                { name: 'Exit', value: 'exit' },
            ]
        },
        //Submenu
        {
            type: 'list',
            name: 'answer',
            message: 'Choose an option',
            when: id !== null,
            choices: [
                { name: 'Add item', value: 'add' },
                { name: 'Remove item', value: 'remove' },
                { name: 'Update status', value: 'update' },
                { name: 'View list', value: 'view' },
                { name: 'Go back', value: 'back' },
            ]
        }])

    const returnedId = await lookupTable(result.answer, id)
    if (returnedId == 'back') { return run() }
    if (returnedId == 'exit') { return null }
    return run(returnedId)
}

run()