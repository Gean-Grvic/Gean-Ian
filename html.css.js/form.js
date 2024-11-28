(function() {
    emailjs.init('jszFptBASksocMxmX');
})();

// Form submission event handler
document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    var formData = new FormData(this);
    var data = {
        ftype: formData.get('ftype'),
        message: formData.get('message'),
        fname: formData.get('fname'),
        lname: formData.get('lname'),
        email: formData.get('email')
    };

    emailjs.send('service_80s039r', 'template_zy20uae', data)
        .then(function(response) {
            showModal();
            document.getElementById('form').reset();
        }, function(error) {
            showModal();
            document.getElementById('form').reset();
        });
});

// Show Modal Function
function showModal() {
    const modalOverlay = document.getElementById('modalOverlay');
    modalOverlay.style.display = 'flex';

    document.getElementById('closeModal').addEventListener('click', function() {
        modalOverlay.style.display = 'none';
    });
}