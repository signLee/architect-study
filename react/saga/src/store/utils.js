export const delay =function(ms){
  return new Promise((resolve,reject)=>{
    console.log(this,3333);
    setTimeout(()=>{
      resolve(this.name)
    },ms)
  })
}