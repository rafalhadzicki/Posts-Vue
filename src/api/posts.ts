import { useQuery } from "@tanstack/vue-query";
import { ApiRoutes } from "../constants/routes";
import apiClient from "../helpers/apiClient";
import { Post, PostPhoto, PostResponse } from "../models/post";

export const useGetPosts = (_page: number) => {
  const { data: posts, isLoading: isPostsloading } = useQuery<Post[]>({
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
  return { posts, isPostsloading };
};

export const useGetPost = (id: number) => {
  const { data: post, isLoading: isPostloading } = useQuery<Post>({
    queryKey: ["post", id],
    queryFn: async () => {
      const data = await apiClient.get<PostResponse[]>(ApiRoutes.Posts, {
        id,
      });
      const photo = await apiClient.get<PostPhoto[]>(ApiRoutes.Photos, {
        id,
      });

      return {
        ...data[0],
        url: photo[0].url,
        thumbnailUrl: photo[0].thumbnailUrl,
      };
    },
  });
  return { post, isPostloading };
};
