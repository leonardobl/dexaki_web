import { MaskType } from './maskType';

function maskCpf(v: string): string {
  if (!v) return '';
  v = v.replace(/\D/g, ""); //Remove tudo o que não é dígito
  v = v.replace(/(\d{3})(\d)/, "$1.$2"); //Coloca um ponto entre o terceiro e o quarto dígitos
  v = v.replace(/(\d{3})(\d)/, "$1.$2"); //Coloca um ponto entre o terceiro e o quarto dígitos de novo
  v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2"); //Coloca um hífen entre o terceiro e o quarto dígitos
  return v;
}

function maskCnpj(v: string): string {
  if (!v) return '';
  v = v.replace(/\D/g, ""); //Remove tudo o que não é dígito
  v = v.replace(/^(\d{2})(\d)/, "$1.$2"); //Coloca ponto entre o segundo e o terceiro dígitos
  v = v.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3"); //Coloca ponto entre o quinto e o sexto dígitos
  v = v.replace(/\.(\d{3})(\d)/, ".$1/$2"); //Coloca uma barra entre o oitavo e o nono dígitos
  v = v.replace(/(\d{4})(\d)/, "$1-$2"); //Coloca um hífen depois do bloco de quatro dígitos
  return v;
}

function maskPhone(value: string): string {
  if (!value) return '';
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d{2})(\d)/, "($1) $2");
  value = value.replace(/(\d)(\d{4})$/, "$1-$2");
  return value;
}

function maskCep(value: string): string {
  if (!value) return '';
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d{5})(\d)/, "$1-$2");
  return value;
}

export function maskMoney(e: number): string {
  if (!e) return "R$: 0,00";

  const options = {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
    maximumFractionDigits: 3,
  };
  const formatNumber = new Intl.NumberFormat("pt-BR", options);
  return formatNumber.format(e);
}

function removeDigitos(s: string): string {
  if (!s) return "";
  const newValue = s.replace(/\D/g, "");
  return newValue;
}

function removerCaracteresEspeciais(s: string): string {
  if (!s) return '';
  return s.replace(/[^a-zA-Z0-9]/g, "");
}

export const masks: Record<MaskType, (value: any) => any> = {
  maskCpf,
  maskPhone,
  maskCep,
  maskCnpj,
  removeDigitos,
  removerCaracteresEspeciais
};
