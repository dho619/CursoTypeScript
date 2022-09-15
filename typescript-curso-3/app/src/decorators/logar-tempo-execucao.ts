export function LogarTempoDeExecucao(emSegundos: boolean = false){
    return function(
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function(...args: any[]) {
            let divisor = emSegundos?1000:1;
            let unidade = emSegundos?'segundos':'milisegundos';
            const t1 = performance.now();
            const retorno = metodoOriginal.apply(this, args);
            const t2 = performance.now();
            console.log(`Tempo de execução do método ${propertyKey}: ${(t1-t2)/divisor} ${unidade}`);
            return retorno
        }

        return descriptor;
    }
}