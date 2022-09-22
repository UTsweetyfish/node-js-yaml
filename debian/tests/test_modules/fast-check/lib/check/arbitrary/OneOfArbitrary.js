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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
exports.__esModule = true;
var Arbitrary_1 = require("./definition/Arbitrary");
/** @hidden */
var OneOfArbitrary = /** @class */ (function (_super) {
    __extends(OneOfArbitrary, _super);
    function OneOfArbitrary(arbs) {
        var _this = _super.call(this) || this;
        _this.arbs = arbs;
        return _this;
    }
    OneOfArbitrary.prototype.generate = function (mrng) {
        var id = mrng.nextInt(0, this.arbs.length - 1);
        return this.arbs[id].generate(mrng);
    };
    OneOfArbitrary.prototype.withBias = function (freq) {
        return new OneOfArbitrary(this.arbs.map(function (a) { return a.withBias(freq); }));
    };
    return OneOfArbitrary;
}(Arbitrary_1["default"]));
/**
 * For one of the values generated by `arb0` or `...arbs` - `arb0` and `...arbs` are equiprobable
 *
 * @param arb0 One of the arbitrary that might be called to produce a value
 * @param arbs Other possible arbitraries
 */
function oneof(arb0) {
    var arbs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arbs[_i - 1] = arguments[_i];
    }
    return new OneOfArbitrary(__spread([arb0], arbs));
}
exports.oneof = oneof;
//# sourceMappingURL=OneOfArbitrary.js.map