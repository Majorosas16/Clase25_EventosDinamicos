export const obtenerDatos = async () => {
    const response = await fetch ("./data.json");
    const data= await response.json();
    return data;
}

export class Tarea{
    nombre;
    terminado;
    #id;

    constructor (id,nombre,terminado){
        this.#id=id;
        this.terminado=terminado;
        this.nombre=nombre;
    }

    render(){
        const contenedorTarea = document.createElement("div");

        contenedorTarea.id=this.id;

        const checkBoxTarea= document.createElement("input");
        checkBoxTarea.type="checkbox";
        checkBoxTarea.checked=this.terminado;

        const nombreTarea= document.createElement("p");
        nombreTarea.textContent= this.nombre;

        const botonEliminar = document.createElement("button");
        botonEliminar.textContent="Eliminar";

        contenedorTarea.appendChild(checkBoxTarea);
        contenedorTarea.appendChild(nombreTarea);
        contenedorTarea.appendChild(botonEliminar);

        return contenedorTarea;
    }
}