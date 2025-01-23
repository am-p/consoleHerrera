require('colors');
const { guardarDB, leerDB } = require('./helpers/guardarArchivo');
const { inquirerMenu, pausa, leerInput } = require('./helpers/inquirer');
const Tareas = require('./models/tareas');



const main = async() => {
    let opt = '';
    const tareas = new Tareas();
    const tareasDB = leerDB();
    console.log(tareasDB, 'holi');

    if (tareasDB) {
	tareas.cargarTareasFromArray(tareasDB);
    }

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
