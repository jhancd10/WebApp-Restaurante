using System;
using System.IO;
using System.Security.Cryptography;
using System.Text;

namespace EncryptDecryptAES
{
    public class Utilities
    {
        public static void Main() { }

        public static string EncryptRijndael(string clearText, string password)
        {
            string EncryptionKey = password;
            byte[] clearBytes = Encoding.Unicode.GetBytes(clearText);
            using (Aes encryptor = Aes.Create())
            {
                Rfc2898DeriveBytes pdb = new Rfc2898DeriveBytes(EncryptionKey, new byte[] { 0x49, 0x76, 0x61, 0x6e, 0x20, 0x4d, 0x65,
                    0x64, 0x76, 0x65, 0x64, 0x65, 0x76 });
                encryptor.Key = pdb.GetBytes(32);
                encryptor.IV = pdb.GetBytes(16);
                using (MemoryStream ms = new MemoryStream())
                {
                    using (CryptoStream cs = new CryptoStream(ms, encryptor.CreateEncryptor(), CryptoStreamMode.Write))
                    {
                        cs.Write(clearBytes, 0, clearBytes.Length);
                        cs.Close();
                    }
                    clearText = Convert.ToBase64String(ms.ToArray());
                }
            }
            return clearText;
        }

        public static string DecryptRijndael(string cipherText, string password)
        {
            string EncryptionKey = password;
            byte[] cipherBytes = Convert.FromBase64String(cipherText);
            using (Aes encryptor = Aes.Create())
            {
                Rfc2898DeriveBytes pdb = new Rfc2898DeriveBytes(EncryptionKey, new byte[] { 0x49, 0x76, 0x61, 0x6e, 0x20, 0x4d, 0x65, 0x64, 0x76, 0x65, 0x64, 0x65, 0x76 });
                encryptor.Key = pdb.GetBytes(32);
                encryptor.IV = pdb.GetBytes(16);
                using (MemoryStream ms = new MemoryStream())
                {
                    using (CryptoStream cs = new CryptoStream(ms, encryptor.CreateDecryptor(), CryptoStreamMode.Write))
                    {
                        cs.Write(cipherBytes, 0, cipherBytes.Length);
                        cs.Close();
                    }
                    cipherText = Encoding.Unicode.GetString(ms.ToArray());
                }
            }
            return cipherText;
        }

        public static string EncryptAes(string plainText)
        {
            MemoryStream memoryStream = null;
            CryptoStream cryptoStream = null;
            try
            {
                var initialVectorBytes = Encoding.ASCII.GetBytes("Inf0rm4t1c4_Asig");
                var saltValueBytes = Encoding.ASCII.GetBytes("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890");
                var plainTextBytes = Encoding.UTF8.GetBytes(plainText);
                var passwd = new Rfc2898DeriveBytes("Inf0rm4t1c4_AsignaCasos", saltValueBytes);
                var keyBytes = passwd.GetBytes(256 / 8);
                var symmetricKey = new RijndaelManaged { Mode = CipherMode.CBC };
                var encryptor = symmetricKey.CreateEncryptor(keyBytes, initialVectorBytes);
                memoryStream = new MemoryStream();
                cryptoStream = new CryptoStream(memoryStream, encryptor, CryptoStreamMode.Write);
                cryptoStream.Write(plainTextBytes, 0, plainTextBytes.Length);
                cryptoStream.FlushFinalBlock();
                var cipherTextBytes = memoryStream.ToArray();
                var cipherText = Convert.ToBase64String(cipherTextBytes);

                return cipherText;
            }
            catch (Exception e)
            {
                return "";
            }
            finally
            {
                if (memoryStream != null)
                {
                    memoryStream.Close();
                }
                if (cryptoStream != null)
                {
                    cryptoStream.Close();
                }
            }
        }

        public static string DecryptAes(string plainText)
        {
            MemoryStream memoryStream = null;
            CryptoStream cryptoStream = null;
            try
            {
                var initialVectorBytes = Encoding.ASCII.GetBytes("Inf0rm4t1c4_Asig");
                var saltValueBytes = Encoding.ASCII.GetBytes("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890");
                var cipherTextBytes = Convert.FromBase64String(plainText);
                var passwd = new Rfc2898DeriveBytes("Inf0rm4t1c4_AsignaCasos", saltValueBytes);
                var keyBytes = passwd.GetBytes(256 / 8);
                var symmetricKey = new RijndaelManaged { Mode = CipherMode.CBC };
                var decryptor = symmetricKey.CreateDecryptor(keyBytes, initialVectorBytes);
                memoryStream = new MemoryStream(cipherTextBytes);
                cryptoStream = new CryptoStream(memoryStream, decryptor, CryptoStreamMode.Read);
                var plainTextBytes = new byte[cipherTextBytes.Length];
                var decryptedByteCount = cryptoStream.Read(plainTextBytes, 0, plainTextBytes.Length);

                var desencriptado = Encoding.UTF8.GetString(plainTextBytes, 0, decryptedByteCount);

                return desencriptado;
            }
            catch (Exception e)
            {
                return "";
            }
            finally
            {
                if (memoryStream != null)
                {
                    memoryStream.Close();
                }
                if (cryptoStream != null)
                {
                    cryptoStream.Close();
                }
            }
        }
    }
}