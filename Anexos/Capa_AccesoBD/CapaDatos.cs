using System;
using System.Data;
using System.Data.SqlClient;
using Oracle.ManagedDataAccess.Client;
using System.IO;
using Connection;
using EncryptDecryptAES;

namespace clsdatosctr
{
    public class CapaDatos
    {
        private string user = "";
        private string pwd = "";
        private string bd = "";
        private string server = "";
        private string tipobd = "";

        static void Main(string[] args) { }

        private string CadConexion()
        {
            string cadena = "";
            Settings _settings = new Settings();
            ConfigFilePath configfilepath = new ConfigFilePath();

            string path = System.IO.Path.GetDirectoryName(System.Reflection.Assembly.GetExecutingAssembly().GetName().CodeBase);
            path = path.Substring(6);
            path.Replace("\\", "/");
            configfilepath.PathFileConfig = path + "/ConnectionDB.xml";

            appConfigurationDatabaseConnection _appConfigurationDB = _settings.GetConfigurationDatabaseConnection(configfilepath);

            user = Utilities.DecryptRijndael(_appConfigurationDB.User, "");
            pwd = Utilities.DecryptRijndael(_appConfigurationDB.Password, "");
            bd = Utilities.DecryptRijndael(_appConfigurationDB.DatabaseName, "");
            server = Utilities.DecryptRijndael(_appConfigurationDB.ServerName, "");
            tipobd = Utilities.DecryptRijndael(_appConfigurationDB.DatabaseType, "");

            tipobd = tipobd.ToLower();
            if (tipobd.Equals("oraclesource"))
            {
                cadena = "User ID=" + user + ";Password=" + pwd + ";Data Source=" + server;
                //cadena = "Data Source=" + server + ";Persist Security Info=True;User ID=" + user + ";Password=" + pwd + ";Unicode=True";
            }
            else if (tipobd.Equals("sqlsource"))
            {
                cadena = "data source = " + server + "; initial catalog = " + bd + "; user id = " + user + "; password = " + pwd;
            }
            return cadena;
        }

        private DataSet RetornaDataSet(string consulta, string conex)
        {
            DataSet ds = new DataSet();
            tipobd = tipobd.ToLower();
            if (tipobd.Equals("oraclesource"))
            {
                OracleConnection Cnn = new OracleConnection(conex);
                Cnn.Open();
                OracleCommand command = new OracleCommand(consulta, Cnn);
                OracleDataAdapter adaptador = new OracleDataAdapter(command);
                adaptador.Fill(ds);
                Cnn.Close();
                Cnn.Dispose();
            }

            else if (tipobd.Equals("sqlsource"))
            {
                using (SqlConnection Cnn3 = new SqlConnection(conex))
                {
                    Cnn3.Open();
                    SqlCommand command3 = new SqlCommand(consulta, Cnn3);
                    command3.CommandTimeout = 0;
                    SqlDataAdapter adaptador3 = new SqlDataAdapter(command3);
                    adaptador3.Fill(ds);
                    command3.Dispose();
                    adaptador3.Dispose();
                    Cnn3.Close();
                    Cnn3.Dispose();
                }
            }
            return ds;
        }

        private string Acciones(string query, string conex)
        {
            string resultado = "ERROR";
            try
            {
                tipobd = tipobd.ToLower();
                if (tipobd.Equals("oraclesource"))
                {
                    OracleConnection Cnn = new OracleConnection(conex);
                    Cnn.Open();
                    OracleCommand command = Cnn.CreateCommand();
                    command.CommandText = query;
                    command.ExecuteNonQuery();
                    Cnn.Close();
                    Cnn.Dispose();
                }

                else if (tipobd.Equals("sqlsource"))
                {
                    using (SqlConnection Cnn3 = new SqlConnection(conex))
                    {
                        Cnn3.Open();
                        SqlCommand Cmd3 = new SqlCommand(query, Cnn3);
                        Cmd3.CommandTimeout = 0;
                        Cmd3.ExecuteNonQuery();
                        Cmd3.Dispose();
                        Cnn3.Close();
                        Cnn3.Dispose();
                    }
                }
                resultado = "SUCCESS";
            }
            catch (Exception e)
            {
                string ruta = @"D:\wsprueba.txt";
                using (StreamWriter StrDisp = File.AppendText(ruta))
                {
                    StrDisp.Write("cadconexion()" + "\n");
                    StrDisp.WriteLine();
                    StrDisp.Write(e + "\n");
                    StrDisp.WriteLine();
                    StrDisp.Close();
                }
                resultado = e.Message.ToString();
            }
            return resultado;
        }

        public string GetConexString()
        {
            return CadConexion();
        }

        public DataSet GetDataSet(string consulta, string conex)
        {
            return RetornaDataSet(consulta, conex);
        }

        public string ExecTransaction(string query, string conex)
        {
            return Acciones(query, conex);
        }
    }
}