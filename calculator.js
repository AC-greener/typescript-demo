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
    Calculator.prototype.bindEvents = function () {
        var _this = this;
        this.container.addEventListener('click', function (e) {
            if (e.target instanceof HTMLButtonElement) {
                var text = e.target.textContent;
                if ('1234567890'.indexOf(text) >= 0) {
                    if (_this.operator) {
                        if (_this.n2) {
                            _this.n2 = parseInt(_this.n2.toString() + text);
                        }
                        else {
                            _this.n2 = parseInt(text);
                        }
                        _this.span.textContent = _this.n2.toString();
                    }
                    else {
                        if (_this.n1) {
                            _this.n1 = parseInt(_this.n1.toString() + text);
                        }
                        else {
                            _this.n1 = parseInt(text);
                        }
                        _this.span.textContent = _this.n1.toString();
                    }
                }
                else if ('+-*/'.indexOf(text) >= 0) {
                    _this.operator = text;
                }
                else if ('='.indexOf(text) >= 0) {
                    if (_this.operator === '+') {
                        _this.result = (_this.n1 + _this.n2).toString();
                    }
                    else if (_this.operator === '-') {
                        _this.result = (_this.n1 - _this.n2).toString();
                    }
                    else if (_this.operator === '*') {
                        _this.result = (_this.n1 * _this.n2).toString();
                    }
                    else if (_this.operator === '/') {
                        _this.result = (_this.n1 / _this.n2).toString();
                    }
                    _this.n1 = parseInt(_this.result), _this.n2 = undefined;
                    _this.span.textContent = _this.result;
                }
                console.log(_this.n1, _this.operator, _this.n2);
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
