function buscaCep(){
	let cep = document.getElementById("cep").value
	let endereco = document.getElementById("endereco")
	let cepValido = cep.substr(0,5) + "-" + cep.substr(5) + ".json"
	let url = "https://cdn.apicep.com/file/apicep/" + cepValido
    fetch(url)
        .then(res => res.json())
        .then(data =>{
            endereco.innerHTML = 
            "Rua: " + data.address + "<br>" + 
            "Distrito" + data.district + "<br>" +
            "Cidade" + data.city + "<br>" + 
            "Estado" + data.state + "<br>Brasil"
        })
}

/*

cidade.value = data.city
estado.value = data.state
bairro.value = data.district
logradouro.value = data.address

*/
