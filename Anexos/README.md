**Capa_AccesoBD:**
Es el componente encargado de conectarse a la Base de Datos (Oracle o SQL Server) y ejecutar una consulta o realizar una transaccion. El resultado de una consulta realizada se retorna en un DataSet.

**Test_Desencrip_Encrip:**
Aplicacion de escritorio que permite crear una nueva cadena de conexion para una BD Oracle o SQL Server o realizar una prueba de conexion.
La cadena de conexion se guarda encriptada en el archivo 'ConnectionDB.xml'.

**ConnectionDB:**
Archivo .xml que almacena de manera encriptada las credenciales de conexion a una BD Oracle o SQL SERVER.
Este archivo .xml es necesario para que 'Capa_AccesoBD' pueda realizar una conexion con la BD y ejecutar consulas y transacciones.