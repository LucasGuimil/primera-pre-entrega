//Simulador de préstamos

function inicio () 
    {
    const nombre = prompt("Bienvenido a nuestro simulador de préstamos, ingrese su nombre para iniciar")
    if(nombre == "") {
        alert("Debe ingresar un nombre válido")
        console.log(nombre)
        console.error("No ingresó un nombre válido")
    }else{ 
        alert(`Bienvenido ${nombre}. Usted puede generar hasta 3 simulaciones de préstamo, en caso de que no quiera simular más de uno, puede tocar la tecla "Enter" para salir.`)
        const prestamos = []
        for (let cantidadSimulaciones = 1; cantidadSimulaciones<4; cantidadSimulaciones++) {
            let montoSolicitado = parseInt(prompt("Ingrese el monto que desea solicitar, el mismo debe ser mayor a $ARS 1000 y menor que $ARS 5000000"))
            console.log(montoSolicitado)
            if(montoSolicitado=!undefined) {
                if (montoSolicitado <= 1000 || montoSolicitado>= 5000000) {
                alert("El monto ingresado está fuera de los límites. Intente nuevamente.")
                }else{
                const cuotas = parseInt(prompt("Ingrese la cantidad de cuotas a pagar, el máximo a solicitar son 72 cuotas."))
                if(cuotas>72){
                    alert("La cantidad de cuotas ingresadas es mayor al límite. Intente nuevamente")
                }else{
                    prestamos.push(
                        {
                            monto: montoSolicitado,
                            cantidadCuotas: cuotas,
                            valorCuota: calculoCuotas()
                        })
                    console.log(prestamos)
                }
            }
            

        }
        }
        }
    }
function calculoCuotas(montoTotal,cantidadCuotas) {
    return ((montoTotal+(montoTotal*40/100))/cantidadCuotas)
}
inicio()

