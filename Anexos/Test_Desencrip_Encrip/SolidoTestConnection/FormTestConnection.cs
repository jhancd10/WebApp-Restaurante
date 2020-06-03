using System;
using System.Data.SqlClient;
using Oracle.ManagedDataAccess.Client;
using System.Windows.Forms;
using _util = EncryptDecryptAES.Utilities;
using System.Xml;
using util = EncryptDecryptAES.Utilities;

namespace SolidoTestConnection
{
    public partial class FormTestConnection : Form
    {
        private string filepathconfig = "";
        private string selectedBd = "";
        private string database = "";
        private string _connectionString = "";

        public FormTestConnection()
        {
            InitializeComponent();
            this.buttonGenConnection.Enabled = false;
            this.buttonTestConnection.Enabled = false;
        }

        private void buttonExaminar_Click(object sender, EventArgs e)
        {
            OpenFileDialog openFileDialogXML = new OpenFileDialog
            {
                Filter = "Archivos XML|ConnectionDB.xml",
                Title = "Seleccione el archivo XML de configuración"
            };

            if (openFileDialogXML.ShowDialog() == System.Windows.Forms.DialogResult.OK)
            {
                this.textBoxPath.Text = openFileDialogXML.FileName;
                filepathconfig = openFileDialogXML.FileName;
                this.buttonTestConnection.Enabled = true;
            }
        }

        private void buttonTestConnection_Click(object sender, EventArgs e)
        {
            string DatabaseEngine = this.database;
            SolidoSettings _settings = new SolidoSettings();
            ConfigFilePath configfilepath = new ConfigFilePath();
            configfilepath.PathFileConfig = filepathconfig;
            bool ok = false;
            try
            {
                string databaseTypeXml;

                appConfigurationDatabaseConnection _appConfigurationDB = _settings.GetConfigurationDatabaseConnection(configfilepath);
                databaseTypeXml = _util.DecryptRijndael(_appConfigurationDB.DatabaseType, "");

                if (databaseTypeXml == "sQLSource")
                {
                    _connectionString = "Data Source=" + _util.DecryptRijndael(_appConfigurationDB.ServerName, "") +
                        ";Initial Catalog=" + _util.DecryptRijndael(_appConfigurationDB.DatabaseName, "") +
                        ";Persist Security Info=True" +
                        ";User ID=" + _util.DecryptRijndael(_appConfigurationDB.User, "") +
                        ";Password=" + _util.DecryptRijndael(_appConfigurationDB.Password, "") +
                        ";Pooling=False" +
                        ";Connect Timeout=" + _util.DecryptRijndael(_appConfigurationDB.ConnectionTimeout, "");

                    SqlConnection sqlconn = new SqlConnection(_connectionString);
                    sqlconn.Open();
                    sqlconn.Close();
                    sqlconn.Dispose();
                    ok = true;
                }

                else if (databaseTypeXml == "OracleSource")
                {
                    _connectionString = "User ID=" + _util.DecryptRijndael(_appConfigurationDB.User, "") +
                                    ";Password=" + _util.DecryptRijndael(_appConfigurationDB.Password, "") +
                                    ";Data Source=" + _util.DecryptRijndael(_appConfigurationDB.ServerName, "");

                    OracleConnection Oraconn = new OracleConnection(_connectionString);
                    Oraconn.Open();
                    Oraconn.Close();
                    Oraconn.Dispose();
                    ok = true;
                }
            }

            catch (Exception ex)
            {
                MessageBox.Show("Error de Conexion: " + ex.Message.ToString(), "Validación de Conexión", MessageBoxButtons.OK, MessageBoxIcon.Error);
                return;
            }

            if (ok)
            {
                textBoxCadenaSolido.Text = _connectionString;
                MessageBox.Show("Conexion Exitosa!", "Validación de Conexión", MessageBoxButtons.OK, MessageBoxIcon.Information);
            }

            
        }

        private void textBox1_TextChanged(object sender, EventArgs e){}

