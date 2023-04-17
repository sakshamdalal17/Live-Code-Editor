const htmlcode = document.querySelector("#html-code");
const csscode = document.querySelector("#css-code");
const jscode = document.querySelector("#js-code");
const output = document.querySelector("#output");

function run(){ 
    localStorage.setItem('htmlcode' , htmlcode.value);
    localStorage.setItem('csscode' , csscode.value);
    localStorage.setItem('jscode' , jscode.value);
    output.contentDocument.body.innerHTML = localStorage.htmlcode + `<style>${localStorage.csscode}</style>`;
    output.contentWindow.eval(localStorage.jscode);
}



htmlcode.onkeyup = ()=>run();
csscode.onkeyup = ()=>run();
jscode.onkeyup = ()=>run();
htmlcode.value = localStorage.htmlcode;
csscode.value = localStorage.csscode;
jscode.value = localStorage.jscode;
