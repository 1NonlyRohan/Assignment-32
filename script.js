var button = document.getElementById("btn");
button.addEventListener("click", (e) => {
    e.preventDefault();
    // input values
    var rollNo = document.getElementById("rollno").value;
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    // conditions
    if (!rollNo) {
        alert("Please enter your Roll no.")
    }
    if (!name) {
        alert("Please enter your Name")
    }
    if (!age) {
        alert("Please enter your Age")
    }
    else {
        // Create new table row and cells
        var newDataRow = document.createElement("tr");
        var rollNoCell = document.createElement('td');
        var nameCell = document.createElement('td');
        var ageCell = document.createElement('td');

        // Set content of cell
        rollNoCell.innerText = rollNo;
        nameCell.innerText = name;
        ageCell.innerText = age;
        // Append childs
        newDataRow.appendChild(rollNoCell);
        newDataRow.appendChild(nameCell);
        newDataRow.appendChild(ageCell);
        // student body data
        var studentTbody = document.getElementById("student-tbody");
        studentTbody.appendChild(newDataRow);
        // Reset submittion
        document.getElementById("form-box").reset();
    }
});