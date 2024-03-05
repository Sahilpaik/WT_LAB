document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('examRegistrationForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        var firstName = document.getElementById('firstName').value;
        var lastName = document.getElementById('lastName').value;
        var PRN = document.getElementById('PRN NO.').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var examType = document.getElementById('examYear').value;
        var examDate = document.getElementById('examDate').value;
        var examLocation = document.getElementById('examLocation').value;

        var errorMessage = '';
        if (!firstName) {
            errorMessage += 'First Name is required.\n';
        }
        if (!lastName) {
            errorMessage += 'Last Name is required.\n';
        }
        if (!PRN) 
        {
            errorMessage += 'PRN is required.\n';
        }
        if (!email) {
            errorMessage += 'Email is required.\n';
        }
        if (!phone) {
            errorMessage += 'Phone is required.\n';
        }
        if (!examType) {
            errorMessage += 'Exam Year is required.\n';
        }
        if (!examDate) {
            errorMessage += 'Exam Date is required.\n';
        }
        if (!examLocation) {
            errorMessage += 'Exam Location is required.\n';
        }

        if (errorMessage) {
            alert(errorMessage);
        } else {
            // Submit the formalert
            var a=confirm("Do you want to submit?")
            if(a==true)
            {
                alert("ok");
            }
            else{
                alert("Cancel");
            }
            form.submit();
        }
       
    });
});
