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


let i = 0;
for (let day of timeTable) {

    // create li tag
    let li = document.createElement("li");

    // create table container
    let tableContainer = document.createElement("div");
    tableContainer.className = "tableContainer"; // adding class name
    li.appendChild(tableContainer); // append to li

    // create h1 header
    let h1 = document.createElement("h1");
    h1.className = "header"; // add class name
    h1.innerText = days[i];
    tableContainer.appendChild(h1); // append h1 to tableContainer

    // create table
    let table = document.createElement("table");
    table.className = "tt"; // give it class name
    tableContainer.appendChild(table); // append table to table container

    // loop for tr
    for (data of day) {
        // create tr element
        let tr = document.createElement("tr");

        // TD logic
        if(data.subject == "RECESS")
        {
            let td = document.createElement("td");
            td.innerHTML = data.subject;
            td.colSpan=2;
            tr.appendChild(td);
        } else {
            let td1 = document.createElement("td");
            let td2 = document.createElement("td");
            td1.innerText = data.startTime;
            td2.innerHTML = data.subject;
            tr.appendChild(td1);
            tr.appendChild(td2);
        }
        console.log(data);
        
        
        table.appendChild(tr); // append tr to table
    }

    document.getElementById("container").appendChild(li);

    i++;
}