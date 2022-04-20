const { db } = require('./utility')
const colors = require('colors')
const messageTitle = (id = null) => {
    console.clear()
    if (id) {
        const entry = db().find(entry => entry.id == id)
        console.log(`Todo-list: ${colors.bgMagenta(entry.name)}`)
    } else {
        console.log('Todo-list')

    }
    console.log('')
}

exports.messageTitle = messageTitle;