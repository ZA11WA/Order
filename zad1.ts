const items: OrderItem[] = [
    { net_price: 100.5, quantity: 2, net_total: null, total: null },
    { net_price: 39.99, quantity: 8, net_total: null, total: null },
    { net_price: 199.99, quantity: 1, net_total: null, total: null },
    { net_price: 149.99, quantity: 3, net_total: null, total: null }
];

export interface Order {
    items: OrderItem[];
    net_total: number;
    tax: number;
    total: number;
}

export interface OrderItem {
    net_price: number;
    quantity: number;
    net_total: number | null;
    total: number | null;
}

export function calculateOrderItemTotal(items: OrderItem[], taxRate: number): OrderItem[] {
    
    return items.map(item => {
        const net_total = Number((item.net_price * item.quantity).toFixed(2));
        const tax = Number((net_total * (taxRate / 100)).toFixed(2));
        const total = Number((net_total + tax).toFixed(2));

        return { ...item, net_total, total };
    });
}

export function calculateOrderTotal(items: OrderItem[]): { net_total: number; tax: number; total: number } {

    const net_total = Number(
        items.reduce((sum, item) => sum + (item.net_total ?? 0), 0).toFixed(2)
    );
    const tax = Number(
        items.reduce((sum, item) => sum + ((item.total ?? 0) - (item.net_total ?? 0)), 0).toFixed(2)
    );
    const total = Number(
        items.reduce((sum, item) => sum + (item.total ?? 0), 0).toFixed(2)
    );

    return { net_total, tax, total };
}



const taxRate = 23; 
const orderItemsWithTotals = calculateOrderItemTotal(items, taxRate);
const { net_total, tax, total } = calculateOrderTotal(orderItemsWithTotals);

const order: Order = {
    items: orderItemsWithTotals,
    net_total,
    tax,
    total
};

console.log(order);