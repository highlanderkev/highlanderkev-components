"use strict";

var __extends = (this && this.__extends) || (function () {

    var extendStatics = Object.setPrototypeOf ||

        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||

        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

    return function (d, b) {

        extendStatics(d, b);

        function __() { this.constructor = d; }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());

    };

})();

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {

    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }

    return cooked;

};

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {

    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;

    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);

    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;

    return c > 3 && r && Object.defineProperty(target, key, r), r;

};

exports.__esModule = true;

var polymer_1 = require("@polymer/polymer");

var decorators_1 = require("@polymer/decorators");

/**

 * Main App Element

 * @export

 * @class KPWAppElement

 * @extends {PolymerElement}

 */

var KPWAppElement = /** @class */ (function (_super) {

    __extends(KPWAppElement, _super);

    function KPWAppElement() {

        var _this = _super !== null && _super.apply(this, arguments) || this;

        /**

         * My Property

         * @type {string}

         * @memberof KPWAppElement

         */

        _this.myProperty = 'foot';

        return _this;

    }

    Object.defineProperty(KPWAppElement, "template", {

        /**

         * @readonly

         * @static

         * @memberof KPWAppElement

         */

        get: function () {

            return polymer_1.html(templateObject_1 || (templateObject_1 = __makeTemplateObject(["<p>{{myProperty}}</p>"], ["<p>{{myProperty}}</p>"])));

        },

        enumerable: true,

        configurable: true

    });

    __decorate([

        decorators_1.property({ type: String })

    ], KPWAppElement.prototype, "myProperty");

    KPWAppElement = __decorate([

        decorators_1.customElement('kpw-app')

    ], KPWAppElement);

    return KPWAppElement;

}(polymer_1.PolymerElement));

exports.KPWAppElement = KPWAppElement;

var templateObject_1;

//# sourceMappingURL=module.js.map

//# sourceMappingURL={"version":3,"file":"module.js","sourceRoot":"","sources":["module.tsx"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;AAAA,4CAAsD;AACtD,kDAA4D;AAE5D;;;;;GAKG;AAEH;IAAmC,iCAAc;IADjD;QAAA,qEAmBC;QAhBG;;;;WAIG;QAEI,gBAAU,GAAW,MAAM,CAAC;;IAUvC,CAAC;IAHG,sBAAW,yBAAQ;QALnB;;;;WAIG;aACH;YACI,OAAO,cAAI,0FAAA,uBAAuB,KAAC;QACvC,CAAC;;;OAAA;IATD;QADC,qBAAQ,CAAC,EAAC,IAAI,EAAE,MAAM,EAAC,CAAC;6CACU;IAR1B,aAAa;QADzB,0BAAa,CAAC,SAAS,CAAC;OACZ,aAAa,CAkBzB;IAAD,oBAAC;CAAA,AAlBD,CAAmC,wBAAc,GAkBhD;AAlBY,sCAAa"}