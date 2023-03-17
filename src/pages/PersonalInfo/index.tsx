import { useQuery } from "@tanstack/react-query";
import { Header } from "../../components/Header";
import { ProfileItem } from "../../components/ProfileItem";
import { fetchPersonalInfo } from "../../services/personalInfo";
import { fetchIdFromToken } from "../../utils/fetchToken";

export function PersonalInfo() {
  const id = fetchIdFromToken();

  const { isLoading, isError, data } = useQuery({
    queryKey: ["personalInfo"],
    queryFn: () => fetchPersonalInfo(id),
  });

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Something happened</span>;
  }

  return (
    <div className="w-screen h-screen bg-bgGray px-3 lg:px-0">
      <Header />
      <div className="text-center mb-11">
        <h1 className="text-4xl font-normal">Personal info</h1>
        <p className="font-light text-lg">
          Basic info, like your name and photo
        </p>
      </div>
      <ProfileItem />
      <div className="w-full max-w-4xl flex flex-row justify-between mt-3 mx-auto">
        <span className="text-sm font-normal text-graySecondary">
          created by{" "}
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
