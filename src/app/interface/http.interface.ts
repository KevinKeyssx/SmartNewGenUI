export interface IRequest {
    url         : string;
    verb        : string;
    params?     : IMap[];
    headers?    : IMap[];
    body?       : IMap[];
}

export interface IMap {
    key         : string;
    value       : string;
}