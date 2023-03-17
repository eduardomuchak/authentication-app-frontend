import { useQuery } from "@tanstack/react-query";
import { Header } from "../../components/Header";
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
    <div className="w-screen h-screen bg-bgGray">
      <Header />
      <div>{data.username}</div>
    </div>
  );
}
