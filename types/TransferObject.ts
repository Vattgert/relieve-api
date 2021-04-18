interface SimpleTransferObject<T>{
    fromObjectToType(object: object): T;
}

export { SimpleTransferObject };