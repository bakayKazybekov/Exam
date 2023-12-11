import { useForm } from 'react-hook-form'
import s from '../styles.module.scss'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const scheme = yup.object({
    login: yup.string().required('Поле обязательно').min(3, 'Не менее 3-х').max(12, 'Не более 12-ти'),
    password: yup.string().required('Поле обязательно').min(8, 'Не менее 8-ми')
})



const Autorization = ({ setIsRegister, onSubmit }) => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(scheme)
    })

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={s.wrapper}>
            <label>
                <input type="text" placeholder="Введите логин/email" {...register('login')} />
                <span className={s.wrapper_error}>{errors?.login?.message}</span>
            </label>
            <label>
                <input type="password" placeholder="Введите пароль" {...register('password')} />
                <span className={s.wrapper_error}>{errors?.password?.message}</span>
            </label>
            <div>Нет аккаунта? <span className={s.wrapper_pass} onClick={() => setIsRegister(true)}>Зарегистрируйтесь</span></div>
            <button>Авторизоваться</button>
        </form>
    )
}

export default Autorization