Bitacora - Historial de Lola - Reto 1

- Nodos enlazados

Cada nodo contiene una atencion osea el (dato) y una referencia al siguiente nodo (siguiente).

cabeza
   |
   v
 ____________________________         ____________________________
| Nodo 1                     |       | Nodo 2                     |
| date:                      |       | date:                      |
|   Date: 02/02              |       |   Date: 15/03              |
|   Motive: Vacunation       |       |   Motive: Weiht control    |
|  Veterinarian: Dra. Rios   |       |   Veterinarian: Dr. Gomez  |
|   Cost: $85.000            |       |   Cost: $40.000            |
|   Next: Nodo 2             | ----> |   Next: Nodo 3             |
|____________________________|       |____________________________|
                                                    |
                                                    v
                                      ____________________________
                                     | Nodo 3                     |
                                     | date:                      |
                                     |   Date: 20/05              |
                                     |   Motive: Dental cleaning  |
                                     |   Veterinarian: Dra. Rios  |
                                     |   Cost: $150.000           |
                                     |   Next: null               | ----> null
                                     |____________________________|


El recorrido empieza en cabeza y va a los tres nodos en orden y al encontrar null termina el ciclo y ya al final el costo total es $275.000.

-Enlace perdido

Para romper la conexion del primer nodo con el segundo y etc se tiene que ejecutar:
cabeza.siguiente = null

cabeza
   |
   v
 ____________________________ 
| Nodo 1                     |
| date:                      |
|   Date: 02/02              |
|   Motive: Vacunacion       |
|   Veterinarian: Dra. Rios  |
|   Cost: $85.000            |
|   Next: null               | ----> null
|____________________________|

Y asi los otros nodos quedan fuera del recorrido desde cabeza

Y asi el recorrido solo entra al node de vacunation y al avanzar desde el primer nodo encuentra null y termina el while, asi que asi se ve que el enlace del nodo 1 al nodo 2 y del nodo 2 al 3 y ect se pierde, ya que el enlace del nodo 1 esta es con null y los otros nodes se pierden, si se calcula de nuevo el total desde cabeza el resultado va a ser solo $85.000 porque solo se visita el primer nodo.
