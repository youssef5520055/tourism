'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CreditCard, Smartphone } from 'lucide-react';

interface PaymentFormProps {
  bookingData: any;
}

export default function PaymentForm({ bookingData }: PaymentFormProps) {
  const [paymentData, setPaymentData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: '',
  });

  const handlePayment = async (method: 'stripe' | 'paypal') => {
    // Implement payment processing
    console.log('Processing payment with', method, paymentData);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <CreditCard className="w-5 h-5 mr-2" />
          Payment Information
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="card" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="card" className="flex items-center">
              <CreditCard className="w-4 h-4 mr-2" />
              Card
            </TabsTrigger>
            <TabsTrigger value="paypal" className="flex items-center">
              <Smartphone className="w-4 h-4 mr-2" />
              PayPal
            </TabsTrigger>
          </TabsList>

          <TabsContent value="card" className="space-y-4">
            <div>
              <Label htmlFor="cardNumber">Card Number</Label>
              <Input
                id="cardNumber"
                placeholder="1234 5678 9012 3456"
                value={paymentData.cardNumber}
                onChange={(e) => setPaymentData({
                  ...paymentData,
                  cardNumber: e.target.value
                })}
              />
            </div>
            <div>
              <Label htmlFor="cardName">Cardholder Name</Label>
              <Input
                id="cardName"
                placeholder="John Doe"
                value={paymentData.cardName}
                onChange={(e) => setPaymentData({
                  ...paymentData,
                  cardName: e.target.value
                })}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="expiryDate">Expiry Date</Label>
                <Input
                  id="expiryDate"
                  placeholder="MM/YY"
                  value={paymentData.expiryDate}
                  onChange={(e) => setPaymentData({
                    ...paymentData,
                    expiryDate: e.target.value
                  })}
                />
              </div>
              <div>
                <Label htmlFor="cvv">CVV</Label>
                <Input
                  id="cvv"
                  placeholder="123"
                  value={paymentData.cvv}
                  onChange={(e) => setPaymentData({
                    ...paymentData,
                    cvv: e.target.value
                  })}
                />
              </div>
            </div>
            <Button 
              onClick={() => handlePayment('stripe')} 
              className="w-full"
            >
              Pay with Card
            </Button>
          </TabsContent>

          <TabsContent value="paypal">
            <div className="text-center py-8">
              <Button 
                onClick={() => handlePayment('paypal')} 
                className="bg-yellow-500 hover:bg-yellow-600 text-black"
              >
                Pay with PayPal
              </Button>
              <p className="text-sm text-gray-600 mt-2">
                You'll be redirected to PayPal to complete your payment
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}