// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.754.4/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var HandsOnSnippets;
        (function (HandsOnSnippets) {
            function AnimateMoverJS(par1) {


                let x1 = TcHmi.Controls.get("Pos_01_X").getValue();
                let y1 = TcHmi.Controls.get("Pos_01_Y").getValue();
                let x2 = TcHmi.Controls.get("Pos_02_X").getValue();
                let y2 = TcHmi.Controls.get("Pos_02_Y").getValue();
                let x3 = TcHmi.Controls.get("Pos_03_X").getValue();
                let y3 = TcHmi.Controls.get("Pos_03_Y").getValue();

                let x4 = TcHmi.Controls.get("Pos_04_X").getValue();
                let y4 = TcHmi.Controls.get("Pos_04_Y").getValue();

                var animation = new TcHmi.Animation('Mover_01', '')
                    .addKeyframe({ 'left': '0px', 'top':'0px' }, 0)
                    .addKeyframe({ 'left': x1 + 'px', 'top': y1 + 'px' }, .25)
                    .addKeyframe({ 'left': x2 + 'px', 'top': y2 + 'px' }, 0.5)
                    .addKeyframe({ 'left': x3 + 'px', 'top': y3 + 'px' }, 0.75)
                    .addKeyframe({ 'left': x4 + 'px', 'top': y4 + 'px' }, 1)
                    .duration(5000);
                animation.run();

            }
            HandsOnSnippets.AnimateMoverJS = AnimateMoverJS;
        })(HandsOnSnippets = Functions.HandsOnSnippets || (Functions.HandsOnSnippets = {}));
        Functions.registerFunctionEx('AnimateMoverJS', 'TcHmi.Functions.HandsOnSnippets', HandsOnSnippets.AnimateMoverJS);
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);