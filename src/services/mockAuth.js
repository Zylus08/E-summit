// Simulate API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const mockAuthService = {
    // Simulate sending OTP
    sendOTP: async (emailOrPhone) => {
        await delay(1000);
        const otp = '1234'; // Fixed OTP for testing
        console.log(`[MockAuth] OTP for ${emailOrPhone}: ${otp}`);
        return { success: true, message: 'OTP sent successfully' };
    },

    // Simulate verifying OTP
    verifyOTP: async (emailOrPhone, otp) => {
        await delay(1000);
        if (otp === '1234') {
            return {
                success: true,
                user: {
                    id: 'u1',
                    name: emailOrPhone.split('@')[0] || 'User', // Derive name from email/phone
                    email: emailOrPhone.includes('@') ? emailOrPhone : null,
                    phone: !emailOrPhone.includes('@') ? emailOrPhone : null,
                    avatar: null
                }
            };
        }
        return { success: false, message: 'Invalid OTP' };
    },

    // Simulate Google Login
    loginWithGoogle: async () => {
        await delay(1500);
        return {
            success: true,
            user: {
                id: 'g1',
                name: 'Google User',
                email: 'google@example.com',
                avatar: 'https://lh3.googleusercontent.com/a/default-user=s96-c'
            }
        };
    }
};
