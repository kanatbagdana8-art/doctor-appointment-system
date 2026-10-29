
document.addEventListener("DOMContentLoaded", function () {

    // Дәрігер карточкаларын іздеу
    const searchInput = document.getElementById("doctorSearch");

    if (searchInput) {
        searchInput.addEventListener("input", function () {

            const searchValue = this.value.toLowerCase();

            const doctors = document.querySelectorAll(".doctor-card");

            doctors.forEach(function (doctor) {

                const name = doctor.textContent.toLowerCase();

                if (name.includes(searchValue)) {
                    doctor.style.display = "block";
                } else {
                    doctor.style.display = "none";
                }

            });
        });
    }

    // Тіркелу формасын тексеру
    const registerForm = document.getElementById("registerForm");

    if (registerForm) {
        registerForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const password = document.getElementById("password").value;
            const confirmPassword =
                document.getElementById("confirmPassword").value;

            if (password !== confirmPassword) {
                alert("Құпиясөздер бірдей емес!");
                return;
            }

            alert("Форма сәтті толтырылды!");


    // Жазылу формасын тексеру
    const appointmentForm =
        document.getElementById("appointmentForm");

    if (appointmentForm) {
        });
    }
        appointmentForm.addEventListener("submit", function (event) {

            event.preventDefault();

            alert("Қабылдауға жазылу сұранысы жіберілді!");

        });
    }

});
