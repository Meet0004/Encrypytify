document.addEventListener("DOMContentLoaded", () => {

    const eRefresh = document.getElementById("eRefresh");
    const dRefresh = document.getElementById("dRefresh");
    const sender = document.getElementById("sender");
    const displayKey = document.getElementById("dynamicTextarea");
    const levels = document.getElementById("wanna");

    const toggleDisplay = (elements, display) => {
        elements.forEach(id => document.getElementById(id).style.display = display);
    };

    eRefresh.addEventListener("click", () => {
        document.getElementById("value_to_ecrypt").value = "";
        document.getElementById("encrypted_key").value = "";
        document.getElementById("dynamicTextarea").style.display = "none";
    });

    dRefresh.addEventListener("click", () => {
        document.getElementById("value_to_decrypt").value = "";
        document.getElementById("decryptedKey").value = "";
        document.getElementById("dynamicTextarea").style.display = "none";
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
        toggleDisplay(["medium-encrypt", "medium-decrypt", "hard-encrypt", "hard-decrypt", "black-encrypt", "black-decrypt"], "block");
    });

    levels.addEventListener("dblclick", () => {
        toggleDisplay(["medium-encrypt", "medium-decrypt", "hard-encrypt", "hard-decrypt", "black-encrypt", "black-decrypt"], "none");
    });

    const encryptKarbtns = {
        "easy-encrypt": easyEncryptKar,
        "medium-encrypt": mediumEncryptKar,
        "hard-encrypt": hardEncryptKar,
        "black-encrypt": blackEncryptKar
    };

    const decryptKarbtns = {
        "easy-decrypt": easyDecryptKar,
        "medium-decrypt": mediumDecryptKar,
        "hard-decrypt": hardDecryptKar,
        "black-decrypt": blackDecryptKar
    };

    

    const handleEncryption = (btnId, encryptFunc) => {
        document.getElementById(btnId).addEventListener("click", () => {
            const eValue = document.getElementById("value_to_ecrypt").value;
            const nayaKey = encryptFunc(eValue);
            document.getElementById("encrypted_key").value = nayaKey;
        });
    };

    const handleDecryption = (btnId, decryptFunc) => {
        document.getElementById(btnId).addEventListener("click", () => {
            const dValue = document.getElementById("value_to_decrypt").value;
            const puranaKey = decryptFunc(dValue);
            document.getElementById("decryptedKey").value = puranaKey;
        });
    };

    for (const [btnId, encryptFunc] of Object.entries(encryptKarbtns)) {
        handleEncryption(btnId, encryptFunc);
    }

    for (const [btnId, decryptFunc] of Object.entries(decryptKarbtns)) {
        handleDecryption(btnId, decryptFunc);
    }

    function easyEncryptKar(val) {
        const secretKeyLayer1 = 'mumbai';
        const secretKeyLayer2 = 'gfname';
        const encryptedLayer1 = CryptoJS.AES.encrypt(val, secretKeyLayer1).toString();
        return CryptoJS.AES.encrypt(encryptedLayer1, secretKeyLayer2).toString();
    }

    function easyDecryptKar(val) {
        const secretKeyLayer1 = 'mumbai';
        const secretKeyLayer2 = 'gfname';
        const decryptedLayer2 = CryptoJS.AES.decrypt(val, secretKeyLayer2).toString(CryptoJS.enc.Utf8);
        return CryptoJS.AES.decrypt(decryptedLayer2, secretKeyLayer1).toString(CryptoJS.enc.Utf8);
    }

    function toBase64(str) {
        return btoa(unescape(encodeURIComponent(str)));
    }

    function fromBase64(base64) {
        return decodeURIComponent(escape(atob(base64)));
    }

    function mediumEncryptKar(message) {
        const shifts = [3, 5, 7];
        const xorKeys = [111, 123, 145];
        return toBase64([...message].map((char, i) => String.fromCharCode((char.charCodeAt(0) + shifts[i % shifts.length]) ^ xorKeys[i % xorKeys.length])).join(''));
    }

    function mediumDecryptKar(encryptedMessage) {
        const shifts = [3, 5, 7];
        const xorKeys = [111, 123, 145];
        const encrypted = fromBase64(encryptedMessage);
        return [...encrypted].map((char, i) => String.fromCharCode((char.charCodeAt(0) ^ xorKeys[i % xorKeys.length]) - shifts[i % shifts.length])).join('');
    }

    function hardEncryptKar(val) {
        return CryptoJS.SHA256(CryptoJS.SHA1(CryptoJS.SHA512(CryptoJS.MD5(val).toString()).toString()).toString()).toString();
    }

    function hardDecryptKar(val) {
        return "Decryption isn't allowed";
    }

    function blackEncryptKar(message) {
        const shift = 5;
        const xorKey = 123;
        return [...message].map(char => String.fromCharCode((char.charCodeAt(0) + shift) ^ xorKey)).join('');
    }

    function blackDecryptKar(encryptedMessage) {
        const shift = 5;
        const xorKey = 123;
        return [...encryptedMessage].map(char => String.fromCharCode((char.charCodeAt(0) ^ xorKey) - shift)).join('');
    }

    document.getElementById("dark-mode").addEventListener('click', () => {
        document.getElementById("linku").href = "style3.css";
    });
    document.getElementById("dark-mode").addEventListener('dblclick', () => {
        document.getElementById("linku").href = "style2.css";
        document.getElementsByClassName("infooooo").style.stroke = "#141B34";
    });
});
