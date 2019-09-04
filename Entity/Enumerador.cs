using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entity
{
    public class Enumerador
    {
		public enum Status
		{
			Warning = -2,
			Error = -1,
			Empty = 0,
			Success = 1,
			Waiting = 2,
		}

	}
}
