import products from '../local-json/products.json'


const obtenerProductos = () => {

  return new Promise((resolve) => {
    setTimeout( () => {
      resolve(products)
    },100);
  });
}

const obtenerProducto = (idUrl) => {

  return new Promise((resolve)=>{
    const reqItem = products.find( (item)=>{
      return item.id === parseInt(idUrl);
    });

    setTimeout( ()=>{
      resolve(reqItem);
    }, 2000)
  })

};

const obtenerProductoPorCategoria = (catUrl) =>{

  return new Promise((resolve,reject) =>{
   let reqItems = products.filter( (item) => item.cat === catUrl);
   setTimeout(() => {
    resolve(reqItems);
   }, 1000);
  })
};

export default obtenerProductos;

export{obtenerProducto, obtenerProductoPorCategoria};