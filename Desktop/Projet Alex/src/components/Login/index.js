import './styles.scss';
import Form from 'react-validation/build/form';

export default function Login () {
    return (
        <div className="login_container">
            <div className="login">
                <Form className="login_form" action="" method="post">
                    <h1>Se connecter</h1>
                    <div className="login_form_input">
                    <label htmlFor="email" className="login__email">Email</label>
                        <input type="text" name="email"/>
                    </div>
                    <div className="login_form_input">
                    <label htmlFor="password" className="login__password">Mot de passe</label>
                        <input type="password" name="password"/>
                    </div>
                    </Form>
                </div>
            </div>
    )
}