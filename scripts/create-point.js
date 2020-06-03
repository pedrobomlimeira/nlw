

function populateUFs(){
    const ufSelect = document.querySelector('select[name=uf]')
    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/distritos')
    .then( res => res.json() )
    .then( states => {
        ufSelect.innerHTML `<option value="1">Valor</option>`
    })
}

populateUFs()


document
    .querySelector('select[name=uf]')
    .addEventlistener('change',() => {
        console.log('mudei')
    })
    