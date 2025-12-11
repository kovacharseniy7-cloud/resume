// Кнопка 1: Змінити ім’я
document.getElementById("btnChangeName").addEventListener("click", function () {
    let newName = prompt("Введіть нове ім'я:");

    if (newName !== null && newName.trim() !== "") {
        document.getElementById("name").textContent = newName;
        alert("Ім'я змінено!");
    } else {
        alert("Ім'я не змінено.");
    }
});


// Кнопка 2: Змінити тему сайту
document.getElementById("btnTheme").addEventListener("click", function () {
    document.body.classList.toggle("dark");
});


// Кнопка 3: Показати навички (використання циклу)
document.getElementById("btnShowSkills").addEventListener("click", function () {

    const skills = document.querySelectorAll("#skillsList li");
    let result = "Ваші навички:\n";

    for (let i = 0; i < skills.length; i++) {
        result += "- " + skills[i].textContent + "\n";
    }

    alert(result);
});
