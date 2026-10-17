import { quotations, deals, orders, payments } from './data';

// Every join uses a stable foreign key; display labels are never used for matching.
export const getQuotationsForLead = leadId => quotations.filter(item => item.leadId === leadId);
export const getDealsForLead = leadId => deals.filter(item => item.leadId === leadId);
export const getDealForQuotation = quotationId => deals.find(item => item.quotationId === quotationId);
export const getOrdersForDeal = dealId => orders.filter(item => item.dealId === dealId);
export const getPaymentsForDeal = dealId => payments.filter(item => item.dealId === dealId);
export const getPaymentsForOrder = orderId => payments.filter(item => item.orderId === orderId);
