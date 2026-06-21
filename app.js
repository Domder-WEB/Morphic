```javascript
/* ==========================
   MORFAKE - app.js
   Modern App Logic
========================== */

// ---------------------
// TAB NAVIGATION
// ---------------------

function openTab(tabId) {
    document.querySelectorAll(".tab").forEach(tab => {
        tab.classList.remove("active");
    });

    const current = document.getElementById(tabId);

    if (current) {
        current.classList.add("active");
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// ---------------------
// XP SYSTEM
// ---------------------

let xp = Number(localStorage.getItem("morfake_xp")) || 7420;

function saveXP() {
    localStorage.setItem("morfake_xp", xp);

    const el = document.getElementById("xpCounter");

    if (el) {
        el.textContent = xp;
    }
}

function addXP(amount) {

    xp += amount;

    saveXP();

    showToast("+" + amount + " XP získáno");

}

// ---------------------
// DAILY TASKS
// ---------------------

const defaultTasks = [

    {
        text: "💧 Vypít 3 litry vody",
        done: false
    },

    {
        text: "🏋️ Dokončit trénink",
        done: false
    },

    {
        text: "😴 Spát alespoň 8 hodin",
        done: false
    },

    {
        text: "🥗 Sníst kvalitní jídlo",
        done: false
    },

    {
        text: "🚶 10 000 kroků",
        done: false
    }

];

let tasks = JSON.parse(localStorage.getItem("morfake_tasks")) || defaultTasks;

function saveTasks() {

    localStorage.setItem(
        "morfake_tasks",
        JSON.stringify(tasks)
    );

}

function renderTasks() {

    const container = document.getElementById("taskContainer");

    if (!container) return;

    container.innerHTML = "";

    tasks.forEach((task, index) => {

        const div = document.createElement("div");

        div.className = "task";

        div.innerHTML = `

            <span>${task.text}</span>

            <input
                type="checkbox"
                ${task.done ? "checked" : ""}
            >

        `;

        div.querySelector("input").addEventListener("change", () => {

            task.done = !task.done;

            if (task.done) {

                addXP(50);

            }

            saveTasks();

            renderTasks();

        });

        container.appendChild(div);

    });

}

// ---------------------
// ADD CUSTOM TASK
// ---------------------

function addTask() {

    const name = prompt("Nový úkol:");

    if (!name) return;

    tasks.push({

        text: name,

        done: false

    });

    saveTasks();

    renderTasks();

}

// ---------------------
// WATER TRACKER
// ---------------------

let water =
    Number(localStorage.getItem("morfake_water")) || 0;

function updateWater() {

    const counter = document.getElementById("waterCounter");

    if (counter) {

        counter.textContent = water.toFixed(1) + " L";

    }

    localStorage.setItem(
        "morfake_water",
        water
    );

}

function addWater(amount) {

    water += amount;

    updateWater();

}

function resetWater() {

    water = 0;

    updateWater();

}

// ---------------------
// STREAK
// ---------------------

let streak =
    Number(localStorage.getItem("morfake_streak")) || 1;

function updateStreak() {

    const el = document.getElementById("streakCounter");

    if (el) {

        el.textContent = streak + " dní";

    }

}

// ---------------------
// AI SCAN SIMULATION
// ---------------------

function startFakeScan() {

    const result = document.getElementById("scanResult");

    if (!result) return;

    result.innerHTML = "Probíhá analýza...";

    setTimeout(() => {

        const score =
            (Math.random() * 2 + 8).toFixed(2);

        result.innerHTML = `

            <h2>Analýza dokončena</h2>

            <br>

            <strong>Skóre:</strong>

            ${score}/10

            <br><br>

            Doporučení:

            <ul>

            <li>✔️ Dostatek spánku</li>

            <li>✔️ Pitný režim</li>

            <li>✔️ Pravidelný pohyb</li>

            <li>✔️ Vyvážená strava</li>

            </ul>

        `;

        addXP(100);

    }, 2500);

}

// ---------------------
// DARK MODE
// ---------------------

function toggleTheme() {

    document.body.classList.toggle("light");

}

// ---------------------
// TOAST
// ---------------------

function showToast(text) {

    const toast = document.createElement("div");

    toast.textContent = text;

    toast.style.position = "fixed";
    toast.style.bottom = "25px";
    toast.style.right = "25px";
    toast.style.padding = "15px 20px";
    toast.style.borderRadius = "14px";
    toast.style.background = "#06b6d4";
    toast.style.color = "black";
    toast.style.fontWeight = "700";
    toast.style.zIndex = "9999";

    document.body.appendChild(toast);

    setTimeout(() => {

        toast.remove();

    }, 2500);

}

// ---------------------
// CLOCK
// ---------------------

function updateClock() {

    const clock =
        document.getElementById("clock");

    if (!clock) return;

    const now = new Date();

    clock.textContent =
        now.toLocaleTimeString("cs-CZ");

}

setInterval(updateClock, 1000);

// ---------------------
// INIT
// ---------------------

window.onload = () => {

    saveXP();

    renderTasks();

    updateWater();

    updateStreak();

    updateClock();

};
```
