import CryptoJS from 'crypto-js';
export function getSHA (st){
    return CryptoJS.SHA256(st,'12234').toString();
}
