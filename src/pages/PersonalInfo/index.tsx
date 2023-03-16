import { useQuery } from "@tanstack/react-query";
import { fetchPersonalInfo } from "../../services/personalInfo";

export function PersonalInfo() {
  let id: number | undefined;
  const token = sessionStorage.getItem("@Token");

  if (token) {
    const parsedToken = JSON.parse(token);
    id = parsedToken.id;
  }

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

  return <div>{data.username}</div>;
}
