const names = ['Tim','Tom','Lili'];

export function changeNameAction(){
  return {
    type:'index/updateName',
    payload:{
      name:names[Math.floor(Math.random()* (names.length))]
    }
  }
}