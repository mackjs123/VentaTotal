using BLL.BLL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Security;

namespace Venta.Controllers
{
    public class SessionController : Controller
    {
		SessionesBLL sesion = new SessionesBLL();
		// GET: Session
		public ActionResult Index()
        {
            return View();
        }

		public ActionResult Close()
		{
			//Session.Clear();
			//Session.Abandon();
			//Session.RemoveAll();
			//Response.Cookies.Add(new HttpCookie("ASP.NET_SessionId", ""));
			sesion.DestroySesion();
			FormsAuthentication.SignOut();
			return RedirectToAction("Index", "Logeo", true);

		}
	}
}