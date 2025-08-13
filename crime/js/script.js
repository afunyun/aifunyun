function computeLocalCron() {
  const now = new Date();
  const second = now.getSeconds();
  const minute = now.getMinutes();
  const hour = now.getHours();
  const dayOfMonth = now.getDate();
  const month = now.getMonth() + 1;
  const dayOfWeek = now.getDay();
  return {
    second,
    minute,
    hour,
    dayOfMonth,
    month,
    dayOfWeek,
    cronString: `${second} ${minute} ${hour} ${dayOfMonth} ${month} ${dayOfWeek}`,
    readable: {
      second: second.toString().padStart(2, "0"),
      minute: minute.toString().padStart(2, "0"),
      hour: hour.toString().padStart(2, "0"),
      dayOfMonth: dayOfMonth.toString().padStart(2, "0"),
      month: month.toString().padStart(2, "0"),
      dayOfWeek: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][dayOfWeek],
    },
  };
}

function updateClock() {
  renderClock(computeLocalCron());
}

function renderClock(data) {
  const cronTimeElement = document.getElementById("cronTime");
  cronTimeElement.textContent = data.cronString;
  cronTimeElement.classList.add("updating");
  setTimeout(() => cronTimeElement.classList.remove("updating"), 500);

  document.getElementById("second").textContent = data.second;
  document.getElementById("minute").textContent = data.minute;
  document.getElementById("hour").textContent = data.hour;
  document.getElementById("dayOfMonth").textContent = data.dayOfMonth;
  document.getElementById("month").textContent = data.month;
  document.getElementById("dayOfWeek").textContent = data.dayOfWeek;
  document.getElementById(
    "readableTime"
  ).textContent = `${data.readable.hour}:${data.readable.minute}:${data.readable.second} (${data.readable.dayOfWeek})`;
}

updateClock();
setInterval(updateClock, 1000);

document.querySelectorAll(".field").forEach((field) => {
  field.addEventListener("mouseenter", function () {
    this.style.transform = "scale(1.05)";
    this.style.transition = "transform 0.2s ease";
  });
  field.addEventListener("mouseleave", function () {
    this.style.transform = "scale(1)";
  });
});

document.getElementById("cronTime").addEventListener("click", function () {
  navigator.clipboard
    .writeText(this.textContent)
    .then(() => {
      const originalText = this.textContent;
      this.textContent = "Copied!";
      setTimeout(() => {
        this.textContent = originalText;
      }, 1000);
    })
    .catch((err) => console.error("Failed to copy text:", err));
});

document.addEventListener("keydown", function (event) {
  const key = event.key.toLowerCase();
  if (key === "r") updateClock();
  if (key === "c") {
    const cronString = document.getElementById("cronTime").textContent;
    navigator.clipboard.writeText(cronString);
  }
});
