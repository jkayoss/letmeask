import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';

export function Home() {
    return(
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="imagem sobre autenticação" />
                <strong>Crie salas de dúvidas ao vivo</strong>
                <p>Tire as dúvidas da audiência em tempo real</p>
            </aside>
            <main>
                <div>
                    <img src={logoImg} alt="logo do letmeask" />
                    <button>
                        <img src={googleIconImg} alt="logo do Google" />
                        Crie sua sala com o google
                    </button>
                    <div>ou entre em uma sala</div>
                    <form>
                        <input
                            type="text"
                            placeholder="digite o código da sala"
                        />
                        <button type="submit">
                            Entrar na sala
                        </button>
                    </form>
                </div>
            </main>
        </div>
    )
}