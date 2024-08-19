export interface IPixDTO {
  accounts_info: null;
  acquirer_reconciliation: any[];
  additional_info: IAdditionalInfo;
  authorization_code: null;
  binary_mode: boolean;
  brand_id: null;
  build_version: string;
  call_for_authorize_id: null;
  callback_url: null;
  captured: boolean;
  card: ICard;
  charges_details: IChargesDetail[];
  collector_id: number;
  corporation_id: null;
  counter_currency: null;
  coupon_amount: number;
  currency_id: string;
  date_approved: null;
  date_created: string;
  date_last_updated: string;
  date_of_expiration: string;
  deduction_schema: null;
  description: string;
  differential_pricing_id: null;
  external_reference: null;
  fee_details: any[];
  financing_group: null;
  id: number;
  installments: number;
  integrator_id: null;
  issuer_id: string;
  live_mode: boolean;
  marketplace_owner: null;
  merchant_account_id: null;
  merchant_number: null;
  metadata: ICard;
  money_release_date: null;
  money_release_schema: null;
  money_release_status: string;
  notification_url: null;
  operation_type: string;
  order: ICard;
  payer: IProducaoTipoServicoDTOPayer;
  payment_method: IPaymentMethod;
  payment_method_id: string;
  payment_type_id: string;
  platform_id: null;
  point_of_interaction: IPointOfInteraction;
  pos_id: null;
  processing_mode: string;
  refunds: any[];
  release_info: null;
  shipping_amount: number;
  sponsor_id: null;
  statement_descriptor: null;
  status: string;
  status_detail: string;
  store_id: null;
  tags: null;
  taxes_amount: number;
  transaction_amount: number;
  transaction_amount_refunded: number;
  transaction_details: ITransactionDetails;
  api_response: IAPIResponse;
}

export interface IAdditionalInfo {
  authentication_code: null;
  available_balance: null;
  nsu_processadora: null;
}

export interface IAPIResponse {
  status: number;
  headers: { [key: string]: string[] };
}

export interface ICard {}

export interface IChargesDetail {
  accounts: IAccounts;
  amounts: IAmounts;
  client_id: number;
  date_created: string;
  id: string;
  last_updated: string;
  metadata: IMetadata;
  name: string;
  refund_charges: any[];
  reserve_id: null;
  type: string;
}

export interface IAccounts {
  from: string;
  to: string;
}

export interface IAmounts {
  original: number;
  refunded: number;
}

export interface IMetadata {
  source: string;
}

export interface IProducaoTipoServicoDTOPayer {
  email: null;
  entity_type: null;
  first_name: null;
  id: string;
  identification: IIdentification;
  last_name: null;
  operator_id: null;
  phone: IPhone;
  type: null;
}

export interface IIdentification {
  number: null;
  type: null;
}

export interface IPhone {
  area_code: null;
  extension: null;
  number: null;
}

export interface IPaymentMethod {
  id: string;
  issuer_id: string;
  type: string;
}

export interface IPointOfInteraction {
  application_data: IApplicationData;
  business_info: IBusinessInfo;
  location: ILocation;
  transaction_data: ITransactionData;
  type: string;
}

export interface IApplicationData {
  name: null;
  version: null;
}

export interface IBusinessInfo {
  branch: null;
  sub_unit: string;
  unit: string;
}

export interface ILocation {
  source: null;
  state_id: null;
}

export interface ITransactionData {
  bank_info: IBankInfo;
  bank_transfer_id: null;
  e2e_id: null;
  financial_institution: null;
  qr_code: string;
  qr_code_base64: string;
  ticket_url: string;
  transaction_id: null;
}

export interface IBankInfo {
  collector: ICollector;
  is_same_bank_account_owner: null;
  origin_bank_id: null;
  origin_wallet_id: null;
  payer: IBankInfoPayer;
}

export interface ICollector {
  account_holder_name: string;
  account_id: null;
  long_name: null;
  transfer_account_id: null;
}

export interface IBankInfoPayer {
  account_id: null;
  external_account_id: null;
  id: null;
  identification: ICard;
  long_name: null;
}

export interface ITransactionDetails {
  acquirer_reference: null;
  bank_transfer_id: null;
  external_resource_url: null;
  financial_institution: null;
  installment_amount: number;
  net_received_amount: number;
  overpaid_amount: number;
  payable_deferral_period: null;
  payment_method_reference_id: null;
  total_paid_amount: number;
  transaction_id: null;
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

export interface IPixStatus {
  paymentId: number;
}
