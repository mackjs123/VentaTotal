using BLL.BLL;
using Entidades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Venta.Controllers
{
    public class LogeoController : Controller
    {
        // GET: Logeo
        public ActionResult Index()
        {
            return View();
        }

		public ActionResult InicioSesion(Usuario Us)
		{
			try
			{
				if (Us.sNombreUsuario == null || Us.sContraseña == null)
				{
					TempData["ErrorMessage"] = "Uno o mas campos estan vacios";
					return View("Index");
				}
				else
				{
					Usuario objUs = UsuarioBLL.Instancia.Logeo(Us.sNombreUsuario, Us.sContraseña);
					//if(objUs.sNombreUsuario!=null && objUs.sNombreUsuario!="")
					if (objUs.sNombreUsuario.Length > 2)
					{
						Usuario result = objUs;
						//TempData["NombreUsuario"] = result.sNombreUsuario;
						Session["NombreUsuario"] = result.sNombreUsuario;
						Session["TipoUsuario"] = result.sTipoUsuario;
						return RedirectToAction("Index", "Principal");
					}
					else
					{
		
						TempData["ErrorMessage"] = "Incio de Sesión no valido";
						return View("Index");

					}
				}
			}
			catch (Exception ex)
			{

				throw new Exception(ex.Message);
			}

		}
	}

}