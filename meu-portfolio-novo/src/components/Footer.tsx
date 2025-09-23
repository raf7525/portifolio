import { FaGithub, FaLinkedin } from 'react-icons/fa';

// Primeiro, instale a biblioteca de ícones: npm install react-icons
export const Footer = () => {
    return (
        <footer className="bg-muted/50 py-8">
            <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
                <p className="text-sm text-muted-foreground">
                    &copy; {new Date().getFullYear()} [Seu Nome]. Todos os direitos reservados.
                </p>
                <div className="flex gap-6 mt-4 md:mt-0">
                    <a href="https://github.com/seu-usuario" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                        <FaGithub size={24} />
                    </a>
                    <a href="https://linkedin.com/in/seu-usuario" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                        <FaLinkedin size={24} />
                    </a>
                </div>
            </div>
        </footer>
    );
}