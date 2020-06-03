namespace SolidoTestConnection
{
    partial class FormTestConnection
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.label7 = new System.Windows.Forms.Label();
            this.textBoxPath = new System.Windows.Forms.TextBox();
            this.buttonExaminar = new System.Windows.Forms.Button();
            this.groupBox1 = new System.Windows.Forms.GroupBox();
            this.buttonTestConnection = new System.Windows.Forms.Button();
            this.textBoxCadenaSolido = new System.Windows.Forms.TextBox();
            this.label1 = new System.Windows.Forms.Label();
            this.tabControl1 = new System.Windows.Forms.TabControl();
            this.tabPage1 = new System.Windows.Forms.TabPage();
            this.groupBoxDataProvider = new System.Windows.Forms.GroupBox();
            this.labelBaseDatos = new System.Windows.Forms.Label();
            this.comboBoxDB1 = new System.Windows.Forms.ComboBox();
            this.buttonGenConnection = new System.Windows.Forms.Button();
            this.labelCommandTimeout = new System.Windows.Forms.Label();
            this.textBoxCommTimeout = new System.Windows.Forms.TextBox();
            this.labelConnectionTimeout = new System.Windows.Forms.Label();
            this.textBoxConnTimeout = new System.Windows.Forms.TextBox();
            this.textBoxPassword = new System.Windows.Forms.TextBox();
            this.label3 = new System.Windows.Forms.Label();
            this.textBoxServerName = new System.Windows.Forms.TextBox();
            this.label5 = new System.Windows.Forms.Label();
            this.labelServer = new System.Windows.Forms.Label();
            this.textBoxUser = new System.Windows.Forms.TextBox();
            this.textBoxDatabase = new System.Windows.Forms.TextBox();
            this.labelDatabase = new System.Windows.Forms.Label();
            this.groupBox2 = new System.Windows.Forms.GroupBox();
            this.buttonExaminar1 = new System.Windows.Forms.Button();
            this.textBoxPath1 = new System.Windows.Forms.TextBox();
            this.label2 = new System.Windows.Forms.Label();
            this.tabPage2 = new System.Windows.Forms.TabPage();
            this.groupBox1.SuspendLayout();
            this.tabControl1.SuspendLayout();
            this.tabPage1.SuspendLayout();
            this.groupBoxDataProvider.SuspendLayout();
            this.groupBox2.SuspendLayout();
            this.tabPage2.SuspendLayout();
            this.SuspendLayout();
            // 
            // label7
            // 
            this.label7.AutoSize = true;
            this.label7.Font = new System.Drawing.Font("Microsoft Sans Serif", 8.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label7.ForeColor = System.Drawing.Color.MidnightBlue;
            this.label7.Location = new System.Drawing.Point(65, 37);
            this.label7.Name = "label7";
            this.label7.Size = new System.Drawing.Size(54, 13);
            this.label7.TabIndex = 7;
            this.label7.Text = "XML Path";
            // 
            // textBoxPath
            // 
            this.textBoxPath.Location = new System.Drawing.Point(168, 33);
            this.textBoxPath.Name = "textBoxPath";
            this.textBoxPath.ReadOnly = true;
            this.textBoxPath.Size = new System.Drawing.Size(400, 20);
            this.textBoxPath.TabIndex = 6;
            // 
            // buttonExaminar
            // 
            this.buttonExaminar.BackColor = System.Drawing.Color.SkyBlue;
            this.buttonExaminar.Location = new System.Drawing.Point(577, 32);
            this.buttonExaminar.Name = "buttonExaminar";
            this.buttonExaminar.Size = new System.Drawing.Size(66, 23);
            this.buttonExaminar.TabIndex = 18;
            this.buttonExaminar.Text = "Examinar";
            this.buttonExaminar.UseVisualStyleBackColor = false;
            this.buttonExaminar.Click += new System.EventHandler(this.buttonExaminar_Click);
            // 
            // groupBox1
            // 
            this.groupBox1.Controls.Add(this.buttonExaminar);
            this.groupBox1.Controls.Add(this.textBoxPath);
            this.groupBox1.Controls.Add(this.label7);
            this.groupBox1.Font = new System.Drawing.Font("Microsoft Sans Serif", 8.25F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.groupBox1.ForeColor = System.Drawing.Color.RoyalBlue;
            this.groupBox1.Location = new System.Drawing.Point(154, 24);
            this.groupBox1.Name = "groupBox1";
            this.groupBox1.Size = new System.Drawing.Size(663, 82);
            this.groupBox1.TabIndex = 17;
            this.groupBox1.TabStop = false;
            this.groupBox1.Text = "Información de archivo XML";
            // 
            // buttonTestConnection
            // 
            this.buttonTestConnection.BackColor = System.Drawing.Color.SkyBlue;
            this.buttonTestConnection.Location = new System.Drawing.Point(387, 177);
            this.buttonTestConnection.Name = "buttonTestConnection";
            this.buttonTestConnection.Size = new System.Drawing.Size(197, 49);
            this.buttonTestConnection.TabIndex = 18;
            this.buttonTestConnection.Text = "Realizar prueba de Conexión";
            this.buttonTestConnection.UseVisualStyleBackColor = false;
            this.buttonTestConnection.Click += new System.EventHandler(this.buttonTestConnection_Click);
            // 
            // textBoxCadenaSolido
            // 
            this.textBoxCadenaSolido.Location = new System.Drawing.Point(129, 145);
            this.textBoxCadenaSolido.Name = "textBoxCadenaSolido";
            this.textBoxCadenaSolido.ReadOnly = true;
            this.textBoxCadenaSolido.Size = new System.Drawing.Size(798, 20);
            this.textBoxCadenaSolido.TabIndex = 19;
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Font = new System.Drawing.Font("Microsoft Sans Serif", 8.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label1.ForeColor = System.Drawing.Color.MidnightBlue;
            this.label1.Location = new System.Drawing.Point(26, 152);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(54, 13);
            this.label1.TabIndex = 19;
            this.label1.Text = "Conexión:";
            // 
            // tabControl1
            // 
            this.tabControl1.Controls.Add(this.tabPage1);
            this.tabControl1.Controls.Add(this.tabPage2);
            this.tabControl1.Location = new System.Drawing.Point(12, 19);
            this.tabControl1.Name = "tabControl1";
            this.tabControl1.SelectedIndex = 0;
            this.tabControl1.Size = new System.Drawing.Size(961, 420);
            this.tabControl1.TabIndex = 20;
            // 
            // tabPage1
            // 
            this.tabPage1.BackColor = System.Drawing.SystemColors.Control;
            this.tabPage1.Controls.Add(this.groupBoxDataProvider);
            this.tabPage1.Controls.Add(this.groupBox2);
            this.tabPage1.Location = new System.Drawing.Point(4, 22);
            this.tabPage1.Name = "tabPage1";
            this.tabPage1.Padding = new System.Windows.Forms.Padding(3);
            this.tabPage1.Size = new System.Drawing.Size(953, 394);
            this.tabPage1.TabIndex = 0;
            this.tabPage1.Text = "EncrpDesencrp";
            // 
            // groupBoxDataProvider
            // 
            this.groupBoxDataProvider.Controls.Add(this.labelBaseDatos);
            this.groupBoxDataProvider.Controls.Add(this.comboBoxDB1);
            this.groupBoxDataProvider.Controls.Add(this.buttonGenConnection);
            this.groupBoxDataProvider.Controls.Add(this.labelCommandTimeout);
            this.groupBoxDataProvider.Controls.Add(this.textBoxCommTimeout);
            this.groupBoxDataProvider.Controls.Add(this.labelConnectionTimeout);
            this.groupBoxDataProvider.Controls.Add(this.textBoxConnTimeout);
            this.groupBoxDataProvider.Controls.Add(this.textBoxPassword);
            this.groupBoxDataProvider.Controls.Add(this.label3);
            this.groupBoxDataProvider.Controls.Add(this.textBoxServerName);
            this.groupBoxDataProvider.Controls.Add(this.label5);
            this.groupBoxDataProvider.Controls.Add(this.labelServer);
            this.groupBoxDataProvider.Controls.Add(this.textBoxUser);
            this.groupBoxDataProvider.Controls.Add(this.textBoxDatabase);
            this.groupBoxDataProvider.Controls.Add(this.labelDatabase);
            this.groupBoxDataProvider.Font = new System.Drawing.Font("Microsoft Sans Serif", 8.25F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.groupBoxDataProvider.ForeColor = System.Drawing.Color.RoyalBlue;
            this.groupBoxDataProvider.Location = new System.Drawing.Point(164, 130);
            this.groupBoxDataProvider.Name = "groupBoxDataProvider";
            this.groupBoxDataProvider.Size = new System.Drawing.Size(613, 244);
            this.groupBoxDataProvider.TabIndex = 21;
            this.groupBoxDataProvider.TabStop = false;
            this.groupBoxDataProvider.Text = "Información de Conexión";
            // 
            // labelBaseDatos
            // 
            this.labelBaseDatos.AutoSize = true;
            this.labelBaseDatos.Font = new System.Drawing.Font("Microsoft Sans Serif", 8.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.labelBaseDatos.ForeColor = System.Drawing.Color.MidnightBlue;
            this.labelBaseDatos.Location = new System.Drawing.Point(20, 35);
            this.labelBaseDatos.Name = "labelBaseDatos";
            this.labelBaseDatos.Size = new System.Drawing.Size(75, 13);
            this.labelBaseDatos.TabIndex = 17;
            this.labelBaseDatos.Text = "Base de datos";
            // 
            // comboBoxDB1
            // 
            this.comboBoxDB1.AutoCompleteCustomSource.AddRange(new string[] {
            "Sql Server",
            "Oracle",
            "Db2"});
            this.comboBoxDB1.DropDownStyle = System.Windows.Forms.ComboBoxStyle.DropDownList;
            this.comboBoxDB1.FormattingEnabled = true;
            this.comboBoxDB1.Items.AddRange(new object[] {
            "sQLSource",
            "OracleSource"});
            this.comboBoxDB1.Location = new System.Drawing.Point(123, 31);
            this.comboBoxDB1.Name = "comboBoxDB1";
            this.comboBoxDB1.Size = new System.Drawing.Size(164, 21);
            this.comboBoxDB1.TabIndex = 16;
            // 
            // buttonGenConnection
            // 
            this.buttonGenConnection.BackColor = System.Drawing.Color.SkyBlue;
            this.buttonGenConnection.Location = new System.Drawing.Point(210, 178);
            this.buttonGenConnection.Name = "buttonGenConnection";
            this.buttonGenConnection.Size = new System.Drawing.Size(197, 49);
            this.buttonGenConnection.TabIndex = 12;
            this.buttonGenConnection.Text = "Generar Archivo de Conexión";
            this.buttonGenConnection.UseVisualStyleBackColor = false;
            this.buttonGenConnection.Click += new System.EventHandler(this.buttonGenConnection_Click);
            // 
            // labelCommandTimeout
            // 
            this.labelCommandTimeout.AutoSize = true;
            this.labelCommandTimeout.Font = new System.Drawing.Font("Microsoft Sans Serif", 8.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.labelCommandTimeout.ForeColor = System.Drawing.Color.MidnightBlue;
            this.labelCommandTimeout.Location = new System.Drawing.Point(324, 132);
            this.labelCommandTimeout.Name = "labelCommandTimeout";
            this.labelCommandTimeout.Size = new System.Drawing.Size(95, 13);
            this.labelCommandTimeout.TabIndex = 15;
            this.labelCommandTimeout.Text = "Command Timeout";
            // 
            // textBoxCommTimeout
            // 
            this.textBoxCommTimeout.Location = new System.Drawing.Point(429, 128);
            this.textBoxCommTimeout.Name = "textBoxCommTimeout";
            this.textBoxCommTimeout.Size = new System.Drawing.Size(164, 20);
            this.textBoxCommTimeout.TabIndex = 14;
            // 
            // labelConnectionTimeout
            // 
            this.labelConnectionTimeout.AutoSize = true;
            this.labelConnectionTimeout.Font = new System.Drawing.Font("Microsoft Sans Serif", 8.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.labelConnectionTimeout.ForeColor = System.Drawing.Color.MidnightBlue;
            this.labelConnectionTimeout.Location = new System.Drawing.Point(18, 132);
            this.labelConnectionTimeout.Name = "labelConnectionTimeout";
            this.labelConnectionTimeout.Size = new System.Drawing.Size(102, 13);
            this.labelConnectionTimeout.TabIndex = 13;
            this.labelConnectionTimeout.Text = "Connection Timeout";
            // 
            // textBoxConnTimeout
            // 
            this.textBoxConnTimeout.Location = new System.Drawing.Point(123, 128);
            this.textBoxConnTimeout.Name = "textBoxConnTimeout";
            this.textBoxConnTimeout.Size = new System.Drawing.Size(164, 20);
            this.textBoxConnTimeout.TabIndex = 12;
            // 
            // textBoxPassword
            // 
            this.textBoxPassword.Location = new System.Drawing.Point(429, 96);
            this.textBoxPassword.Name = "textBoxPassword";
            this.textBoxPassword.PasswordChar = '*';
            this.textBoxPassword.Size = new System.Drawing.Size(164, 20);
            this.textBoxPassword.TabIndex = 10;
            this.textBoxPassword.UseSystemPasswordChar = true;
            // 
            // label3
            // 
            this.label3.AutoSize = true;
            this.label3.Font = new System.Drawing.Font("Microsoft Sans Serif", 8.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label3.ForeColor = System.Drawing.Color.MidnightBlue;
            this.label3.Location = new System.Drawing.Point(324, 100);
            this.label3.Name = "label3";
            this.label3.Size = new System.Drawing.Size(53, 13);
            this.label3.TabIndex = 11;
            this.label3.Text = "Password";
            // 
            // textBoxServerName
            // 
            this.textBoxServerName.Location = new System.Drawing.Point(123, 64);
            this.textBoxServerName.Name = "textBoxServerName";
            this.textBoxServerName.Size = new System.Drawing.Size(164, 20);
            this.textBoxServerName.TabIndex = 4;
            // 
            // label5
            // 
            this.label5.AutoSize = true;
            this.label5.Font = new System.Drawing.Font("Microsoft Sans Serif", 8.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label5.ForeColor = System.Drawing.Color.MidnightBlue;
            this.label5.Location = new System.Drawing.Point(18, 100);
            this.label5.Name = "label5";
            this.label5.Size = new System.Drawing.Size(29, 13);
            this.label5.TabIndex = 9;
            this.label5.Text = "User";
            // 
            // labelServer
            // 
            this.labelServer.AutoSize = true;
            this.labelServer.Font = new System.Drawing.Font("Microsoft Sans Serif", 8.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.labelServer.ForeColor = System.Drawing.Color.MidnightBlue;
            this.labelServer.Location = new System.Drawing.Point(18, 68);
            this.labelServer.Name = "labelServer";
            this.labelServer.Size = new System.Drawing.Size(69, 13);
            this.labelServer.TabIndex = 5;
            this.labelServer.Text = "Server Name";
            // 
            // textBoxUser
            // 
            this.textBoxUser.Location = new System.Drawing.Point(123, 96);
            this.textBoxUser.Name = "textBoxUser";
            this.textBoxUser.Size = new System.Drawing.Size(164, 20);
            this.textBoxUser.TabIndex = 8;
            // 
            // textBoxDatabase
            // 
            this.textBoxDatabase.Location = new System.Drawing.Point(429, 64);
            this.textBoxDatabase.Name = "textBoxDatabase";
            this.textBoxDatabase.Size = new System.Drawing.Size(164, 20);
            this.textBoxDatabase.TabIndex = 6;
            // 
            // labelDatabase
            // 
            this.labelDatabase.AutoSize = true;
            this.labelDatabase.Font = new System.Drawing.Font("Microsoft Sans Serif", 8.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.labelDatabase.ForeColor = System.Drawing.Color.MidnightBlue;
            this.labelDatabase.Location = new System.Drawing.Point(324, 68);
            this.labelDatabase.Name = "labelDatabase";
            this.labelDatabase.Size = new System.Drawing.Size(53, 13);
            this.labelDatabase.TabIndex = 7;
            this.labelDatabase.Text = "Database";
            // 
            // groupBox2
            // 
            this.groupBox2.Controls.Add(this.buttonExaminar1);
            this.groupBox2.Controls.Add(this.textBoxPath1);
            this.groupBox2.Controls.Add(this.label2);
            this.groupBox2.Font = new System.Drawing.Font("Microsoft Sans Serif", 8.25F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.groupBox2.ForeColor = System.Drawing.Color.RoyalBlue;
            this.groupBox2.Location = new System.Drawing.Point(164, 32);
            this.groupBox2.Name = "groupBox2";
            this.groupBox2.Size = new System.Drawing.Size(613, 76);
            this.groupBox2.TabIndex = 22;
            this.groupBox2.TabStop = false;
            this.groupBox2.Text = "Información de archivo XML";
            // 
            // buttonExaminar1
            // 
            this.buttonExaminar1.BackColor = System.Drawing.Color.SkyBlue;
            this.buttonExaminar1.Location = new System.Drawing.Point(527, 32);
            this.buttonExaminar1.Name = "buttonExaminar1";
            this.buttonExaminar1.Size = new System.Drawing.Size(66, 23);
            this.buttonExaminar1.TabIndex = 18;
            this.buttonExaminar1.Text = "Examinar";
            this.buttonExaminar1.UseVisualStyleBackColor = false;
            this.buttonExaminar1.Click += new System.EventHandler(this.button1_Click);
            // 
            // textBoxPath1
            // 
            this.textBoxPath1.Location = new System.Drawing.Point(123, 33);
            this.textBoxPath1.Name = "textBoxPath1";
            this.textBoxPath1.ReadOnly = true;
            this.textBoxPath1.Size = new System.Drawing.Size(400, 20);
            this.textBoxPath1.TabIndex = 6;
            this.textBoxPath1.TextChanged += new System.EventHandler(this.textBox1_TextChanged);
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Font = new System.Drawing.Font("Microsoft Sans Serif", 8.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label2.ForeColor = System.Drawing.Color.MidnightBlue;
            this.label2.Location = new System.Drawing.Point(20, 37);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(54, 13);
            this.label2.TabIndex = 7;
            this.label2.Text = "XML Path";
            // 
            // tabPage2
            // 
            this.tabPage2.BackColor = System.Drawing.SystemColors.Control;
            this.tabPage2.BorderStyle = System.Windows.Forms.BorderStyle.FixedSingle;
            this.tabPage2.Controls.Add(this.groupBox1);
            this.tabPage2.Controls.Add(this.buttonTestConnection);
            this.tabPage2.Controls.Add(this.textBoxCadenaSolido);
            this.tabPage2.Controls.Add(this.label1);
            this.tabPage2.Location = new System.Drawing.Point(4, 22);
            this.tabPage2.Name = "tabPage2";
            this.tabPage2.Padding = new System.Windows.Forms.Padding(3);
            this.tabPage2.Size = new System.Drawing.Size(953, 394);
            this.tabPage2.TabIndex = 1;
            this.tabPage2.Text = "ConexionTest";
            // 
            // FormTestConnection
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(985, 456);
            this.Controls.Add(this.tabControl1);
            this.Name = "FormTestConnection";
            this.Text = "TestConnection_Jhan";
            this.groupBox1.ResumeLayout(false);
            this.groupBox1.PerformLayout();
            this.tabControl1.ResumeLayout(false);
            this.tabPage1.ResumeLayout(false);
            this.groupBoxDataProvider.ResumeLayout(false);
            this.groupBoxDataProvider.PerformLayout();
            this.groupBox2.ResumeLayout(false);
            this.groupBox2.PerformLayout();
            this.tabPage2.ResumeLayout(false);
            this.tabPage2.PerformLayout();
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.Label label7;
        private System.Windows.Forms.TextBox textBoxPath;
        private System.Windows.Forms.Button buttonExaminar;
        private System.Windows.Forms.GroupBox groupBox1;
        private System.Windows.Forms.Button buttonTestConnection;
        private System.Windows.Forms.TextBox textBoxCadenaSolido;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.TabControl tabControl1;
        private System.Windows.Forms.TabPage tabPage1;
        private System.Windows.Forms.TabPage tabPage2;
        private System.Windows.Forms.GroupBox groupBoxDataProvider;
        private System.Windows.Forms.Label labelBaseDatos;
        private System.Windows.Forms.ComboBox comboBoxDB1;
        private System.Windows.Forms.Button buttonGenConnection;
        private System.Windows.Forms.Label labelCommandTimeout;
        private System.Windows.Forms.TextBox textBoxCommTimeout;
        private System.Windows.Forms.Label labelConnectionTimeout;
        private System.Windows.Forms.TextBox textBoxConnTimeout;
        private System.Windows.Forms.TextBox textBoxPassword;
        private System.Windows.Forms.Label label3;
        private System.Windows.Forms.TextBox textBoxServerName;
        private System.Windows.Forms.Label label5;
        private System.Windows.Forms.Label labelServer;
        private System.Windows.Forms.TextBox textBoxUser;
        private System.Windows.Forms.TextBox textBoxDatabase;
        private System.Windows.Forms.Label labelDatabase;
        private System.Windows.Forms.GroupBox groupBox2;
        private System.Windows.Forms.Button buttonExaminar1;
        private System.Windows.Forms.TextBox textBoxPath1;
        private System.Windows.Forms.Label label2;
    }
}

