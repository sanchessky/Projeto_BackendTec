import Venda from "./Venda";

export default class Pagamento{
    id!:number;
    venda!:Venda;
    tipo_pagamento!:string;
    valor!:number;
    status_pagamento!: string;
    numero_parcela!:number;
}