export const obtenerDatos = async () => {
    const response = await fetch("./data.json");
    const data = await response.json();
    return data;
}

export class Tarea {
    nombre;
    terminado;
    #id;

    #nodoNombreTarea;
    #nodoEstadoTarea;
    #nodoBotonELiminar;
    #nodoContenedorTarea;

    constructor(id, nombre, terminado) {
        this.#id = id;
        this.terminado = terminado;
        this.nombre = nombre;
    }

    render() {
        const contenedorTarea = document.createElement("div");
        contenedorTarea.id = this.id;
        contenedorTarea.classList.add("tarea");
        this.#nodoContenedorTarea=contenedorTarea;

        const checkBoxTarea = document.createElement("input");
        checkBoxTarea.type = "checkbox";
        checkBoxTarea.checked = this.terminado;
        this.#nodoEstadoTarea = checkBoxTarea;

        const nombreTarea = document.createElement("p");
        nombreTarea.textContent = this.nombre;
        nombreTarea.classList.add("tarea__nombre");
        this.#nodoNombreTarea = nombreTarea;

        if (this.terminado === true) {
            nombreTarea.classList.add("tarea__nombre--terminada");
        }

        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        this.#nodoBotonELiminar=botonEliminar;

        contenedorTarea.appendChild(checkBoxTarea);
        contenedorTarea.appendChild(nombreTarea);
        contenedorTarea.appendChild(botonEliminar);

        return contenedorTarea;
    }

    addEventListeners() {

        this.#nodoEstadoTarea.addEventListener("input", (event) => {
            const status = event.target.checked;

            if (status === true) {
                this.#nodoNombreTarea.classList.add("tarea__nombre--terminada");
            } else {
                this.#nodoNombreTarea.classList.remove("tarea__nombre--terminada");
            }
        });

        this.#nodoBotonELiminar.addEventListener("click", () =>{
            this.#nodoContenedorTarea.remove();
        });
    }
}

