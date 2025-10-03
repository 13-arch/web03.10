const table = document.getElementsByTagName('tr')
console.log(table)

const arrayFromSet = Array.from(table)
console.log(arrayFromSet)
for (let i = 0; i< arrayFromSet.length; i++){
    const newArray = arrayFromSet[i].getElementsByTagName('td')
    for (let j = 0; j<newArray.length; j++){
        if (i === j){
            newArray[j].style.backgroundColor = 'red'
        }
    }
}