import React from 'react';

export default function Footer() {
    return (
        <footer id="sticky-footer" className="flex-shrink-0 py-4 bg-dark text-white-50" >
            <div className="container text-center">
                <small>Copyright &copy; Paketshop Manager
                    <img src={process.env.PUBLIC_URL + 'images/logo.png'} alt='logo' height='2%' width='2%' style={{marginLeft: '0.5%'}}/>
                </small>
            </div>
        </footer>)
}