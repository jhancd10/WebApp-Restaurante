-- Creacion de las Tablas --

-- Tabla: Cliente --
CREATE TABLE Cliente (
    IdCliente char(15)  NOT NULL,
    Nombres char(20)  NOT NULL,
    Apellidos char(20)  NOT NULL,
    Direccion char(50)  NOT NULL,
    Telefono char(15)  NOT NULL,
    CONSTRAINT Cliente_pk PRIMARY KEY (IdCliente)
) ;

-- Tabla: Detalle --
CREATE TABLE Detalle (
    IdSupervisor integer  NOT NULL,
    Nombres char(20)  NOT NULL,
    Apellidos char(20)  NOT NULL,
    Edad integer  NOT NULL,
    CONSTRAINT Detalle_pk PRIMARY KEY (IdSupervisor)
) ;

-- Tabla: DetallexFactura --
CREATE TABLE DetallexFactura (
    IdDetallexFactura Integer  NOT NULL,
    NroFactura integer  NOT NULL,
    IdSupervisor integer  NOT NULL,
    Plato char(15)  NOT NULL,
    Valor integer  NOT NULL,
    CONSTRAINT DetallexFactura_pk PRIMARY KEY (IdDetallexFactura)
) ;

-- Tabla: Factura --
CREATE TABLE Factura (
    NroFactura integer  NOT NULL,
    Cliente_IdCliente char(15)  NOT NULL,
    NroMesa char(3)  NOT NULL,
    IdMesero integer  NOT NULL,
    Fecha timestamp  NOT NULL,
    CONSTRAINT Factura_pk PRIMARY KEY (NroFactura)
) ;

-- Tabla: Mesa --
CREATE TABLE Mesa (
    NroMesa char(3)  NOT NULL,
    Nombre char(10)  NOT NULL,
    Reservada smallint  NOT NULL,
    Puestos integer  NOT NULL,
    CONSTRAINT Mesa_pk PRIMARY KEY (NroMesa)
) ;

-- Tabla: Mesero --
CREATE TABLE Mesero (
    IdMesero integer  NOT NULL,
    Nombres char(20)  NOT NULL,
    Apellidos char(20)  NOT NULL,
    Edad integer  NOT NULL,
    Antiguedad integer  NOT NULL,
    CONSTRAINT Mesero_pk PRIMARY KEY (IdMesero)
) ;

-- Creacion de las Foreign Keys --

-- Referencia: DetallexFactura_Detalle (tabla: DetallexFactura) --
ALTER TABLE DetallexFactura ADD CONSTRAINT DetallexFactura_Detalle
    FOREIGN KEY (IdSupervisor)
    REFERENCES Detalle (IdSupervisor);

-- Referencia: DetallexFactura_Factura (tabla: DetallexFactura) --
ALTER TABLE DetallexFactura ADD CONSTRAINT DetallexFactura_Factura
    FOREIGN KEY (NroFactura)
    REFERENCES Factura (NroFactura);

-- Referencia: Factura_Cliente (tabla: Factura) --
ALTER TABLE Factura ADD CONSTRAINT Factura_Cliente
    FOREIGN KEY (Cliente_IdCliente)
    REFERENCES Cliente (IdCliente);

-- Referencia: Factura_Mesa (tabla: Factura) --
ALTER TABLE Factura ADD CONSTRAINT Factura_Mesa
    FOREIGN KEY (NroMesa)
    REFERENCES Mesa (NroMesa);

-- Referencia: Factura_Mesero (tabla: Factura) --
ALTER TABLE Factura ADD CONSTRAINT Factura_Mesero
    FOREIGN KEY (IdMesero)
    REFERENCES Mesero (IdMesero);