// Simple share modal functionality
document.addEventListener('DOMContentLoaded', function() {
    // This ensures the DOM is fully loaded before trying to access elements
    const shareButton = document.getElementById('shareButton');
    
    if (shareButton) {
        shareButton.addEventListener('click', function() {
            // Share functionality would go here
            if (navigator.share) {
                navigator.share({
                    title: 'Check out this 3D model',
                    text: 'I created this cool 3D model with reflections',
                    url: window.location.href
                })
                .then(() => console.log('Share successful'))
                .catch((error) => console.error('Error sharing:', error));
            } else {
                console.log('Web Share API not supported in this browser');
                alert('Sharing not supported in this browser.');
            }
        });
    }
});
