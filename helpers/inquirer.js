const inquirer = require('inquirer');
require('colors');

const menuOpts = [
    {
	type: 'list',
	name: 'opcion',
	message: 'Que desea hacer?',
	choices: ['opt1', 'opt2', 'opt3']
    }
];

const inquirerMenu = async() => {
    console.clear();
    console.log('======================'.green);
    console.log(' Selecione una opcion'.green);
    console.log('======================\n'.green);

    const prompt = inquirer.createPromptModule();
    const opt = await prompt(menuOpts);
    return opt;
}

module.exports = {
    inquirerMenu
}
