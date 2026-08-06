export interface IValidator<T> {
    validate(payload: T): void;
}
