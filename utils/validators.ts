export function isEmailValid(email: string): boolean {
	const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return re.test(email);
}

export function isPasswordStrong(password: string): boolean {
	return password.length >= 6;
}

export function doPasswordsMatch(pw: string, confirmPw: string): boolean {
	return pw === confirmPw;
}