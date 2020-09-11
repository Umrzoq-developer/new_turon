import React, {useState} from 'react';
import {connect} from 'react-redux'
import {authLogin} from "../../redux/auth/authAction";
import {useHistory} from 'react-router-dom';
import Form from "antd/es/form/Form";
import Input from "antd/es/input";
import UIButton from "../../components/Button";
import './formLogin.scss'

function AuthLogin({loading, authLogin, error, loggedIn}) {



    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    const [show, setShow] = useState(true);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    const handleSubmit = (e) => {
        // console.log(e);
        authLogin(e.username, e.password);
        if (!loggedIn) {
            history.push('/');

        } else {
            history.push('/admin')
        }
        setUsername('');
        setPassword('');
    };

    console.log(username, password);

    const handleClick = () => {
        setShow(!show)
    };

    return (
        <Form
            className='formAuth'
            onFinish={handleSubmit}
            onFinishFailed={onFinishFailed}
        >
            <svg className="logo">
                <use href="#logo" xlinkHref="#logo"/>
            </svg>
            <div className="containerFormLogin">
                <h5>Войти в систему</h5>
                {
                    error && <div className="alert alert-danger" role="alert">Не верный логин или пароль</div>
                }
                <Form.Item
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Пожалуйста, заполните поле!',
                        },
                    ]}
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                >
                    <Input
                        name="username"
                        type="text"
                        placeholder='Логин'
                    />
                </Form.Item>

                <div className="passwordAuth">
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Пожалуйста, заполните поле!',
                            },
                        ]}
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    >
                        <Input
                            name="password"
                            type={show ? "password" : "text"}
                            placeholder='Пароль'
                        />
                    </Form.Item>

                    {
                        show
                            ?
                            <svg className="show" onClick={handleClick}>
                                <use href="#show" xlinkHref="#show"></use>
                            </svg>
                            :
                            <svg className="show" onClick={handleClick}>
                                <use href="#hide" xlinkHref="#hide"></use>
                            </svg>
                    }
                </div>


                <Form.Item>
                    <UIButton name='Войти' loading={loading} myClass='buttonAdd' typeName='primary'
                              actionType='submit' disabled={loading} />
                </Form.Item>
            </div>
        </Form>
    );
}

const mapState = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        loggedIn: state.auth.loggedIn
    }
};

export default connect(mapState, {authLogin})(AuthLogin);