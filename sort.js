// const allRows = document.querySelectorAll('tr')
// const allColum = document.querySelectorAll('td')
// const table = document.getElementById('table')
// const tBodies = document.getElementById('tBodies')
// // console.log(allColum)
// // console.log(allRows)
// const col = Array.from(allColum)
// let name = []
// for(let i = 0; i<col.length; i+=3){
//     const td = document.getElementsByTagName('td')[i]
//     name.push(td.innerText)
//     name.sort()
//     console.log(name)
//     document.getElementsByTagName('td')[i].innerHTML = name;
// }


let sortedRows = Array.from(table.rows)
    .slice(1)
    .sort((rowA, rowB) => rowA.cells[0].innerHTML > rowB.cells[0].innerHTML ? 1 : -1);

table.tBodies[0].append(...sortedRows)