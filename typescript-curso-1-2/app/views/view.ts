export abstract class View<T> {
    protected elemento: HTMLElement;
    private escapar: boolean;

    constructor(seletor: string, escapar: boolean = false) { 
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this.elemento = elemento as HTMLElement;
        } else {
            throw Error(`Seletor ${seletor} não existe no Dom. Entre em contato com o suporte!`);
        }
        this.escapar = escapar;
    }

    public update(model: T): void {
        let template = this.template(model);
        if (this.escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '')
        }
        this.elemento.innerHTML = template;
    }

    protected abstract template(model: T): string;
}