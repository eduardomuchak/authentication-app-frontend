import Logo from '../../assets/devchallenges.svg';

export function Login() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen p-6">
      <div className="w-full max-w-[480px] px-14 py-12 rounded-3xl border border-slate-300 flex flex-col ">
        <img src={Logo} alt="DevChallenges Logo" className="w-32" />
        <h2 className="font-semibold text-lg  ">
          Join thousands of learners from around the world{' '}
        </h2>
      </div>
    </div>
  );
}
