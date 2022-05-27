import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa'; //íconos de Font Awesome

const Footer = () => {

  return (
    <>
        <footer className="footer footer-center p-10 text-neutral-content bg-paleta-colorFondoFooter">
            <div className="mb-[-1rem]">
                <span className="footer-title">REDES SOCIALES</span> 
                <div className="grid grid-flow-col gap-4">
                    <a className="text-[2rem]" href="https://github.com/gabrielp92/tienda-reactjs" target="_blank" title="GitHub">
                        <FaGithub/>
                    </a>
                    <a className="text-[2rem]" href="https://www.instagram.com/_gabriel.paez/" target="_blank" title="Instagram">
                        <FaInstagram/>
                    </a>
                    <a className="text-[2rem]" href="https://www.linkedin.com/in/gabriel-paez/" target="_blank" title="Linkedin">
                        <FaLinkedin/>
                    </a>
                </div>
            </div>
            <div>
                <p className="font-bold">Tienda Shop Sport<br/>Punta Alta, Buenos Aires, Argentina</p>
                <p>Copyright © 2022 - All right reserved</p>
            </div> 
        </footer>
    </>
  )
}
export default Footer