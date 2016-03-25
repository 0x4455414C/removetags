module.exports = removehtml
function removetags(x){
    return x.replace(/<(?:.|\n)*?>/gm, '');
}