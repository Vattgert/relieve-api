import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';

export function IsIntegerId(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
        name: 'IsIntegerId',
        target: object.constructor,
        propertyName: propertyName,
        constraints: [],
        options: validationOptions,
        
        validator: {
            validate(value: any, args: ValidationArguments) {
                console.log(value);
                return value.match(/^\d+$/) !== null
            },
        },
    });
  };
}
