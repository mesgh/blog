const m = require('mongoose');
m.set('debug', true);
async function getConn() {
  await m.connect('mongodb://bloger:IamBloger@91.210.171.78/Blog', { useNewUrlParser: true });
}
getConn().catch(() => console.error('Can not connect to database!'));
module.exports = m; 