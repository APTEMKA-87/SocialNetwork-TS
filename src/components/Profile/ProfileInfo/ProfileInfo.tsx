import s from './ProfileInfo.module.css';
import {Preloader} from '../../common/Preloader/Preloader';
import {ProfileType} from '../../../redux/profileReducer';
import ProfileStatus from './ProfileStatus'

type PropsType = {
    profile: ProfileType | null
    status: string
}
const ProfileInfo: React.FC<PropsType> = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div className={s.content}>
            {/*<img
                src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"/>*/}
            <div className={s.discriptionBlock}>
                <img src={props.profile.photos.large!== null ? props.profile.photos.large : ''} alt={'#'}/>
                <ProfileStatus status={props.status}/>
            </div>
        </div>
    )
}

export default ProfileInfo;