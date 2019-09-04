using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entidades
{
    public class Usuario
    {
		public int iCodUsuario { get; set; }


		public string sNombreUsuario { get; set; }

		public string sContraseña { get; set; }

		
		public string sConfirmarContraseña { get; set; }

		public bool RememberMe { get; set; }

		public string sEstado { get; set; }

		public string sTipoUsuario { get; set; }


		public string ErrorMessage { get; set; }

		public string ErrorLogeo { get; set; }

	
		public string sApellido { get; set; }

		public string sDireccion { get; set; }
	
		public DateTime dFechaNacimiento { get; set; }

		public string sTelefono { get; set; }
	
		public string sDni { get; set; }

		public string  sPerfil { get; set; }

		public string  sPerfil2 { get; set; }
	}
}
