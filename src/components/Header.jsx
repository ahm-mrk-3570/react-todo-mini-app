export default function Header({ changeThemeFun , theme }) {
  return (
    <header
      className="w-full h-15 bg-main-light rounded-xl shadow-sm shadow-main-dark text-black flex flex-row items-center justify-between px-3 py-2
      dark:bg-main-dark dark:text-white dark:shadow-main-light"
    >
      <div className="flex flex-row items-center justify-center h-full gap-3">
        <img src="logo.svg" className="h-10/12 bg-blend-multiply" />
        <h2 className="font-google-sans text-2xl">
          ToDo
          <span className="text-main-dark dark:text-main-light mx-1">
            MiniApp
          </span>
        </h2>
      </div>
      <div className="min-w-150 bg-[rgba(0,0,0,0.05)] shadow-sm shadow-gray-700 h-full flex items-center justify-center py-2 px-2 rounded-xl
        dark:bg-[rgba(255,255,255,.1)]">
        <img src={theme === 'light' ? '/dashboard/search-black.svg' : '/dashboard/search-white.svg'} className="w-6" />
        <input
          type="text"
          className="flex-1 flex-row items-center justify-start h-full font-google-sans outline-0 border-0 px-3 text-lg"
          placeholder="Search your task here..."
        />
      </div>
      <div className="flex flex-row items-center justify-center gap-3">
        <div className="p-2 bg-[rgba(0,0,0,0.15)] rounded-xl
          dark:bg-[rgba(255,255,255,.1)]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M22 10.5V12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2H13.5"
              stroke={theme === 'light' ? 'black' : 'white'}
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <circle cx="19" cy="5" r="3" stroke={theme === 'light' ? 'black' : 'white'} stroke-width="1.5" />
            <path
              d="M7 14H16"
              stroke={theme === 'light' ? 'black' : 'white'}
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M7 17.5H13"
              stroke={theme === 'light' ? 'black' : 'white'}
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <div className="p-2 bg-[rgba(0,0,0,0.15)] rounded-xl 
          dark:bg-[rgba(255,255,255,.1)]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14V12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12V14C22 17.7712 22 19.6569 20.8284 20.8284C20.1752 21.4816 19.3001 21.7706 18 21.8985"
              stroke={theme === 'light' ? 'black' : 'white'}
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M7 4V2.5"
              stroke={theme === 'light' ? 'black' : 'white'}
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M17 4V2.5"
              stroke={theme === 'light' ? 'black' : 'white'}
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M21.5 9H16.625H10.75M2 9H5.875"
              stroke={theme === 'light' ? 'black' : 'white'}
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <div onClick={changeThemeFun} className="p-2 bg-[rgba(0,0,0,0.15)] rounded-xl cursor-pointer
          dark:bg-[rgba(255,255,255,.1)]">
          <img src={theme === 'light' ? 'darkmode.svg' : 'lightmode.svg'} width="24px" />
        </div>
      </div>
    </header>
  );
}
