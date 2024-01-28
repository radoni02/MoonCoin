import * as Eliptic from 'elliptic';
const ec = new Eliptic.ec('secp256k1');

export interface walletKey{
    keyObj : Eliptic.ec.KeyPair;
    publicKey : string;
    privateKey : string;
}