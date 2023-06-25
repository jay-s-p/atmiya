const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

const INS = {
    name: "INS",
    teacher: "Tosal Bhalodia",
    fullform: "Information and Network Security"
};

const CD = {
    name: "CD",
    teacher: "Rupal Shilu",
    fullform: "Compiler Design"
};

const CC = {
    name: "CC",
    teacher: "Riddhi Bhatt",
    fullform: "Cloud Computing"
};

const MCWN = {
    name: "MCWN",
    teacher: "Devangi Paneri",
    fullform: "Mobile Computing and Wireless Network"
};

const MP = {
    name: "MP",
    teacher: `¯\\_(ツ)_/¯`,
    fullform: "Major Project"
};

const RECESS = { name: "RECESS" };
let B1 = "BY1 - ";
let B2 = "BY2 - ";
let B3 = "BY3 - ";
const SUBJECT = "";

let TIMETABLE_BX = {
    'Monday': [
        { startTime: "07:30", endTime: "08:25", subject: INS },
        { startTime: "08:25", endTime: "09:20", subject: CD },
        { subject: RECESS },
        { startTime: "09:50", endTime: "10:45", subject: MCWN },
        { startTime: "10:45", endTime: "11:40", subject: CC },
    ],
    "Tuesday": [
        { startTime: "07:30", endTime: "09:20", subject: [INS, CD, CC] },
        { subject: RECESS },
        { startTime: "09:50", endTime: "10:45", subject: INS },
        { startTime: "10:45", endTime: "11:40", subject: MCWN },
        { subject: RECESS },
        { startTime: "11:50", endTime: "12:45", subject: CD },
    ],
    "Wednesday": [
        { startTime: "08:25", endTime: "09:20", subject: CC },
        { subject: RECESS },
        { startTime: "09:50", endTime: "11:40", subject: [MCWN, INS, MP] },
        { subject: RECESS },
        { startTime: "11:50", endTime: "1:40", subject: [CC, MP, CD] },
    ],
    "Thursday": [
        { startTime: "07:30", endTime: "08:25", subject: CC },
        { startTime: "08:25", endTime: "09:20", subject: MCWN },
        { subject: RECESS },
        { startTime: "09:50", endTime: "11:40", subject: [CD, MCWN, INS] },
    ],
    "Friday": [
        { startTime: "07:30", endTime: "08:25", subject: INS },
        { startTime: "08:25", endTime: "09:20", subject: CD },
        { subject: RECESS },
        { startTime: "09:50", endTime: "10:45", subject: [MP, CC, MCWN] },
    ],
}

let TIMETABLE_BY = {
    'Monday': [
        { startTime: "07:30", endTime: "08:25", subject: MCWN },
        { startTime: "08:25", endTime: "09:20", subject: CC },
        { subject: RECESS },
        { startTime: "09:50", endTime: "10:45", subject: INS },
        { startTime: "10:45", endTime: "11:40", subject: CD },
        { subject: RECESS },
        { startTime: "11:50", endTime: "1:40", subject: [MCWN, INS, CD] },
    ],
    "Tuesday": [
        { startTime: "08:25", endTime: "09:20", subject: MCWN },
        { subject: RECESS },
        { startTime: "09:50", endTime: "11:40", subject: [CD, CC, MP] },
        { subject: RECESS },
        { startTime: "11:50", endTime: "12:45", subject: CC },
    ],
    "Wednesday": [
        { startTime: "07:30", endTime: "09:20", subject: [INS, CD, MCWN] },
        { subject: RECESS },
        { startTime: "09:50", endTime: "10:45", subject: INS },
        { startTime: "10:45", endTime: "11:40", subject: CC },
        { subject: RECESS },
        { startTime: "11:50", endTime: "12:45", subject: MCWN },
    ],
    "Thursday": [
        { startTime: "07:30", endTime: "08:25", subject: INS },
        { startTime: "08:25", endTime: "09:20", subject: CD },
        { subject: RECESS },
        { startTime: "09:50", endTime: "11:40", subject: [MP, MP, CC] },
    ],
    "Friday": [
        { startTime: "07:30", endTime: "09:20", subject: [CC, MCWN, INS] },
        { subject: RECESS },
        { startTime: "09:50", endTime: "10:45", subject: CD },
    ],
}

// standard template
let TIMETABLE = [
    [
        { startTime: "07:30", endTime: "08:25", subject: SUBJECT },
        { startTime: "08:25", endTime: "09:20", subject: SUBJECT },
        { subject: RECESS },
        { startTime: "09:50", endTime: "10:45", subject: SUBJECT },
        { startTime: "10:45", endTime: "11:40", subject: SUBJECT },
        { subject: RECESS },
        { startTime: "11:50", endTime: "12:45", subject: SUBJECT },
        { startTime: "12:45", endTime: "01:40", subject: SUBJECT },
    ],
]

