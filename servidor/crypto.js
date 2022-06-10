const crypto = require('crypto');
const config = require("./config");

const algorithm = 'aes-256-ctr';


const encrypt = (text) => {
    
    const iv = crypto.randomBytes(16);

    const cipher = crypto.createCipheriv(algorithm, config.secret, iv);

    const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);

    return {
        iv: iv.toString('hex'),
        content: encrypted.toString('hex')
    };
};

const decrypt = (hash) => {

    const decipher = crypto.createDecipheriv(algorithm, config.secret, Buffer.from(hash.iv, 'hex'));

    const decrpyted = Buffer.concat([decipher.update(Buffer.from(hash.content, 'hex')), decipher.final()]);

    return decrpyted.toString();
};

module.exports = {
    encrypt,
    decrypt
};