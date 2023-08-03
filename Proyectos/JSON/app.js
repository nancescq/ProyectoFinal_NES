const json = `[
    { "code": "CO", "name": "Colombia", "flag_url": "https://s3.amazonaws.com/makeitreal/co.gif" },
    { "code": "PE", "name": "Perú", "flag_url": "https://s3.amazonaws.com/makeitreal/pe.gif" },
    { "code": "EC", "name": "Ecuador", "flag_url": "https://s3.amazonaws.com/makeitreal/ec.gif" },
    { "code": "BO", "name": "Bolivia", "flag_url": "https://s3.amazonaws.com/makeitreal/bo.gif" }
  ]`;
  
  // Obtener Botón 
  const button = document.querySelector("button");
  //Escuchemos click
  button.addEventListener("click", function() {
    //Convertir a objeto la constante json
    const countries = JSON.parse(json);
    //Obtener la tabla
    const table = document.querySelector("table");
    //Ciclo para recorrer el objeto countries
    for (let i=0; i < countries.length; i++){
      //Guardar cada país en una constante
      const country = countries[i];
      //Obtener el tr de la tabla
      const tr = document.createElement("tr");
      //Añadir a los tr el elemento td y adicional el texto de este elemnto
      tr.innerHTML = `
        <td><img src="${country.flag_url}" alt="${country.name}"></td>
        <td>${country.code}</td>
        <td>${country.name}</td>
      `
      //Añadiendo elemento tr en la tabla
      table.appendChild(tr);
    }
    table.classList.remove("hide");
    button.classList.add("hide");
  });