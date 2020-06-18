class Datablock extends HTMLElement {

    static get observedAttributes() {
        return ['trait', 'value', '', ''];
    }

    constructor() {
        super();

        let template = document.getElementById('datablock');
        let templateContent = template.content;

        const shadow = this.attachShadow({
                mode: 'open'
            })
            .appendChild(templateContent.cloneNode(true));
    }

    connectedCallback(){
        var customElement = this;
        var sr = this.shadowRoot;
        this.traitlabel = sr.getElementById('traitlabel');
        this.trait = customElement.getAttribute('trait');
        this.traitlabel.innerHTML = this.trait;

        this.percentage = sr.getElementById('percentage');
        this.value = customElement.getAttribute('value');
        this.percentage.innerHTML = this.value + '%';

        this.score = sr.getElementById('score');
        this.score.style.width = this.value + '%';

        this.gap = sr.getElementById('gap');
        this.gap.style.width = (100-this.value) + '%';



        console.log('ADDING DATABLOCK : ' );
    }
}

try {
    customElements.define('datablock-element', Datablock);
} catch (err) {
    const h3 = document.createElement('h3')
    h3.innerHTML = err
    document.body.appendChild(h3)
}