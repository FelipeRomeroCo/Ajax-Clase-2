const app = document.getElementById("app")
const normal = document.getElementById("normal")
const promesa = document.getElementById("promesa")
const asyncawait = document.getElementById("asyncawait")

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