document.addEventListener("DOMContentLoaded", () => {

    const eRefresh = document.getElementById("eRefresh");
    const dRefresh = document.getElementById("dRefresh");
    const sender = document.getElementById("sender");
    const displayKey = document.getElementById("dynamicTextarea")
    const levels = document.getElementById("wanna");

    eRefresh.addEventListener("click", () => {
        document.getElementById("value_to_ecrypt").value = "";
        document.getElementById("encrypted_key").value = "";
    });

    dRefresh.addEventListener("click", () => {
        document.getElementById("value_to_decrypt").value = "";
        document.getElementById("decryptedKey").value = "";
    });

    document.getElementById("niche-bhej").addEventListener("click", () => {
        displayKey.style.display = "block";
        displayKey.value = document.getElementById("encrypted_key").value;
    });

    sender.addEventListener("click", () => {
        document.getElementById("value_to_decrypt").value = document.getElementById("encrypted_key").value;
        document.getElementById("decryptedKey").value = "";
    });

    levels.addEventListener("click", () => {
        document.getElementById("medium-encrypt").style.display = "block";
        document.getElementById("medium-decrypt").style.display = "block";
        document.getElementById("hard-encrypt").style.display =   "block";
        document.getElementById("hard-decrypt").style.display =   "block";
        document.getElementById("black-encrypt").style.display =   "block";
        document.getElementById("black-decrypt").style.display =   "block";
    });
    
    levels.addEventListener("dblclick", () => {        
        document.getElementById("medium-encrypt").style.display = "none";
        document.getElementById("medium-decrypt").style.display = "none";
        document.getElementById("hard-encrypt").style.display =   "none";
        document.getElementById("hard-decrypt").style.display =   "none";
        document.getElementById("black-encrypt").style.display =   "none";
        document.getElementById("black-decrypt").style.display =   "none";
    });

    const encryptKarbtn1 = document.getElementById("easy-encrypt");
    const decryptKarbtn1 = document.getElementById("easy-decrypt");

    const encryptKarbtn2 = document.getElementById("medium-encrypt");
    const decryptKarbtn2 = document.getElementById("medium-decrypt");

    const encryptKarbtn3 = document.getElementById("hard-encrypt");
    const decryptKarbtn3 = document.getElementById("hard-decrypt");

    const blackEncrypt = document.getElementById("black-encrypt");
    const blackDecrypt = document.getElementById("black-decrypt");

    encryptKarbtn1.addEventListener("click", () => {
        const eValue = document.getElementById("value_to_ecrypt").value;
        const nayaKey = easyEncryptKar(eValue);
        document.getElementById("encrypted_key").value = nayaKey;
    });

    decryptKarbtn1.addEventListener("click", () => {
        const dValue = document.getElementById("value_to_decrypt").value;
        const puranaKey = easyDecryptKar(dValue);
        document.getElementById("decryptedKey").value = puranaKey;
    });

    function easyEncryptKar(val) {
        const secretKeyLayer1 = 'mumbai';
        const encryptedLayer1 = CryptoJS.AES.encrypt(val, secretKeyLayer1).toString();
        const secretKeyLayer2 = 'gfname';
        const encryptedLayer2 = CryptoJS.AES.encrypt(encryptedLayer1, secretKeyLayer2).toString();
    
        return encryptedLayer2;
    }
    
    function easyDecryptKar(val) {
        const secretKeyLayer1 = 'mumbai';
        const secretKeyLayer2 = 'gfname';
        const decryptedLayer2 = CryptoJS.AES.decrypt(val, secretKeyLayer2).toString(CryptoJS.enc.Utf8);
        const decryptedLayer1 = CryptoJS.AES.decrypt(decryptedLayer2, secretKeyLayer1).toString(CryptoJS.enc.Utf8);
    
        return decryptedLayer1;
    }

    encryptKarbtn2.addEventListener("click", () => {
        const eValue = document.getElementById("value_to_ecrypt").value;
        const nayaKey = mediumEncryptKar(eValue);
        document.getElementById("encrypted_key").value = nayaKey;
    });

    decryptKarbtn2.addEventListener("click", () => {
        const dValue = document.getElementById("value_to_decrypt").value;
        const puranaKey = mediumDecryptKar(dValue);
        document.getElementById("decryptedKey").value = puranaKey;
    });

    //apna medium encryption function

    //Utility functions for Base64 encoding and decoding

    function toBase64(str) {
        return btoa(unescape(encodeURIComponent(str)));
    }

    function fromBase64(base64) {
        return decodeURIComponent(escape(atob(base64)));
    }

    function mediumEncryptKar(message) {
        let encrypted = '';
        const shifts = [3, 5, 7];
        const xorKeys = [111, 123, 145];
        for (let i = 0; i < message.length; i++) {
            let shift = shifts[i % shifts.length];
            let xorKey = xorKeys[i % xorKeys.length];

            let shiftedChar = String.fromCharCode(message.charCodeAt(i) + shift);

            let encryptedChar = String.fromCharCode(shiftedChar.charCodeAt(0) ^ xorKey);

            encrypted += encryptedChar;
        }

        return toBase64(encrypted);
    }

    function mediumDecryptKar(encryptedMessage) {
    let encrypted = fromBase64(encryptedMessage);
    let decrypted = '';
    const shifts = [3, 5, 7]; 
    const xorKeys = [111, 123, 145]; 
    for (let i = 0; i < encrypted.length; i++) {
        let shift = shifts[i % shifts.length];
        let xorKey = xorKeys[i % xorKeys.length];
        
        let xorDecryptedChar = String.fromCharCode(encrypted.charCodeAt(i) ^ xorKey);

        let originalChar = String.fromCharCode(xorDecryptedChar.charCodeAt(0) - shift);
        
        decrypted += originalChar;
    }
    
    return decrypted;
    }

    encryptKarbtn3.addEventListener("click", () => {
        const eValue = document.getElementById("value_to_ecrypt").value;
        const nayaKey = hardEncryptKar(eValue);
        document.getElementById("encrypted_key").value = nayaKey;
    });

    decryptKarbtn3.addEventListener("click", () => {
        const dValue = document.getElementById("value_to_decrypt").value;
        const puranaKey = hardDecryptKar(dValue);
        document.getElementById("decryptedKey").value = puranaKey;
    });
    function hardEncryptKar(val) {
        var key = CryptoJS.MD5(val).toString();
        key = CryptoJS.SHA512(key).toString();
        key = CryptoJS.SHA1(key).toString();
        key = CryptoJS.SHA256(key).toString();
        return key;
    }
    function hardDecryptKar(val) {
       let text = " decry isn't allowed ";
       return text
    }

    blackEncrypt.addEventListener("click", () => {
        const eValue = document.getElementById("value_to_ecrypt").value;
        const nayaKey = blackEncryptKar(eValue);
        document.getElementById("encrypted_key").value = nayaKey;
    });

    blackDecrypt.addEventListener("click", () => {
        const dValue = document.getElementById("value_to_decrypt").value;
        const puranaKey = blackDecryptKar(dValue);
        document.getElementById("decryptedKey").value = puranaKey;
    });

    function blackEncryptKar(message) {
        let encrypted = '';
        const shift = 5;  
        const xorKey = 123;

        for (let i = 0; i < message.length; i++) {
            let shiftedChar = String.fromCharCode(message.charCodeAt(i) + shift);
            let encryptedChar = String.fromCharCode(shiftedChar.charCodeAt(0) ^ xorKey);
            encrypted += encryptedChar;
        }

        return encrypted;
    }
    function blackDecryptKar(encryptedMessage) {
        let decrypted = '';
        const shift = 5;
        const xorKey = 123; 

        for (let i = 0; i < encryptedMessage.length; i++) {
            let xorDecryptedChar = String.fromCharCode(encryptedMessage.charCodeAt(i) ^ xorKey);
            let originalChar = String.fromCharCode(xorDecryptedChar.charCodeAt(0) - shift);
            decrypted += originalChar;
        }

        return decrypted;
    }

    document.getElementById("dark-mode").addEventListener('click', () => {
        const status = "style2"
        if(document.getElementById("linku").href === "style2.css")
            document.getElementById("linku").href = "style3.css";
        else
            document.getElementById("linku").href = "style2.css";

        if(document.getElementById("linku").href === "style3.css")
            document.getElementById("linku").href = "style2.css";
    });
    
});

