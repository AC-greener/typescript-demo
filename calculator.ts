class Calculator {
  public container: HTMLDivElement
  private ouptput: HTMLDivElement
  public span: HTMLSpanElement
  public n1: string
  public n2: string
  public operator: string
  public result: number
  public keys: Array<Array<string>> = [
    ["Clear", "+"],
    ["7", "8", "9", "*"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "/"],
    ["0", ".", "="]
  ]
  constructor() {
    this.createContainer()
    this.createOutput()
    this.createButtons()
    this.bindEvents()
  }

  createContainer(): void {
    let container: HTMLDivElement = document.createElement('div')
    container.classList.add('calculator')
    document.body.appendChild(container)
    this.container = container
  }
  createOutput(): void {
    let output: HTMLDivElement = document.createElement('div')
    output.classList.add('output')
    this.ouptput = output
    let span = document.createElement('span')
    span.textContent = '0'
    output.appendChild(span)
    this.container.appendChild(output)
    this.span = span
  }
  updateNUmber(name: string, text: string): void {
    if (this[name]) {
      this[name] = this[name] + text
    } else {
      this[name] = text
    }
    this.span.textContent = this[name].toString()
  }
  updateResult(): void {
    let n1:number = parseFloat(this.n1)
    let n2:number = parseFloat(this.n2)
    if (this.operator === '+') {
      this.result = (n1 + n2)
    } else if (this.operator === '-') {
      this.result = (n1 - n2)
    } else if (this.operator === '*') {
      this.result = (n1 * n2)
    } else if (this.operator === '/') {
      this.result = (n1 / n2)
    }
    this.n1 = this.result.toString(), this.n2 = undefined, this.operator = null
    this.span.textContent = this.result.toString()
  }
  bindEvents() {
    this.container.addEventListener('click', (e) => {
      if (e.target instanceof HTMLButtonElement) {
        let text = e.target.textContent
        if ('1234567890.'.indexOf(text) >= 0) {
          if (this.operator) {
            this.updateNUmber('n2', text)
          } else {
            this.updateNUmber('n1', text)
          }
        } else if ('+-*/'.indexOf(text) >= 0) {
          this.operator = text
        } else if ('='.indexOf(text) >= 0) {
          this.updateResult()
        } else if(text = 'clear') {
          this.n1 = null, this.n2 =null, this.operator = null, this.result = null
          this.span.textContent = '0'
        }
        // console.log(this.n1, this.operator, this.n2)
      }
    })
  }
  createButton(text: string, container: HTMLElement, className: string) {
    let button: HTMLButtonElement = document.createElement('button')
    button.textContent = text
    button.classList.add(className || '')
    container.appendChild(button)
  }

  createButtons() {
    this.keys.forEach((textList: Array<string>) => {
      let div: HTMLDivElement = document.createElement('div')
      div.classList.add('row')
      textList.forEach((text: string) => {
        this.createButton(text, div, `text-${text}`)
      })
      this.container.appendChild(div)
    })
  }
}
new Calculator()