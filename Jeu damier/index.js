i = 0;
j = 0;
k = 0;
c = 0;
z = 0;
co = 0;
cn = 0;
cgoti = '';
idact = '23';
idactive = ['23'];
undo = [];
let content = '';
let n = 8;
while (j < n) {
    content = content + '<div class="line">';
    while (i < n) {
        idil = j.toString() + i.toString();
        if (k % 2 == 0) {
            content = content + "<div class='noir' id='" + idil + "' onclick='go(event)'></div>";
        }
        else {
            content = content + "<div class='blanc' id='" + idil + "' onclick='go(event)'></div>";
        }
        i = i + 1;
        k = k + 1;
    }
    if (n % 2 == 0) {
        k = k + 1
    }
    j = j + 1;
    i = 0;
    content = content + '</div>';
}
document.getElementById('divou').innerHTML = content;
document.getElementById('bulu').innerHTML = '#divou {width: ' + eval(window.innerHeight - 4) + 'px;}';
document.getElementById('23').className = 'tourblanche';
function go(e) {
    var element = e.target || e.srcElement;
    idel = element.id;
    if (c == 0) {
        i = 0;
        j = 0;
        k = 0;
        c = 0;
        z = 0;
        co = 0;
        cn = 0;
        cgoti = '';
        cn = 0;
        undo = [];
        while (cn < idactive.length) {
            if (idel == idactive[cn]) {
                while (co < 78) {
                    (co < 10 ? ci = '0' + co.toString() : ci = co.toString())
                    if (idel[1] == ci[1] && idel[0] == ci[0]) {
                        idact = idel;
                    }
                    if (((ci[1] == idel[1] && ci[0] != idel[0]) || (ci[1] != idel[1] && ci[0] == idel[0])) && ci[1] < 8) {
                        cdot = document.getElementById(ci);
                        (cdot.className == 'noir' ? cdot.className = 'noirposs' : cdot.className = 'blancheposs');
                        undo.push(ci)
                    }
                    co = co + 1;
                };
                c = 1;
            }
            cn = cn + 1;
        }
    }
    else if (c == 1) {
        while (z < undo.length) {
            cgoti = document.getElementById(undo[z]);
            (cgoti.className == 'noirposs' ? cgoti.className = 'noir' : cgoti.className = 'blanc')
            z = z + 1;
        }
        document.getElementById('bulu').innerHTML = '#divou {width: ' + eval(window.innerHeight - 4) + 'px;}';
        if ((idact[1] == idel[1] && idact[0] != idel[0]) || (idact[1] != idel[1] && idact[0] == idel[0])) {
            cname = document.getElementById(idel);
            (cname.className == 'noir' ? cname.className = 'tournoir' : cname.className = 'tourblanche')
            cdact = document.getElementById(idact);
            (cdact.className == 'tournoir' ? cdact.className = 'noir' : cdact.className = 'blanc')
            idact = idel;
            idactive = [idact.toString()]
        }
        else {
            document.getElementById('bulu').innerHTML = document.getElementById('bulu').innerHTML + '#divou {border: 2px solid red;}';
        }
        c = 0;
    }
}