export const shuffle = <Type>(array: Array<Type>): Array<Type> => array.sort(() => Math.random() - 0.5);

export const sliceElements = <Type>(array: Array<Type>, quantity: number ): Array<Type> => array.slice(0, quantity);