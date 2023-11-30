function createTextarea(content){
    let textarea = document.createElement("textarea");
    textarea.value = content;
    textarea.setAttribute("cols", "50");
    textarea.setAttribute("rows", "5");
    document.body.appendChild(textarea);
}

createTextarea("HARO from Script");