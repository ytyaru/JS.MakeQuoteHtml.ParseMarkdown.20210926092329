function setupToast() {
    iziToast.settings({
        displayMode: 1, 
        timeout: 5000,
        resetOnHover: true,
        transitionIn: 'flipInX',
        transitionOut: 'flipOutX',
        position: 'bottomRight', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center
    });
}
