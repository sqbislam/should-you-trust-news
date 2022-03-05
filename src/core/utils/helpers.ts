
/**
 * 
 * @param obj Input Object to map
 * @param callbackFn Call back function which returns Object value and key as (value, key) => {}
 */
export function mapObject<T>(obj:T, callbackFn:(el:T[keyof T], key?:keyof T) => any) {
        const out: any[] = []
        if(obj){
            const props = Object.getOwnPropertyNames(obj) as any
            props.forEach((key: keyof T)=>{
                out.push(callbackFn(obj[key], key))
            })
        }
        return out
}