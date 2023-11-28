let line = document.createElement('hr');
line.className = "border-1 border-black w-full mx-auto";
let div = document.createElement('div');
div.className = "bg-secondary my-2 mx-5 text-center";
let par1 = document.createElement('p');
par1.textContent = "© 2023 OGD design 🦡 ";
let par2 = document.createElement('p');
par2.textContent = " All rights reserved.";
let br = document.createElement('br');

par1.append(br);
div.append(par1);
div.append(par2);

let footer = document.getElementById("footer");
footer.className = "bg-primary/80 p-1 mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-4xl lg:px-12 relative";

footer.append(line);
footer.append(div);