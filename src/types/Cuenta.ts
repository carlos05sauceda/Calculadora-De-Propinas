export type cuenta = number | "";

export interface Cuentas {
    TotalCuenta: cuenta;
    Porcentaje: cuenta;
    Resultado: number;
}


export type CuentaCliente = keyof Omit<Cuentas, "Resultado" >;