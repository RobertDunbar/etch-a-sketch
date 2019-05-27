// Odin Project etch-a-sketch javascript file
const container = document.querySelector("#container");
for(rowCount = 0; rowCount <16; rowCount++){
    const brContent = document.createElement("br");
    for(colCount = 0; colCount <16; colCount++){
        const divContent = document.createElement("div");
        divContent.classList.add("divGrid");
        if(rowCount === 0 || rowCount === 15) divContent.classList.add("r" + rowCount);
        if(colCount === 0 || colCount === 15) divContent.classList.add("c" + colCount);
        container.appendChild(divContent);
    }
    container.appendChild(brContent);
}