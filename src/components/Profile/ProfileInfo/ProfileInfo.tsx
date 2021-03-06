import s from './ProfileInfo.module.css';

const ProfileInfo: React.FC = () => {
    return (
        <div className={s.content}>
            <img
                src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"/>
            <div className={s.discriptionBlock}>
                ava
            </div>
        </div>
    )
}

export default ProfileInfo;