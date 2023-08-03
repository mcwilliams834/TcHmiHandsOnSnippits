// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.754.4/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var HandsOnSnippets;
        (function (HandsOnSnippets) {
            function UsingDebugger(par1) {

                let a = "a";
                debugger
                let b = "b";
                let c = "c";

                console.log(a);
                console.log(b);
                par1 = 42;
            
                debugger;
                console.log(par1);
                console.log(c);

            }
            HandsOnSnippets.UsingDebugger = UsingDebugger;
        })(HandsOnSnippets = Functions.HandsOnSnippets || (Functions.HandsOnSnippets = {}));
        Functions.registerFunctionEx('UsingDebugger', 'TcHmi.Functions.HandsOnSnippets', HandsOnSnippets.UsingDebugger);
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);