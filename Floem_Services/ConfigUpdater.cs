using System;
using System.IO;

namespace Floem_Services
{
    public class ConfigUpdater : IConfigUpdater
    {
        public void AddOrUpdateAppSetting<T>(string key, T value)
        {
            string filePath = Path.Combine(AppContext.BaseDirectory, "appSettings.json");
            string json = File.ReadAllText(filePath);
            dynamic jsonObj = Newtonsoft.Json.JsonConvert.DeserializeObject(json);

            var sectionPath = key.Split(":")[0];
            if (!string.IsNullOrEmpty(sectionPath))
            {
                var keyPath = key.Split(":")[1];
                jsonObj[sectionPath][keyPath] = value;
            }
            else
            {
                jsonObj[sectionPath] = value;
            }
            string output = Newtonsoft.Json.JsonConvert.SerializeObject(jsonObj, Newtonsoft.Json.Formatting.Indented);
            File.WriteAllText(filePath, output);
        }
    }
}
