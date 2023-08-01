import {
  collection,
  getDocs,
} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";
import {db} from "./firebase.js"


const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal_x');
const btnConsultar = document.getElementById("consultar")

const taskForm = document.getElementById("task-form");
const ubicacion_despl = document.getElementById("ubicacion_despl"); //Espacio para colocar formulario
const ubicacionesDB = await getDocs(collection(db, "ubicaciones")); //Para desplegar BD


export const setupRegistros = (data) => {

  if (data.length) {
  btnConsultar.addEventListener("click", async (e) => {
    e.preventDefault();

    const task_sku = taskForm["task-sku"];
    const tasksku = task_sku.value

    ubicacion_despl.innerHTML = "";
    data.forEach((doc) => {
      const task = doc.data();

      /*CONVERTIR A VALOR*/
      console.log("Ingresado", tasksku)
      console.log("Buscado", task.sku)

      /* REVISAR */
      if (tasksku == task.sku){
      ubicacion_despl.innerHTML = ``;
      try {
        console.log("Desplegando registro nuevo");
        ubicacion_despl.innerHTML += `
        <h2 class="modal__title">La Ubicación de ${task.sku} es:</h2>
        <h3 class="modal__paragraph" > ${task.ubi} </h3>
        `;
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("No existe")
      ubicacion_despl.innerHTML = `
      <h3 >No encontrado</h3> 
  `;
    }

  });
  });
} else{
  console.log("No hay registros")
  ubicacion_despl.innerHTML = `
  <h3 >¡No hay registros!</h3> 
  `;
  
}
};

setupRegistros (ubicacionesDB.docs);

//VENTANA MODAAL INFORMATIVA post registro
btnConsultar.addEventListener("click", (e)=>{
  e.preventDefault();
  modal.classList.add('modal--show');
});

closeModal.addEventListener('click', (e)=>{
  e.preventDefault();
  modal.classList.remove('modal--show');
});

/*BLOQUEAR CLICK DERECHO*/
function disableIE() {
    if (document.all) {
        return false;
    }
}
function disableNS(e) {
    if (document.layers || (document.getElementById && !document.all)) {
        if (e.which==2 || e.which==3) {
            return false;
        }
    }
}
if (document.layers) {
    document.captureEvents(Event.MOUSEDOWN);
    document.onmousedown = disableNS;
} 
else {
    document.onmouseup = disableNS;
    document.oncontextmenu = disableIE;
}
document.oncontextmenu=new Function("return false");