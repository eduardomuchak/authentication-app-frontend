import { useNavigate } from 'react-router-dom';

export function ErrorPage() {
  const navigate = useNavigate();
  return (
    <div
      className={
        'h-screen w-screen flex items-center justify-center flex-col gap-4'
      }
    >
      <h1 className="text-black text-3xl font-bold text-center">Error</h1>
      <button
        className="bg-bluePrimary text-white font-semibold text-base rounded-lg py-3 px-6 transition-colors ease-out hover:bg-bluePrimaryDark cursor-pointer disabled:bg-bluePrimaryDark disabled:cursor-not-allowed"
        type="reset"
        onClick={() => navigate('/')}
      >
        Go back to home
      </button>
    </div>
  );
}
