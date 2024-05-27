import { useAuth } from '../../../hooks/useAuth';
import { profile_1x, profile_2x } from 'assets/images/profile';

import scss from './Profile.module.scss';

const Profile = () => {
    const { user } = useAuth();

    return (
        <section className={scss.profile}>
            <p>{user.name}</p>

            <div className={scss.profileWrapper}>
                <img
                    src={profile_1x}
                    srcSet={`${profile_1x} 1x, ${profile_2x} 2x`}
                    alt={user.name}
                    className={scss.image}
                />
            </div>
        </section>
    );
};

export default Profile;
