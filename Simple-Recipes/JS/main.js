// RECIPE POP UP MODAL SECTION

// SETS UP THE BUTTON THAT WILL OPEN THE RECIPE MODAL
var btns = document.querySelectorAll("input.modal-button");

// DEFINES ALL MODALS FOR EACH RECIPE
var modals = document.querySelectorAll(".recipe-modal");

// GETS THE <SPAN> ELEMENT THAT CLOSES THE MODAL
var closeBtn = document.querySelectorAll(".close-Btn");

// Variable to store the auto-close timer
let autoCloseTimer;

// WHEN THE USER CLICKS THE RECIPE BUTTON OPEN THE MODAL
for (let i = 0; i < btns.length; i++) {
    btns[i].onclick = function (event) {
      const modal = document.querySelector(event.target.getAttribute("href"));
      if (modal) {
        modal.style.display = "block";

         // AUTO-CLOSE AFTER 10 SECONDS (10000 milliseconds)
            autoCloseTimer = setTimeout(() => {
                modal.style.display = "none";
            }, 10000);
        }
    };
}

// WHEN THE USER CLICKS ON <SPAN> (X), CLOSE THE MODAL
for (let i = 0; i < closeBtn.length; i++) {
    closeBtn[i].onclick = function() {
        const modal = this.closest(".recipe-modal");
        if (modal) {
            modal.style.display = "none";
            // Clear the timer if user manually closes before 10 seconds
            clearTimeout(autoCloseTimer);
        }
    };
}

// EMAIL VALIDATION
document.getElementById('contactForm').addEventListener('submit',
    function (event) {
        // OVERRIDES THE DEFAULT BROWSER REFRESH WHEN SUBMIT BUTTON IS PRESSED
        event.preventDefault();

        // VARIABLE TO VALIDATE THAT EACH FIELD IS FILLED OUT
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;
    
        // EMAIL PATTERN CHECKS FOR ALL SYMBOL THAT WOULD BE NEEDED FOR AN EMAIL ADDRESS SUCH AS THE @ AND . AND THE TEXT THAT WOULD COME BEFORE, BETWEEN AND AFTER. 
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        // USE THIS VARIABLE TO DISPLAY MESSAGE IF FIELDS ARE FILLED OUT OR THANK YOU MESSAGE
        const valMsg= document.getElementById('validateMsg');

        if (!firstName || !lastName || !phone || !message) {
            // CHECKS IF FIELDS HAVE BEEN FILLED OUT
            valMsg.innerHTML = '<p style="color: red;">Please Fill Out All Empty Fields</p>';
        } else if (!emailPattern.test(email)) {
            // CHECKS IF THERE IS A VALID EMAIL
            valMsg.innerHTML = '<p style="color: red;">Please Enter A Valid Email</p>'
        } else {
            // IF ALL FIELDS ARE FILLED OUT CORRECTLY, DISPLAY THANK YOU MESSAGE
            valMsg.innerHTML = '<p style="color: red;">Thank You For Submitting</p>'
        }

        const formData = {
            firstName: firstName,
            lastName: lastName,
            email: email, 
            phone: phone,
            message: message,
            subscribe: document.getElementById('subscription').checked
        };

        // DISPLAYS WHAT THE USER WROTE IN THE CONSOLE
        console.log(JSON.stringify(formData))
    }
)


