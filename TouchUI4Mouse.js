/*:
 * @target MZ
 * @plugindesc マウス用タッチUIボタン
 * @author しろ
 *
 * @help
 * オプションでタッチUIをオフにしてる場合であっても、
 * 数字入力とショップ処理の時にタッチUIボタンを出現させるプラグインです。
 * マウス片手でプレイしたい時にお勧め。
 
 * 数字入力時は右クリックでキャンセルできるようにもなっています。
 * その際は対象にした変数の値が"0"になるように設定されてます。 
 * 
 */

(() => {
  "use strict";

//
//NumImput
//

  Window_NumberInput.prototype.windowHeight = function() {
     return this.fittingHeight(1) + this.buttonSpacing() + 48;
    
};

  Window_NumberInput.prototype.createButtons = function() {
    this._buttons = [];
        for (const type of ["down", "up", "ok",]) {
            const button = new Sprite_Button(type);
            this._buttons.push(button);
            this.addInnerChild(button);
        }
        this._buttons[0].setClickHandler(this.onButtonDown.bind(this));
        this._buttons[1].setClickHandler(this.onButtonUp.bind(this));
        this._buttons[2].setClickHandler(this.onButtonOk.bind(this));
       
    
};

//
//Cancel
//

Window_NumberInput.prototype.isCancelEnabled = function() {
return true;
};

Window_NumberInput.prototype.processCancel = function() {
  $gameVariables.setValue($gameMessage.numInputVariableId(), 0);
  Window_Selectable.prototype.processCancel.call(this);
  this._messageWindow.terminateMessage();
  this.updateInputData();
  this.deactivate();
  this.close();
};

//
//Shopping
//

Window_ShopNumber.prototype.createButtons = function() {
  this._buttons = [];
      for (const type of ["down2", "down", "up", "up2", "ok"]) {
          const button = new Sprite_Button(type);
          this._buttons.push(button);
          this.addInnerChild(button);
      }
      this._buttons[0].setClickHandler(this.onButtonDown2.bind(this));
      this._buttons[1].setClickHandler(this.onButtonDown.bind(this));
      this._buttons[2].setClickHandler(this.onButtonUp.bind(this));
      this._buttons[3].setClickHandler(this.onButtonUp2.bind(this));
      this._buttons[4].setClickHandler(this.onButtonOk.bind(this));
  };



})();