var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

var timeTable = [
    [
        { startTime: "07:30", endTime: "09:15", subject: "BX1 -SE - B6 (RVV) <br>BX2 - MINI PROJ- B7 (KRC)<br>BX3- ADA -B5(BUT)" },
        { subject: "RECESS" },
        { startTime: "09:50", endTime: "10:45", subject: "OOPJ (AAP)" }
    ],
    [
        { startTime: "07:30", endTime: "08:20", subject: "ADA (BUT)" },
        { startTime: "08:25", endTime: "09:15", subject: "SE (RVV)" },
        { subject: "RECESS" },
        { startTime: "09:50", endTime: "11:40", subject: "BX1 -OOPJ - B4 (AAP) <br>BX2 - ADA -B5 (BUT)<br>BX3- MINI PROJ- B6 (NPB)" }
    ],
    [
        { startTime: "07:30", endTime: "08:20", subject: "ADA (BUT)" },
        { startTime: "08:25", endTime: "09:15", subject: "OOPJ (AAP)" },
        { subject: "RECESS" },
        { startTime: "09:50", endTime: "11:40", subject: "BX1 -MINI PROJ- B5 (RJS) <br>BX2 - SE - B8 (RVV)  <br>BX3- OOPJ - B4 (AAP)" },
    ],
    [
        { startTime: "08:25", endTime: "09:15", subject: "ADA( BUT)" },
        { subject: "RECESS" },
        { startTime: "09:50", endTime: "10:45", subject: "OOPJ (AAP)" },
        { startTime: "10:45", endTime: "11:40", subject: "ACN (KRC)" }
    ],
    [
        { startTime: "07:30", endTime: "09:15", subject: "BX1 -ADA -B5(BUT) <br>BX2 - OOPJ - B4 (AAP) <br>BX3- SE - B8 (RVV)" },
        { subject: "RECESS" },
        { startTime: "09:50", endTime: "10:45", subject: "SE (RVV)" }
    ],
]
selectedDay = "Monday";
window.addEventListener("resize", function (event) {
    abcd();
})

function abcd()
{
    if (this.document.body.clientWidth > 1500) {
        this.document.getElementById("wed").click();
        setTimeout(function () {
            this.document.getElementById("slider").removeAttribute("uk-slider");
            document.getElementById("uk-extra").style.display = "none";
        }, 500);
    } else {
        this.document.getElementById("slider").setAttribute("uk-slider", 'center: true');
        document.getElementById("uk-extra").style.display = "block";
    }
}
setTimeout(function () {
    abcd();
}, 300);


let i = 0;
for (let day of timeTable) {

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
    h1.innerText = days[i];
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
        } else {
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
            td2.innerHTML = data.subject;
            tr.appendChild(td1);
            tr.appendChild(td2);
        }
        index++;

        table.appendChild(tr); // append tr to table
    }

    document.getElementById("list").appendChild(li);

    i++;
}