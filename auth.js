import { auth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from './firebase.js';

export async function loginUser(email, password) {
    try {
        const result = await signInWithEmailAndPassword(auth, email, password);
        return { success: true, user: result.user };
    } catch (error) {
        let message = "Login gagal!";
        if (error.code === 'auth/user-not-found') message = "Email tidak terdaftar!";
        if (error.code === 'auth/wrong-password') message = "Password salah!";
        if (error.code === 'auth/invalid-credential') message = "Email atau password salah!";
        if (error.code === 'auth/invalid-email') message = "Format email salah!";
        return { success: false, message };
    }
}

export async function logoutUser() {
    await signOut(auth);
}

export function cekLogin(callback) {
    onAuthStateChanged(auth, (user) => {
        callback(user);
    });
}
