document.getElementById("complete-btn").addEventListener("click", function () {
  alert("Board Updated Successfully");
  document.getElementById("complete-btn").disabled = true;
  const task = document.getElementById("task").innerText;
  const newTask = task - 1;
  document.getElementById("task").innerText = newTask;
  const navtask = document.getElementById("navtask").innerText;
  const convertedTask = parseFloat(navtask);
  const newNavTask = convertedTask + 1;
  document.getElementById("navtask").innerText = newNavTask;
  const taskTitle = document.getElementById("task-title").innerText;

  const now = new Date();
  const time = now.toLocaleTimeString();
  const addActivity = document.getElementById("activity-clear");
  const activityElement = document.createElement("p");
  activityElement.classList.add("bg-white");
  activityElement.classList.add("p-4");
  activityElement.classList.add("rounded-xl");
  activityElement.classList.add("text-xl");
  activityElement.classList.add("mb-4");
  activityElement.innerText = `You Have Completed Task ${taskTitle} at ${time}`;
  addActivity.appendChild(activityElement);
  if (newTask === 0) {
    alert("All Task Completed");
  } else {
    console.log("ok");
  }
});

// complte button-2
document
  .getElementById("complete-btn-2")
  .addEventListener("click", function () {
    alert("Board Updated Successfully");
    document.getElementById("complete-btn-2").disabled = true;
    const task = document.getElementById("task").innerText;
    const newTask = task - 1;
    document.getElementById("task").innerText = newTask;
    const navtask = document.getElementById("navtask").innerText;
    const convertedTask = parseFloat(navtask);
    const newNavTask = convertedTask + 1;
    document.getElementById("navtask").innerText = newNavTask;
    const taskTitle = document.getElementById("task-title").innerText;

    const now = new Date();
    const time = now.toLocaleTimeString();
    const addActivity = document.getElementById("activity-clear");
    const activityElement = document.createElement("p");
    activityElement.classList.add("bg-white");
    activityElement.classList.add("p-4");
    activityElement.classList.add("rounded-xl");
    activityElement.classList.add("text-xl");
    activityElement.classList.add("mb-4");
    activityElement.innerText = `You Have Completed Task ${taskTitle} at ${time}`;
    addActivity.appendChild(activityElement);
    if (newTask === 0) {
      alert("All Task Completed");
    } else {
      console.log("ok");
    }
  });

// complete-3
document
  .getElementById("complete-btn-3")
  .addEventListener("click", function () {
    alert("Board Updated Successfully");
    document.getElementById("complete-btn-3").disabled = true;
    const task = document.getElementById("task").innerText;
    const newTask = task - 1;
    document.getElementById("task").innerText = newTask;
    const navtask = document.getElementById("navtask").innerText;
    const convertedTask = parseFloat(navtask);
    const newNavTask = convertedTask + 1;
    document.getElementById("navtask").innerText = newNavTask;
    const taskTitle = document.getElementById("task-title").innerText;

    const now = new Date();
    const time = now.toLocaleTimeString();
    const addActivity = document.getElementById("activity-clear");
    const activityElement = document.createElement("p");
    activityElement.classList.add("bg-white");
    activityElement.classList.add("p-4");
    activityElement.classList.add("rounded-xl");
    activityElement.classList.add("text-xl");
    activityElement.classList.add("mb-4");
    activityElement.innerText = `You Have Completed Task ${taskTitle} at ${time}`;
    addActivity.appendChild(activityElement);
    if (newTask === 0) {
      alert("All Task Completed");
    } else {
      console.log("ok");
    }
  });

// commplete-4
document
  .getElementById("complete-btn-4")
  .addEventListener("click", function () {
    alert("Board Updated Successfully");
    document.getElementById("complete-btn-4").disabled = true;
    const task = document.getElementById("task").innerText;
    const newTask = task - 1;
    document.getElementById("task").innerText = newTask;
    const navtask = document.getElementById("navtask").innerText;
    const convertedTask = parseFloat(navtask);
    const newNavTask = convertedTask + 1;
    document.getElementById("navtask").innerText = newNavTask;
    const taskTitle = document.getElementById("task-title").innerText;

    const now = new Date();
    const time = now.toLocaleTimeString();
    const addActivity = document.getElementById("activity-clear");
    const activityElement = document.createElement("p");
    activityElement.classList.add("bg-white");
    activityElement.classList.add("p-4");
    activityElement.classList.add("rounded-xl");
    activityElement.classList.add("text-xl");
    activityElement.classList.add("mb-4");
    activityElement.innerText = `You Have Completed Task ${taskTitle} at ${time}`;
    addActivity.appendChild(activityElement);
    if (newTask === 0) {
      alert("All Task Completed");
    } else {
      console.log("ok");
    }
  });

// complete-btn-5
document
  .getElementById("complete-btn-5")
  .addEventListener("click", function () {
    alert("Board Updated Successfully");
    document.getElementById("complete-btn-5").disabled = true;
    const task = document.getElementById("task").innerText;
    const newTask = task - 1;
    document.getElementById("task").innerText = newTask;
    const navtask = document.getElementById("navtask").innerText;
    const convertedTask = parseFloat(navtask);
    const newNavTask = convertedTask + 1;
    document.getElementById("navtask").innerText = newNavTask;
    const taskTitle = document.getElementById("task-title").innerText;

    const now = new Date();
    const time = now.toLocaleTimeString();
    const addActivity = document.getElementById("activity-clear");
    const activityElement = document.createElement("p");
    activityElement.classList.add("bg-white");
    activityElement.classList.add("p-4");
    activityElement.classList.add("rounded-xl");
    activityElement.classList.add("text-xl");
    activityElement.classList.add("mb-4");
    activityElement.innerText = `You Have Completed Task ${taskTitle} at ${time}`;
    addActivity.appendChild(activityElement);
    if (newTask === 0) {
      alert("All Task Completed");
    } else {
      console.log("ok");
    }
  });

// complete-6
document
  .getElementById("complete-btn-6")
  .addEventListener("click", function () {
    alert("Board Updated Successfully");
    document.getElementById("complete-btn-6").disabled = true;
    const task = document.getElementById("task").innerText;
    const newTask = task - 1;
    document.getElementById("task").innerText = newTask;
    const navtask = document.getElementById("navtask").innerText;
    const convertedTask = parseFloat(navtask);
    const newNavTask = convertedTask + 1;
    document.getElementById("navtask").innerText = newNavTask;
    const taskTitle = document.getElementById("task-title").innerText;

    const now = new Date();
    const time = now.toLocaleTimeString();
    const addActivity = document.getElementById("activity-clear");
    const activityElement = document.createElement("p");
    activityElement.classList.add("bg-white");
    activityElement.classList.add("p-2");
    activityElement.classList.add("rounded-xl");
    activityElement.classList.add("text-xl");
    activityElement.classList.add("mb-4");

    activityElement.innerText = `You Have Completed Task ${taskTitle} at ${time}`;
    addActivity.appendChild(activityElement);
    if (newTask === 0) {
      alert("All Task Completed");
    } else {
      console.log("ok");
    }
  });

// activity clear

document.getElementById("clear-btn").addEventListener("click", function () {
  // document.getElementById("activity-clear").style.display = "none";
  document.getElementById("activity-clear").innerHTML = " ";
});

// change color
const color = ["red", "blue", "yellow", "violter", "green"];

document.getElementById("change-color").addEventListener("click", function () {
  const colorSet = parseInt(Math.random() * color.length);
  document.getElementById("body").style.backgroundColor = color[colorSet];
});

document.getElementById("next-page").addEventListener("click", function () {
  window.location.href = "question.html";
});
