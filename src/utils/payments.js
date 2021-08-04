export const isApplePayAvailable = () => {
    try {
        if (window.ApplePaySession) {
            return window.ApplePaySession.canMakePayments();
        } else {
            return false;
        }
    } catch (e) {
        console.error("ApplePay Error", e);
        return false;
    }
}