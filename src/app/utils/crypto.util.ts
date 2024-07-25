import * as CryptoJS from 'crypto-js';

/*
    Função para criptografar dados
*/
export function encryptData(data: string, key: string): string {
  const encrypted = CryptoJS.AES.encrypt(data, key).toString();
  return encrypted;
}

/*
    Função para descriptografar dados
*/
export function decryptData(data: string, key: string): string {
  const decrypted = CryptoJS.AES.decrypt(data, key).toString(CryptoJS.enc.Utf8);
  return decrypted;
}
