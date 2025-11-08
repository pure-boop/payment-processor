from payment_processor.settings import config
from payment_processor.models import Payment
from payment_processor.services import PaymentService

def process_payment(payment_id):
    payment = Payment.objects.get(id=payment_id)
    payment_service = PaymentService(payment)
    payment_service.process()

def main():
    try:
        payment_id = config.PAYMENT_ID
        process_payment(payment_id)
        print(f"Payment with ID {payment_id} has been processed successfully.")
    except Exception as e:
        print(f"Error processing payment: {e}")

if __name__ == "__main__":
    main()