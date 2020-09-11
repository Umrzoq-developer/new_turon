import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import {Switch, Route, useHistory} from 'react-router-dom';
import axios from 'axios';

//pages
import Main from "./containers/Main/Main";
import AuthLogin from "./containers/AuthLogin/AuthLogin";
import Settings from "./containers/Settings/Settings";
import NavbarMain from "./components/Navbar";
import Branches from "./containers/Settings/Branches/Branches";
import SettingsExtraServices from "./components/SettingsExtraServices/SettingsExtraServices";
import SiderSettings from "./components/SiderSettings";


const App = ({loggedIn}) => {
    const [loader, setLoader] = useState(true);


    axios.defaults.headers.common['Accept'] = 'application/json';

    const history = useHistory();


    const token = localStorage.getItem('token');


    useEffect(() => {
        if (token && loggedIn) {
            history.push('/admin');
        } else {
            history.push('/')
        }

        setTimeout(() => {
            setLoader(false)
        }, 500)
    }, [history, token, loggedIn]);

    if (loader) {
        return (
            <div className='Preloader'>
                <svg className="preloaderLogo">
                    <use href="#logo" xlinkHref="#logo"></use>
                </svg>
            </div>
        )
    }

    return (
        <div className="App">
            {loggedIn && <NavbarMain/>}
            <Switch>
                <Route exact path='/admin' component={Main}/>
                <Route exact path='/' component={AuthLogin}/>
                <Route exact path='/settings' component={Settings}/>
                <Route exact path='/settings/branches'>
                    <div className='Settings settingsBranches'>
                        <div className='structure'>
                            <SiderSettings/>
                            <Branches/>
                        </div>
                    </div>
                </Route>
                <Route exact path='/settings/extraServices' component={SettingsExtraServices}>
                    <div className='Settings settingsBranches'>
                        <div className='structure'>
                            <SiderSettings/>
                            <SettingsExtraServices/>
                        </div>
                    </div>
                </Route>
                {/*<Route exact path='/admin' component={Main}/>*/}
                {/*<Route exact path='/' component={AuthLogin}/>*/}
                {/*<Route exact path='/settings' component={Settings}/>*/}
            </Switch>
        </div>
    );
};

const mapState = (state) => {
    return {
        loggedIn: state.auth.loggedIn,
    }
};

export default connect(mapState)(App);
