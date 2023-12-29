import * as Eliptic from 'elliptic';

const ec = new Eliptic.ec('secp256k1');

const key = ec.genKeyPair();
const publicKey = key.getPublic('hex');
const privateKey = key.getPrivate('hex');

console.log();
console.log('Private key: ', privateKey);
console.log('Public key: ', publicKey);