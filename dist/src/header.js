function makeSpanHead(text_color, move_x, move_y, move_z) {
    let span = document.createElement('span');
    span.textContent = "Semplici Scarabocchi";
    span.className = text_color + " text-5xl " + move_x + " " + move_y + " absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 " + move_z;
    return span;
}

function makeLi(params) {
    let li = document.createElement('li');
    li.className = "float-left";
    let link = document.createElement('a');
    link.className = "block text-center py-1 px-3 hover:bg-tertiary";
    link.textContent = params.text;
    link.href = params.link;
    li.append(link);
    return li;
}

let containerDiv = document.createElement('div');
containerDiv.className = 'text-center';

let head1 = document.createElement('h1');
head1.className = "m-5 h-5 relative";
let span1 = document.createElement('span');
span1.textContent = "Semplici Scarabocchi";
span1.className = "text-5xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20";
let span2 = makeSpanHead("text-slate-800", "ml-0.5", "mt-0.5", "z-10");
let span3 = makeSpanHead("text-black", "ml-1", "mt-1", "z-10");

head1.append(span1);
head1.append(span2);
head1.append(span3);

containerDiv.append(head1);

let nav = document.createElement('nav');
nav.className = "h-5 relative";
let ul = document.createElement('ul');
ul.className = "list-none";
let listDiv = document.createElement('div');
listDiv.className = "text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2";
let li1 = makeLi({ text: "Home", link: "./index.html" });
let li2 = makeLi({ text: "Blog", link: "./blog.html" });
let li3 = makeLi({ text: "About", link: "./about.html" });

listDiv.append(li1);
listDiv.append(li2);
listDiv.append(li3);
ul.append(listDiv);
nav.append(ul);

containerDiv.append(nav);

let hr = document.createElement('hr');
hr.className = "border-1 border-white my-5 w-full mx-auto";

let navHorizontal = document.createElement('nav');
navHorizontal.className = "h-5 relative";
let ulH = document.createElement('ul');
ulH.className = "list-none";
let liH1 = makeLi({ text: "All posts", link: "./index.html" });
let liH2 = makeLi({ text: "Drawings", link: "./blog.html" });
let liH3 = makeLi({ text: "About", link: "./about.html" });


ulH.append(liH1);
ulH.append(liH2);
ulH.append(liH3);
nav.append(ulH);

let header = document.getElementById('header');
header.className = "text-white m-5 font-bold truncate relative";

header.append(containerDiv);
header.append(hr);