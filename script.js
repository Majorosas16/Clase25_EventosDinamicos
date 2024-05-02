import { obtenerDatos, Tarea } from "./utils.js";

const renderizarTareas = async (textoBusqueda) =>{
    const data = await obtenerDatos();

    const textoLimpio=textoBusqueda.toLowerCase();

    const tareasNormales = document.querySelector("#tareasNormales");
    tareasNormales.innerHTML = "";

    for (const tareaNormal of data.tareasNormales){
        const instanciaTarea= new Tarea(
            tareaNormal.id,
            tareaNormal.nombre,
            tareaNormal.terminada
        );

        const tareaRender = instanciaTarea.render();

        if(textoLimpio === ""||
            tareaNormal.nombre.toLowerCase().includes(textoLimpio)){

            tareasNormales.appendChild(tareaRender);
            instanciaTarea.addEventListeners();
        }
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

        if(textoLimpio === "" ||
         tareaCritica.nombre.toLowerCase().includes(textoLimpio)){

            tareasCriticas.appendChild(tareaRender);
            instanciaTarea2.addEventListeners();
        }



    }

};

const render = async () => {
    await renderizarTareas("");

    const barraBusqueda = document.querySelector (".barraBusqueda");
    barraBusqueda.addEventListener("input", async (event) =>{
        const textBusqueda =event.target.value;

        await renderizarTareas(textBusqueda);
    })
};

document.addEventListener("DOMContentLoaded", render);
