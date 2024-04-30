import { obtenerDatos, Tarea } from "./utils.js";

const renderizarTareas = async () =>{
    const data = await obtenerDatos();

    const tareasNormales = document.querySelector("#tareasNormales");
    tareasNormales.innerHTML = "";

    for (const tareaNormal of data.tareasNormales){
        const instanciaTarea= new Tarea(
            tareaNormal.id,
            tareaNormal.nombre,
            tareaNormal.terminada
        );

        const tareaRender = instanciaTarea.render();
        tareasNormales.appendChild(tareaRender);
    }

    const tareasCriticas = document.querySelector("#tareasCriticas");
    tareasCriticas.innerHTML = "";

    for (const tareaCritica of data.tareasCriticas){
        const instanciaTarea2= new Tarea(
            tareaCritica.id,
            tareaCritica.nombre,
            tareaCritica.terminada
        );

        const tareaRender = instanciaTarea2.render();
        tareasCriticas.appendChild(tareaRender);
    }

};

const render = async () => {
    await renderizarTareas();
};

document.addEventListener("DOMContentLoaded", render);
