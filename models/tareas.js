const Tarea = require('./tarea');

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

    cargarTareasFromArray( tareas = []) {
	tareas.forEach((tarea) => {this._listado[tarea.id] = tarea})
    }
    
    crearTarea(desc = '') {
	const tarea = new Tarea(desc);
	this._listado[tarea.id] = tarea;
    }

    listadoCompleto() {
        
        console.log();
        this.listadoArray.forEach( (tarea, i) => {

            const idx = `${i + 1}`.green;
            const { desc, completadoEn } = tarea;
            const estado = ( completadoEn ) 
                  ? 'Completada'.green
                  : 'Pendiente'.red;

            console.log(`${ idx } ${ desc } :: ${ estado }`);

        });         
    }

    listarPendientesCompletadas( completadas = true ) {

        console.log();
        let contador = 0;
        this.listadoArray.forEach( tarea => {

            const { desc, completadoEn } = tarea;
            const estado = ( completadoEn ) 
                  ? 'Completada'.green
                  : 'Pendiente'.red;
            if ( completadas ) {
                // mostrar completadas
                if ( completadoEn ) {
                    contador += 1;
                    console.log(`${ (contador + '.').green } ${ desc } :: ${ completadoEn.green }`);
                }
            } else {
                // mostrar pendientes
                if ( !completadoEn ) {
                    contador += 1;
                    console.log(`${ (contador + '.').green } ${ desc } :: ${ estado }`);
                }
            }

        });     

    }

    borrarTarea( id = '' ) {

        if ( this._listado[id] ) {
            delete this._listado[id];
        }

    }

    toggleCompletadas( ids = [] ) {

        ids.forEach( id => {

            const tarea = this._listado[id];
            if ( !tarea.completadoEn ) {
                tarea.completadoEn = new Date().toISOString()
            }

        });

        this.listadoArray.forEach( tarea => {

            if ( !ids.includes(tarea.id) ) {
                this._listado[tarea.id].completadoEn = null;
            }

        });


    }
    
}

module.exports = Tareas;
