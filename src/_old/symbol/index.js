
/* global Two */

export class SymbolElement extends HTMLElement {
    /**
     * Called when the element is created or upgraded
     * @override
     */
    constructor(){
        super();
        this.innerHTML = SymbolElement.template;
    }
    
    /**
     * @override
     */
    connectedCallback(){
        this.renderSymbol();
    }
    
    renderSymbol(){
        let symbol = this.querySelector('.symbol');
        let two = new Two({
            width: 300,
            height: 150
        }).appendTo(symbol);
        this.makeSymbol(two);
    }
    
    makeSymbol(two){
        let x = 113;
        let y = 80;
        this.makeSquare(two, x, y);
        this.makeLine(two, { x: (x - 31), y: (y + 40)}, { x: (x - 63), y: (y - 40) });
        this.makeLine(two, { x: (x - 33), y: (y + 42) }, { x: (x + 4), y: (y - 20) });
        this.makeLine(two, { x: x, y: (y - 20) }, { x: (x + 37), y: (y + 40) });
        this.makeLine(two, { x: (x + 62), y: (y - 40) }, { x: (x + 35), y: (y + 40) });
        two.update();
    }
    
    makeSquare(two, x, y){
        let width = 150, height = 100;
        let square = two.makeRectangle(x, y, width, height);
        square.fill = "#00ffff";
        square.stroke = "#0080ff";
        square.linewidth = 10;
        return square;
    }
    
    makeLine(two, pathOne, pathTwo){
        let path = two.makeLine(pathOne.x, pathOne.y, pathTwo.x, pathTwo.y);
        path.stroke = "#fff";
        path.linewidth = 8;
        path.join = "round";
        return path;
    }
    
    /**
     * Static method to get template.
     */
    static get template(){
        return '<div class="symbol"></div>';
    }
    
    /**
     * Static getter for Custom Element Name.
     */
    static get is(){
        return 'app-symbol';
    }
}
window.customElements.define(SymbolElement.is, SymbolElement);