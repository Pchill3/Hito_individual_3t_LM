//creacion de constantes para despues poder usarlas
const nombres = document.querySelector(".nombres");
const datos = document.querySelector(".datos");
const url = "https://www.el-tiempo.net/api/json/v1/provincias";

//
    fetch(url)
    .then(function(devolver) {
        return devolver.json();
    })
    
    .then(function(tabla) {
        let grp_nombres = "";
        let grp_datos = "";
        
		grp_nombres += `
		<tr>
		<th>Nombre</th>
		<th>Codigo</th>
		<th>Ciudad autonoma</th>
		<th>Capital</th>
		</tr>`;

        //bucle for para enseñar los datos
        
            for (let dato of tabla) {
                grp_datos += `
                    <tr>
                        <td>${dato.NOMBRE_PROVINCIA}</td>
                        <td>${dato.CODAUTON}</td>
                        <td>${dato.COMUNIDAD_CIUDAD_AUTONOMA}</td>
                        <td>${dato.CAPITAL_PROVINCIA}</td>
                    </tr>
                `;
            }
			nombres.innerHTML = grp_nombres;
			datos.innerHTML = grp_datos;
		})

