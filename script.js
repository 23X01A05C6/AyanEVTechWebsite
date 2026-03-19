function submitForm() {

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let issue = document.getElementById("issue").value;

    if(name === "" || phone === "" || issue === "") {
        document.getElementById("msg").innerText = "Please fill all details!";
        return;
    }

    document.getElementById("msg").innerText =
        "Thank you " + name + "! We will contact you soon.";

}