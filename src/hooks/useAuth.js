import { useSelector } from 'react-redux';
import {
    selectAuthError,
    selectIsRefreshing,
    selectUser,
} from '../redux/auth/auth-selectors';
import { selectIsLogin, selectToken } from '../redux/auth/auth-selectors';

export const useAuth = () => {
    const user = useSelector(selectUser);
    const isLogin = useSelector(selectIsLogin);
    const token = useSelector(selectToken);
    const error = useSelector(selectAuthError);
    const isRefreshing = useSelector(selectIsRefreshing);

    return { user, isLogin, token, error, isRefreshing };
};
