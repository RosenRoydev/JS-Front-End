function encodeAndDecodeMessages() {
    const buttonEncodeEl = document.querySelector('#main div button');
    const buttonDecodeEl = document.querySelector('#main div:nth-child(2) button');
    const textForDecode = buttonDecodeEl.previousElementSibling;
    buttonEncodeEl.addEventListener('click', ()=>{
        const textForEncode = buttonEncodeEl.previousElementSibling;
        let encodeText=''
        for (const word of textForEncode.value) {
            encodeText += String.fromCharCode(word.charCodeAt(0) + 1)
        }
        textForDecode.value = encodeText;
        textForEncode.value = '';
    })
    buttonDecodeEl.addEventListener('click', ()=>{
        let decodeText = '';
        for(const char of textForDecode.value){
            decodeText += String.fromCharCode(char.charCodeAt(0) - 1)
        }
        textForDecode.value = decodeText;
    })
}