class MachineOptions{
    constructor({opt}){
        this._opt = opt
    }
    randomNumber(){
        const sortOpt = Math.floor(Math.random() * 3 - 0);
        console.log(this._opt)
        return this._opt[sortOpt].name
    }

    set opt(options){

        this._opt = options
    
    }

    get opt(){
        return this._opt
    }
}


module.exports = MachineOptions;