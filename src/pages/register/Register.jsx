import React,{useState} from 'react';
import classes from "./style.module.scss";
export const Register = () => {

    const [form, setForm] = useState({
        name:'',
        comment: '',
        login:'',
        password:'',
        isAgree: false
    })


    const onChange = (e) => {
        console.log(e.target.name)
    setForm({...form,[e.target.name]: e.target.value})
    }

    const onSubmit = (e) => {
        e.preventDefault()


    }



    return (
        <div className={classes.register}>
            <div className={classes.register__title}>
                регистрация
            </div>
            <div className={classes.register__subTitle}>
                Зарегистрируйтесь с помощью вашей почты:
            </div>
           <form onSubmit={onSubmit} >
                <input
                className={classes.regiser__input}
                value={form.name}
                onChange={onChange}
                name="name"
                placeholder="Ваше имя"
                />
               <input
                   className={classes.regiser__input}
                   value={form.comment}
                   onChange={onChange}
                   name="comment"
                   placeholder="Введите комментарий"
               />
               <input
                   className={classes.regiser__input}
                   value={form.login}
                   onChange={onChange}
                   name="login"
                   placeholder="Введите логин"
               />
               <input
                   className={classes.regiser__input}
                   value={form.password}
                   onChange={onChange}
                   name="password"
                   placeholder="Введите пароль"
               />
               <input
                   className={classes.regiser__checkbox}
                   value={form.isAgree}
                   onChange={onChange}
                   name="isAgree"
                   type="checkbox"
               />
               <button
                   disabled={!form.isAgree}
                   type="submit"
               >регистрация</button>
           </form>
        </div>
    );
};

