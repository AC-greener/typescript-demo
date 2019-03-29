var Calculator = /** @class */ (function () {
    function Calculator() {
        this.keys = [
            ["Clear", "+"],
            ["7", "8", "9", "*"],
            ["4", "5", "6", "-"],
            ["1", "2", "3", "/"],
            ["0", ".", "="]
        ];
        this.createContainer();
        this.createOutput();
        this.createButtons();
        this.bindEvents();
    }
    Calculator.prototype.createContainer = function () {
        var container = document.createElement('div');
        container.classList.add('calculator');
        document.body.appendChild(container);
        this.container = container;
    };
    Calculator.prototype.createOutput = function () {
        var output = document.createElement('div');
        output.classList.add('output');
        this.ouptput = output;
        var span = document.createElement('span');
        span.textContent = '0';
        output.appendChild(span);
        this.container.appendChild(output);
        this.span = span;
    };
    Calculator.prototype.updateNUmber = function (name, text) {
        if (this[name]) {
            this[name] = this[name] + text;
        }
        else {
            this[name] = text;
        }
        this.span.textContent = this[name].toString();
    };
    Calculator.prototype.updateResult = function () {
        var n1 = parseFloat(this.n1);
        var n2 = parseFloat(this.n2);
        if (this.operator === '+') {
            this.result = (n1 + n2);
        }
        else if (this.operator === '-') {
            this.result = (n1 - n2);
        }
        else if (this.operator === '*') {
            this.result = (n1 * n2);
        }
        else if (this.operator === '/') {
            this.result = (n1 / n2);
        }
        this.n1 = this.result.toString(), this.n2 = undefined, this.operator = null;
        this.span.textContent = this.result.toString();
    };
    Calculator.prototype.bindEvents = function () {
        var _this = this;
        this.container.addEventListener('click', function (e) {
            if (e.target instanceof HTMLButtonElement) {
                var text = e.target.textContent;
                if ('1234567890.'.indexOf(text) >= 0) {
                    if (_this.operator) {
                        _this.updateNUmber('n2', text);
                    }
                    else {
                        _this.updateNUmber('n1', text);
                    }
                }
                else if ('+-*/'.indexOf(text) >= 0) {
                    _this.operator = text;
                }
                else if ('='.indexOf(text) >= 0) {
                    _this.updateResult();
                }
                else if (text = 'clear') {
                    _this.n1 = null, _this.n2 = null, _this.operator = null, _this.result = null;
                    _this.span.textContent = '0';
                }
                // console.log(this.n1, this.operator, this.n2)
            }
        });
    };
    Calculator.prototype.createButton = function (text, container, className) {
        var button = document.createElement('button');
        button.textContent = text;
        button.classList.add(className || '');
        container.appendChild(button);
    };
    Calculator.prototype.createButtons = function () {
        var _this = this;
        this.keys.forEach(function (textList) {
            var div = document.createElement('div');
            div.classList.add('row');
            textList.forEach(function (text) {
                _this.createButton(text, div, "text-" + text);
            });
            _this.container.appendChild(div);
        });
    };
    return Calculator;
}());
new Calculator();
