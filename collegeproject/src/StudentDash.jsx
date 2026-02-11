import { Outlet, useNavigate, useLocation } from "react-router-dom";
import college_logo from './assets/college_logo.png';

const StudentDash = () => {
    const nav = useNavigate();
    const location = useLocation();
    const active = location.pathname.split('/').pop() || '';

    return (
        <>
        <style>
            {
                `
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }

                body {
                    font-family: 'Segoe UI', system-ui, sans-serif;
                    background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
                    min-height: 100vh;
                    color: #fff;
                }

                /* Main Container */
                .app-container {
                    display: flex;
                    flex-direction: column;
                    min-height: 100vh;
                }

                /* Main Navigation - Logo + College Name + Links + Logout */
                .main-nav {
                    background: rgba(255, 255, 255, 0.15);
                    backdrop-filter: blur(25px);
                    padding: 1rem 2rem;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                    position: sticky;
                    top: 0;
                    z-index: 100;
                }

                .nav-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    gap: 2rem;
                }

                /* Logo + College Name - Left Side */
                .logo-section {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    padding-left
                }

                .logo {
                    height: 45px;
                    width: auto;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
                }

                .logo:hover {
                    transform: scale(1.05) rotate(5deg);
                }

                .college-name {
                    font-size: 1.3rem;
                    font-weight: 700;
                    background: linear-gradient(135deg, #00d4ff, #fff);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }

                /* Centered Nav Links */
                .nav-links {
                    display: flex;
                    gap: 3rem;
                    align-items: center;
                    flex: 1;
                    justify-content: center;
                }

                .nav-link {
                    position: relative;
                    padding: 0.75rem 2rem;
                    font-size: 1.1rem;
                    font-weight: 600;
                    color: rgba(255, 255, 255, 0.9);
                    cursor: pointer;
                    transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                    border-radius: 12px;
                    letter-spacing: 0.5px;
                    text-transform: uppercase;
                    font-size: 0.95rem;
                }

                .nav-link:hover {
                    color: #fff;
                    transform: translateY(-3px) scale(1.05);
                    background: rgba(255, 255, 255, 0.2);
                    box-shadow: 0 8px 25px rgba(255, 255, 255, 0.15);
                }

                .nav-link::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 50%;
                    width: 0;
                    height: 3px;
                    background: linear-gradient(90deg, #00d4ff, #0099cc);
                    transition: all 0.4s ease;
                    transform: translateX(-50%);
                    border-radius: 2px;
                }

                .nav-link:hover::after,
                .nav-link.active::after {
                    width: 85%;
                }

                .nav-link.active {
                    color: #00d4ff;
                    background: rgba(0, 212, 255, 0.25);
                    box-shadow: 0 6px 20px rgba(0, 212, 255, 0.3);
                    transform: translateY(-2px);
                }

                /* Logout Button */
                .logout-container {
                    display: flex;
                    align-items: center;
                }

                .logout-btn {
                    background: linear-gradient(135deg, #ff416c, #ff4b2b);
                    color: white;
                    border: none;
                    padding: 0.75rem 1.5rem;
                    font-weight: 600;
                    font-size: 0.9rem;
                    border-radius: 25px;
                    cursor: pointer;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    box-shadow: 0 4px 15px rgba(255, 65, 108, 0.4);
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }

                .logout-btn:hover {
                    transform: translateY(-2px) scale(1.05);
                    box-shadow: 0 8px 25px rgba(255, 65, 108, 0.6);
                    background: linear-gradient(135deg, #ff4b2b, #ff416c);
                }

                .logout-btn:active {
                    transform: translateY(0) scale(0.98);
                }

                /* Outlet Content */
                .outlet-container {
                    flex: 1;
                    max-width: 1200px;
                    margin: 2rem auto;
                    padding: 2rem;
                    opacity: 1;
                    transform: translateY(0);
                    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
                    animation: fadeSlideIn 0.6s ease-out;
                }

                @keyframes fadeSlideIn {
                    from {
                        opacity: 0;
                        transform: translateY(25px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                /* Responsive */
                @media (max-width: 768px) {
                    .nav-container {
                        flex-direction: column;
                        gap: 1rem;
                    }
                    
                    .nav-links {
                        gap: 1.5rem;
                        order: 3;
                    }
                    
                    .logo-section {
                        order: 1;
                    }
                    
                    .logout-container {
                        order: 2;
                    }
                }

                @media (max-width: 480px) {
                    .nav-links {
                        flex-direction: column;
                        gap: 0.8rem;
                    }
                }
                `
            }
        </style>
            <div className="app-container">
                <nav className="main-nav">
                    <div className="nav-container">
                        <div className="logo-section">
                            <img src={college_logo} alt="College Logo" className="logo"  onClick={()=>nav('/studentwelcome/:studentname')}/>
                            <h2 className="college-name">New College</h2>
                        </div>

                        <div className="nav-links">
                            <div 
                                className={`nav-link ${active === 'taketest' ? 'active' : ''}`}
                                onClick={() => nav('/taketest')}
                            >
                                Taketest
                            </div>
                            <div 
                                className={`nav-link ${active === 'stdanalysis' ? 'active' : ''}`}
                                onClick={() => nav('/stdanalysis')}
                            >
                                StudentAnalysis
                            </div>
                        </div>
                        
                        {/* Logout - Right */}
                        <div className="logout-container">
                            <button className="logout-btn" onClick={() => nav('/login')}>
                                Log Out
                            </button>
                        </div>
                    </div>
                </nav>

                {/* Content Area */}
                <main className="outlet-container">
                    <Outlet />
                </main>
            </div>
        </>
    );
};

export default StudentDash;
