// masks.d.ts
export function maskCpf(v: string): string;
export function maskCnpj(v: string): string;
export function maskPhone(value: string): string;
export function maskCep(value: string): string;
export function maskMoney(e: number): string;
export function removeDigitos(s: string): string;
export function removerCaracteresEspeciais(s: string): string;