        private void button1_Click(object sender, EventArgs e)
        {
            OpenFileDialog openFileDialogXML = new OpenFileDialog();
            openFileDialogXML.Filter = "Archivos XML|ConnectionDB.xml";
            openFileDialogXML.Title = "Seleccione el archivo XML de configuración";

            if (openFileDialogXML.ShowDialog() == System.Windows.Forms.DialogResult.OK)
            {
                this.textBoxPath1.Text = openFileDialogXML.FileName;
                filepathconfig = openFileDialogXML.FileName;
                this.buttonGenConnection.Enabled = true;
            }
        }

        private void buttonGenConnection_Click(object sender, EventArgs e)
        {
            selectedBd = comboBoxDB1.Text;

            if (ValidarCampos(this))
            {
                if (WriteSolidoWizzardConfig(filepathconfig, selectedBd))
                {
                    MessageBox.Show("Registro de configuración generado con éxito!", "Generación archivo de configuración", MessageBoxButtons.OK, MessageBoxIcon.Information);
                }
            }
        }

        private bool WriteSolidoWizzardConfig(string filepath, string database)
        {
            bool success = true;
            try
            {
                XmlDocument doc = new XmlDocument();
                doc.Load(filepath);
                XmlNode root = doc.DocumentElement;
                foreach (XmlNode DBnode in root.ChildNodes)
                {
                    foreach (XmlNode Instancenode in DBnode.ChildNodes)
                    {
                        if (Instancenode.Name == "DatabaseConnection")
                        {
                            foreach (XmlNode Fieldnode in Instancenode.ChildNodes)
                            {
                                if (Fieldnode.Name == "ServerName")
                                {
                                    Fieldnode.InnerText = util.EncryptRijndael(this.textBoxServerName.Text.Trim(), "");
                                }

                                if (Fieldnode.Name == "DatabaseName")
                                {
                                    Fieldnode.InnerText = util.EncryptRijndael(this.textBoxDatabase.Text.Trim(), "");
                                }

                                if (Fieldnode.Name == "User")
                                {
                                    Fieldnode.InnerText = util.EncryptRijndael(this.textBoxUser.Text.Trim(), "");
                                }

                                if (Fieldnode.Name == "Password")
                                {
                                    Fieldnode.InnerText = util.EncryptRijndael(this.textBoxPassword.Text.Trim(), "");
                                }

                                if (Fieldnode.Name == "ConnectionTimeout")
                                {
                                    Fieldnode.InnerText = util.EncryptRijndael(this.textBoxConnTimeout.Text.Trim(), "");
                                }

                                if (Fieldnode.Name == "CommandTimeout")
                                {
                                    Fieldnode.InnerText = util.EncryptRijndael(this.textBoxCommTimeout.Text.Trim(), "");
                                }

                                if (Fieldnode.Name == "DatabaseType")
                                {
                                    Fieldnode.InnerText = util.EncryptRijndael(database, "");
                                }
                            }
                        }
                    }
                }
                doc.Save(filepath);
            }
            catch (Exception ex)
            {
                success = false;
                MessageBox.Show(ex.Message, "Error escribiendo el archivo de configuración", MessageBoxButtons.OK, MessageBoxIcon.Error);
            }
            return success;
        }

        private bool validarCamposODBC()
        {
            bool result = true;
            if (string.IsNullOrEmpty(this.textBoxPath.Text.Trim()) || string.IsNullOrEmpty(this.textBoxServerName.Text.Trim())
                || string.IsNullOrEmpty(this.textBoxUser.Text.Trim()) || string.IsNullOrEmpty(this.textBoxPassword.Text.Trim()))
            {
                result = false;
            }

            if (result == false)
                MessageBox.Show("Debe completar todos los campos.");
            return result;
        }

        private bool ValidarCampos(Form formulario)
        {
            bool vacio = true;

            if (comboBoxDB1.SelectedIndex == -1)
            {
                MessageBox.Show("Seleccione el tipo de base de datos.");
                comboBoxDB1.Focus();
                vacio = false;

            }

            else if (textBoxServerName.Text == ""
                || textBoxUser.Text == ""
                || textBoxPassword.Text == ""
                || textBoxDatabase.Text == "")
            {
                MessageBox.Show("Debe completar todos los campos.");
                vacio = false;
            }

            return vacio;
        }
    }
}