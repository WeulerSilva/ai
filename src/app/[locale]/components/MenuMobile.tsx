export function MenuMobile({ MenuMobileOpen, setMenuMobileOpen }: { MenuMobileOpen: boolean; setMenuMobileOpen: (open: boolean) => void; }) {
    return (
        <div className="md:hidden">
            <button 
                onClick={() => setMenuMobileOpen(!MenuMobileOpen)} 
                className="text-white">
                {MenuMobileOpen ? (
                    <svg // Ícone de "X"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="w-8 h-8"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                ) : (
                    <svg // Ícone de hambúrguer
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="w-8 h-8"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                )}
            </button>
        </div>
    );
}
