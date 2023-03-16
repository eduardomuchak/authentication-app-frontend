import Logo from '../../assets/devchallenges.svg';
import FacebookIcon from '../../assets/Facebook.svg';
import GithubIcon from '../../assets/Github.svg';
import GoogleIcon from '../../assets/Google.svg';
import TwitterIcon from '../../assets/Twitter.svg';
import { Input } from '../../components/Input';
import { AiFillLock } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';

export function Register() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen p-6">
      <div className="w-full max-w-[480px] px-14 py-12 rounded-3xl border border-slate-300 flex flex-col ">
        <img src={Logo} alt="DevChallenges Logo" className="w-32" />
        <div className="flex flex-col py-7 gap-4">
          <h1 className="font-semibold text-lg text-grayPrimary leading-6">
            Join thousands of learners from around the world
          </h1>
          <h2 className="font-normal text-base text-grayPrimary leading-5">
            Master web development by making real-life projects. There are
            multiple paths for you to choose
          </h2>
        </div>
        <div className="flex flex-col gap-4">
          <Input
            label="Email"
            id="email"
            value=""
            icon={<MdEmail size={20} color={'#828282'} />}
          />
          <Input
            label="Password"
            id="password"
            value=""
            icon={<AiFillLock size={20} color={'#828282'} />}
          />
        </div>
        <button className="bg-bluePrimary text-white font-semibold text-base rounded-lg py-3 mt-6 transition-colors ease-out hover:bg-bluePrimaryDark cursor-pointer">
          Start coding now
        </button>
        <div className="w-full flex flex-col mt-8 gap-6">
          <span className="text-sm font-normal text-graySecondary text-center">
            or continue with these social profile
          </span>
          <div className="flex flex-row gap-5 w-full items-center justify-center">
            <img src={GoogleIcon} alt="Google Icon" />
            <img src={FacebookIcon} alt="Facebook Icon" />
            <img src={TwitterIcon} alt="Twitter Icon" />
            <img src={GithubIcon} alt="Github Icon" />
          </div>
          <span className="text-sm font-normal text-graySecondary text-center">
            Already a member?{' '}
            <span className="text-bluePrimaryLight cursor-pointer hover:text-bluePrimary">
              Login
            </span>
          </span>
        </div>
      </div>
      <div className="w-full max-w-[480px] flex flex-row justify-between mt-3">
        <span className="text-sm font-normal text-graySecondary">
          created by{' '}
          <span className="font-bold underline">
            Eduardo Muchak & Gabriel Peralta
          </span>
        </span>
        <span className="text-sm font-normal text-graySecondary">
          DevChallenges.io
        </span>
      </div>
    </div>
  );
}
