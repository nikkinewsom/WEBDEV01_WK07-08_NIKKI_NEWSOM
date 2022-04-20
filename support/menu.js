const fs = require('fs')
const uuidv4 = require('uuid').v4
const { db, getTodoList } = require('./utility')
const { promptInput } = require('./prompts')

const dbPath = '../database/db.json'

const lookupTable = async (answer, id) => {
    return await {
        new: addNewEntry,
        exit: exitApp,
        add: addItemToList,
    }[answer](id)
}

// entry menu section

const addNewEntry = async () => {
    const name = await promptInput('Name of List: ')

    const entry = {
        name: name.answer,
        id: uuidv4(),
        items: []
    }

    const modifiedDB = [...db(), entry]
    fs.writeFileSync('./database/db.json', JSON.stringify(modifiedDB), { encoding: 'utf-8' })
    return entry.id
}

const exitApp = () => {
    console.clear()
    console.log('Thank you. Hope to see you again.')
    console.log('')
    return null;
}

// Submenu Section

const addItemToList = async (id) => {
    const todoList = getTodoList(id)
    const text = await promptInput('Item: ')
    const entry = {
        id: uuidv4(),
        text: text.answer,
        complete: false
    }
    const modifiedTodoList = { ...todoList, items: [...todoList.items.entry] }

    const modifiedDB = [...db().filter(list => list.id != id), modifiedTodoList]
    fs.writeFileSync('./database/db.json', JSON.stringify(modifiedDB), { encoding: 'utf-8' })
    return id
}

exports.lookupTable = lookupTable;