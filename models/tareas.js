const Tarea = require('./tarea')

class Tareas {
    _listado = {};

    constructor() {
	this._listado = {};//el guion bajo es una forma de indicar que es privada!
    }

    get listadoArray() {
	const listado = [];
	Object.keys(this._listado).forEach( key => {
	    const tarea = this._listado[key];
	    listado.push(tarea);
	});
	return listado;
    };
    
    crearTarea(desc = '') {
	const tarea = new Tarea(desc);
	this._listado[tarea.id] = tarea;
    }
}

module.exports = Tareas;
