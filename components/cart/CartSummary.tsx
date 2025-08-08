import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useStore } from "@/store/store"
 

export function CartSummary() {
  const cartItems = useStore((store) => store.cart);
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const tax = subtotal * 0.08; // Assuming a flat 8% tax rate
  const total = subtotal + tax;
  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-lg">Order Summary</h3>
      <div className="space-y-2">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Tax (8%)</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <Separator />
        <div className="flex justify-between font-semibold">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
      <Button className="w-full">Proceed to Checkout</Button>
    </div>
  )
}