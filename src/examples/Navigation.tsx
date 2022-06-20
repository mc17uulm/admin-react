import {Navbar} from "../components/Navbar";
import {Icon} from "../components/Icon";
import {SearchBlock} from "../elements/SearchBlock";


interface NavigationProps {
    open: boolean,
    onToggle: () => void
}

export const Navigation = (props : NavigationProps) => {

    return (
        <Navbar>
            <Navbar.Nav>
                <Navbar.Link onClick={props.onToggle}>
                    <Icon className='fa fa-bars' />
                </Navbar.Link>
            </Navbar.Nav>
            <Navbar.Nav className='ml-auto'>
                <SearchBlock />
            </Navbar.Nav>
        </Navbar>
    )

}