declare global {
    class CheckoutWebComponents {
      init(options: {
        publicKey: string;
        environment?: 'sandbox' | 'production';
        locale?: string;
        paymentFlowsURL?: string;
        successUrl?: string;
        failureUrl?: string;
        cancelUrl?: string;
        paymentSession?: any;
      }): void;
      
      create(type: 'flow'): FlowComponent;
      
      mount(selector: string): void;
      unmount(): void;
      remount(): void;
      destroy(): void;
    }
  
    interface Window {
      CheckoutWebComponents: typeof CheckoutWebComponents;
    }
  }
  
  export {};
  