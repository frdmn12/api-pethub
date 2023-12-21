const translatte = require('translatte');

translatte('Do you speak Russian?', {to: 'id'}).then(res => {
    console.log(res.text);
}).catch(err => {
    console.error(err);
});
// Ihr sprecht auf Russisch?