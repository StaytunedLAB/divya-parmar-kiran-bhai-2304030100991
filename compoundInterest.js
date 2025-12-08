function compoundInterestDetails(P, R, T) {
    const amount = P * Math.pow(1 + R / 100, T);
    return {
        interest: amount - P,
        totalAmount: amount
    };
}

// Example:
console.log(compoundInterestDetails(1000, 5, 2));
