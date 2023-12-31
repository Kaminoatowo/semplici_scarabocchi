function article(margin_top = "mt-5") {
    let externalDiv = document.createElement("div");
    externalDiv.className = "relative aspect-w-1 aspect-h-9 " + margin_top;
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

let bacheca = document.createElement("div");
bacheca.className = "p-2 relative columns-2 sm:columns-3 gap-5";

bacheca.append(article(""));
bacheca.append(article());
bacheca.append(article());
bacheca.append(article());
bacheca.append(article());
bacheca.append(article());

let articles = document.getElementById('articles');
articles.className = "p-2 relative";

articles.append(bacheca);