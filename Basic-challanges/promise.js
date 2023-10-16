// const fun1 = () => {
//   return  Promise.resolve().then(()=>{
//         setTimeout(() => {
//             console.log('abc function')
//         }, 5000)
//     })
   
// }

// // const fun1 = () => {
// //     // Promise.resolve().then(()=>{
// //         setTimeout(() => {
// //             console.log('abc function')
// //         }, 5000)
// //     // })
   
// // } 
// const fun2 = () => {
//    console.log('fun 2')
// }
// const fun3 = async () => {

//     const response = await fun1();
//    try {
//     console.log(response)
//    fun2();
//    } catch(error) {
//    }
//  }
// fun3()



// new code 


// const fun1 = () => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         console.log('function1');
//         resolve(); // Resolve the promise when the timeout completes
//       }, 5000);
//     });
//   };
//   const fun4 = () => {
//     return new Promise((resolve) => {
//         console.log('function4');
//         resolve();
//     })
       
    
//   }; 

//   const fun2 = () => {
//     console.log('function2');
//   };
  
//   const fun3 = async () => {
//     await fun1(); // Wait for fun1 to complete
//     await fun4()
//     fun2(); // Execute fun2 after fun1 completes
//   };
  
  // fun3();

  // understanding the order of execution

  // const asyncFunc1 = async () => {
  //   console.log('asyncFunc1 start');
  //   console.log('asyncFunc1 end');
  //   await asyncFunc2();
  // };
  
  // const asyncFunc2 = async () => {
  //   console.log('asyncFunc2');
  // };
  
  // asyncFunc1();

  const asyncFunc1 = async () => {
    console.log('asyncFunc1 start');
    await asyncFunc2();
    console.log('asyncFunc1 middle');
    await asyncFunc3();
    console.log('asyncFunc1 end');
  };
  
  const asyncFunc2 = async () => {
    console.log('asyncFunc2');
    setTimeout(() => {
      console.log("i am inside setTimeOut asyncFunc2");
    }, 3000);
  };
  
  const asyncFunc3 = async () => {
    console.log('asyncFunc3 start');
    await asyncFunc4();
    console.log('asyncFunc3 end');
  };
  
  const asyncFunc4 = async () => {
    setTimeout(() => {
      console.log("i am inside setTimeOut fn4");
    }, 3000);
    console.log('asyncFunc4');
  };
  
  // asyncFunc1();



  // Promise.all example


  const fun1 = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('function1');
        resolve(); // Resolve the promise when the timeout completes
      }, 5000);
    });
  };
  
  const fun4 = () => {
    return new Promise((resolve) => {
      console.log('function4');
      resolve();
    });
  };
  
  const fun2 = () => {
    console.log('function2');
  };
  
  const fun3 = async () => {
    const [result1, result4] = await Promise.all([fun4(), fun1()]);
    console.log({result1}); // Output: 'function1'
    console.log({result4}); // Output: 'function4'
    fun2();
  };
  
  fun3();