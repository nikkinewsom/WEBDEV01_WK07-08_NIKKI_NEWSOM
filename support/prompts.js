const inquirer = require('inquirer')

const promptInput = async (message) => {
    return await inquirer.prompt({
        type: 'input',
        name: 'answer',
        message
    })
}

exports.promptInput = promptInput;