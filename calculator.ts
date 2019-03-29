class Calculator {
  public container: HTMLDivElement
  private ouptput: HTMLDivElement
  public span: HTMLSpanElement
  public n1: number
  public n2: number
  public operator: string
  public result: string
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

  createContainer() {
    let container: HTMLDivElement = document.createElement('div')
    container.classList.add('calculator')
    document.body.appendChild(container)
    this.container = container
  }
  createOutput() {
    let output: HTMLDivElement = document.createElement('div')
    output.classList.add('output')
    this.ouptput = output
    let span = document.createElement('span')
    span.textContent = '0'
    output.appendChild(span)
    this.container.appendChild(output)
    this.span = span
  }

  bindEvents() {

    this.container.addEventListener('click', (e) => {
      if (e.target instanceof HTMLButtonElement) {
        let text = e.target.textContent
        if ('1234567890'.indexOf(text) >= 0) {
          if (this.operator) {
            if (this.n2) {
              this.n2 = parseInt(this.n2.toString() + text)
            } else {
              this.n2 = parseInt(text)
            }
            this.span.textContent = this.n2.toString()
          } else {
            if (this.n1) {
              this.n1 = parseInt(this.n1.toString() + text)
            } else {
              this.n1 = parseInt(text)
            }
            this.span.textContent = this.n1.toString()
          }

        } else if ('+-*/'.indexOf(text) >= 0) {
          this.operator = text
        } else if ('='.indexOf(text) >= 0) {
          if (this.operator === '+') {
            this.result = (this.n1 + this.n2).toString()
          } else if (this.operator === '-') {
            this.result = (this.n1 - this.n2).toString()
          } else if (this.operator === '*') {
            this.result = (this.n1 * this.n2).toString()
          } else if (this.operator === '/') {
            this.result = (this.n1 / this.n2).toString()
          }
          this.n1 = parseInt(this.result), this.n2 = undefined
          this.span.textContent = this.result
        }
        console.log(this.n1, this.operator, this.n2)
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