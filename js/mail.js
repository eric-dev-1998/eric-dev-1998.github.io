document.getElementById("writeEmail").addEventListener('click', function() {
    console.log("Negubonita");
    window.location.href = "mailto:ericbusiness103@outlook.com";

    const modalElement = document.getElementById("emailModal");
    const modalInstance = bootstrap.Modal.getInstance(modalElement);
    if (modalInstance)
        modalInstance.hide();
})