const title = document.getElementById('title');
const description = document.getElementById('description');
const checkbox = document.getElementById('checkboxLicense');
const titlecontainer = document.getElementById('title--container');
const containerdesc = document.getElementById('desc--container');
const checkjs = document.getElementById('check');

const validarCampos = (event) =>{


    const errorText = document.getElementById('error');
    const subrayado = document.createElement('p');

    if (title.value.length == 0) {
        titlecontainer.classList.add('subrayadorojo');
        event.preventDefault();
    }

    if (description.value == 0) {
        containerdesc.classList.add('subrayadorojo');
        event.preventDefault();
    }

    if (!checkbox.checked) {
        checkjs.classList.add('subrayadorojo');
        event.preventDefault();
    }

    if((title.length == 0) || (description.length == 0) || (!checkbox.checked)) {

        /*Aqui namas concatenar dos textos para ver mas o menos como funciona aunque no lo hice tan bien*/
        subrayado.textContent = 'Error.'
        errorText.textContent = subrayado.textContent + ' Debes proporcionar todos los campos marcar todos los campos marcados';
        errorText.className = 'text--error';
        event.preventDefault();
    }



};

const botonEnviar = document.querySelector('#boton--enviar');

botonEnviar.addEventListener('click',validarCampos);

title.addEventListener('input', () => {
    titlecontainer.classList.remove('subrayadorojo');
});

description.addEventListener('input', () => {
    containerdesc.classList.remove('subrayadorojo');
});

checkbox.addEventListener('change', (e) =>{
    if (e.target.checked) {
        checkjs.classList.remove('subrayadorojo');
    }
})
