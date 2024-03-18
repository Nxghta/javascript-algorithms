const englishAlphabet = 'abcdefghijklmnopqrstuvwxyz';

const getCipherMap = (alphabet, shift) => {
  const cipherMap = {};
  const length = alphabet.length;
  for (let i = 0; i < length; i++) {
    let encryptedCharIndex = (i + shift) % length;
    if (encryptedCharIndex < 0) {
      encryptedCharIndex += length;
    }
    cipherMap[alphabet[i]] = alphabet[encryptedCharIndex];
  }
  return cipherMap;
};

export const caesarCipherEncrypt = (str, shift, alphabet = englishAlphabet) => {
  const cipherMap = getCipherMap(alphabet, shift);
  return str.toLowerCase().split('').map((char) => cipherMap[char] || char).join('');
};

export const caesarCipherDecrypt = (str, shift, alphabet = englishAlphabet) => {
  const cipherMap = getCipherMap(alphabet, -shift);
  return str.toLowerCase().split('').map((char) => cipherMap[char] || char).join('');
};
