const names = ['Tim','Tom','Lili'];

export function changeNameAction(){

  const name = names[Math.floor(Math.random()* (names.length))]
  return {
    type:'index/updateNameAsync',
    payload:{
      name,
    }
  }
}