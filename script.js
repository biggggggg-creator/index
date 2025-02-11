let btn = document.getElementById("btn");

btn.addEventListener("click", function adminCheck(event) {
    event.preventDefault();
    let input = document.getElementById("name").value.toLowerCase();
    let admin = "shubham";
    let admin2 = "anjali";

    if (input === admin || input === admin2) {
        alert("wekcome")
        // window.location.href = "../BigBytesCode/index.html";
    } else {
        alert("wrong admin");
    }
});
