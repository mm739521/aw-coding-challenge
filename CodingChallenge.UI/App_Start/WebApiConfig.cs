using CodingChallenge.UI.App_Start;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http.Headers;
using System.Web.Http;

namespace CodingChallenge.UI
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
			StructuremapWebApi.Start();

			config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );

            config.Formatters.JsonFormatter.SupportedMediaTypes
                .Add( new MediaTypeHeaderValue( "text/html" ) );
        }
    }
}