// console.log(localStorage.getItem("class"))
if (!localStorage.getItem("class")) {
    TIMETABLE = TIMETABLE_BX;
    B1 = "BX1 - ";
    B2 = "BX2 - ";
    B3 = "BX3 - ";
    localStorage.setItem("class", 0)
}
else if (localStorage.getItem("class") == 0) {
    TIMETABLE = TIMETABLE_BX;
    B1 = "BX1 - ";
    B2 = "BX2 - ";
    B3 = "BX3 - ";
    document.getElementById("bx").classList.add("active");
}
else {
    document.getElementById("by").classList.add("active");
    TIMETABLE = TIMETABLE_BY;
}


var todayDate = (new Date()).getDay(); // getting current date
today = DAYS[todayDate - 1];

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
        if (document.getElementById(today))
            document.getElementById(today).click();
    }
}

window.addEventListener("resize", setProperResponsiveViewForDifferentScreenWidth);

setTimeout(function () {
    setProperResponsiveViewForDifferentScreenWidth();
}, 300);

const setTimeTable = () => {
    let daysIterator = 0;
    document.getElementById("list").innerText = "";
    for (let day of Object.values(TIMETABLE)) {

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
        h1.className = "header noselect"; // add class name
        h1.innerText = DAYS[daysIterator];
        card.appendChild(h1); // append h1 to card

        // create table
        let table = document.createElement("table");
        table.className = "tt"; // give it class name
        card.appendChild(table); // append table to table card

        // loop for tr
        let index = 0;
        for (data of day) {
            let len = day.length;
            // console.log(data)
            // console.log(len)
            // create tr element
            let tr = document.createElement("tr");

            // TD logic
            if (data?.subject == RECESS) {
                let td = document.createElement("td");
                td.className = "noselect";
                td.innerHTML = `
                <div class="tooltip">
                    <span class="tooltiptext">09:20 to 09:50</span>
                    <div>${RECESS.name}</div>
                </div>`;
                td.colSpan = 2;
                tr.appendChild(td);
            } else {
                let td1 = document.createElement("td");
                let td2 = document.createElement("td");
                // console.log(daysIterator + " " + index + " " + len)
                if (index == 0) {
                    td1.className = "tl noselect";
                    td2.className = "tr noselect";
                    // console.log("top"+daysIterator);
                } else if (index == len - 1) {
                    // console.log("bottom"+daysIterator);
                    td1.className = "bl noselect";
                    td2.className = "br noselect";
                } else {
                    td1.className = "noselect";
                    td2.className = "noselect";
                }
                td1.innerText = data.startTime;
                if (data?.subject.length) {
                    td2.innerHTML =
                        `
                    <div class="tooltip">
                        <span class="tooltiptext">${data?.subject[0].teacher}</span>
                        <div>${B1 + data?.subject[0].name}</div>
                    </div>
                    <div class="tooltip">
                        <span class="tooltiptext">${data?.subject[1]?.teacher}</span>
                        <div>${B2 + data?.subject[1]?.name}</div>
                    </div>
                    <div class="tooltip">
                        <span class="tooltiptext">${data?.subject[2]?.teacher}</span>
                        <div>${B3 + data?.subject[2]?.name}</div>
                    </div>`;
                    B1 + data?.subject[0]?.name +
                        B2 + data?.subject[1]?.name +
                        B3 + data?.subject[2]?.name;
                    tr.appendChild(td1);
                    tr.appendChild(td2);
                }
                else {
                    td2.innerHTML = `
                    <div class="tooltip">
                        <span class="tooltiptext">${data?.subject.teacher}</span>
                        <div>${data?.subject.name}</div>
                    </div>`;
                    tr.appendChild(td1);
                    tr.appendChild(td2);
                }
            }

            table.appendChild(tr); // append tr to table

            ++index;
        }

        document.getElementById("list").appendChild(li);

        daysIterator++;
    }
}
setTimeTable()


let setPage = x => {
    document.getElementById("navbar").checked = false;
    if (localStorage.getItem("class") == x)
        return;
    else if (x == 0) {
        TIMETABLE = TIMETABLE_BX;
        B1 = "BX1 - ";
        B2 = "BX2 - ";
        B3 = "BX3 - ";
        document.getElementById("loadingBackground").style.display = "flex";
        setTimeout(() => {
            document.getElementById("loadingBackground").style.display = "none";
        }, 2000)
        document.getElementById("bx").classList.add("active");
        document.getElementById("by").classList.remove("active");
    } else {
        TIMETABLE = TIMETABLE_BY;
        document.getElementById("bx").classList.remove("active");
        document.getElementById("by").classList.add("active");
        // console.log("by - " + x)
        B1 = "BY1 - ";
        B2 = "BY2 - ";
        B3 = "BY3 - ";
        document.getElementById("loadingBackground").style.display = "flex";
        setTimeout(() => {
            document.getElementById("loadingBackground").style.display = "none";
        }, 2000)
    }
    localStorage.setItem("class", x);
    setTimeTable();
    setTimeout(function () {
        setProperResponsiveViewForDifferentScreenWidth();
    }, 300);
}

setTimeout(() => {
    document.getElementById("loadingBackground").style.display = "none";
}, 2000)