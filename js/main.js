document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const plantName = document.querySelector('input').value
    try{
        const response = await fetch(`https://mon-jardin-d0gp.onrender.com/api/${plantName}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('h2').innerText = data.plantName
    }catch(error){
        console.log(error)
    }
}