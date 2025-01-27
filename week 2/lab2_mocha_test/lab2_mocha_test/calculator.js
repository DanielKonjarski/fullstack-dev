export const add = (a, b) => a + b;
export const sub = (a, b) => a - b;
export const mul = (a, b) => a * b;
export const div = (a, b) => {
    if (b === 0) throw new Error("Cannot divide by zero");
    return a / b;
};

