require('colors');
const { guardarDB } = require('./helpers/guardarArchivo');
const { inquirerMenu, pausa, leerInput } = require('./helpers/inquirer');
const Tareas = require('./models/tareas');



const main = async() => {
    let opt = '';
    const tareas = new Tareas();

    do {
	opt = await inquirerMenu();
	switch(opt) {
	case '1':
	    const desc = await leerInput('Descripcion:'); //desc de descripción
	    tareas.crearTarea(desc);
	    break;
	case '2':
	    console.log(tareas.listadoArray);
	    break;
	}
	guardarDB(tareas.listadoArray);
	await pausa();
    } while (opt !== '0');
    
};

main();
