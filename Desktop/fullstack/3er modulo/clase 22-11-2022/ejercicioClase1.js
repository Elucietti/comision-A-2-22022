/*function oper(a, b, callback) {
    setTimeout(function() {
      console.log(callback(a, b));
    }, 1500);
  }
  console.log('Antes de la ejecucion');
  
  oper(3, 10, (a, b) => a + b);
  
  console.log('Despues de la ejecucion?');


const lugaresVisitados = []
function irDePaseo() {
  setTimeout(function() {
    lugaresVisitados.push('Salta');
    setTimeout(function() {
      lugaresVisitados.push('Cordoba');
      setTimeout(function() {
        lugaresVisitados.push('Jujuy');
        setTimeout(function() {
          lugaresVisitados.push('Tierra del fuego');
          console.log(lugaresVisitados.toString())
        },1000);
      },1000);
    },1000);
  },1000);
}
irDePaseo();
*/
/*

let words = document.querySelectorAll(".word");
    const animateAll = (animate) => {
        setTimeout(() => {
            animate(words[0]);
            setTimeout(() => {
                animate(words[1]);
                setTimeout(() => {
                    animate(words[2]);
                }, 1000)
            }, 1000)
        }, 1000)
    }
    const animate = (word) => {
        word.classList.add("animate");
    }
 
   animateAll(animate);
   */

   // Main function
const mainFunction = (callback) => {
    setTimeout(() => {
        callback([2, 3, 4]);
    }, 2000)
  }
  
  // Add function
  const add = (array) => {
    let sum = 0;
    for(let i of array) {
        sum += i;
    }
    console.log(sum);
  }
  
  // Calling main function
  mainFunction(add);
  uga-rmua-ygg