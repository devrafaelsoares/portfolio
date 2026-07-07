import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import '@/assets/styles/components/_footer.scss';

export default function index() {
    const year = new Date().getFullYear();

    return (
        <footer className='container__footer'>
            <div className='footer__row--bottom'>
                <div className='row--bottom__copyright'>
                    <span className='copyright__text'>
                        © {year} — <strong>Rafael Henrique</strong> · devrafaelsoares
                    </span>
                </div>
                <div className='row--bottom__social-media'>
                    <div className='social-media__container'>
                        <a
                            href='https://github.com/devrafaelsoares'
                            target='_blank'
                            rel='noreferrer'
                            title='GitHub'
                            className='container__icon'
                        >
                            <FaGithub className='icon' />
                        </a>
                        <a
                            href='https://www.linkedin.com/in/rafael-henrique-soares-de-freitas-2a667a23a/'
                            target='_blank'
                            rel='noreferrer'
                            title='LinkedIn'
                            className='container__icon'
                        >
                            <FaLinkedin className='icon' />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
// EOF
