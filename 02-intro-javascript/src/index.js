// Variables y constantes

const nombre = 'Julián';
const apellido = 'Mora';
const nombreCompleto = `${nombre} ${apellido}`;

const getSaludo = () => `Hola ${nombreCompleto}`;
const getUser = () => ({
    id: 1234,
    name: `${nombre} ${apellido}`
});

console.log(getSaludo());

console.log(getUser());

const namee = (valor) => {
    return [ valor, () => { console.log('hola Mundo')}]
};

const [nombre2, fun] = namee('Goku');

console.log(nombre2);
fun();

const heroes = [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
];