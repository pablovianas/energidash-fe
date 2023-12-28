import * as S from './style'

export const Header = () => {
    return (
        <S.Header>
            <h1>Dashboard</h1>
            <nav>
                <ul>
                    <li>
                        <a href={'/'}>Início</a>
                    </li>
                    <li>
                        <a href={'/library'}>Faça download das faturas</a>
                    </li>
                </ul>
            </nav>
        </S.Header>
    )
}