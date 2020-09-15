class Bandpic extends HTMLElement {

    static get observedAttributes() {
        return ['image', '', '', ''];
    }

    constructor() {
        super();

        let template = document.getElementById('bandpic');
        let templateContent = template.content;

        const shadow = this.attachShadow({
                mode: 'open'
            })
            .appendChild(templateContent.cloneNode(true));
    }

    connectedCallback(){
        var customElement = this;
        var sr = this.shadowRoot;
        this.band = sr.getElementById('band');
        this.image = customElement.getAttribute('image');
        this.band.src = this.image;

        console.log('ADDING BANDPIC' );
    }
}

try {
    customElements.define('bandpic-element', Bandpic);
} catch (err) {
    const h3 = document.createElement('h3')
    h3.innerHTML = err
    document.body.appendChild(h3)
}