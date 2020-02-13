import { Selector } from 'testcafe';

fixture`Getting Started`
    .page`https://github.com/`;

test('My first test', async t => {
    await t
        .typeText('')
        .click('');
});