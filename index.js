    
document.getElementById("passwordForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let result = document.getElementById("result");
    
    if (password === confirmPassword) {
        result.textContent = "كلمة المرور متطابقة!";
        result.style.color = "green";
    } else {
        result.textContent = "كلمة المرور غير متطابقة!";
        result.style.color = "red";
    }

});
