﻿using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using System.Web;

namespace ChiengPlannerVue.Utils
{
    public static class ObjectExtensions
    {
        public static string ToJson(this object obj)
        {
            var settings = new JsonSerializerSettings
            {
                ContractResolver = new CamelCasePropertyNamesContractResolver(),
                NullValueHandling = NullValueHandling.Ignore,
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore
            };
            return JsonConvert.SerializeObject(obj, settings);
        }
    }
}
