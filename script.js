(function(){
  emailjs.init("ВАШ_PUBLIC_KEY"); // вставь свой public key из EmailJS
})();

document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();

  emailjs.sendForm("ВАШ_SERVICE_ID", "ВАШ_TEMPLATE_ID", this)
    .then(function() {
      document.getElementById("status").innerText = "Анкета успешно отправлена!";
    }, function(error) {
      document.getElementById("status").innerText = "Ошибка: " + error.text;
    });
});