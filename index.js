i = j = k = c = z = co = cn = 0;
cgoti = '';
idact = '23';
idactive = ['23'];
undo = [];
all = [];
let content = '';
let n = 8;
while (j < n) {
    content = content + '<div class="line">';
    while (i < n) {
        idil = j.toString() + i.toString();
        (k % 2 == 0 ? content = content + "<div class='noir' id='" + idil + "' onclick='go(event)'></div>" : content = content + "<div class='blanc' id='" + idil + "' onclick='go(event)'></div>");
        all.push(idil); i = i + 1; k = k + 1;
    }
    if (n % 2 == 0) { k = k + 1 }
    j = j + 1; i = 0; content = content + '</div>';
}
for (var i = 0; i < all.length; i++) { if (all[i] === idactive[0]) { all.splice(i, 1); } }
document.getElementById('divou').innerHTML = content;
document.getElementById('bulu').innerHTML = '#divou {width: ' + eval(window.innerHeight - 4) + 'px;}';
document.getElementById('23').className = 'tourblanche';
function go(e) {
    var element = e.target || e.srcElement;
    idel = element.id;
    check = no;
    if (c == 0) {
        checktour();
        c = 1;
    }
    else if (c == 1) {
        while (wu < possibility.length) {
            (idel == possibility[wu] ? check = yes : console.log('u'));
        }
        if (check = 'yes') {
            processtour();
        }
        else {
            document.getElementById('bulu').innerHTML = document.getElementById('bulu').innerHTML + '#divou {border: 2px solid red;}';
        }
        c = 0;
        //CHANGE IDACTIVE
        //UNDO ALL CELL
        //PREVENT MISS CLICKING
    }
}
function checktour() {
    idclicked = '23'; checktou = 1; zi = 0; possibility = [];
    signe1 = '+'; signe = '-'; signe0 = '+'; inf = 0; coef = 10;
    while (checktou < 8 - parseInt(idclicked[0])) { allezlopti(idclicked); }
    signe1 = '-'; checktou = 1;
    while (checktou < parseInt(idclicked[0]) + 1) { allezlopti(idclicked); }
    signe0 = signe; checktou = 1; coef = 1;
    while (checktou < parseInt(idclicked[1]) + 1) { allezlopti(idclicked); }
    checktou = 1; signe1 = "+"; signe = "+"; signe0 = signe;
    while (checktou < 8 - parseInt(idclicked[1])) { allezlopti(idclicked); }
    xi = 0;
    while (xi < 64 - idactive.length) {
        cgotix = document.getElementById(all[xi]);
        (cgotix.className == 'noir' ? cgotix.className = 'noirpaposs' : cgotix.className = 'blanchepaposs'); xi = xi + 1;
    }
    while (zi < possibility.length) {
        cgotit = document.getElementById(possibility[zi]);
        (cgotit.className == 'noirpaposs' ? cgotit.className = 'noirposs' : cgotit.className = 'blancheposs'); zi = zi + 1;
    }
}
function allezlopti(e) {
    idchto = eval(parseInt(idclicked) + signe0 + parseInt(checktou) * coef);
    idchto1 = eval(parseInt(idclicked) + signe1 + checktou * coef);
    idchtoo = eval(parseInt(idclicked) + signe + checktou * coef);
    if (idchto1 < 10) { idchto1 = '0' + idchto1.toString(); }
    digit = document.getElementById(idchto);
    if (digit.className == 'blanc' || digit.className == 'noir') {
        possibility.push(idchto1.toString());
    }
    else { possibility.push(idchtoo.toString()); checktou = checktou + 10; }
    checktou = checktou + 1;
}