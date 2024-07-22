import { useQuery } from "@tanstack/vue-query";
import { ApiRoutes } from "../constants/routes";
import apiClient from "../helpers/apiClient";
import { Post, PostPhoto, PostResponse } from "../models/post";

export const useGetPosts = (_page: number) => {
  const getPostsQuery = useQuery<Post[]>({
    queryKey: ["posts"],
    queryFn: async () => {
      const data = await apiClient.get<PostResponse[]>(ApiRoutes.Posts, {
        _page,
      });
      const photos = await apiClient.get<PostPhoto[]>(ApiRoutes.Photos, {
        _page,
      });
      const posts = data.map((post, index) => ({
        ...post,
        url: photos[index].url,
        thumbnailUrl: photos[index].thumbnailUrl,
      }));
      return posts;
    },
  });
  return getPostsQuery;
};
