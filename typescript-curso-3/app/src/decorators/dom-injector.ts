export function DomInjector(seletor: string) {
    return function(target: any, propertyKey: string){
        let elemento: HTMLElement;
        console.log(`Modificando protype ${target.constructor.name} e adicionando getter para a propriedade ${propertyKey}`)
        const getter = function(){ 
            if (!elemento) {
                elemento = <HTMLElement> document.querySelector(seletor);
                console.log(`buscando elemento do dom com o seletor ${seletor} para injetar em ${propertyKey}`)
            }
            return elemento;
        }

        Object.defineProperty(
            target, 
            propertyKey, 
            { get: getter }
        );
    }
}