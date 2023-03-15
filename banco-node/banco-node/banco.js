const Sequelize = require("sequelize");
const sequelize = new Sequelize("test", "root", "", {
    host: "localhost",
    dialect: "mysql"
});

sequelize.authenticate().then(function(){
    console.log("Conexao realizada")
}).catch(function(erro){
    
    console.log("Falha ao conectar: "+erro)
})

const Agendamentos = sequelize.define("agendamentos", {
    nome: {
        type: Sequelize.STRING
    },
    endereco: {
        type: Sequelize.STRING
    },
    bairro: {
        type: Sequelize.STRING
    },
    cep: {
        type: Sequelize.INTEGER
    },
    cidade: {
        type: Sequelize.STRING
    },
    estado: {
        type: Sequelize.STRING
    },
    observacao: {
        type: Sequelize.TEXT
    }
})

// Agendamentos.sync({force:true})

Agendamentos.create({
    nome: "Raíssa Jesus Azevedo",
    endereco: "Av Aguia de Haia",
    bairro: "Jd São Nicolau",
    cep: 08390983,
    cidade: "São Paulo",
    estado: "SP",
    observacao: ""
})