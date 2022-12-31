const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

const DOTNET = { name: ".NET", teacher: "KRUPA RAJPARA" }
const TOC = { name: "TOC", teacher: "Rupal Shilu", fullform: "THEORY OF COMPUTATION" }
const MCI = { name: "MCI", teacher: "YAGNESH MAKAWANA", fullform: "MICROPROCESSOR CONTROLLER INTERFACE" }
const PYTHON = { name: "Python", teacher: "JITENDRA KARIYA" }
const EBM = { name: "EBM", teacher: "KRINA BHAVESHBHAI MASHARU", fullform: "ECONOMICS AND BUSINESS MANAGEMENT" }
const CS = { name: "CS", teacher: "BANSI RAM", fullform: "CYBER SECURITY" }
const MINIPROJ = { name: "MINI-PROJECT" };
const QALR = { name: "QALR" };
const RECESS = { name: "RECESS" };
const BX1 = "BX1 - ";
const BX2 = "<br />BX2 - ";
const BX3 = "<br />BX3 - ";
const SUBJECT = "";

const TIMETABLE_BX = [
    [
        { startTime: "07:30", endTime: "08:25", subject: DOTNET },
        { startTime: "08:25", endTime: "09:20", subject: TOC },
        { subject: RECESS },
        { startTime: "09:50", endTime: "10:45", subject: MCI },
        { startTime: "10:45", endTime: "11:40", subject: PYTHON },
        { subject: RECESS },
        { startTime: "11:50", endTime: "01:40", subject: QALR },
    ],
    [
        { startTime: "07:30", endTime: "09:20", subject: [MCI, CS, PYTHON] },
        { subject: RECESS },
        { startTime: "09:50", endTime: "10:45", subject: MCI },
        { startTime: "10:45", endTime: "11:40", subject: DOTNET },
        { subject: RECESS },
        { startTime: "11:50", endTime: "12:45", subject: EBM },
    ],
    [
        { startTime: "07:30", endTime: "09:20", subject: [DOTNET, MINIPROJ, MCI] },
        { subject: RECESS },
        { startTime: "09:50", endTime: "11:40", subject: [CS, MCI, MINIPROJ] },
    ],
    [
        { startTime: "07:30", endTime: "09:20", subject: [MINIPROJ, PYTHON, DOTNET] },
        { subject: RECESS },
        { startTime: "09:50", endTime: "10:45", subject: PYTHON },
        { startTime: "10:45", endTime: "11:40", subject: TOC },
        { subject: RECESS },
        { startTime: "11:50", endTime: "12:45", subject: EBM },
    ],
    [
        { startTime: "07:30", endTime: "08:25", subject: DOTNET },
        { startTime: "08:25", endTime: "09:20", subject: TOC },
        { subject: RECESS },
        { startTime: "09:50", endTime: "11:40", subject: [PYTHON, DOTNET, CS] },
        { subject: RECESS },
        { startTime: "11:50", endTime: "12:45", subject: PYTHON },
        { startTime: "12:45", endTime: "01:40", subject: MCI },
    ],
]

// TODO
const TIMETABLE_BY = [
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

TIMETABLE = TIMETABLE_BX;


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


let daysIterator = 0;
for (let day of TIMETABLE) {

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
        if (data.subject == RECESS) {
            let td = document.createElement("td");
            td.className = "noselect";
            td.innerHTML = RECESS.name;
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
            if (data.subject.length) {
                td2.innerHTML =
                    BX1 + data.subject[0].name +
                    BX2 + data.subject[1].name +
                    BX3 + data.subject[2].name;
                tr.appendChild(td1);
                tr.appendChild(td2);
            }
            else {
                td2.innerHTML = data.subject.name;
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

setTimeout(()=>{
    document.getElementById("loadingBackground").style.display = "none";
},2000)
setTimeout(()=>{
    document.querySelector("body > div:nth-child(4)").style.display = "none";
},1000)