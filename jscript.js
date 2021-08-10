let animals = ['parrot','cat','dog','hare','lion']

let askFromUser = prompt("What is your favorite animal?")
// console.log(askFromUser.toLowerCase())

// console.log(animals.indexOf(askFromUser))

if(animals.indexOf(askFromUser.toLowerCase())>0){
    alert("YEAH!")
}else{
    alert("NAH")
}

