document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const plantName = document.querySelector('input').value
    try{
        const response = await fetch(`/api/${plantName}`)
        const data = await response.json()
        
        console.log(data)
        document.querySelector('h2').innerText = `${data.cultivar} ${data.name}`
    }catch(error){
        console.log(error)
    }
}