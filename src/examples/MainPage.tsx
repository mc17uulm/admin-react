import { Content } from "../components/Content";
import { Footer } from "../components/Footer";
import { Sidebar } from "../elements/Sidebar";
import { Header } from "../components/Header";
import {useBodyClass, useBodyStyle} from "../hooks/useBody";
import {Page, PageProps} from "./Page";
import {Navigation} from "./Navigation";
import {useSidebar} from "../hooks/useSidebar";

export interface MainPageProps extends PageProps {

}

export const MainPage = (props : MainPageProps) => {

    useBodyClass('sidebar-mini', 'layout-fixed');
    useBodyStyle('height: auto');
    const {open, handleToggle} = useSidebar(true);

    return (
        <Page title={props.title}>
            <div className='wrapper'>
                <Navigation
                    open={open}
                    onToggle={handleToggle}
                />
                <Sidebar>
                    <Sidebar.Brand link='/' image='' title='Dashboard' />
                </Sidebar>
                <div className='content-wrapper'>
                    <Header title={props.title}>

                    </Header>
                    <Content>
                        {props.children}
                    </Content>
                </div>
                <Footer>

                </Footer>
            </div>
        </Page>
    )

}