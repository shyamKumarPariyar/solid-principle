class PaymentIntegration {
    constructor(paymentProcessor){
        this.paymentProcessor = paymentProcessor
    }

    purchaseImage(quantity){
        this.paymentProcessor.pay(50 * quantity)
    }

    purchaseVideo(quantity){
        this.paymentProcessor.pay(500 * quantity)
    }
}

class StripePaymentProcessor {
    constructor(user){
        this.stripe = new Stripe(user)
    }


    pay(amountInDollars){
        this.stripe.makePayment(amountInDollars * 100)
    }
}

class Stripe{
    constructor(user){
        this.user = user
    }

    makePayment(amountInCents){
        console.log(`${this.user} made payment of $${amountInCents / 100} with Stripe.`)
    }
}

class PaypalPaymentProcessor{
    constructor(user){
        this.user = user
        this.paypal = new Paypal()
    }
    pay(amountInDollars){
        this.paypal.makePayment(this.user, amountInDollars)
    }
}

class Paypal{
    makePayment(user, amountInDollars){
        console.log(`${user} made paument of $${amountInDollars} with Paypal.`)
    }
}

const paymentdone = new PaymentIntegration(new PaypalPaymentProcessor('Shyam'))
paymentdone.purchaseImage(5)
paymentdone.purchaseVideo(2)