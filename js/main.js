let characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
function generateKey(length) {
    let result = '';
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.random() * charactersLength);
    }
    return result;
}
const key = generateKey(16);
console.log(key);
