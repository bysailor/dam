i = 0;
j = 0;
k = 0;
c = 0;
co = 0;
cn = 0;
idact = '23';
idactive = ['23'];
let content = '';
let n = 10;
while (j < n) {
    content = content + '<div class="line">';
    while (i < n) {
        ki = k + 1;
        ka = ki.toString();
        if (k + 10 - j > 99) {
            idil = 'a' + ka[2];
        }
        else {
            idil = k + 10 - j;
        }
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
    content = content + '</div>'
    j = j + 1;
    i = 0;
}
document.getElementById('divou').innerHTML = content;
document.getElementById('bulu').innerHTML = '#divou {width: ' + eval(window.innerHeight - 4) + 'px;}';
document.getElementById('23').innerHTML = '<div class="tour" onclick="go(event)"></div>';
function go(e) {
    var element = e.target || e.srcElement;
    idel = element.id;
    if (c == 0) {
        cn = 0;
        while (cn<idactive.length) {
            if (idel == idactive[cn]) {
                while (co < 100) {
                    ci = co.toString()
                    if (idel[1] == eval(ci + '[1]') || idel[0] == eval(ci + '[0]')) {
                        document.getElementById(ci).innerHTML = '<div class="poss"></div>';
                        idact = idel;
                    }
                    co = co + 1;
                };
                c = 1;
            }
            cn = cn + 1;
        }
    }
    else if (c==1) {
        document.getElementById('bulu').innerHTML = '#divou {width: ' + eval(window.innerHeight - 4) + 'px;}';
        if (idact[1] == idel[1] || idel[0] == idact[0]) {
            document.getElementById(idel).innerHTML = '<div class="tour"></div>';
            document.getElementById(idact).innerHTML = '';
            idact = idel;
            c = 0;
        }
        else {
            document.getElementById('bulu').innerHTML = document.getElementById('bulu').innerHTML + '#divou {border: 2px solid red;}';
        }
    }
}