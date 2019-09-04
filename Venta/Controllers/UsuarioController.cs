using BLL.BLL;
using Entidades;
using Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Venta.Controllers
{
	public class UsuarioController : Controller
	{
		// GET: Usuario
		public ActionResult Index()
		{
			return View();
		}

		public ActionResult Registrar()
		{
			return View();
		}
		[HttpPost]
		public JsonResult RegistrarUsuario(Usuario objUsuarios)
		{
			//objUsuario = new Usuarios();
			//bool result = false;
			try
			{
				bool exito = false;
				exito = UsuarioBLL.Instancia.RegistrarUsuario(objUsuarios);
				if (exito == false)
				{
					//TempData["ErrorMessage"] = "El Usuario ya existe";
					return Json(new
					{
						data = exito,
						status = (exito == false) ? Enumerador.Status.Success : Enumerador.Status.Error,
						message = "Ya existe un usuario con su Dni."
					});
					
				}
				else
				{
					//result = UsuarioBLL.Instancia.RegistrarUsuario(objUsuarios);

					//TempData["ErrorMessage"] = "1";

					return Json(new
					{
						data = exito,
						status = (exito != false) ? Enumerador.Status.Success : Enumerador.Status.Error,
						message = (exito != false) ? "El Usuario se registro correctamente." : "Ocurrio un Error."
					});
					
				}

			}
			catch (Exception ex)
			{

				throw new Exception(ex.Message);
			}
		}
	}
}