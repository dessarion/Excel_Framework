import {$} from '@core/dom'

export class Excel {
    constructor(selector, options){
        this.$el = $(selector)
        this.components = options.components || []
    }

    getRoot() {
        const $root = $.create('div', 'excel')

        this.components = this.components.map(Component => {
            // const $el = document.createElement('div')
            // $el.classList.add(Component.className)
            const $el = $.create('div', Component.className)
            const component = new Component($el)
            $el.html(component.toHTML())
            $root.append($el)
            return component // IMPORTANT TO RETURN WHEN MAPPING!!!
        })
        return $root
    }

    render() {
        // afterbegin, afterend, beforeend, beforebegin
        // this.$el.insertAdjacentHTML('afterbegin', `<h1>Test</h1>`)
        // const node = document.createElement('h1');
        // node.textContent = 'TEST'
        this.$el.append(this.getRoot())
        this.components.forEach(component => component.init());
    }
}
