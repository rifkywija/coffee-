

import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-black">
      <div className="container mx-auto flex flex-wrap items-center justify-between bg-black p-4 text-amber-800">
        <div className="flex items-center flex-shrink-0 mr-6">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAhFBMVEUAAAD////MzMzh4eH8/Pzq6urCwsLJyclMTEz29vaZmZmpqamysrL5+flwcHDW1tYxMTGRkZFUVFSgoKAuLi64uLjk5ORmZmZgYGCFhYU2Njbw8PBaWlp3d3fd3d1+fn4XFxdDQ0MmJiY8PDxERESVlZULCwsUFBSLi4tra2sfHx8oKCjeCrmbAAALYUlEQVR4nO2cC3uiPBOGkyDhTAoYDnJS8ez//3/fJAFrW91t31Yp++W+rl2Dos3DJJnJJICQRqPRaDQajUaj0Wg0Go1Go9FoNBqNRqPRaDQajUaj0Wg0Go1Go9FoNBrNr6Zbj12DRxN6Y9fg0Rzw2DV4NBQXY1fhsewDbI1dh8eSYFyOXYeHssIYO2NX4qGUoJCNXYmHsLTlSwMC/82Rxi7n4oUJgcbYlXkEK8zFCxECnfnYtXkEKT7C/1wInMVQihZj1+iHKTDeI5QJgbiC4zWOx67SD8OkCzSEwFocN9Kk/xAnB6cILYRAXxxTjFdj1+lnecFCYTj4ek8e/lPMZ9hEqAaFWzhy4TUcu0o/jYlnCOUwjs7ny+PQVv8d5lmUYmxboKyZy+GUIu61/8ho+lJQR3Q/jL3YNbE/b4mwIBdv4tTLx67fdwkhSHOIm81hcAF3scUHEXnLJMZp0/rgPRxvyq7fNnDgVzt1YIG6pQi5VfimmLdwCaabtYmxMNkFdzZHXNjw7VkbgslTq/WDGOXbrOE6Rx0o/DDAtPhYMMM6vH//t7M7pTcGy5uZUlbJOVU5tcGV26dPnpnFWNE9tEI/jkk/e6YdNFGYBJObGae4/FRotvdERIdQN8N4Wu4Rwhhsbl/+clZORTywF0WIx/lfzv5dpNgStTeS7E7SYr8qaCn7nyN7bDi1HFyKA157plBgEv8QxvMlsId/p1XeupQ5eEApPE5tTpViamHTO2xJMCiZBYETXI5eKWXcc5ieDTGvE7Bh4/vcYmnpzD5qU8iRRiQap9UPG8woLr0isWRnmznODesppOmEU8zGrvSXYHgmbThrqAc2NMvgrg2l6dLJLdhw7AgbRi5xlAmduxJFkl/MjyeW2ohgKt8m0EIb7nPKjD/0ww6dxHLG1FIbNgz+MD+MPOX0ZsFdG5YigzO1YUbg4Kb2S+ENOSUN9MN7JvRktn87dn2/jqi2CTZsAmXDiwVTm0WLmF8UrtAMsylmiGH4594MB4xLG166YbpDMnFx6I8ZKujUpoY94MLLxPVl4IZfu+EZFSo1Q9RxNXI1v0EFEWeKHcvnshv2AmHE5I38HIxMj+eRK/k9oKtRzzKlBS8hDTRIH6sV73TyC1BL4SccZhGISi8jKRK5J5VeG6ZVu9Fq+G2gHc4spobSXqCIspdvZ/OHeL0cqYLf5yiNyAzzMhmUXdB7Tcms66ZE1cTitWvC9+5dTXIDNY1YuwZYdY1ad9RKfo/ceaswkO+2cmubDcMra6FAJ7zBJkM78laiWolJxWIws0KZvzhNds1bLBk6B5Sb1wpVg2zB8e+GRBydVvbilUXfLpN5br0qVNPcxdXmvS2e6grbjl2GF+/g0qafIcqQbUFR2A+gyZR3nrTNq+0cc5gDc/D0PAZfedyhXW0GEw27e7rWb96NpqLhgllLxj1izsopO4pXNnl42CaeINkewiyeasfTaDSaH2fXdTfLX6br9jffP3XjjrmuyIX2aykJ+DxTxSimpIzAR5SqWCEU9cXTa/ESbMcphAOJLKYlTP47s1RHPvxoKqfKc/kV8uScVaKct6xBn/uUEnunnsis93BKfzI+qb2XArv/ne4qIA/EzHjT5/et1z/w0mex6mcKPEFk4npq/wTUydn6/TogxNaUUquWChtRtKVCAkW6lAplcWiAcHX41hG7M0Wa3JA31QiFFfxQxFVSABSalA2TyydxlJfdwsFZ7lNv5TU/SYXDXMgepkpS4WAzF7/dxW6IC9O/ea3QlcuJDM/WUiGVWxmeuVkjlItiHM9e5DJTLnKEchb0RmHSF5NXWe67HHAqtw87xnuFnrwoFM/mg8LiuetvSiHF+LsKmVDS5xN/ocLFZrP7pMJ7rbSG/jbsD5MKu3sK2zEUKt4pbOIqF94RFPpQFNUHhT7MLZZIKhTF12w+gSFqqYoOLuGjOwqXYO3N8wT+SWHvLAZvIdpk7y3O6OItXgOEvQkj8q5XqLihUKaUn7rx7csKZ7MZXiuFongVAq3LoWU76rNbCmWa4KmbF//USvNjuFIKeXYM10ph/rKQLlB4gflicb1WsTb77A30w9NLfFNh6nnF7djuUSiFSdqcvzmWCs6OarZ/HkufzOAPv+0tujiWvyZO/ZUKv+vxz4HchKG2YvwqhbnsOgwHJ+mottJ179DX/WEpYppYdcRrhZEMBVMcLEdSuIPRWywNCjniVh8RGMuVs3sKy3725PbFYfYEDd2ggboC1wrB8c9og+Vi6igK5Z1oUAk5PkZXE6J7Ct/PngbnvVa7aOVYGojFt2H25KnUqvgDL3gMhShnZUn7heojK02qvJVFhptgOkLavtgSS0CWcGX64sW3nXyzbNSJlIC2BSGR+hL8KJd/4GyRcRLHuzvlL3PP0U14gV+j0fwQW2a8o1lmEc1cP/e8nEdfna6GEYcvVr6b0ShbNu9/nD17fyZM6wzyDlzvGrdgxbYJuVU1/ZkbFib+kR1570ZUlm3OsoLurLawhhGzqSweNlHBDm6zr/H7Hzew+dzJBbnx4IeSICsnXm20LrFJ1E+vsgSRHFFEe6+tIoI482gUVtbG7+O5wrNi5rZG7bHcQuTjtvb4ufdidvjGLZEJnseUHtm2ZRWHxqbigZwtVhRZSuE+8bCXCGPwE41sN0eWsukpjbl/bNqEhZTG80s4dMXhqffvhbf2wCygXs2R+jnLPM/mL6qWOYk5A4VMGs8u1b2UVZpzyzZDz1I2tI5kYyWFkXN6bOBa3ViyWD01E5X1cyD6JpyyAtR6pGJ15Hd0vV3Ka76PX+YL6H0rZdK0kTu/TvHiZCN70z97qOB1SzfksCUV8VoUvHkcmKvad/XUW052M6L+6BuFMbRdIyPbmi4s5K5vNaquRe3H96t07+cRj1nl0cyA9vimk7vqcpLZU8O4FpPKPrxPf7EZCjm00jmdJ6vP5+BXJkpOPHa9mNmch2j2bpeUgQ92RZ67MgMSRX7PWr590wabktzoeLzNsuVnL/nGOIWdO+d2csisjIDN7LcnLMVCVNDe/vbj2Of1x+ZG8XkBo0VdtHn+2f14mTHfz7POPfGF17bG4nxjNtjV+XO94V324LQiL6mTqug+eTP3gS3Fei9I3Hlz34vA1f4SMbcpcAHtlK688/FvNwFLTv2Meb/I7WLhHYn8hV8NAb9sLqyze/7MU8siNnS5fbex28yEWOK3P0ZiWUIt0zU9tX/dZ7AryPXo0cUwRiGzXD6ucj9DhS0YPPZ8bv/5cbqbhEp93bD78hQbGbKmcBNNjX0Umsj7w1pYV3ue239uDiPSLg2R/2yn999wsYegR7UfXf5+EedhfYja3lBrMHPUKFufzAx5eCK7MT2wYpzGXXbx+bcfmLQtRHBuJcJzVmkMFpzM83g8cNpn44Aug41VCANen7KBQfRoigg7FlOGg3GGcGEyAkUanO0QFylghfAArYg2ax/sKhdQRWabGKrbLQkX+8KjMar6X8mwE0Nn7J13JEZNX6wvkRYCARnOCtFJLad8BXTB2JnY/fjoJRVtzjdktWMw3EI2SUrPYn4PJT7ErZnhi3adfioG+lX42KzQgrJ+Zl51opcRodD3Id6x1X6MkNEFqszJ3awugXpbHeq4kbyOMZWw6dnuY+tFYnA4wxLXYppsMRZ79ArWJB9Tc3HSMLHtiE7yXvWBXYIxg/Fy11KjoUmd2ZvVxs7qhDYGbaF31gzjZOKLTJEJhpR3qcVtwikhhPJEPhjyFIL5zEm5iDtU4kmQqV9cheJru/DF5mA+1f73gdhlIq8TlGnTNOrG54C5077l6SNdfvA4ZYxR7h3yiT1/TqPRaDQajUaj0Wg0Go1Go9FoNBqNRqPRaDQajUaj0Wg0Go1Go9FoNBrN/xH/A8mjrmVCicnvAAAAAElFTkSuQmCC"
            className="h-10 w-10"
            alt="Logo"
          />
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-amber-800 border-amber-800 hover:text-white hover:border-white">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20">
              <title>Menu</title>
              <title>Home</title>
              <title>About</title>
              <title>Contact</title>
              <title>OurTeam</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <Link legacyBehavior href="/" passHref>
              <a className="block mt-4 lg:inline-block lg:mt-0 text-amber-800 hover:text-white mr-4">
                Home
              </a>
            </Link>
            <Link legacyBehavior href="/jumbotron" passHref>
              <a className="block mt-4 lg:inline-block lg:mt-0 text-amber-800 hover:text-white mr-4">
                About
              </a>
            </Link>
            <Link legacyBehavior href="/service" passHref>
              <a className="block mt-4 lg:inline-block lg:mt-0 text-amber-800 hover:text-white mr-4">
                Service
              </a>
            </Link>
            <Link legacyBehavior href="/contact" passHref>
              <a className="block mt-4 lg:inline-block lg:mt-0 text-amber-800 hover:text-white">
                Contact
              </a>
            </Link>
            <Link legacyBehavior href="/ourteam" passHref>
              <a className="block mt-4 p-4 lg:inline-block lg:mt-0 text-amber-800 hover:text-white">
                OurTeam
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
