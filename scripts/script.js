const app = document.getElementById("app")
const normal = document.getElementById("normal")
const promesa = document.getElementById("promesa")
const asyncawait = document.getElementById("asyncawait")
const btnfetch = document.getElementById("btnfetch")

const saludar = (name) => {
    return new Promise ((resolve, reject) => {
    setTimeout(() => {
        if (name === "") {
            reject("El nombre no puede estar vacío")
        } else {
            resolve(`Hola ${name}`)
        }
    }, 2000)
    })
}

const write = (data) => {
    app.innerText = data
}

normal.addEventListener("click", () => {
    console.log("Empieza el proceso")
    const resp = saludar("Pedro")
    write(resp)
    console.log("Termina el proceso")
})

promesa.addEventListener("click", () => {
    console.log("Empieza el proceso")
    saludar("EDteam")
    .then(response => write(response))
    .catch(error => console.log(error))
    console.log("Termina el proceso")
})

asyncawait.addEventListener("click", async () => {
    console.log("Empieza el proceso")
    try {
    const resp = await saludar("EDteam")
    write(resp)
    } catch (error) {
        console.log(error)
    }
    console.log("Termina el proceso")
})

// btnfetch.addEventListener("click", () => {
//     fetch("http://localhost:3000/posts")
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.log(err))
// })

btnfetch.addEventListener("click", async () => {
    fetch("http://localhost:3000/posts")
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.log(err))
    try{
        const response = await fetch("http://localhost:3000/posts")
        const data = await response.json()
        console.log(data)
    } catch (err){
        console.log(err)
    }
})
