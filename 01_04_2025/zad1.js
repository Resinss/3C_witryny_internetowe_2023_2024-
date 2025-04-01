document.getElementById("numberForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const numbers = [
        Number(formData.get("number1")),
        Number(formData.get("number2")),
        Number(formData.get("number3")),
        Number(formData.get("number4")),
        Number(formData.get("number5"))
    ];
    document.getElementById("arrayDisplay").textContent = "Tablica:" + numbers.join(",");
});