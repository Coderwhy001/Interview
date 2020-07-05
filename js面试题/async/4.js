function cal(){
  return  new Promise((resolve,reject)=>{
       setTimeout(()=>{
        resolve(2);
         console.log(1);
         
     },2000);
       console.log(3)
   });
}
async function a(){
 let r = await cal();
 console.log(r);
 console.log(4);
}
a();
