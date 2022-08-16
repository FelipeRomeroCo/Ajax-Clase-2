const app = document.getElementById("app")
const normal = document.getElementById("normal")
const promesa = document.getElementById("promesa")
const asyncawait = document.getElementById("asyncawait")

const saludar = (name) => {
    let response = null
    setTimeout(() => {
        response = `Hola ${name}`
    }, 2000)
    return response
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

})

asyncawait.addEventListener("click", () => {

})