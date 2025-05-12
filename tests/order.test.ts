import {
  OrderItem,
  calculateOrderItemTotal,
  calculateOrderTotal,
  Order,
} from "../zad1";

describe("Order Calculations", () => {
  test("should calculate correct totals for random items", () => {
    const generateRandomOrderItems = (numItems: number): OrderItem[] => {
      return Array.from({ length: numItems }, () => ({
        net_price: Math.floor(Math.random() * 1000) + 1,
        quantity: Math.floor(Math.random() * 100) + 1,
        net_total: null,
        total: null,
      }));
    };
    //test
    const randomItems: OrderItem[] = generateRandomOrderItems(10);
    const taxRate = 23;

    const orderItemsWithTotals = calculateOrderItemTotal(randomItems, taxRate);
    const { net_total, tax, total } = calculateOrderTotal(orderItemsWithTotals);
    const order: Order = {
      items: orderItemsWithTotals,
      net_total,
      tax,
      total,
    };

    console.log("Order Calculation Results (Random Items):");
    console.log("Full Order:", order);

    orderItemsWithTotals.forEach((item) => {
      const expectedNetTotal = item.net_price * item.quantity;
      const expectedTax = expectedNetTotal * (taxRate / 100);
      const expectedTotal = expectedNetTotal + expectedTax;

      expect(item.net_total).toBe(expectedNetTotal);
      expect(item.total).toBeCloseTo(expectedTotal);
    });

    const expectedNetTotal = orderItemsWithTotals.reduce(
      (sum, item) => sum + (item.net_total ?? 0),
      0
    );
    const expectedTax = orderItemsWithTotals.reduce(
      (sum, item) => sum + ((item.total ?? 0) - (item.net_total ?? 0)),
      0
    );
    const expectedTotal = orderItemsWithTotals.reduce(
      (sum, item) => sum + (item.total ?? 0),
      0
    );

    expect(order.net_total).toBeCloseTo(expectedNetTotal, 2);
    expect(order.tax).toBeCloseTo(expectedTax, 2);
    expect(order.total).toBeCloseTo(expectedTotal, 2);
  });
});