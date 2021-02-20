const grid = new Muuri('.grid-fotos',{
    layout:{
        rounding: false
    }
});

window.addEventListener('load', () => {
    grid.refreshItems().layout();
    document.getElementById('.grid-fotos').classList.add('.cargadas')

});



