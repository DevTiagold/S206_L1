/// <reference = cypress>

describe("Teste de Criação, registro e login de usuário", () => {
    it("Teste de Criação de usuário com sucesso", () => {
        cy.visit("https://globalsqa.com/angularJs-protractor/registration-login-example/#/login")
        cy.get('.btn-link').click() 
        cy.get('#firstName').type("Lucas")
        cy.get('#Text1').type("Lucas")
        cy.get('#username').type("Lucas")
        cy.get('#password').type("Lucas")
        cy.get('.btn-primary').click()
        cy.get('.ng-binding').should("contain.text", "Registration successful")
    })
    it("Teste de Criação de usuário com falha", () => {
        cy.visit("https://globalsqa.com/angularJs-protractor/registration-login-example/#/login")
        cy.get('.btn-link').click() 
        cy.get('#firstName').type("Lucas")
        cy.get('#Text1').type("Lucas")
        cy.get('#username').type("Lucas")
        // cy.get('.btn-primary').click() // tenta cadastrar sem a senha
        cy.get('.btn-primary').should("be.disabled")
    })
    it("Teste de Login com sucesso", () => {
        let infos = criarUser()
        cy.visit("https://globalsqa.com/angularJs-protractor/registration-login-example/#/login")
        cy.get('#username').type(infos[0])
        cy.get('#password').type(infos[1])
        cy.get('.btn-primary').click()  
        cy.get('h1.ng-binding').should("contain.text",infos[0])
    })

    it("Teste delete user",() => {
        let infos = criarUser()
        cy.visit("https://globalsqa.com/angularJs-protractor/registration-login-example/#/login")
        cy.get('#username').type(infos[0])
        cy.get('#password').type(infos[1])
        cy.get('.btn-primary').click()  
        cy.get('h1.ng-binding').should("contain.text",infos[0])

        cy.get('.ng-binding > a').click()
        cy.get('.btn').click()
     
        
        cy.get('#username').type(infos[0])
        cy.get('#password').type(infos[1])
        cy.get('.btn-primary').click()  
        cy.get('h1.ng-binding').should("contain.text",infos[0])

    })

})

function criarUser(){
    let hora = new Date().getHours().toString()
    let minuto = new Date().getMinutes().toString()
    let segundo = new Date().getSeconds().toString()
    let ID = hora + minuto + segundo + "ID"
    let senha = hora + minuto + segundo + "senha"
    let infos = [ID, senha]


    cy.visit("https://globalsqa.com/angularJs-protractor/registration-login-example/#/login")
    cy.get('.btn-link').click() 
    cy.get('#firstName').type(ID)
    cy.get('#Text1').type(ID)
    cy.get('#username').type(ID)
    cy.get('#password').type(senha)
    cy.get('.btn-primary').click()
    cy.get('.ng-binding').should("contain.text", "Registration successful")

    return infos
}
