const app = document.getElementById("app")
const normal = document.getElementById("normal")
const promesa = document.getElementById("promesa")
const asyncawait = document.getElementById("asyncawait")
const btnfetch = document.getElementById("btnfetch")

const myForm = document.getElementById("myForm")
const title = document.getElementById("title")
const author = document.getElementById("author")
const btnCreate = document.getElementById("btnCreate")


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
    try{
        const response = await fetch("http://localhost:3000/posts")
        if (response.status !== 200){
            const message = await response.text()
            console.log("Ops, Parece que algo salió mal: ", message)
            return
        }
        const data = await response.json()
        console.log(data)
    } catch (err){
        console.log(err)
    }
})

myForm.addEventListener("submit", e => {
    e.preventDefault()
})

btnCreate.addEventListener("click", async () =>{
    const post ={
        title: title.value,
        author: author.value
    }

    const myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')
    myHeaders.append("Authorization", "el-token-super-seguro")

    const myInit = {
        method: "POST",
        body: JSON.stringify(post)
    }
    try {
        const response = await fetch("http://localhost:3000/posts", myInit)
        if (response.status !== 201){
            console.log("No se pudo crear el recurso")
            return
        }
        const data = await response.json()
        console.log("Recurso creado correctamente", data)
    } catch (err){
        console.log(`Hubo un error: ${err}`)
    }
})
