let fruteria = {
  frutas: [
    {
      nombre: 'naranja',
      cantidad: 10,
    },
    {
      nombre: 'platanos',
      cantidad: 25,
    },
    {
      nombre: 'peras',
      cantidad: 5,
    },
  ],
  verduras: [
    {
      nombre: 'alcachofa',
      cantidad: 10,
      propiedades: ['vitamina B', 'agua'],
    },
    {
      nombre: 'tomates',
      cantidad: 25,
      precioUnidad: 0.25,
    },
  ],
};

console.log('nombre 2a fruta = ' + fruteria.frutas[1].nombre);
fruteria.frutas[1].precioUnidad = 1;
console.log('precio de la 2a fruta = ' + fruteria.frutas[1].precioUnidad);

let strFruteria = JSON.stringify(fruteria);
console.log('String del JSON completo = ' + strFruteria);

Cookies.set('fruteria', strFruteria, { expires: 1 });

let strFruteria2 = Cookies.get('fruteria');
let newFruteria = JSON.parse(strFruteria2);
console.log(
  'Tras escribir en la cookie, nombre de la 1a verdura = ' +
    newFruteria.verduras[0].nombre
);

let id = document.getElementById('i1');
id.value = 'Hola';
id.addEventListener('blur', (ev) => {
  console.log(ev.target.id);
  window.setTimeout(function () {
    console.log('HOLA');
    document.querySelector('input').focus();
    document.querySelector('input').select();
  }, 0);
});
