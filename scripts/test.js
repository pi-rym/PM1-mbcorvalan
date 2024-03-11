class Usuario {
    #contraseña

    constructor(name){
        this.name = name
        this.#contraseña = 0
    }

    set contraseña(contraseña){
        if(contraseña === "string"){
            this.#contraseña = contraseña
        }
    }

    get contraseña(contraseña) {
        this.#contraseña = contraseña
    }
}

const belen1 = new Usuario

console.log(belen1.contraseña)
