export const delay =function(ms){
  return new Promise((resolve,reject)=>{
    console.log(this,3333);
    setTimeout(()=>{
      resolve(this.name)
    },ms)
  })
}

export const readFile = function(filename,callback){
  setTimeout(()=>{
    callback(null,filename+'s content')
  },1000)
}