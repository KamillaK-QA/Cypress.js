describe('Форма логина и пароля', function () {

    it('Открытие сайта', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('kamillak@rambler.ru');
        cy.get('.auth-form > form > [type="password"]').type('Staya0410');
        cy.get('.auth-form__submit > .s-button__content').click();
        cy.contains('Мои заказы');
    })
})
