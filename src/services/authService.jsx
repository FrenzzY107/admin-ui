export const loginService = async (email, password) => {
  if (email === "111202315396@mhs.dinus.ac.id" && password === "123456") {
    return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9." +
           "eyJpZCI6MSwibmFtZSI6IkFkbWluIn0." +
           "dummy-signature";
  }

  throw new Error("Email atau password salah");
};
