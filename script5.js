const listItems = document.querySelectorAll('#unsort-list li')
const link = document.querySelectorAll('a')
const links = Array.from(link)
console.log(links)
const text = '://'

let a = 0
while (a != links.length){
    const element = links[a].getAttribute('href')
    if (element.includes(text)){
        links[a].style.color = 'green'
    } 
    a+=1
}