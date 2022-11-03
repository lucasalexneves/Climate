document.querySelector('.busca').addEventListener('submit', async (event)=>{
    event.preventDefault()

    let input = document.querySelector('#searchInput').value

    if(input !== ''){
        showWarning('Loading...')

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=68cba343c18b61137424867abb34b274&units=metric&lang=en`
        
        let results = await fetch(url)
        let json = await results.json()

        console.log(json)
    }
})

function showWarning(msg){
    document.querySelector('.aviso').innerHTML = msg
}