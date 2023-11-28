/*<hr class="border-1 border-black w-full mx-auto">
<div class="bg-secondary my-2 mx-5 text-center">
    <p>
        Copyright &copy; 2023 OGD design 🦡 <br> All rights reserved.
    </p>
</div>*/

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
footer.append(line);
footer.append(div);