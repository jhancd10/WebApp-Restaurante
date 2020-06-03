namespace Connection
{
    [System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "2.0.50727.3038")]
    [System.SerializableAttribute()]
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.ComponentModel.DesignerCategoryAttribute("code")]
    [System.Xml.Serialization.XmlTypeAttribute(AnonymousType = true)]
    [System.Xml.Serialization.XmlRootAttribute(Namespace = "", IsNullable = false)]
    public partial class appConfiguration
    {
        private appConfigurationDatabase databaseField;

        public appConfigurationDatabase Database
        {
            get
            {
                return this.databaseField;
            }
            set
            {
                this.databaseField = value;
            }
        }
    }

    [System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "2.0.50727.3038")]
    [System.SerializableAttribute()]
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.ComponentModel.DesignerCategoryAttribute("code")]
    [System.Xml.Serialization.XmlTypeAttribute(AnonymousType = true)]
    public partial class appConfigurationDatabase
    {
        private appConfigurationDatabaseConnection connectionDataField;

        public appConfigurationDatabaseConnection DatabaseConnection
        {
            get
            {
                return this.connectionDataField;
            }
            set
            {
                this.connectionDataField = value;
            }
        }
    }

    [System.CodeDom.Compiler.GeneratedCodeAttribute("xsd", "2.0.50727.3038")]
    [System.SerializableAttribute()]
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.ComponentModel.DesignerCategoryAttribute("code")]
    [System.Xml.Serialization.XmlTypeAttribute(AnonymousType = true)]
    public partial class appConfigurationDatabaseConnection
    {
        private string serverNameField;
        private string databaseNameField;
        private string userField;
        private string passwordField;
        private string connectionTimeoutField;
        private string commandTimeoutField;
        private string databaseTypeField;

        public string ServerName
        {
            get
            {
                return this.serverNameField;
            }
            set
            {
                this.serverNameField = value;
            }
        }

        public string DatabaseName
        {
            get
            {
                return this.databaseNameField;
            }
            set
            {
                this.databaseNameField = value;
            }
        }

        public string User
        {
            get
            {
                return this.userField;
            }
            set
            {
                this.userField = value;
            }
        }

        public string Password
        {
            get
            {
                return this.passwordField;
            }
            set
            {
                this.passwordField = value;
            }
        }

        public string ConnectionTimeout
        {
            get
            {
                return this.connectionTimeoutField;
            }
            set
            {
                this.connectionTimeoutField = value;
            }
        }

        public string CommandTimeout
        {
            get
            {
                return this.commandTimeoutField;
            }
            set
            {
                this.commandTimeoutField = value;
            }
        }

        public string DatabaseType
        {
            get
            {
                return this.databaseTypeField;
            }
            set
            {
                this.databaseTypeField = value;
            }
        }
    }
}