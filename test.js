import { Selector } from 'testcafe';

fixture`Test Automation`
    .page`https://github.com/`;

test('Login test', async t => {
    await t
        .click('[href="/login"]')
        .typeText('#login_field', 'mronysarker')
        .typeText('#password', 'rony@bcd1234')
        .click('[value="Sign in"]')
        .expect(Selector('[href="/mronysarker"]').exists).ok();
});