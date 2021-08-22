const inquirer = require('inquirer');
const MachineOptions = require('./machine');
const options = require('../data');
const gameby = require('../data/gameby');

class User extends MachineOptions {
    constructor({opt, name, selected}){
        super({opt});
        this._name = name;
        this._selected = selected;
        this._sort = this.randomNumber()
    }

    set name(string){
        this._name = string;
    }
    set selected(string){
        this._selected = string;
    }

    get name(){
        return this._name
    }
    get selected(){
        return this._selected
    }

    printar() {
        console.log("um print")
    }

    logic(){
        if(this._selected === this._sort){
            return `${this._name}, máquina escolheu ${this._sort}. Você escolheu ${this._selected} - resultado: você empatou`
        }else if(
            (this._selected === 'pedra' && this._sort === 'tesoura') ||
            (this._selected === 'tesoura' && this._sort === 'papel') ||
            (this._selected === 'papel' && this._sort === 'pedra')
        
        ){
            return `${this._name}, máquina escolheu ${this._sort}. Você escolheu ${this._selected} - resultado: você ganhou`

        }else{
            return `${this._name}, máquina escolheu ${this._sort}. Você escolheu ${this._selected} - resultado: você perdeu`

        }
    }
    game(){
        console.info(gameby);
        return inquirer.prompt([
            {
                name:'name',
                message: 'qual o seu nome?',
                default: 'jogador'
            },
            {
                type: 'list',
                name: 'jokenpo',
                message: 'escolha uma destas opcoes',
                choices: options,
            }
        ]).then((answer) => {
            this._name = answer.name;
            this._selected = answer.jokenpo;
            console.info(`${this.logic()}`)

        })
    }
}


module.exports = User;