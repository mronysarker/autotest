import { Selector, ClientFunction, Role } from 'testcafe';
// import { ClientFunction } from 'testcafe';

const UserRole = Role('https://github.com/login', async t => {
    await t
        .typeText('#login_field', 'mronysarker')
        .typeText('#password', 'rony@bcd1234')
        .click('[value="Sign in"]');
});

fixture`Test Automation`
    .page`https://github.com/`
    .httpAuth({
        username: 'mronysarker',
        password: 'rony@bcd1234'
    });

const getPageUrl = ClientFunction(() => window.location.href);

test('Login test', async t => {
    await t
        .click('[href="/login"]')
        .expect(getPageUrl()).contains('/login');
    
    await t
        .typeText('#login_field', 'mronysarker')
        .typeText('#password', 'rony@bcd1234')
        .click('[value="Sign in"]')
        .expect(Selector('[href="/mronysarker"]').exists).ok();    
    });

test('New repository test', async t => {
    await t.useRole(UserRole);

    await t
        .click(Selector('.btn').withText('Create repository'))
        .expect(getPageUrl()).contains('/new');

    await t
        .typeText('#repository_name', 'abc')
        .click(Selector('[type="submit"]').withText("Create repository"))
        .expect(getPageUrl()).contains('/abc');
    });
