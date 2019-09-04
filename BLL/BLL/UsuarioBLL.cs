using Entidades;
using Negocio;
using Negocio.Negocio;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.BLL
{
	public class UsuarioBLL
	{
		private static UsuarioBLL _instancia = null;
		UsuarioDAO usDAO = new UsuarioDAO();
		#region
		public static UsuarioBLL Instancia
		{
			get
			{
				if (_instancia == null)
					_instancia = new UsuarioBLL();

				return _instancia;
			}

		}
		#endregion
		public bool RegistrarUsuario(Usuario objU)
		{
			try
			{
				return usDAO.RegistrarUsuario(objU);
			}
			catch (Exception ex)
			{

				throw new Exception(ex.Message);
			}
		}

		public Usuario Logeo(string sUsuario, string sContraseña)
		{
			try
			{
				return usDAO.LogeoU(sUsuario, sContraseña);
			}
			catch (Exception ex)
			{

				throw new Exception(ex.Message);
			}
		}
	}
}
