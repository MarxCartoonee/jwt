"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var pako = __importStar(require("pako"));
var index;
(function (index) {
    // const pako = require("pako");
    var token;
    var input = (document.getElementById("jwt"));
    var headerContainer = (document.getElementById("tokenHeader"));
    var payloadContainer = (document.getElementById("tokenPayload"));
    var tokenToObject = function (token) {
        var replace = token.replace(/-/g, "+").replace(/_/g, "/");
        var split = replace.split(".");
        var decoded = split.map(function (v) { return atob(v); });
        var inflated = pako.inflate(decoded[1], { to: "string" });
        var tokenData = JSON.parse(inflated);
        headerContainer.innerText = decoded[0];
        payloadContainer.innerText = tokenData;
    };
    input.addEventListener("input", function (e) {
        console.trace();
        var target = e.target;
        tokenToObject(target.value);
    });
})(index || (index = {}));
//# sourceMappingURL=index.js.map