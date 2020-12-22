export const isValidationError = (error) => {
    return error && Array.isArray(error);
}

export const getMessageFromValidationError = (errorsArray): string => {
    const DEFAULT_VALIDATION_ERROR_MESSAGE = 'Unexpected error while validating request parameters.';

    if(errorsArray && Array.isArray(errorsArray)){
        const firstErrorObject: object = errorsArray[0];
        const errorConstraints: object = firstErrorObject["constraints"];
        if(errorConstraints){
            const firstConstraintErrorMessage: string = Object.values(errorConstraints)[0];
            return firstConstraintErrorMessage || DEFAULT_VALIDATION_ERROR_MESSAGE;
        }
    } else {
        return DEFAULT_VALIDATION_ERROR_MESSAGE;
    }
}