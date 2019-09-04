using Negocio.Negocio;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.BLL
{
	public class SessionesBLL
	{
		private static SessionesBLL _instancia = null;
		SessionesDAO seD = new SessionesDAO();

		#region
		public static SessionesBLL Instancia
		{
			get
			{
				if (_instancia == null)
					_instancia = new SessionesBLL();

				return _instancia;
			}
		}
		#endregion

		public void DestroySesion()
		{
			seD.DestroySesion();

		}
	}
}
