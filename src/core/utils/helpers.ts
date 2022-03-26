/**
 *
 * @param obj Input Object to map
 * @param callbackFn Call back function which returns Object value and key as (value, key) => {}
 */
export function mapObject<T>(
  obj: T,
  callbackFn: (el: T[keyof T], key?: keyof T) => any
) {
  const out: any[] = [];
  if (obj) {
    const props = Object.getOwnPropertyNames(obj) as any;
    props.forEach((key: keyof T) => {
      out.push(callbackFn(obj[key], key));
    });
  }
  return out;
}

/**
 *
 * @param obj Object to be checked if empty
 * @returns boolean | true if empty, false otherwise
 */
export function isEmptyObject(obj: Object) {
  for (var x in obj) {
    if (obj.hasOwnProperty(x)) return false;
  }
  return true;
}

export function truncateString(str: string, num: number) {
  // If the length of str is less than or equal to num
  // just return str--don't truncate it.
  if (str.length <= num) {
    return str;
  }
  // Return str truncated with '...' concatenated to the end of str.
  return str.slice(0, num) + "...";
}
