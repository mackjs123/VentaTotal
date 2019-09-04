using Entidades;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Negocio.Negocio
{
	public class UsuarioDAO
	{
		public bool RegistrarUsuario(Usuario objUsuario)
		{
			bool exito = false;
			SqlConnection ConexionSql = new SqlConnection(ConfigurationManager.ConnectionStrings["ConexionSqlValida"].ToString());
			SqlCommand SqlComandoSql = new SqlCommand("upsUsuario", ConexionSql)
			{ CommandType = System.Data.CommandType.StoredProcedure };
			SqlComandoSql.Parameters.AddWithValue("pcNombreUsuario", objUsuario.sDni);
			SqlComandoSql.Parameters.AddWithValue("pcContraseña", objUsuario.sContraseña);
			SqlComandoSql.Parameters.AddWithValue("pcApellido", objUsuario.sApellido);
			SqlComandoSql.Parameters.AddWithValue("pcDireccion", objUsuario.sDireccion);
			SqlComandoSql.Parameters.AddWithValue("pdFechaNac", objUsuario.dFechaNacimiento);
			SqlComandoSql.Parameters.AddWithValue("pcTelefono", objUsuario.sTelefono);
			SqlComandoSql.Parameters.AddWithValue("pcNombre", objUsuario.sNombreUsuario);
			//if(objUsuario.sPerfil=="2")
			SqlComandoSql.Parameters.AddWithValue("piTipo", objUsuario.sPerfil);
			//else
			//SqlComandoSql.Parameters.AddWithValue("piTipo", objUsuario.sPerfil2);
			try
			{
				if (ConexionSql.State == System.Data.ConnectionState.Closed)
					ConexionSql.Open();


				if (Convert.ToUInt32(SqlComandoSql.ExecuteScalar()) == 1)
				{
					SqlComandoSql.ExecuteNonQuery();
					exito = true;
				}
				else
					exito = false;
			}
			catch (Exception)
			{

				throw;
			}
			finally
			{
				ConexionSql.Close();
			}
			return exito;
		}

		public Usuario LogeoU(string Usuario, string Contraseña)
		{
			Usuario objUsuario = new Usuario();

			SqlConnection ConexionSql = new SqlConnection(ConfigurationManager.ConnectionStrings["ConexionSqlValida"].ToString());
			SqlCommand ComandoSql = new SqlCommand("uspLogeo", ConexionSql)
			{ CommandType = System.Data.CommandType.StoredProcedure };
			ComandoSql.Parameters.AddWithValue("pcNombreUsuario", Usuario);
			ComandoSql.Parameters.AddWithValue("pcContraseña", Contraseña);
			try
			{
				if (ConexionSql.State == System.Data.ConnectionState.Closed)
					ConexionSql.Open();
				SqlDataReader dtr = ComandoSql.ExecuteReader();

				if (dtr.Read())
				{
					objUsuario.sNombreUsuario = dtr["Usuario"].ToString();
					objUsuario.sEstado = dtr["Estado"].ToString();
					objUsuario.sTipoUsuario = dtr["Tipo"].ToString();
				}
			}
			catch (Exception)
			{

				throw;
			}
			finally
			{
				ConexionSql.Close();
			}
			return objUsuario;

		}
	}
}
