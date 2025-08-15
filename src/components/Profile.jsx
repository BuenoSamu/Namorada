import profileImage from '../assets/ProfileTwo.jpg';

const Profile = ({ title, subtitle }) => {
    return (
        <>
            <div className='bg-white border-solid border-[1px] border-white shadow-md shadow-black rounded-full mt-[-89px]'>
                <img
                    src={profileImage}
                    alt="foto de Samuel e Isadora"
                    className="h-40 w-40 object-cover rounded-full"
                />
            </div>
            <h1 className='text-3xl mt-3'>{title}</h1>
            <p className='font-light text-lg'>{subtitle}</p>
        </>
    )
}

export default Profile