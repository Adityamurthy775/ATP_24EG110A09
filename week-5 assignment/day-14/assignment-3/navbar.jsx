function Navbar() {
  return (
    <div className="m-2 border-2 w-full flex items-center justify-between p-2 bg-gray-400">
      
      {/* Logo */}
      <img
        className="w-10 h-10 rounded-full"
        src="https://imgs.search.brave.com/FXX3ndDVJw5SNnAaPaX6x9okGIeCa4OIZ4Fq7RhDEiY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzg4LzA4/LzZjLzg4MDg2Yzk1/MWY1MTA4Y2RjZTM0/MDVhMzJiNzUxOWQ1/LmpwZw"
        alt=""
      />

      {/* Menu */}
      <div className="flex gap-6">
        <h1>Home</h1>
        <h1>About Author</h1>
        <h1>About the Project</h1>
      </div>

      {/* Icons */}
      <ul className="flex gap-4">
        <li>
          <img
            className="w-6"
            src="https://imgs.search.brave.com/vMmCNhzCRdhTAo8MKI9mcO5p4OfCuU-VTMfCl2c0ht0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/aWNvbnM4LmNvbS9z/Zi1ibGFjay8xMjAw/L2dpdGh1Yi5qcGc"
            alt=""
          />
        </li>
        <li>
          <img
            className="w-6"
            src="https://imgs.search.brave.com/2ZGpXafoSlm6P-l2o2WvPhRWaOcuVacJfeqscwsfxDw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4z/ZC5pY29uc2NvdXQu/Y29tLzNkL2ZyZWUv/dGh1bWIvZnJlZS1s/aW5rZWRpbi1sb2dv/LTNkLWljb24tcG5n/LWRvd25sb2FkLTEy/MjU3MjY5LnBuZw"
            alt=""
          />
        </li>
        <li>
          <img
            className="w-6"
            src="https://imgs.search.brave.com/hIpiDlBJGz7lOPWNeJskXyRqcv5ViHSGHhtiWu5a8d4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzcwLzk0/L2I0LzcwOTRiNDBm/ZDY3YWIyZmFjYjc2/ZTViNzlkOTBjYzBh/LmpwZw"
            alt=""
          />
        </li>
      </ul>
    </div>
  );
}

export default Navbar;