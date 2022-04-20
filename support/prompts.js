const inquirer = require('inquirer')

const promptInput = async (message) => {
    return await inquirer.prompt({
        type: 'input',
        name: 'answer',
        message
    })
}

const promptCheckbox = async (message, choices) => {
    return await inquirer.prompt({
        type: 'checkbox',
        name: 'answer',
        message,
        choices
    })
}

const promptList = async (message, choices) => {
    return await inquirer.prompt({
        type: 'list',
        name: 'answer',
        message,
        choices
    })
}

const promptConfirm = async (message) => {
    return await inquirer.prompt({
        type: 'confirm',
        name: 'ansewr',
        message
    })
}

const confirmRecursively = async (message) => {
    const result = await promptConfirm(message)
    if (result.answer) {
        return true;
    }
    return await confirmRecursively(message)
}

exports.promptInput = promptInput;
exports.promptCheckbox = promptCheckbox;
exports.promptList = promptList;
exports.promptConfirm = promptConfirm;
exports.confirmRecursively = confirmRecursively;
