(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<body>\r\n  <app-nav-menu></app-nav-menu>\r\n  <div class=\"container\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</body>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/estadisticas/estadisticas.component.html": 
        /*!************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/estadisticas/estadisticas.component.html ***!
          \************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<h1>Estadisticas</h1>\r\n\r\n<h3>Consultar ventas por cada Mesero</h3>\r\n\r\n<form class=\"form-horizontal\" novalidate\r\n      (ngSubmit)=\"consultarVentasMeseros()\" [formGroup]=\"formGroup\">\r\n  <fieldset>\r\n\r\n    <div class=\"form-group\"\r\n         [ngClass]=\"{'has-error': (formGroup.get('fechaVentasMeseros').touched || formGroup.get('fechaVentasMeseros').dirty) && !formGroup.get('fechaVentasMeseros').valid }\">\r\n      <label class=\"col-md-2 control-label\"\r\n             for=\"fechaVentasMeseros\">Fecha de Consulta</label>\r\n\r\n      <div class=\"col-md-8\">\r\n        <input class=\"form-control\"\r\n               id=\"fechaVentasMeseros\"\r\n               type=\"date\"\r\n               required\r\n               formControlName=\"fechaVentasMeseros\" />\r\n        <span class=\"help-block\" *ngIf=\"(formGroup.get('fechaVentasMeseros').touched || formGroup.get('fechaVentasMeseros').dirty) && formGroup.get('fechaVentasMeseros').errors\">\r\n          <span *ngIf=\"formGroup.get('fechaVentasMeseros').errors.required\">\r\n            El campo es requerido para la consulta.\r\n          </span>\r\n        </span>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <div class=\"col-md-4 col-md-offset-2\">\r\n        <span>\r\n          <button class=\"btn btn-primary\"\r\n                  type=\"submit\"\r\n                  [disabled]=\"!formGroup.valid\">\r\n            Consultar\r\n          </button>\r\n        </span>\r\n      </div>\r\n    </div>\r\n  </fieldset>\r\n</form>\r\n\r\n<p *ngIf=\"!ventas\"><em></em></p>\r\n\r\n<table class='table table-striped' aria-labelledby=\"tableLabel\" *ngIf=\"ventas\">\r\n  <thead>\r\n    <tr>\r\n      <th>Identificacion</th>\r\n      <th>Nombres</th>\r\n      <th>Apellidos</th>\r\n      <th>Total</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let venta of ventas\">\r\n      <td> {{ venta.idMesero }}</td>\r\n      <td> {{ venta.nombres }}</td>\r\n      <td> {{ venta.apellidos }}</td>\r\n      <td> {{ venta.total }}</td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n\r\n<h3>Consultar Consumo de Clientes</h3>\r\n\r\n<form class=\"form-horizontal\" novalidate\r\n      (ngSubmit)=\"consultarConsumoClientes()\" [formGroup]=\"formGroup1\">\r\n  <fieldset>\r\n\r\n    <div class=\"form-group\"\r\n         [ngClass]=\"{'has-error': (formGroup1.get('fecha').touched || formGroup1.get('fecha').dirty) && !formGroup1.get('fecha').valid }\">\r\n      <label class=\"col-md-2 control-label\"\r\n             for=\"fecha\">Fecha de Consulta</label>\r\n\r\n      <div class=\"col-md-8\">\r\n        <input class=\"form-control\"\r\n               id=\"fecha\"\r\n               type=\"date\"\r\n               required\r\n               formControlName=\"fecha\" />\r\n        <span class=\"help-block\" *ngIf=\"(formGroup1.get('fecha').touched || formGroup1.get('fecha').dirty) && formGroup1.get('fecha').errors\">\r\n          <span *ngIf=\"formGroup1.get('fecha').errors.required\">\r\n            El campo es requerido para la consulta.\r\n          </span>\r\n        </span>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\"\r\n         [ngClass]=\"{'has-error': (formGroup1.get('valor').touched || formGroup1.get('valor').dirty) && !formGroup1.get('valor').valid }\">\r\n      <label class=\"col-md-2 control-label\"\r\n             for=\"valor\">Valor de Consumo</label>\r\n\r\n      <div class=\"col-md-8\">\r\n        <input class=\"form-control\"\r\n               id=\"valor\"\r\n               type=\"text\"\r\n               required\r\n               formControlName=\"valor\" />\r\n        <span class=\"help-block\" *ngIf=\"(formGroup1.get('valor').touched || formGroup1.get('valor').dirty) && formGroup1.get('valor').errors\">\r\n          <span *ngIf=\"formGroup1.get('valor').errors.required\">\r\n            El campo es requerido para la consulta.\r\n          </span>\r\n        </span>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <div class=\"col-md-4 col-md-offset-2\">\r\n        <span>\r\n          <button class=\"btn btn-primary\"\r\n                  type=\"submit\"\r\n                  [disabled]=\"!formGroup1.valid\">\r\n            Consultar\r\n          </button>\r\n        </span>\r\n      </div>\r\n    </div>\r\n  </fieldset>\r\n</form>\r\n\r\n<p *ngIf=\"!consumos\"><em></em></p>\r\n\r\n<table class='table table-striped' aria-labelledby=\"tableLabel\" *ngIf=\"consumos\">\r\n  <thead>\r\n    <tr>\r\n      <th>Identificacion</th>\r\n      <th>Nombres</th>\r\n      <th>Apellidos</th>\r\n      <th>Total Consumo</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let consumo of consumos\">\r\n      <td> {{ consumo.idCliente }}</td>\r\n      <td> {{ consumo.nombres }}</td>\r\n      <td> {{ consumo.apellidos }}</td>\r\n      <td> {{ consumo.valorConsumo }}</td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n\r\n\r\n<h3>Consultar Producto mas Vendido</h3>\r\n\r\n<form class=\"form-horizontal\" novalidate\r\n      (ngSubmit)=\"consultarProductosTop()\" [formGroup]=\"formGroup2\">\r\n  <fieldset>\r\n\r\n    <div class=\"form-group\"\r\n         [ngClass]=\"{'has-error': (formGroup2.get('fechaInicio').touched || formGroup2.get('fechaInicio').dirty) && !formGroup2.get('fechaInicio').valid }\">\r\n      <label class=\"col-md-2 control-label\"\r\n             for=\"fechaInicio\">Fecha de Consulta</label>\r\n\r\n      <div class=\"col-md-8\">\r\n        <input class=\"form-control\"\r\n               id=\"fechaInicio\"\r\n               type=\"date\"\r\n               required\r\n               formControlName=\"fechaInicio\" />\r\n        <span class=\"help-block\" *ngIf=\"(formGroup2.get('fechaInicio').touched || formGroup2.get('fechaInicio').dirty) && formGroup2.get('fechaInicio').errors\">\r\n          <span *ngIf=\"formGroup2.get('fechaInicio').errors.required\">\r\n            El campo es requerido para la consulta.\r\n          </span>\r\n        </span>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <div class=\"col-md-4 col-md-offset-2\">\r\n        <span>\r\n          <button class=\"btn btn-primary\"\r\n                  type=\"submit\"\r\n                  [disabled]=\"!formGroup2.valid\">\r\n            Consultar\r\n          </button>\r\n        </span>\r\n      </div>\r\n    </div>\r\n  </fieldset>\r\n</form>\r\n\r\n<p *ngIf=\"!productoTop\"><em></em></p>\r\n\r\n<table class='table table-striped' aria-labelledby=\"tableLabel\" *ngIf=\"productoTop\">\r\n  <thead>\r\n    <tr>\r\n      <th>Plato</th>\r\n      <th>Cantidad</th>\r\n      <th>Valor Total</th>\r\n      <th>Periodo</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let producto of productoTop\">\r\n      <td> {{ producto.plato }}</td>\r\n      <td> {{ producto.cantidad }}</td>\r\n      <td> {{ producto.valorTotal }}</td>\r\n      <td> {{ producto.periodo }}</td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/factura/factura.component.html": 
        /*!**************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/factura/factura.component.html ***!
          \**************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<h1>Registro de Facturas</h1>\r\n\r\n<form class=\"form-horizontal\" novalidate\r\n      (ngSubmit)=\"save()\" [formGroup]=\"formGroup\">\r\n  <fieldset>\r\n\r\n    <div class=\"form-group\">\r\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"agregarDetalle()\">Agregar Detalle</button>\r\n    </div>\r\n\r\n    <div formArrayName=\"detalles\"\r\n         *ngFor=\"let detalle of formGroup.get('detalles').controls; let i = index;\">\r\n      <div [formGroupName]=\"i\">\r\n        <div class=\"form-group\">\r\n          <label class=\"col-md-2 control-label\" [attr.for]=\"'plato' + i\">\r\n            Plato\r\n          </label>\r\n          <div class=\"col-md-8\">\r\n            <input class=\"form-control\" [attr.id]=\"'plato' + i\" type=\"text\" formControlName=\"plato\" />\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label class=\"col-md-2 control-label\" [attr.for]=\"'valor' + i\">\r\n            Precio\r\n          </label>\r\n          <div class=\"col-md-8\">\r\n            <input class=\"form-control\" [attr.id]=\"'valor' + i\" type=\"text\" formControlName=\"valor\" />\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <div class=\"col-md-10\">\r\n            <button type=\"button\" class=\"btn btn-danger pull-right\" (click)=\"removerDetalle(i)\">Remover</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <h3>Supervisor</h3>\r\n\r\n    <div class=\"form-group\"\r\n         [ngClass]=\"{'has-error': (formGroup.get('idSupervisor').touched || formGroup.get('idSupervisor').dirty) && !formGroup.get('idSupervisor').valid }\">\r\n      <label class=\"col-md-2 control-label\"\r\n             for=\"idSupervisor\">Identificacion</label>\r\n\r\n      <div class=\"col-md-8\">\r\n        <input class=\"form-control\"\r\n               id=\"idSupervisor\"\r\n               type=\"text\"\r\n               required\r\n               formControlName=\"idSupervisor\" />\r\n        <span class=\"help-block\" *ngIf=\"(formGroup.get('idSupervisor').touched || formGroup.get('idSupervisor').dirty) && formGroup.get('idSupervisor').errors\">\r\n          <span *ngIf=\"formGroup.get('idSupervisor').errors.required\">\r\n            El campo Identificacion es requerido.\r\n          </span>\r\n        </span>\r\n      </div>\r\n    </div>\r\n\r\n    <h3>Registro Datos del Cliente</h3>\r\n\r\n    <div class=\"form-group\"\r\n         [ngClass]=\"{'has-error': (formGroup.get('idCliente').touched || formGroup.get('idCliente').dirty) && !formGroup.get('idCliente').valid }\">\r\n      <label class=\"col-md-2 control-label\"\r\n             for=\"idMesero\">ID del Cliente</label>\r\n\r\n      <div class=\"col-md-8\">\r\n        <input class=\"form-control\"\r\n               id=\"idCliente\"\r\n               type=\"text\"\r\n               required\r\n               formControlName=\"idCliente\" />\r\n        <span class=\"help-block\" *ngIf=\"(formGroup.get('idCliente').touched || formGroup.get('idCliente').dirty) && formGroup.get('idCliente').errors\">\r\n          <span *ngIf=\"formGroup.get('idCliente').errors.required\">\r\n            El campo Identificacion es requerido.\r\n          </span>\r\n        </span>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\"\r\n         [ngClass]=\"{'has-error': (formGroup.get('nombres').touched || formGroup.get('nombres').dirty) && !formGroup.get('nombres').valid }\">\r\n      <label class=\"col-md-2 control-label\"\r\n             for=\"nombres\">Nombres</label>\r\n\r\n      <div class=\"col-md-8\">\r\n        <input class=\"form-control\"\r\n               id=\"nombres\"\r\n               type=\"text\"\r\n               required\r\n               formControlName=\"nombres\" />\r\n        <span class=\"help-block\" *ngIf=\"(formGroup.get('nombres').touched || formGroup.get('nombres').dirty) && formGroup.get('nombres').errors\">\r\n          <span *ngIf=\"formGroup.get('nombres').errors.required\">\r\n            El campo Nombres es requerido.\r\n          </span>\r\n        </span>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\"\r\n         [ngClass]=\"{'has-error': (formGroup.get('apellidos').touched || formGroup.get('apellidos').dirty) && !formGroup.get('apellidos').valid }\">\r\n      <label class=\"col-md-2 control-label\"\r\n             for=\"apellidos\">Apellidos</label>\r\n\r\n      <div class=\"col-md-8\">\r\n        <input class=\"form-control\"\r\n               id=\"apellidos\"\r\n               type=\"text\"\r\n               required\r\n               formControlName=\"apellidos\" />\r\n        <span class=\"help-block\" *ngIf=\"(formGroup.get('apellidos').touched || formGroup.get('apellidos').dirty) && formGroup.get('apellidos').errors\">\r\n          <span *ngIf=\"formGroup.get('apellidos').errors.required\">\r\n            El campo Apellidos es requerido.\r\n          </span>\r\n        </span>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\"\r\n         [ngClass]=\"{'has-error': (formGroup.get('direccion').touched || formGroup.get('direccion').dirty) && !formGroup.get('direccion').valid }\">\r\n      <label class=\"col-md-2 control-label\"\r\n             for=\"direccion\">Direccion</label>\r\n\r\n      <div class=\"col-md-8\">\r\n        <input class=\"form-control\"\r\n               id=\"direccion\"\r\n               type=\"text\"\r\n               required\r\n               formControlName=\"direccion\" />\r\n        <span class=\"help-block\" *ngIf=\"(formGroup.get('direccion').touched || formGroup.get('direccion').dirty) && formGroup.get('direccion').errors\">\r\n          <span *ngIf=\"formGroup.get('direccion').errors.required\">\r\n            El campo Direccion es requerido.\r\n          </span>\r\n        </span>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\"\r\n         [ngClass]=\"{'has-error': (formGroup.get('telefono').touched || formGroup.get('telefono').dirty) && !formGroup.get('telefono').valid }\">\r\n      <label class=\"col-md-2 control-label\"\r\n             for=\"telefono\">Telefono</label>\r\n\r\n      <div class=\"col-md-8\">\r\n        <input class=\"form-control\"\r\n               id=\"telefono\"\r\n               type=\"text\"\r\n               required\r\n               formControlName=\"telefono\" />\r\n        <span class=\"help-block\" *ngIf=\"(formGroup.get('telefono').touched || formGroup.get('telefono').dirty) && formGroup.get('telefono').errors\">\r\n          <span *ngIf=\"formGroup.get('telefono').errors.required\">\r\n            El campo Telefono es requerido.\r\n          </span>\r\n        </span>\r\n      </div>\r\n    </div>\r\n\r\n    <h3>Registro Datos Adicionales</h3>\r\n\r\n    <div class=\"form-group\"\r\n         [ngClass]=\"{'has-error': (formGroup.get('nroMesa').touched || formGroup.get('nroMesa').dirty) && !formGroup.get('nroMesa').valid }\">\r\n      <label class=\"col-md-2 control-label\"\r\n             for=\"nroMesa\">Numero de la Mesa</label>\r\n\r\n      <div class=\"col-md-8\">\r\n        <input class=\"form-control\"\r\n               id=\"nroMesa\"\r\n               type=\"number\"\r\n               required\r\n               formControlName=\"nroMesa\" />\r\n        <span class=\"help-block\" *ngIf=\"(formGroup.get('nroMesa').touched || formGroup.get('nroMesa').dirty) && formGroup.get('nroMesa').errors\">\r\n          <span *ngIf=\"formGroup.get('nroMesa').errors.required\">\r\n            El campo es requerido.\r\n          </span>\r\n        </span>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\"\r\n         [ngClass]=\"{'has-error': (formGroup.get('idMesero').touched || formGroup.get('idMesero').dirty) && !formGroup.get('idMesero').valid }\">\r\n      <label class=\"col-md-2 control-label\"\r\n             for=\"idMesero\">ID del Mesero</label>\r\n\r\n      <div class=\"col-md-8\">\r\n        <input class=\"form-control\"\r\n               id=\"idMesero\"\r\n               type=\"number\"\r\n               required\r\n               formControlName=\"idMesero\" />\r\n        <span class=\"help-block\" *ngIf=\"(formGroup.get('idMesero').touched || formGroup.get('idMesero').dirty) && formGroup.get('idMesero').errors\">\r\n          <span *ngIf=\"formGroup.get('idMesero').errors.required\">\r\n            El campo es requerido.\r\n          </span>\r\n        </span>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <div class=\"col-md-4 col-md-offset-2\">\r\n        <span>\r\n          <button class=\"btn btn-primary\"\r\n                  type=\"submit\"\r\n                  [disabled]=\"!formGroup.valid\">\r\n            Registrar\r\n          </button>\r\n        </span>\r\n\r\n      </div>\r\n\r\n    </div>\r\n  </fieldset>\r\n</form>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html": 
        /*!********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
          \********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<h1>Comidas Típicas del Sur</h1>\r\n<p>Aplicación Web desarrollada en .NET y Angular 8, que permita registrar las facturas de las ventas realizadas en el restaurante Comidas Típicas del Sur.</p>\r\n<h3>Requerimientos:</h3>\r\n<ul>\r\n  <li>Creación de facturas que permita registrar el Cliente, el Mesero que atendió la mesa y los platos consumidos.</li>\r\n  <li>Funcionalidad que permita desplegar las siguientes consultas, permitiéndole al usuario seleccionar el periodo de tiempo requerido para la consulta (1 mes o un rango de varios meses):\r\n    <ul>\r\n      <li>Total (suma) vendido por cada mesero (incluyendo los que no hayan realizado ventas), así como sus datos de nombres y apellidos.</li>\r\n      <li>Consulta que despliegue los Clientes con consumos superiores o iguales al valor digitado por el usuario final (deb ser un valor de entrada a la consulta).</li>\r\n      <li>Producto mas vendido en el restaurante, indicando cantidad de platos vendidos así como el monto total facturado en un mes específico.</li>\r\n    </ul>\r\n  </li>\r\n</ul>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/meseros/meseros-delete/meseros-delete.component.html": 
        /*!************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/meseros/meseros-delete/meseros-delete.component.html ***!
          \************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<h4>¿Esta seguro que desea eliminiar este Mesero?</h4>\r\n<p>Esta accion no puede deshacerse.</p>\r\n\r\n<button class=\"btn btn-primary\" type=\"submit\" (click)=\"delete()\" style=\"margin: 5px\">Aceptar</button>\r\n<button class=\"btn btn-danger\" type=\"button\" [routerLink]='[\"/meseros\"]' style=\"margin: 5px\">Cancelar</button>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/meseros/meseros-form/meseros-form.component.html": 
        /*!********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/meseros/meseros-form/meseros-form.component.html ***!
          \********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<h1>{{modoEdicion ? 'Editar' : 'Agregar'}}  Mesero</h1>\r\n<form class=\"form-horizontal\" novalidate\r\n      (ngSubmit)=\"save()\" [formGroup]=\"formGroup\">\r\n  <fieldset>\r\n\r\n    <div class=\"form-group\"\r\n         [ngClass]=\"{'has-error': (formGroup.get('idMesero').touched || formGroup.get('idMesero').dirty) && !formGroup.get('idMesero').valid }\">\r\n      <label class=\"col-md-2 control-label\"\r\n             for=\"idMesero\">Identificacion</label>\r\n\r\n      <div class=\"col-md-8\">\r\n        <input class=\"form-control\"\r\n               id=\"idMesero\"\r\n               type=\"text\"\r\n               required\r\n               formControlName=\"idMesero\" />\r\n        <span class=\"help-block\" *ngIf=\"(formGroup.get('idMesero').touched || formGroup.get('idMesero').dirty) && formGroup.get('idMesero').errors\">\r\n          <span *ngIf=\"formGroup.get('idMesero').errors.required\">\r\n            El campo Identificacion es requerido.\r\n          </span>\r\n        </span>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\"\r\n         [ngClass]=\"{'has-error': (formGroup.get('nombres').touched || formGroup.get('nombres').dirty) && !formGroup.get('nombres').valid }\">\r\n      <label class=\"col-md-2 control-label\"\r\n             for=\"nombres\">Nombres</label>\r\n\r\n      <div class=\"col-md-8\">\r\n        <input class=\"form-control\"\r\n               id=\"nombres\"\r\n               type=\"text\"\r\n               required\r\n               formControlName=\"nombres\" />\r\n        <span class=\"help-block\" *ngIf=\"(formGroup.get('nombres').touched || formGroup.get('nombres').dirty) && formGroup.get('nombres').errors\">\r\n          <span *ngIf=\"formGroup.get('nombres').errors.required\">\r\n            El campo Nombres es requerido.\r\n          </span>\r\n        </span>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\"\r\n         [ngClass]=\"{'has-error': (formGroup.get('apellidos').touched || formGroup.get('apellidos').dirty) && !formGroup.get('apellidos').valid }\">\r\n      <label class=\"col-md-2 control-label\"\r\n             for=\"apellidos\">Apellidos</label>\r\n\r\n      <div class=\"col-md-8\">\r\n        <input class=\"form-control\"\r\n               id=\"apellidos\"\r\n               type=\"text\"\r\n               required\r\n               formControlName=\"apellidos\" />\r\n        <span class=\"help-block\" *ngIf=\"(formGroup.get('apellidos').touched || formGroup.get('apellidos').dirty) && formGroup.get('apellidos').errors\">\r\n          <span *ngIf=\"formGroup.get('apellidos').errors.required\">\r\n            El campo Apellidos es requerido.\r\n          </span>\r\n        </span>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\"\r\n         [ngClass]=\"{'has-error': (formGroup.get('edad').touched || formGroup.get('edad').dirty) && !formGroup.get('edad').valid }\">\r\n      <label class=\"col-md-2 control-label\"\r\n             for=\"edad\">Edad</label>\r\n\r\n      <div class=\"col-md-8\">\r\n        <input class=\"form-control\"\r\n               id=\"edad\"\r\n               type=\"number\"\r\n               required\r\n               formControlName=\"edad\" />\r\n        <span class=\"help-block\" *ngIf=\"(formGroup.get('edad').touched || formGroup.get('edad').dirty) && formGroup.get('edad').errors\">\r\n          <span *ngIf=\"formGroup.get('edad').errors.required\">\r\n            El campo Edad es requerido.\r\n          </span>\r\n        </span>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\"\r\n         [ngClass]=\"{'has-error': (formGroup.get('antiguedad').touched || formGroup.get('antiguedad').dirty) && !formGroup.get('antiguedad').valid }\">\r\n      <label class=\"col-md-2 control-label\"\r\n             for=\"antiguedad\">Antiguedad</label>\r\n\r\n      <div class=\"col-md-8\">\r\n        <input class=\"form-control\"\r\n               id=\"antiguedad\"\r\n               type=\"number\"\r\n               required\r\n               formControlName=\"antiguedad\" />\r\n        <span class=\"help-block\" *ngIf=\"(formGroup.get('antiguedad').touched || formGroup.get('antiguedad').dirty) && formGroup.get('antiguedad').errors\">\r\n          <span *ngIf=\"formGroup.get('antiguedad').errors.required\">\r\n            El campo Antiguedad es requerido.\r\n          </span>\r\n        </span>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <div class=\"col-md-4 col-md-offset-2\">\r\n        <span>\r\n          <button class=\"btn btn-primary\"\r\n                  type=\"submit\"\r\n                  [disabled]=\"!formGroup.valid\" style=\"margin: 5px\">\r\n            {{modoEdicion ? 'Actualizar' : 'Registrar'}}\r\n          </button>\r\n          <button class=\"btn btn-danger\"\r\n                  type=\"button\"\r\n                  [routerLink]='[\"/meseros\"]' style=\"margin: 5px\">\r\n            Cancelar\r\n          </button>\r\n        </span>\r\n\r\n      </div>\r\n\r\n    </div>\r\n  </fieldset>\r\n</form>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/meseros/meseros.component.html": 
        /*!**************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/meseros/meseros.component.html ***!
          \**************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<h1>Meseros</h1>\r\n\r\n<p><button [routerLink]='[\"/meseros-agregar\"]' class=\"btn btn-primary\">Agregar Mesero</button></p>\r\n\r\n<p *ngIf=\"!meseros\"><em>Cargando...</em></p>\r\n\r\n<table class='table table-striped' aria-labelledby=\"tableLabel\" *ngIf=\"meseros\">\r\n  <thead>\r\n    <tr>\r\n      <th>Identificacion</th>\r\n      <th>Nombres</th>\r\n      <th>Apellidos</th>\r\n      <th>Edad</th>\r\n      <th>Antiguedad</th>\r\n      <th>Acciones</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let mesero of meseros\">\r\n      <td> {{ mesero.idMesero }}</td>\r\n      <td> {{ mesero.nombres }}</td>\r\n      <td> {{ mesero.apellidos }}</td>\r\n      <td> {{ mesero.edad }}</td>\r\n      <td> {{ mesero.antiguedad }} Meses</td>\r\n      <td>\r\n        <button class=\"btn btn-primary\" [routerLink]='[\"/meseros-editar/\" + mesero.idMesero]' style=\"margin: 5px\">Editar</button>\r\n        <button class=\"btn btn-danger\" [routerLink]='[\"/meseros-eliminar/\" + mesero.idMesero]' style=\"margin: 5px\">Eliminar</button>\r\n      </td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html": 
        /*!****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html ***!
          \****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<header>\r\n  <nav\r\n    class=\"navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3\"\r\n  >\r\n    <div class=\"container\">\r\n      <a class=\"navbar-brand\" [routerLink]=\"['/']\">Comidas Típicas del Sur</a>\r\n      <button\r\n        class=\"navbar-toggler\"\r\n        type=\"button\"\r\n        data-toggle=\"collapse\"\r\n        data-target=\".navbar-collapse\"\r\n        aria-label=\"Toggle navigation\"\r\n        [attr.aria-expanded]=\"isExpanded\"\r\n        (click)=\"toggle()\"\r\n      >\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n      <div\r\n        class=\"navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse\"\r\n        [ngClass]=\"{ show: isExpanded }\"\r\n      >\r\n        <ul class=\"navbar-nav flex-grow\">\r\n          <li\r\n            class=\"nav-item\"\r\n            [routerLinkActive]=\"['link-active']\"\r\n            [routerLinkActiveOptions]=\"{ exact: true }\"\r\n          >\r\n            <a class=\"nav-link text-dark\" [routerLink]=\"['/']\">Inicio</a>\r\n          </li>\r\n\r\n          <li class=\"nav-item\" [routerLinkActive]=\"['link-active']\">\r\n            <a class=\"nav-link text-dark\" [routerLink]=\"['/meseros']\"\r\n              >Meseros</a\r\n            >\r\n          </li>\r\n\r\n          <li class=\"nav-item\" [routerLinkActive]=\"['link-active']\">\r\n            <a class=\"nav-link text-dark\" [routerLink]=\"['/registrar-factura']\"\r\n              >Registrar Factura</a\r\n            >\r\n          </li>\r\n\r\n          <li class=\"nav-item\" [routerLinkActive]=\"['link-active']\">\r\n            <a class=\"nav-link text-dark\" [routerLink]=\"['/estadisticas']\"\r\n              >Estadisticas</a\r\n            >\r\n          </li>\r\n\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n</header>\r\n");
            /***/ 
        }),
        /***/ "./src/$$_lazy_route_resource lazy recursive": 
        /*!**********************************************************!*\
          !*** ./src/$$_lazy_route_resource lazy namespace object ***!
          \**********************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
            var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
                return (mod && mod.__esModule) ? mod : { "default": mod };
            };
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'app';
                }
                return AppComponent;
            }());
            AppComponent = __decorate([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
                    selector: 'app-root',
                    template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nav-menu/nav-menu.component */ "./src/app/nav-menu/nav-menu.component.ts");
            /* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
            /* harmony import */ var _factura_factura_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./factura/factura.component */ "./src/app/factura/factura.component.ts");
            /* harmony import */ var _meseros_meseros_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./meseros/meseros.component */ "./src/app/meseros/meseros.component.ts");
            /* harmony import */ var _meseros_meseros_form_meseros_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./meseros/meseros-form/meseros-form.component */ "./src/app/meseros/meseros-form/meseros-form.component.ts");
            /* harmony import */ var _estadisticas_estadisticas_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./estadisticas/estadisticas.component */ "./src/app/estadisticas/estadisticas.component.ts");
            /* harmony import */ var _meseros_meseros_delete_meseros_delete_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./meseros/meseros-delete/meseros-delete.component */ "./src/app/meseros/meseros-delete/meseros-delete.component.ts");
            /* harmony import */ var _meseros_meseros_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./meseros/meseros.service */ "./src/app/meseros/meseros.service.ts");
            /* harmony import */ var _factura_facturas_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./factura/facturas.service */ "./src/app/factura/facturas.service.ts");
            /* harmony import */ var _estadisticas_estadisticas_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./estadisticas/estadisticas.service */ "./src/app/estadisticas/estadisticas.service.ts");
            var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
            var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
                return (mod && mod.__esModule) ? mod : { "default": mod };
            };
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = __decorate([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                        _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_6__["NavMenuComponent"],
                        _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                        _factura_factura_component__WEBPACK_IMPORTED_MODULE_8__["FacturaComponent"],
                        _meseros_meseros_component__WEBPACK_IMPORTED_MODULE_9__["MeserosComponent"],
                        _meseros_meseros_form_meseros_form_component__WEBPACK_IMPORTED_MODULE_10__["MeserosFormComponent"],
                        _estadisticas_estadisticas_component__WEBPACK_IMPORTED_MODULE_11__["EstadisticasComponent"],
                        _meseros_meseros_delete_meseros_delete_component__WEBPACK_IMPORTED_MODULE_12__["MeserosDeleteComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({ appId: 'ng-cli-universal' }),
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([
                            { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], pathMatch: 'full' },
                            { path: 'meseros', component: _meseros_meseros_component__WEBPACK_IMPORTED_MODULE_9__["MeserosComponent"] },
                            { path: 'registrar-factura', component: _factura_factura_component__WEBPACK_IMPORTED_MODULE_8__["FacturaComponent"] },
                            { path: 'estadisticas', component: _estadisticas_estadisticas_component__WEBPACK_IMPORTED_MODULE_11__["EstadisticasComponent"] },
                            { path: 'meseros-agregar', component: _meseros_meseros_form_meseros_form_component__WEBPACK_IMPORTED_MODULE_10__["MeserosFormComponent"] },
                            { path: 'meseros-editar/:idMesero', component: _meseros_meseros_form_meseros_form_component__WEBPACK_IMPORTED_MODULE_10__["MeserosFormComponent"] },
                            { path: 'meseros-eliminar/:idMesero', component: _meseros_meseros_delete_meseros_delete_component__WEBPACK_IMPORTED_MODULE_12__["MeserosDeleteComponent"] },
                        ])
                    ],
                    providers: [_meseros_meseros_service__WEBPACK_IMPORTED_MODULE_13__["MeserosService"], _factura_facturas_service__WEBPACK_IMPORTED_MODULE_14__["FacturasService"], _estadisticas_estadisticas_service__WEBPACK_IMPORTED_MODULE_15__["EstadisticasService"]],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/estadisticas/estadisticas.component.css": 
        /*!*********************************************************!*\
          !*** ./src/app/estadisticas/estadisticas.component.css ***!
          \*********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VzdGFkaXN0aWNhcy9lc3RhZGlzdGljYXMuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/estadisticas/estadisticas.component.ts": 
        /*!********************************************************!*\
          !*** ./src/app/estadisticas/estadisticas.component.ts ***!
          \********************************************************/
        /*! exports provided: EstadisticasComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstadisticasComponent", function () { return EstadisticasComponent; });
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _estadisticas_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./estadisticas.service */ "./src/app/estadisticas/estadisticas.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
            var __metadata = (undefined && undefined.__metadata) || function (k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(k, v);
            };
            var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
                return (mod && mod.__esModule) ? mod : { "default": mod };
            };
            var EstadisticasComponent = /** @class */ (function () {
                function EstadisticasComponent(fb, estadisticasService, router) {
                    this.fb = fb;
                    this.estadisticasService = estadisticasService;
                    this.router = router;
                }
                EstadisticasComponent.prototype.ngOnInit = function () {
                    this.formGroup = this.fb.group({
                        fechaVentasMeseros: ''
                    });
                    this.formGroup1 = this.fb.group({
                        fecha: '',
                        valor: ''
                    });
                    this.formGroup2 = this.fb.group({
                        fechaInicio: ''
                    });
                };
                EstadisticasComponent.prototype.consultarVentasMeseros = function () {
                    var _this = this;
                    var consulta = Object.assign({}, this.formGroup.value);
                    this.estadisticasService.getVentasMeseros(consulta.fechaVentasMeseros).
                        subscribe(function (ventas) { return _this.ventas = ventas; }, function (error) { return console.error(error); });
                };
                EstadisticasComponent.prototype.consultarConsumoClientes = function () {
                    var _this = this;
                    var consulta = Object.assign({}, this.formGroup1.value);
                    var valorConsulta = consulta.fecha.trim() + "," + consulta.valor.trim();
                    this.estadisticasService.getConsumosClientes(valorConsulta).
                        subscribe(function (consumos) { return _this.consumos = consumos; }, function (error) { return console.error(error); });
                };
                EstadisticasComponent.prototype.consultarProductosTop = function () {
                    var _this = this;
                    var consulta = Object.assign({}, this.formGroup2.value);
                    this.estadisticasService.getProductoTop(consulta.fechaInicio).
                        subscribe(function (productoTop) { return _this.productoTop = productoTop; }, function (error) { return console.error(error); });
                };
                return EstadisticasComponent;
            }());
            EstadisticasComponent.ctorParameters = function () { return [
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
                { type: _estadisticas_service__WEBPACK_IMPORTED_MODULE_2__["EstadisticasService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
            ]; };
            EstadisticasComponent = __decorate([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
                    selector: 'app-estadisticas',
                    template: __importDefault(__webpack_require__(/*! raw-loader!./estadisticas.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/estadisticas/estadisticas.component.html")).default,
                    styles: [__importDefault(__webpack_require__(/*! ./estadisticas.component.css */ "./src/app/estadisticas/estadisticas.component.css")).default]
                }),
                __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
                    _estadisticas_service__WEBPACK_IMPORTED_MODULE_2__["EstadisticasService"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
            ], EstadisticasComponent);
            /***/ 
        }),
        /***/ "./src/app/estadisticas/estadisticas.service.ts": 
        /*!******************************************************!*\
          !*** ./src/app/estadisticas/estadisticas.service.ts ***!
          \******************************************************/
        /*! exports provided: EstadisticasService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstadisticasService", function () { return EstadisticasService; });
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
            var __metadata = (undefined && undefined.__metadata) || function (k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(k, v);
            };
            var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            };
            var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
                return (mod && mod.__esModule) ? mod : { "default": mod };
            };
            var EstadisticasService = /** @class */ (function () {
                function EstadisticasService(http, baseUrl) {
                    this.http = http;
                    this.baseUrl = baseUrl;
                    this.apiUrl = this.baseUrl + 'api/estadisticas';
                }
                EstadisticasService.prototype.getVentasMeseros = function (fecha) {
                    console.log(fecha);
                    this.apiUrl = this.baseUrl + 'api/estadisticas/' + fecha;
                    console.log(this.apiUrl);
                    return this.http.get(this.apiUrl);
                };
                EstadisticasService.prototype.getConsumosClientes = function (valorConsulta) {
                    console.log(valorConsulta);
                    this.apiUrl = this.baseUrl + 'api/estadisticasconsumos/' + valorConsulta;
                    console.log(this.apiUrl);
                    return this.http.get(this.apiUrl);
                };
                EstadisticasService.prototype.getProductoTop = function (fecha) {
                    console.log(fecha);
                    this.apiUrl = this.baseUrl + 'api/estadisticasproducto/' + fecha;
                    console.log(this.apiUrl);
                    return this.http.get(this.apiUrl);
                };
                return EstadisticasService;
            }());
            EstadisticasService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
                { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: ['BASE_URL',] }] }
            ]; };
            EstadisticasService = __decorate([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
                __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BASE_URL')),
                __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String])
            ], EstadisticasService);
            /***/ 
        }),
        /***/ "./src/app/factura/factura.component.ts": 
        /*!**********************************************!*\
          !*** ./src/app/factura/factura.component.ts ***!
          \**********************************************/
        /*! exports provided: FacturaComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacturaComponent", function () { return FacturaComponent; });
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _facturas_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./facturas.service */ "./src/app/factura/facturas.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
            var __metadata = (undefined && undefined.__metadata) || function (k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(k, v);
            };
            var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
                return (mod && mod.__esModule) ? mod : { "default": mod };
            };
            var FacturaComponent = /** @class */ (function () {
                function FacturaComponent(fb, facturasService, router) {
                    this.fb = fb;
                    this.facturasService = facturasService;
                    this.router = router;
                }
                FacturaComponent.prototype.ngOnInit = function () {
                    this.formGroup = this.fb.group({
                        idSupervisor: '',
                        idCliente: '',
                        nombres: '',
                        apellidos: '',
                        direccion: '',
                        telefono: '',
                        nroMesa: 1,
                        idMesero: 1,
                        detalles: this.fb.array([])
                    });
                };
                FacturaComponent.prototype.agregarDetalle = function () {
                    var detalleArr = this.formGroup.get('detalles');
                    var detalleFG = this.construirDetalle();
                    detalleArr.push(detalleFG);
                };
                FacturaComponent.prototype.construirDetalle = function () {
                    return this.fb.group({
                        plato: '',
                        valor: '0'
                    });
                };
                FacturaComponent.prototype.removerDetalle = function (index) {
                    var detalles = this.formGroup.get('detalles');
                    detalles.removeAt(index);
                };
                FacturaComponent.prototype.save = function () {
                    var _this = this;
                    var factura = Object.assign({}, this.formGroup.value);
                    this.facturasService.createFactura(factura)
                        .subscribe(function (numeroFactura) { return _this.numeroFactura = numeroFactura; }, function (error) { return console.error(error); });
                    this.router.navigate(["/registrar-factura"]);
                };
                return FacturaComponent;
            }());
            FacturaComponent.ctorParameters = function () { return [
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
                { type: _facturas_service__WEBPACK_IMPORTED_MODULE_2__["FacturasService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
            ]; };
            FacturaComponent = __decorate([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
                    selector: 'factura-app',
                    template: __importDefault(__webpack_require__(/*! raw-loader!./factura.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/factura/factura.component.html")).default
                }),
                __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
                    _facturas_service__WEBPACK_IMPORTED_MODULE_2__["FacturasService"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
            ], FacturaComponent);
            /***/ 
        }),
        /***/ "./src/app/factura/facturas.service.ts": 
        /*!*********************************************!*\
          !*** ./src/app/factura/facturas.service.ts ***!
          \*********************************************/
        /*! exports provided: FacturasService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacturasService", function () { return FacturasService; });
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
            var __metadata = (undefined && undefined.__metadata) || function (k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(k, v);
            };
            var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            };
            var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
                return (mod && mod.__esModule) ? mod : { "default": mod };
            };
            var FacturasService = /** @class */ (function () {
                function FacturasService(http, baseUrl) {
                    this.http = http;
                    this.baseUrl = baseUrl;
                    this.apiUrl = this.baseUrl + 'api/facturas';
                }
                FacturasService.prototype.createFactura = function (factura) {
                    console.table(factura);
                    console.table(factura.detalles);
                    return this.http.post(this.apiUrl, factura);
                };
                return FacturasService;
            }());
            FacturasService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
                { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: ['BASE_URL',] }] }
            ]; };
            FacturasService = __decorate([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
                __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BASE_URL')),
                __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String])
            ], FacturasService);
            /***/ 
        }),
        /***/ "./src/app/home/home.component.ts": 
        /*!****************************************!*\
          !*** ./src/app/home/home.component.ts ***!
          \****************************************/
        /*! exports provided: HomeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function () { return HomeComponent; });
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
            var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
                return (mod && mod.__esModule) ? mod : { "default": mod };
            };
            var HomeComponent = /** @class */ (function () {
                function HomeComponent() {
                }
                return HomeComponent;
            }());
            HomeComponent = __decorate([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
                    selector: 'app-home',
                    template: __importDefault(__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
                })
            ], HomeComponent);
            /***/ 
        }),
        /***/ "./src/app/meseros/meseros-delete/meseros-delete.component.css": 
        /*!*********************************************************************!*\
          !*** ./src/app/meseros/meseros-delete/meseros-delete.component.css ***!
          \*********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lc2Vyb3MvbWVzZXJvcy1kZWxldGUvbWVzZXJvcy1kZWxldGUuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/meseros/meseros-delete/meseros-delete.component.ts": 
        /*!********************************************************************!*\
          !*** ./src/app/meseros/meseros-delete/meseros-delete.component.ts ***!
          \********************************************************************/
        /*! exports provided: MeserosDeleteComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeserosDeleteComponent", function () { return MeserosDeleteComponent; });
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _meseros_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../meseros.service */ "./src/app/meseros/meseros.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
            var __metadata = (undefined && undefined.__metadata) || function (k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(k, v);
            };
            var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
                return (mod && mod.__esModule) ? mod : { "default": mod };
            };
            var MeserosDeleteComponent = /** @class */ (function () {
                function MeserosDeleteComponent(meserosService, router, activatedRoute) {
                    this.meserosService = meserosService;
                    this.router = router;
                    this.activatedRoute = activatedRoute;
                }
                MeserosDeleteComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.activatedRoute.params.subscribe(function (params) {
                        _this.meseroId = params["idMesero"];
                        console.log(_this.meseroId);
                    });
                };
                MeserosDeleteComponent.prototype.delete = function () {
                    var _this = this;
                    this.meserosService.deleteMesero(this.meseroId)
                        .subscribe(function (resultado) { return _this.resultado = resultado; }, function (error) { return console.error(error); });
                    this.router.navigate(["/meseros"]);
                };
                return MeserosDeleteComponent;
            }());
            MeserosDeleteComponent.ctorParameters = function () { return [
                { type: _meseros_service__WEBPACK_IMPORTED_MODULE_1__["MeserosService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
            ]; };
            MeserosDeleteComponent = __decorate([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
                    selector: 'app-meseros-delete',
                    template: __importDefault(__webpack_require__(/*! raw-loader!./meseros-delete.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/meseros/meseros-delete/meseros-delete.component.html")).default,
                    styles: [__importDefault(__webpack_require__(/*! ./meseros-delete.component.css */ "./src/app/meseros/meseros-delete/meseros-delete.component.css")).default]
                }),
                __metadata("design:paramtypes", [_meseros_service__WEBPACK_IMPORTED_MODULE_1__["MeserosService"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
            ], MeserosDeleteComponent);
            /***/ 
        }),
        /***/ "./src/app/meseros/meseros-form/meseros-form.component.css": 
        /*!*****************************************************************!*\
          !*** ./src/app/meseros/meseros-form/meseros-form.component.css ***!
          \*****************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lc2Vyb3MvbWVzZXJvcy1mb3JtL21lc2Vyb3MtZm9ybS5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/meseros/meseros-form/meseros-form.component.ts": 
        /*!****************************************************************!*\
          !*** ./src/app/meseros/meseros-form/meseros-form.component.ts ***!
          \****************************************************************/
        /*! exports provided: MeserosFormComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeserosFormComponent", function () { return MeserosFormComponent; });
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _meseros_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../meseros.service */ "./src/app/meseros/meseros.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
            var __metadata = (undefined && undefined.__metadata) || function (k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(k, v);
            };
            var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
                return (mod && mod.__esModule) ? mod : { "default": mod };
            };
            var MeserosFormComponent = /** @class */ (function () {
                function MeserosFormComponent(fb, meserosService, router, activatedRoute) {
                    this.fb = fb;
                    this.meserosService = meserosService;
                    this.router = router;
                    this.activatedRoute = activatedRoute;
                    this.modoEdicion = false;
                }
                MeserosFormComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.formGroup = this.fb.group({
                        idMesero: '',
                        nombres: '',
                        apellidos: '',
                        edad: 1,
                        antiguedad: 0
                    });
                    this.activatedRoute.params.subscribe(function (params) {
                        if (params["idMesero"] == undefined) {
                            return;
                        }
                        _this.modoEdicion = true;
                        console.log(_this.modoEdicion);
                        _this.meseroId = params["idMesero"];
                        _this.formGroup.patchValue({
                            idMesero: _this.meseroId,
                            nombres: '',
                            apellidos: '',
                            edad: 1,
                            antiguedad: 0
                        });
                    });
                };
                MeserosFormComponent.prototype.save = function () {
                    var _this = this;
                    var mesero = Object.assign({}, this.formGroup.value);
                    console.table(mesero);
                    if (this.modoEdicion) {
                        this.meserosService.updateMesero(mesero)
                            .subscribe((function (mesero) { return _this.onSaveSuccess(); }), function (error) { return console.error(error); });
                    }
                    else {
                        this.meserosService.createMesero(mesero)
                            .subscribe((function (mesero) { return _this.onSaveSuccess(); }), function (error) { return console.error(error); });
                    }
                };
                MeserosFormComponent.prototype.onSaveSuccess = function () {
                    this.router.navigate(["/meseros"]);
                };
                return MeserosFormComponent;
            }());
            MeserosFormComponent.ctorParameters = function () { return [
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
                { type: _meseros_service__WEBPACK_IMPORTED_MODULE_2__["MeserosService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
            ]; };
            MeserosFormComponent = __decorate([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
                    selector: 'app-meseros-form',
                    template: __importDefault(__webpack_require__(/*! raw-loader!./meseros-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/meseros/meseros-form/meseros-form.component.html")).default,
                    styles: [__importDefault(__webpack_require__(/*! ./meseros-form.component.css */ "./src/app/meseros/meseros-form/meseros-form.component.css")).default]
                }),
                __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
                    _meseros_service__WEBPACK_IMPORTED_MODULE_2__["MeserosService"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
            ], MeserosFormComponent);
            /***/ 
        }),
        /***/ "./src/app/meseros/meseros.component.css": 
        /*!***********************************************!*\
          !*** ./src/app/meseros/meseros.component.css ***!
          \***********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lc2Vyb3MvbWVzZXJvcy5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/meseros/meseros.component.ts": 
        /*!**********************************************!*\
          !*** ./src/app/meseros/meseros.component.ts ***!
          \**********************************************/
        /*! exports provided: MeserosComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeserosComponent", function () { return MeserosComponent; });
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _meseros_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./meseros.service */ "./src/app/meseros/meseros.service.ts");
            var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
            var __metadata = (undefined && undefined.__metadata) || function (k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(k, v);
            };
            var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
                return (mod && mod.__esModule) ? mod : { "default": mod };
            };
            var MeserosComponent = /** @class */ (function () {
                function MeserosComponent(meserosService) {
                    this.meserosService = meserosService;
                }
                MeserosComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.meserosService.getMeseros()
                        .subscribe(function (meseros) { return _this.meseros = meseros; }, function (error) { return console.error(error); });
                };
                return MeserosComponent;
            }());
            MeserosComponent.ctorParameters = function () { return [
                { type: _meseros_service__WEBPACK_IMPORTED_MODULE_1__["MeserosService"] }
            ]; };
            MeserosComponent = __decorate([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
                    selector: 'app-meseros',
                    template: __importDefault(__webpack_require__(/*! raw-loader!./meseros.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/meseros/meseros.component.html")).default,
                    styles: [__importDefault(__webpack_require__(/*! ./meseros.component.css */ "./src/app/meseros/meseros.component.css")).default]
                }),
                __metadata("design:paramtypes", [_meseros_service__WEBPACK_IMPORTED_MODULE_1__["MeserosService"]])
            ], MeserosComponent);
            /***/ 
        }),
        /***/ "./src/app/meseros/meseros.service.ts": 
        /*!********************************************!*\
          !*** ./src/app/meseros/meseros.service.ts ***!
          \********************************************/
        /*! exports provided: MeserosService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeserosService", function () { return MeserosService; });
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
            var __metadata = (undefined && undefined.__metadata) || function (k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(k, v);
            };
            var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            };
            var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
                return (mod && mod.__esModule) ? mod : { "default": mod };
            };
            var MeserosService = /** @class */ (function () {
                function MeserosService(http, baseUrl) {
                    this.http = http;
                    this.baseUrl = baseUrl;
                    this.apiUrl = this.baseUrl + 'api/meseros';
                }
                MeserosService.prototype.getMeseros = function () {
                    return this.http.get(this.apiUrl);
                };
                MeserosService.prototype.createMesero = function (mesero) {
                    console.table(mesero);
                    return this.http.post(this.apiUrl, mesero);
                };
                MeserosService.prototype.updateMesero = function (mesero) {
                    console.table(mesero);
                    return this.http.put(this.apiUrl, mesero);
                };
                MeserosService.prototype.deleteMesero = function (mesero) {
                    console.table(mesero);
                    return this.http.get(this.apiUrl + "/" + mesero.toString());
                };
                return MeserosService;
            }());
            MeserosService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
                { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: ['BASE_URL',] }] }
            ]; };
            MeserosService = __decorate([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
                __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BASE_URL')),
                __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String])
            ], MeserosService);
            /***/ 
        }),
        /***/ "./src/app/nav-menu/nav-menu.component.css": 
        /*!*************************************************!*\
          !*** ./src/app/nav-menu/nav-menu.component.css ***!
          \*************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("a.navbar-brand {\r\n  white-space: normal;\r\n  text-align: center;\r\n  word-break: break-all;\r\n}\r\n\r\nhtml {\r\n  font-size: 14px;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  html {\r\n    font-size: 16px;\r\n  }\r\n}\r\n\r\n.box-shadow {\r\n  box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2LW1lbnUvbmF2LW1lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFDQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtBQUNGOztBQUVBO0VBQ0UsOENBQThDO0FBQ2hEIiwiZmlsZSI6InNyYy9hcHAvbmF2LW1lbnUvbmF2LW1lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImEubmF2YmFyLWJyYW5kIHtcclxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbn1cclxuXHJcbmh0bWwge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICBodG1sIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcbn1cclxuXHJcbi5ib3gtc2hhZG93IHtcclxuICBib3gtc2hhZG93OiAwIC4yNXJlbSAuNzVyZW0gcmdiYSgwLCAwLCAwLCAuMDUpO1xyXG59XHJcbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/nav-menu/nav-menu.component.ts": 
        /*!************************************************!*\
          !*** ./src/app/nav-menu/nav-menu.component.ts ***!
          \************************************************/
        /*! exports provided: NavMenuComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavMenuComponent", function () { return NavMenuComponent; });
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
            var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
                return (mod && mod.__esModule) ? mod : { "default": mod };
            };
            var NavMenuComponent = /** @class */ (function () {
                function NavMenuComponent() {
                    this.isExpanded = false;
                }
                NavMenuComponent.prototype.collapse = function () {
                    this.isExpanded = false;
                };
                NavMenuComponent.prototype.toggle = function () {
                    this.isExpanded = !this.isExpanded;
                };
                return NavMenuComponent;
            }());
            NavMenuComponent = __decorate([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
                    selector: 'app-nav-menu',
                    template: __importDefault(__webpack_require__(/*! raw-loader!./nav-menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html")).default,
                    styles: [__importDefault(__webpack_require__(/*! ./nav-menu.component.css */ "./src/app/nav-menu/nav-menu.component.css")).default]
                })
            ], NavMenuComponent);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
                return (mod && mod.__esModule) ? mod : { "default": mod };
            };
            var environment = {
                production: false
            };
            /*
             * In development mode, to ignore zone related error stack frames such as
             * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
             * import the following file, but please comment it out in production mode
             * because it will have performance impact when throw error
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! exports provided: getBaseUrl */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBaseUrl", function () { return getBaseUrl; });
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
                return (mod && mod.__esModule) ? mod : { "default": mod };
            };
            function getBaseUrl() {
                return document.getElementsByTagName('base')[0].href;
            }
            var providers = [
                { provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] }
            ];
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])(providers).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
                .catch(function (err) { return console.log(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! C:\Users\Karoline\WebApp-Restaurante\WebApp_Restautant\ClientApp\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map