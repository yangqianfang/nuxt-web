 export  const animateCSS = (element, animation, prefix = 'animate__') =>
    // We create a Promise and return it
    new Promise((resolve, reject) => {
      const animationName = `${prefix}${animation}`;
      const node = document.querySelector(element); 
      
      node.classList.add(`${prefix}animated`, animationName);
      node.classList.add(`${prefix}faster`);

      // When the animation ends, we clean the classes and resolve the Promise
      function handleAnimationEnd(event) {
        event.stopPropagation();
        
        node.classList.remove(`${prefix}animated`, animationName);
        node.classList.remove(`${prefix}faster`);
        resolve('Animation ended');
      }

      node.addEventListener('animationend', handleAnimationEnd, { once: true });
    });

    export function delay(ms){ 
            return new Promise(resolve => setTimeout(resolve, ms));
           
    }