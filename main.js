//Simulador de préstamos

function simular () 
    {
    const nombre = prompt("Bienvenido a nuestro simulador de préstamos, ingrese su nombre para iniciar") ?? ""
    if(nombre == "") {
        alert("Debe ingresar un nombre válido.")
        console.error("No ingresó un nombre válido.")
    }else{ 
        alert(`Bienvenido ${nombre}. Usted puede generar hasta 3 simulaciones de préstamo, nuestro interés actual es del 40%. En caso de querer simular menos y salir del programa, seleccione cancelar o ingrese cualquier carácter que no sea numérico.`)
        const prestamos = []
        let cantidadSimulaciones = 0
        do { 
            let montoSolicitado = parseInt(prompt(`Ingrese el monto que desea solicitar, el mismo debe ser mayor a $ARS 1000 y menor que $ARS 5000000.`))
            if(isNaN(montoSolicitado)){
                break
                }else if (montoSolicitado <= 1000 || montoSolicitado>= 5000000) {
                alert("El monto ingresado está fuera de los límites. Intente nuevamente.")
                }else{
                    const cuotas = parseInt(prompt("Ingrese la cantidad de cuotas a pagar, el máximo a solicitar son 72 cuotas."))
                    if(isNaN(cuotas)){
                        console.error("Ha ingresado un dato no válido. Intente nuevamente.")
                    } else if (cuotas>72 || cuotas<1){
                        alert("La cantidad de cuotas ingresadas está fuera de los límites. Intente nuevamente")
                    }else{
                        prestamos.push(
                            {
                                monto: montoSolicitado,
                                cantidadCuotas: cuotas,
                                valorCuota: calculoCuotas(montoSolicitado,cuotas)
                            })
                            cantidadSimulaciones++
                        if (cantidadSimulaciones==3){
                            continue
                        } else{
                        let proximoPrestamo = confirm("¿Desea simular otro préstamo?")
                        if(proximoPrestamo==false) {
                                break
                            }
                        }
                    }
                }
            }while(cantidadSimulaciones<3)
            prestamos.length!=0 ? mostrarResultados(prestamos) : console.error("No hay préstamos simulados.")
        }
    }

function calculoCuotas(montoTotal,cantidadCuotas) {
    return ((montoTotal+(montoTotal*40/100))/cantidadCuotas)
}

function mostrarResultados (prestamos) {
    console.log("Usted ha realizado las siguientes simulaciones.")
    for(let i = 0; i<prestamos.length; i++) {
        console.log(`Monto solicitado: ${prestamos[i].monto} - Cantidad de cuotas: ${prestamos[i].cantidadCuotas} - Valor de cuota: $ARS ${prestamos[i].valorCuota}`)
    }
}

simular()