import { StatusPaymentPix } from "../enums/statusPaymentPix";

export interface IPixDTO {
  id: number;
  qr_code: string;
  qr_code_base64: string;
  ticket_url: string;
  transaction_id: string;
}

export interface IPixForm {
  transaction_amount: number;
  description: string;
  paymentMethodId: string;
  email: string;
  identificationType: string;
  number: string;
  date_of_expiration: string;
}

export interface IPixStatusProps {
  paymentId: number;
}
export interface IPixStatusDTO {
  id: number;
  status: StatusPaymentPix;
}
