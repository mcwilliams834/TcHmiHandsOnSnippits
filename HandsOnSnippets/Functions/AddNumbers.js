// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.754.4/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var HandsOnSnippets;
        (function (HandsOnSnippets) {
            function AddNumbers(par1) {
                let num1 = TcHmi.Controls.get("TcHmiTextbox_2").getText();
                let num2 = TcHmi.Controls.get("TcHmiTextbox_3").getText();

                let answer = num1 + num2;

                TcHmi.Controls.get("TcHmiTextblock_58").setText(answer);
            }
            HandsOnSnippets.AddNumbers = AddNumbers;
        })(HandsOnSnippets = Functions.HandsOnSnippets || (Functions.HandsOnSnippets = {}));
        Functions.registerFunctionEx('AddNumbers', 'TcHmi.Functions.HandsOnSnippets', HandsOnSnippets.AddNumbers);
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);