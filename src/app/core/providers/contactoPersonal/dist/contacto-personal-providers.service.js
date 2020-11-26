"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ContactoPersonalProvidersService = void 0;
var core_1 = require("@angular/core");
var ContactoPersonalProvidersService = /** @class */ (function () {
    function ContactoPersonalProvidersService(httpService) {
        this.httpService = httpService;
    }
    ContactoPersonalProvidersService.prototype.getAllContactoPersonals = function () {
        return this.httpService.get('/contactoPersonal/all');
    };
    ;
    ContactoPersonalProvidersService.prototype.addContactoPersonal = function (ContactoPersonal) {
        return this.httpService.post('/contactoPersonal/add', ContactoPersonal);
    };
    ;
    ContactoPersonalProvidersService.prototype.getAContactoPersonal = function () {
        return this.httpService.get('/contactoPersonal/rut');
    };
    ; //Busca ContactoPersonal por rut
    ContactoPersonalProvidersService.prototype.deleteContactoPersonal = function (ContactoPersonal) {
        return this.httpService.post('/contactoPersonal/delete', ContactoPersonal);
    };
    ;
    ContactoPersonalProvidersService.prototype.patchContactoPersonal = function (ContactoPersonal, idContactoP) {
        return this.httpService.post('/contactoPersonal/' + idContactoP, ContactoPersonal);
    };
    ;
    ContactoPersonalProvidersService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ContactoPersonalProvidersService);
    return ContactoPersonalProvidersService;
}());
exports.ContactoPersonalProvidersService = ContactoPersonalProvidersService;
