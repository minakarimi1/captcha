export const generateCaptcha =()=>{
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    const operation = ['+', '-', '*'][Math.floor(Math.random() * 3)];
    const result = eval(`${num1} ${operation} ${num2}`);
    const captcha = `${num1} ${operation} ${num2} = ?`;
    return { c:captcha, r:result };
}