function firstArticle() {
    let externalDiv = document.createElement("div");
    externalDiv.className = "relative aspect-w-1 aspect-h-9";
    let img = document.createElement("img");
    img.src = "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2952&q=80";
    img.alt = "mountains";
    img.className = "w-full object-cover ronded-lg";
    let internalDiv = document.createElement("div");
    internalDiv.className = "absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg";
    externalDiv.appendChild(img);
    externalDiv.appendChild(internalDiv);
    return externalDiv;
}
function otherArticles() {
    let externalDiv = document.createElement("div");
    externalDiv.className = "relative aspect-w-1 aspect-h-9 mt-5";
    let img = document.createElement("img");
    img.src = "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2952&q=80";
    img.alt = "mountains";
    img.className = "w-full object-cover ronded-lg";
    let internalDiv = document.createElement("div");
    internalDiv.className = "absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg";
    externalDiv.appendChild(img);
    externalDiv.appendChild(internalDiv);
    return externalDiv;
}   

let bacheca = document.getElementById("bacheca");
bacheca.append(firstArticle());
bacheca.append(otherArticles());
bacheca.append(otherArticles());
bacheca.append(otherArticles());
bacheca.append(otherArticles());
bacheca.append(otherArticles());