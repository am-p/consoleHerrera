const Tarea = require('./tarea')

class Tareas {
    _listado = {};

    constructor() {
	this._listado = {};//el guion bajo es una forma de indicar que es privada!
    }

    crearTarea(desc = '') {
	const tarea = new Tarea(desc);
	this._listado[tarea.id] = tarea;
    }
}

module.exports = Tareas;
