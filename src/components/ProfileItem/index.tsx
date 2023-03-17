export function ProfileItem() {
  return (
    <div className="w-full max-w-4xl m-auto border border-grayLine rounded-xl">
      <div className="flex justify-between py-7 px-12">
        <div className="flex flex-col">
          <h1 className="font-normal text-2xl">Profile</h1>
          <p className="text-graySecondary font-medium">
            Some info may be visible to other people
          </p>
        </div>
        <button className="w-24 rounded-xl border border-graySecondary text-graySecondary font-medium h-10">
          Edit
        </button>
      </div>
      <div className="w-full border border-grayLine my-2" />
      <div className="py-7 px-12 flex">
        <div className="w-1/4">
          <h2 className="text-graySecondary font-medium text-sm">NAME</h2>
        </div>
        <div>
          <p className="w-3/4 font-medium text-lg">Gabriel</p>
        </div>
      </div>
    </div>
  );
}
