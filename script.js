const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

const TIMETABLE_BX = [
    [
        { startTime: "08:25", endTime: "09:20", subject: "ADA (249)" },
        { subject: "RECESS" },
        { startTime: "09:50", endTime: "10:45", subject: "OOPJ (250)" },
        { startTime: "10:45", endTime: "11:40", subject: "ACN (250)" },
        { subject: "RECESS" },
        { startTime: "11:50", endTime: "01:40", subject: "BX1 - ADA [B1]<br>BX2 - OOPJ [B4]<br>BX3 - SE [B3]<br>" }
    ],
    [
        { startTime: "08:25", endTime: "09:20", subject: "ADA (246)" },
        { subject: "RECESS" },
        { startTime: "09:50", endTime: "11:40", subject: "BX1 -OOPJ - B4<br>BX2 - ADA [B5]<br>BX3- MINI PROJ [B6]<br>" },
        { subject: "RECESS" },
        { startTime: "11:50", endTime: "12:45", subject: "SE (248)" }
    ],
    [
        { startTime: "08:25", endTime: "09:20", subject: "OOPJ (249)" },
        { subject: "RECESS" },
        { startTime: "09:50", endTime: "11:40", subject: "BX1 - MINI PROJ [B6]<br>BX2 - SE [B4]<br>BX3 - ADA [B5]<br>" }
    ],
    [
        { startTime: "07:30", endTime: "09:20", subject: "BX1 - SE [B8]<br>BX2 - MINI PROJ [B5]<br>BX3 - OOPJ [B4]<br>" },
        { subject: "RECESS" },
        { startTime: "09:50", endTime: "10:45", subject: "SE (248)" }
    ],
    [
        { startTime: "07:30", endTime: "08:25", subject: "OOPJ (246)" },
        { startTime: "08:25", endTime: "09:20", subject: "ADA (246)" }
    ],
]

window.addEventListener("resize", setProperResponsiveViewForDifferentScreenWidth)

var todayDate = (new Date()).getDay();
// console.log(todayDate);
switch (todayDate) {
    case 1:
        today = DAYS[0];
        break;
    case 2:
        today = DAYS[1];
        break;
    case 3:
        today = DAYS[2];
        break;
    case 4:
        today = DAYS[3];
        break;
    case 5:
        today = DAYS[4];
        break;
    default:
        today = DAYS[0]
}

const setProperResponsiveViewForDifferentScreenWidth = () => {
    if (document.body.clientWidth > 1500) {
        document.getElementById("Wednesday").click();
        setTimeout(function () {
            document.getElementById("slider").removeAttribute("uk-slider");
            document.getElementById("uk-extra").style.display = "none";
        }, 500);
    } else {
        document.getElementById("slider").setAttribute("uk-slider", 'center: true');
        document.getElementById("uk-extra").style.display = "block";
        // setTimeout(function () {
        document.getElementById(today).click();
        // }, 500);
    }
}

setTimeout(function () {
    setProperResponsiveViewForDifferentScreenWidth();
}, 300);


let daysIterator = 0;
for (let day of TIMETABLE_BX) {

    // create li tag
    let li = document.createElement("li");

    // create table container
    let container = document.createElement("div");
    container.className = "container center"; // adding class name
    li.appendChild(container); // append to li

    // create card div
    let card = document.createElement("div");
    card.className = "card"; //  add class name
    container.appendChild(card); // append to container

    // create h1 header
    let h1 = document.createElement("h1");
    h1.className = "header"; // add class name
    h1.innerText = DAYS[daysIterator];
    card.appendChild(h1); // append h1 to card

    // create table
    let table = document.createElement("table");
    table.className = "tt"; // give it class name
    card.appendChild(table); // append table to table card

    // loop for tr
    let len = day.length;
    let index = 0;
    for (data of day) {
        // create tr element
        let tr = document.createElement("tr");

        // TD logic
        if (data.subject == "RECESS") {
            let td = document.createElement("td");
            td.innerHTML = data.subject;
            td.colSpan = 2;
            tr.appendChild(td);
            continue;
        }
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        if (index == 0) {
            td1.className = "tl";
            td2.className = "tr";
        } else if (index == len - 1) {
            td1.className = "bl";
            td2.className = "br";
        }
        td1.innerText = data.startTime;
        td2.innerText = data.subject;
        tr.appendChild(td1);
        tr.appendChild(td2);

        table.appendChild(tr); // append tr to table
        
        ++index;
    }

    document.getElementById("list").appendChild(li);

    daysIterator++;
}