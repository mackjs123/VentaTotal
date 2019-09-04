using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;

namespace Negocio.Negocio
{
	public class SessionesDAO
	{
		public void DestroySesion()
		{
			HttpContext.Current.Session.Clear();
			//HttpCookie.Equals.DestroySesion();
			HttpContext.Current.Session.Abandon();
			HttpContext.Current.Session.RemoveAll();


		}
	}
}
