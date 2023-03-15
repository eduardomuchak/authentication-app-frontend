import Logo from '../../assets/devchallenges.svg';
import { Input } from '../../components/Input';
import { AiFillLock } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';

export function Login() {
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
      </div>
    </div>
  );
}
