const crypt = require('crypto');

const algorithm = 'aes-256-ctr';

const password = process.env.cryptokey || 'secretPassword';

export function encrypt(text) {
    const cipher = crypt.createCipher(algorithm, password);
    let crypted = cipher.update(text, 'utf8', 'hex');
    crypted += cipher.final('hex');
    return crypted;
}

export function decrypt(text) {
    const decipher = crypt.createDecipher(algorithm, password);
    let dec = decipher.update(text, 'hex', 'utf8');
    dec += decipher.final('utf8');
    return dec;
}