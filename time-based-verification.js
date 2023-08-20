document.addEventListener('DOMContentLoaded', function () {
    const verificationButton = document.getElementById('verificationButton');
    const verificationResult = document.getElementById('verificationResult');

    let isVerified = false;

    verificationButton.addEventListener('click', function () {
        if (!isVerified) {
            verificationResult.textContent = 'Verification successful!';
            verificationResult.style.color = '#4caf50';
            isVerified = true;
        }
    });

    // Set a time limit for verification (in milliseconds)
    const timeLimit = 15000; // 15 seconds

    setTimeout(function () {
        if (!isVerified) {
            verificationResult.textContent = 'Verification time expired.';
            verificationResult.style.color = '#f44336';
            verificationButton.disabled = true;
        }
    }, timeLimit);
});
