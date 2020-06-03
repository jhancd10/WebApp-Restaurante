using System;
using System.IO;
using System.Text;
using System.Xml;
using System.Xml.Serialization;

namespace SolidoTestConnection
{
    public class SolidoSettings
    {
        public SolidoSettings() {}

        public appConfigurationDatabaseConnection GetConfigurationDatabaseConnection(ConfigFilePath configfilepath)
        {
            XmlDocument _xmlDocument = new XmlDocument();
            _xmlDocument.Load(configfilepath.PathFileConfig);
            appConfiguration _appConfiguration = (appConfiguration)Deserialize(_xmlDocument, typeof(appConfiguration));
            return _appConfiguration.Database.DatabaseConnection;
        }

        private static object Deserialize(XmlDocument xmlDocument, Type type)
        {
            XmlSerializer _xmlSerializer = new XmlSerializer(type);
            string _xmlString = xmlDocument.OuterXml.ToString();
            byte[] _buffer = Encoding.UTF8.GetBytes(_xmlString);
            MemoryStream _memoryStream = new MemoryStream(_buffer);
            XmlReader _xmlReader = new XmlTextReader(_memoryStream);

            object _objSerializer = null;
            try {
                _objSerializer = _xmlSerializer.Deserialize(_xmlReader);
            }
            finally {
                _xmlReader.Close();
            }
            return _objSerializer;
        }
        
        private static XmlDocument Serialize(object objSerializer)
        {
            XmlSerializer _xmlSerializer = new XmlSerializer(objSerializer.GetType());
            XmlDocument _xmlDocument = null;
            MemoryStream _memoryStream = new MemoryStream();
            XmlTextWriter _xmlTextWriter = new XmlTextWriter(_memoryStream, new UTF8Encoding());
            _xmlTextWriter.Formatting = Formatting.Indented;
            _xmlTextWriter.IndentChar = ' ';
            _xmlTextWriter.Indentation = 5;

            try {
                _xmlSerializer.Serialize(_xmlTextWriter, objSerializer);
                _xmlDocument = new XmlDocument();
                string _xmlString = ASCIIEncoding.UTF8.GetString(_memoryStream.ToArray());
                _xmlDocument.Load(_xmlString);
            }
            finally {
                _xmlTextWriter.Close();
                _memoryStream.Close();
            }
            return _xmlDocument;
        }
        
        private static void Serialize(object objSerializer, string pathFile)
        {
            TextWriter _textWriter = new StreamWriter(pathFile);
            XmlSerializer _xmlSerializer = new XmlSerializer(objSerializer.GetType());

            try {
                _xmlSerializer.Serialize(_textWriter, _xmlSerializer);
            }
            finally {
                _textWriter.Close();
            }
        }
    }
}