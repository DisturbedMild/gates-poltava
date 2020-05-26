function imgModal() {
    const gates = document.querySelectorAll('.gate-item')
    const gatesArray = Array.from(gates).map( gate => {
        gate.addEventListener('click', e => {
            const img = e.target;
            createModal(img)
        })
        if(window.innerWidth <= 1000) {
            gate.removeEventListener('click')
        }
    } )
}
imgModal()


function createModal(img) {
    const modal = document.createElement('div');
    modal.className = 'img-modal';
    modal.style.display = 'block';

    const newImg = document.createElement('img');
    newImg.style.width = 'auto';
    newImg.style.height = '75%';
    newImg.src = img.src;

    modal.insertAdjacentElement('afterbegin', newImg);
    document.body.insertAdjacentElement("afterbegin", modal);

    function  closeModal() {
        modal.addEventListener('click', e=> {
            if(e.target != document.querySelector('.img-modal img')) {
                modal.style.display = 'none';
            }
        })
    }
    closeModal()
}
function deleteModalOnMobile() {

}
deleteModalOnMobile()




